<script lang="ts">
  import MoveChoices from './MoveChoices.svelte';

    import { pokemonList } from "$lib/data/birthdayPokemonList";
    import PokemonTeamData from "$lib/datatypes/PokemonTeamData";
    //@ts-ignore
    import AutoComplete from 'simple-svelte-autocomplete';
    import { pokemonTypes } from "../data/pokemonTypes";

    let pokemonTeam:PokemonTeamData = new PokemonTeamData();  
    pokemonTeam.randomize();        
  
    function onAutoCompleteSelect(index:number)
    {
        pokemonTeam.updatePokemon(index);       
        pokemonTeam = pokemonTeam; 
    }

    function refresh()
    {
        pokemonTeam = pokemonTeam; 
        pokemonTeam.updateOffence();
    }

    function getSuperColour(amountSuper:number)
    {
        if(amountSuper >= 3)
        {
            return "text-green-500";
        }
        else if(amountSuper == 2)
        {
            return "text-gray-400";
        }
        else if(amountSuper == 1)
        {
            return "text-orange-400";
        } 
        else
        {
            return "text-red-500";
        }
    }

    function getWeaknessColour(amountWeak:number)
    {
        if(amountWeak == 0)
        {
            return "text-green-500";
        }
        else if(amountWeak == 1 || amountWeak == 2)
        {
            return "text-gray-400";
        }
        else if(amountWeak == 3)
        {
            return "text-orange-400";
        } 
        else
        {
            return "text-red-500";
        }
    }

    function getResistColour(amountResist:number)
    {
        if(amountResist == 0)
        {
            return "text-red-500";
        }
        else if(amountResist == 1)
        {
            return "text-orange-400";
        }
        else if(amountResist == 2)
        {
            return "text-black";
        } 
        else
        {
            return "text-green-500";
        }
    }

    function getResistOffenceColour(amountResist:number)
    {
        if(amountResist <= 2)
        {
            return "text-green-500";
        }
        else if(amountResist == 3)
        {
            return "text-grey-400";
        }
        else if(amountResist == 4)
        {
            return "text-orange";
        } 
        else
        {
            return "text-red-500";
        }
    }

    function getNoEffectColour(amount:number)
    {
        if(amount == 0)
        {
            return "text-green-500";
        }
        else if(amount == 1)
        {
            return "text-orange-500";
        }
        else
        {
            return "text-red-500";
        }
    }

    function getImmuneColour(amountImmune:number)
    {
        if(amountImmune == 0)
        {
            return "text-gray-400";
        }
        else
        {
            return "text-green-400";
        }
    }
 
</script>

