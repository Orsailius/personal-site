<script lang="ts">
    import PokemonCard from './PokemonCard.svelte';
    import PokemonTypeSelector from '$lib/components/PokemonTypeSelector.svelte';
    import {pokemonList, unlockedList} from '$lib/data/birthdayPokemonList';
    import RegionHover from './RegionHover.svelte';
    import regions from '$lib/datatypes/PokemonRegion';
    import RaceTracker from '$lib/components/RaceTracker.svelte';
    import WhosThatPokemon from './WhosThatPokemon.svelte';
    import TeamBuilder from '$lib/components/TeamBuilder.svelte';
    import TypeList from './TypeList.svelte';

    let typeIndex = 200;

    let typeToIndex:any =
    {
        Normal:0,
        Fire:1,
        Water:2,
        Electric:3,
        Grass:4,
        Ice:5,
        Fighting:6,
        Poison:7,
        Ground:8,
        Flying:9,
        Psychic:10,
        Bug:11,
        Rock:12,
        Ghost:13,
        Dragon:14,
        Dark:15,
        Steel:16,
        Fairy:17,
        Any:200
    }

    let checkUnlocks = true;

</script>

<svelte:head>
	<title>Pokemon Bahama Birthday</title>
	<meta name="description" content="Birthday Game!" />
</svelte:head>

<div class="bg-base-100 bahama-background">       
    <div class="flex flex-col items-center pt-2">
        <img src="/images/pkmn/Pokemon.png" />
        <img src="/images/pkmn/BahamaBirthday.png" />
        <img src="/images/pkmn/Background4.png" />
    </div>  
    <div class="flex flex-col items-center">
        <div class="text-yellow font-semibold mr-2 pr-2 ml-2 pl-2 pt-2 mt-2 text-center text-lg md:text-xl">
            Inspect each region below to see what pokemon you can catch there!
        </div>     
        <div class="relative p-1 m-1 md:p-8 md:m-8">               
            <img src="/images/pkmn/WorldMap.png" />
            {#each regions as region}
                <RegionHover region={region}/>
            {/each}
        </div>
    </div>   
    <div class="flex flex-col items-center justify-center">
        <img src="/images/pkmn/Pokedex.png" />
        <div class="flex w-full flex-col items-center">
            <PokemonTypeSelector bind:type={typeIndex} title={"Search for type"} useAny={true}/>   
        </div>
        <div class="flex m-1 flex-wrap items-center justify-center">
            {#each pokemonList as pokemon, index}
                {#if typeIndex == 200 || typeIndex == typeToIndex[pokemon.Type1] || typeIndex == typeToIndex[pokemon.Type2]}
                    {#if !checkUnlocks || unlockedList.indexOf(pokemon) != -1}
                        <PokemonCard pokemon={pokemon} index={index} />
                    {/if}
                {/if}
            {/each}
        </div>   	
    </div>   
    <div class="m-2">
        <div class="collapse collapse-arrow outline outline-2">
            <input type="checkbox" />
            <div class="collapse-title text-3xl text-center font-semibold"> Race Tracker</div>
            <div class="collapse-content">
                <RaceTracker />
            </div>
        </div>
    </div>  
    <!-- <TeamBuilder /> -->
    <div class="outline outline-1 m-2 mt-4 rounded-xl text-center p-4">
        Pokemon Bahama Birthday
        <!--<WhosThatPokemon pokemonName={"Juvi Justin"}
            images ={
            [
                "/images/pkmn/JuviJustin1.jfif",
                "/images/pkmn/JuviJustin2.jfif",
                "/images/pkmn/JuviJustin3.jfif",
            ]} />-->
        <!--<TypeList types={[
            "normal"
        ]}/>-->
    </div>
</div>

<style>
@import '$lib/components/PokemonStyle.css';

.bahama-background
{
    background-image: url('/images/pkmn/BackgroundRepeat.png');
}

.bahama-map
{
    min-width: 100vw;
    min-height: 10vh;
    background-image: url('/images/pkmn/WorldMap.png');
}

</style>