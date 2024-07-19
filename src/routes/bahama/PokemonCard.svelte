<script lang="ts">
    import PokemonStatBar from './PokemonStatBar.svelte';
    import {type BirthdayPokemon} from '$lib/data/birthdayPokemonList';

    export let pokemon:BirthdayPokemon;
    export let index:number;

    let image = pokemon.Image ?? "/images/pkmn/Unknown.jpg";

</script>

<div class="flex outline outline-2 outline-gray-600 p-2 m-2 rounded-xl gap-2">
    <div class="flex flex-col">
        <div class="text-2xl font-semibold text-center mb-2">
            {pokemon.Name} #{index+1}
        </div>
        <div class="rounded-xl outline outline-slate-200 card-image" style={"background-image:url(" + image + ");"}>
            
        </div>
        <div class="flex items-center justify-center m-2">
            <div class={"pokemon-type pokemon-type-" + pokemon.Type1.toLowerCase()}>
                {pokemon.Type1}
            </div>
            <div class={"pokemon-type pokemon-type-" + pokemon.Type2.toLowerCase()}>
                {pokemon.Type2}
            </div>
        </div>            
    </div>
    <div class="">
        <div class="font-semibold text-xl text-gray-600 text-center mt-8 ml-16">
            Stats
        </div>
        <div class="grid grid-rows-7 gap-1">
            <PokemonStatBar statName={"HP"} statValue={Number(pokemon.HP)} />      
            <PokemonStatBar statName={"Attack"} statValue={Number(pokemon.Attack)} />
            <PokemonStatBar statName={"Defence"} statValue={Number(pokemon.Def)} />
            <PokemonStatBar statName={"Sp.Att"} statValue={Number(pokemon.SAtt)} />
            <PokemonStatBar statName={"Sp.Def"} statValue={Number(pokemon.SDef)} />
            <PokemonStatBar statName={"Speed"} statValue={Number(pokemon.Speed)} />
            <div class="text-gray-600 font-semibold text-right pr-4">
                Base Stat Total: {pokemon.StatTotal}
            </div>
            </div>
    </div>           
</div>

<style>
@import '$lib/components/PokemonStyle.css';

@media (max-width: 600px) 
{
    .card-image
    {
        background-size:cover;
        width:150px;
        height:150px;
    }
}

@media (min-width: 600px) 
{
    .card-image
    {
        background-size:cover;
        width:200px;
        height:200px;
    }
}

</style>