<div class="flex flex-col gap-3">
    <div class="outline outline-4 m-2 p-4 outline-gray-400 rounded-xl bg-gray-100">
        <div class="text-4xl font-semibold text-center">
            Team Builder
        </div>
        <div class="p-4 gap-4 md:gap-2 flex w-full flex-wrap items-center justify-center">
            {#each pokemonTeam.pokemonTeam as inst,index}
                <div class="flex flex-col" style="max-width:300px;">               
                    <div class="form-control p-2 font-semibold">   
                        <div class="label">
                            <span class="label-text">Pokemon {index+1}</span>
                        </div>                
                        <AutoComplete 
                            hideArrow={true} 
                            noInputStyles={true} 
                            className={"w-full pr-0 pl-0"} 
                            inputClassName={"select w-full font-semibold text-lg"}
                            items={pokemonList} 
                            labelFieldName={"Name"}
                            bind:selectedItem={pokemonTeam.selectedPokemonBinding[index]}   
                            onChange={()=>onAutoCompleteSelect(index)}           
                            required={false} >
                            <div slot="item" let:item let:label>
                                {@html label}
                                <!-- to render the default higliglighted item label -->
                                <!-- render anything else -->
                                <div class="flex items-center justify-center m-2">
                                    <div class={"pokemon-type pokemon-type-" + item.Type1.toLowerCase()}>
                                        {item.Type1}
                                    </div>
                                    <div class={"pokemon-type pokemon-type-" + item.Type2.toLowerCase()}>
                                        {item.Type2}
                                    </div>
                                </div>   
                            </div>
                        </AutoComplete>                 
                    </div>                    
                    <div class="flex items-center justify-center m-2">
                        <div class={"pokemon-type pokemon-type-" + inst.pokemon.Type1.toLowerCase()}>
                            {inst.pokemon.Type1}
                        </div>
                        <div class={"pokemon-type pokemon-type-" + inst.pokemon.Type2.toLowerCase()}>
                            {inst.pokemon.Type2}
                        </div>
                    </div>
                  <MoveChoices pokemonInst={inst} refresh={refresh}/>
                </div>
            {/each}
        </div>    
        <div class="text-4xl font-semibold text-center m-4">
            Team Analysis
        </div>
        <div class="flex flex-wrap gap-1">       
            <div class="bg-gray-200 p-4 rounded-xl">
                <div class="text-3xl text-center font-semibold mb-2">
                    Defences
                </div>
                <div class="grid grid-cols-5 justify-center gap-1 font-semibold text-center">
                    <div> Type </div>
                    <div> Immune </div>
                    <div> Resistant Against </div>
                    <div> Neutral </div>
                    <div> Weak </div>
                    {#each pokemonTypes as type,index}
                        <div class={"justify-self-center pokemon-type pokemon-type-" + type.name.toLowerCase()}> {type.name} </div>
                        <div class={getImmuneColour(pokemonTeam.typeDefences[index][0])}> {pokemonTeam.typeDefences[index][0]} </div>
                        <div class={getResistColour(pokemonTeam.typeDefences[index][1])}> {pokemonTeam.typeDefences[index][1]} </div>
                        <div> {pokemonTeam.typeDefences[index][2]} </div>
                        <div class={getWeaknessColour(pokemonTeam.typeDefences[index][3])}> 
                            {pokemonTeam.typeDefences[index][3]} 
                        </div>
                    {/each}
                </div>
            </div>
            <div class="bg-gray-200 p-4 rounded-xl">
                <div class="text-3xl text-center font-semibold mb-2">
                    Offences
                </div>
                <div class="grid grid-cols-5 justify-center gap-1 font-semibold text-center">
                    <div> Type </div>
                    <div> Super </div>
                    <div> Neutral </div>
                    <div> Resist </div>
                    <div> No Effect </div>
                    {#each pokemonTypes as type,index}
                        <div class={"justify-self-center pokemon-type pokemon-type-" + type.name.toLowerCase()}> {type.name} </div>
                        <div class={getSuperColour(pokemonTeam.typeOffences[index][0])}> {pokemonTeam.typeOffences[index][0]} </div>
                        <div > {pokemonTeam.typeOffences[index][1]} </div>
                        <div class={getResistOffenceColour(pokemonTeam.typeOffences[index][2])}> {pokemonTeam.typeOffences[index][2]} </div>
                        <div class={getNoEffectColour(pokemonTeam.typeOffences[index][3])}> 
                            {pokemonTeam.typeOffences[index][3]} 
                        </div>
                    {/each}
                </div>
            </div>
            <div class="bg-gray-200 p-4 rounded-xl">
                <div class="text-3xl text-center font-semibold mb-2">
                    Helper
                </div>
                <div>
                    {#each pokemonTeam.defenceNotes as note}
                        {note.note}
                    {/each}
                    {#each pokemonTeam.offenceNotes as note}
                        {note.note}
                    {/each}
                </div>
            </div>
        </div>       
    </div>    
</div>   

<style>
@import '$lib/components/PokemonStyle.css';

.move-name
{
    -webkit-text-stroke-width: 3px;
    -webkit-text-stroke-color: black;
}
</style>