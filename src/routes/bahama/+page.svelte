<script lang="ts">
    import PokemonCard from './PokemonCard.svelte';
    import PokemonTypeSelector from '$lib/components/PokemonTypeSelector.svelte';
    import {pokemonList, unlockedList} from '$lib/data/birthdayPokemonList';
    import RegionHover from './RegionHover.svelte';
    import regions from '$lib/datatypes/PokemonRegion';

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