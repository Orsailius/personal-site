<script lang="ts">
    import { pokemonTypes } from '$lib/data/pokemonTypes';
    export let title:string
    export let type = 0
    export let useAny:boolean = false;

    $: typeName = type == 200 ? "bg-black" : "pokemon-type-" + pokemonTypes[type].name.toLowerCase();
</script>

<label class="form-control w-full max-w-md p-2">   
    <div class="label">
        <span class="label-text">{title}</span>
      </div>
    <select class={"select select-bordered pokemon-type-select " + typeName} bind:value={type}>
        {#if useAny}
            <option value={200} class={"pokemon-type bg-black"}>
                Any
            </option>
        {/if}
        {#each pokemonTypes as pokemonType, index}
            <option value={index} class={"pokemon-type pokemon-type-" + pokemonType.name.toLowerCase()}>
                {pokemonType.name}
            </option>
        {/each}
    </select>
</label>

<style>
@import '$lib/components/PokemonStyle.css';
</style>