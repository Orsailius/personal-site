<script lang="ts">
	import { browser } from '$app/environment';	
    import PokemonTypeSelector from '$lib/components/PokemonTypeSelector.svelte';
    import { pokemonTypes } from '$lib/data/pokemonTypes';
    import {pokemonList} from '$lib/data/pokemonList';
    import { construct_svelte_component, each } from 'svelte/internal';

    let firstTypeIndex = 0;
    let secondTypeIndex = 0;
    let popup:any;
    let firstCounterType:any;
    let secondCounterType:any;
    //let counterList:any[] = [];

    function contains(a:string,b:string)
    {
        return a.indexOf(b) >= 0;
    }

    function findHardCounterList(firstIndex:number, secondIndex:number)
    {
        let type1 = pokemonTypes[firstIndex];
        let type2 = pokemonTypes[secondIndex];
        console.log("Finding hard counters to " + type1.name + "/" + type2.name);
        let decentList = [];
        for(var i =0; i < pokemonTypes.length; i++)
        {
            let counterType1 = pokemonTypes[i];
            for(var j = i+1;j < pokemonTypes.length;j++)
            {
                let counterType2 = pokemonTypes[j];
                let score = 0;
                if(contains(counterType1.resists,type1.name) && !contains(counterType1.weakTo,type2.name))
                {
                    score++;
                }
                if(contains(counterType1.resists,type2.name) && !contains(counterType1.weakTo,type1.name))
                {
                    score++
                }
                if(contains(counterType1.immuneTo,type1.name))
                {
                    score+=2
                }
                if(contains(counterType1.immuneTo,type2.name))
                {
                    score+=2
                }
                if(contains(counterType2.resists,type1.name)&& !contains(counterType2.weakTo,type2.name))
                {
                    score++
                }
                if(contains(counterType2.resists,type2.name)&& !contains(counterType2.weakTo,type1.name))
                {
                    score++
                }
                if(contains(counterType2.immuneTo,type2.name))
                {
                    score+=2
                }
                if(contains(counterType2.immuneTo,type1.name))
                {
                    score+=2
                }
                if(contains(type1.weakTo,counterType1.name) && !contains(type2.resists,counterType1.name) && !contains(type2.immuneTo,counterType1.name))
                {
                    score++
                }
                if(contains(type1.weakTo,counterType2.name) && !contains(type2.resists,counterType2.name)&& !contains(type2.immuneTo,counterType2.name))
                {
                    score++
                }
                if(contains(type2.weakTo,counterType1.name) && !contains(type1.resists,counterType1.name)&& !contains(type1.immuneTo,counterType1.name))
                {
                    score++
                }
                if(contains(type2.weakTo,counterType2.name) && !contains(type1.resists,counterType2.name)&& !contains(type1.immuneTo,counterType2.name))
                {
                    score++
                }
                if(score > 0)
                {
                    decentList.push(
                    {
                        type1:i,
                        type2:j,
                        score:score
                    });
                }
            }
        }
        decentList.sort((a,b)=>
        {
            return a.score > b.score ? -1 : ( a.score  <b.score ? 1 : 0);
        })
        return decentList
    }   

    $:counterList = findHardCounterList(firstTypeIndex, secondTypeIndex)

    function toLowerCase(type:number)
    {
        let name = pokemonTypes[type].name;
        return name.toLowerCase();
    }

    function getScoreTier(score:number)
    {
        if(score >= 6)
        {
            return "S"
        }
        else if(score >= 4)
        {
            return "A"
        }
        else if(score >= 2)
        {
            return "B"
        }
        else if(score >= 1)
        {
            return "C"
        }
    }

    function showExamples(type1:any, type2:any)
    {
        firstCounterType = type1;
        secondCounterType = type2;
        popup.showModal();
    }
	
</script>

<svelte:head>
	<title>Pokemon Type Hard Counter</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="bg-base-100">   
	<h1 class="text-4xl pt-8 font-semibold">Find A Hard Counter</h1>
	<div class="grid m-4 ml-8 mr-8 grid-rows-3 grid-cols-1 md:grid-cols-3 md:grid-rows-1">
        <PokemonTypeSelector bind:type={firstTypeIndex} title={"Pick the Pokemon's first type"}/>   
        <PokemonTypeSelector bind:type={secondTypeIndex} title={"Pick the Pokemon's second type"}/>   
    </div>
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 m-4 mr-2 md:m-8 md:mr-4">
        {#each counterList as counter}
            {#if counter != null}
                <button class="grid grid-cols-3 btn-base rounded-md m-2 place-items-center p-2 btn" on:click=
                    {()=>showExamples(pokemonTypes[counter.type1],pokemonTypes[counter.type2])}>
                    <div class={"pokemon-type pokemon-type-" + toLowerCase(counter.type1)}>
                        {pokemonTypes[counter.type1].name}
                    </div>
                    <div class={"pokemon-type pokemon-type-" + toLowerCase(counter.type2)}>
                        {pokemonTypes[counter.type2].name}
                    </div>
                    <div class="font-semibold">
                        {getScoreTier(counter.score)}
                    </div>
                </button>
            {/if}
        {/each}
    </div>   
    <dialog bind:this={popup} class="modal">
        <div class="modal-box">            
            <h3 class="font-bold text-lg mb-2">Pokemon with this Typing</h3>
            {#if firstCounterType != null}
                <div class={"pokemon-type pokemon-type-" + firstCounterType.name.toLowerCase()}>
                    {firstCounterType.name}
                </div>
                <div class={"pokemon-type pokemon-type-" + secondCounterType.name.toLowerCase()}>
                    {secondCounterType.name}
                </div>
                <div class="grid grid-cols-2 p-2">
                    {#each pokemonList as pkmn}
                        {#if contains(pkmn.Types, firstCounterType.name) && contains(pkmn.Types, secondCounterType.name)}             
                            <a href={"https://pokemondb.net/pokedex/" + pkmn.Name} target="_blank">
                                {pkmn.Name}
                            </a>                       
                        {/if}
                    {/each}
                </div>
            
            {/if}
            <div class="modal-action">
            <form method="dialog">
                <!-- if there is a button in form, it will close the modal -->
                <button class="btn">Close</button>
            </form>
            </div>
        </div>
    </dialog>
</div>

<style>
@import '$lib/components/PokemonStyle.css';
</style>