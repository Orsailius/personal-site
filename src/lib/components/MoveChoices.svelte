<script lang="ts">
    import { getMoveset } from "$lib/data/birthdayPokemonList";
    import { type PokemonMove } from "$lib/data/pokemonMoves";
    import BirthdayPokemonInstance from "$lib/datatypes/BirthdayPokemonInstance";
    //@ts-ignore
    import AutoComplete from 'simple-svelte-autocomplete';     

    export let pokemonInst:BirthdayPokemonInstance;
    export let refresh:any;

    $:moveset = getMoveset(pokemonInst.pokemon);

</script>

<div>
    <div class="label font-semibold pl-3">
        <span class="label-text">Moves</span>
    </div> 
    {#key pokemonInst.pokemon.Name}
        {#if moveset.length > 0}
            {#each pokemonInst.moves as _, moveIndex}
                <AutoComplete 
                    hideArrow={true} 
                    noInputStyles={true} 
                    className={"w-full pr-0 pl-0 " } 
                    inputClassName={"select w-full text-white move-name font-semibold text-lg pokemon-type-" 
                        + pokemonInst.moves[moveIndex].Type.name.toLowerCase()}
                    items={moveset} 
                    labelFieldName={"Name"}
                    bind:selectedItem={pokemonInst.moves[moveIndex]}  
                    onChange={refresh}                                           
                    required={false} >
                    <div slot="item" let:item let:label>
                        {item.Name}
                        <!-- to render the default higliglighted item label -->
                        <!-- render anything else -->
                        <div class="flex items-center justify-center m-2 gap-2 font-semibold">
                            <div class={"pokemon-type pokemon-type-" + item.Type.name.toLowerCase()}>
                                &nbsp{item.Type.name}&nbsp
                            </div>
                            <div>
                                Power: {item.Power ?? "-"}
                            </div>
                            <div>
                                Accuracy: {item.Accuracy}
                            </div>
                            <div>
                                PP: {item.PP}
                            </div>
                        </div>   
                    </div>
                </AutoComplete>       
            {/each}  
        {/if}
    {/key}
</div>

<style>
@import '$lib/components/PokemonStyle.css';

.move-name
{
    -webkit-text-stroke-width: 3px;
    -webkit-text-stroke-color: black;
}
</style>

