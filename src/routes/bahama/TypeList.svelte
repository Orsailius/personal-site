<script lang="ts">
    export let types:string[] = [];
</script>
     
<div class="flex items-center justify-center m-2">
    {#each types as type}
        <div class={"pokemon-type pokemon-type-" + type.toLowerCase()}>
            {type}
        </div>
    {/each}
</div>  

<style>
@import '$lib/components/PokemonStyle.css';
</style>

