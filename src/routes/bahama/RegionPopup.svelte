<script lang="ts">
    import { pokemonList, unlockedList } from "$lib/data/birthdayPokemonList";

   export let region:any; 
   export let isSM:boolean = false;
</script>

<div class="absolute tooltip flex flex-col outline outline-2 outline-gray-600 p-2 m-2 rounded-xl gap-2 bg-white"
    style={(isSM ? "left:0%;width:95%;top:" + (region.y + 15) + "%;" : "left:" + region.x + "%;top:" + region.y + "%;") + ";pointer-events: none;z-index:10"}>
    <div class="text-2xl font-semibold text-left">
        {region.name}
    </div>
    <div class="text-lg text-wrap text-left">
        {region.description}
    </div>
    {#if region.catches != null}
        <div class="text-xl font-semibold text-left">
            Caught Here:
        </div>
        <div class="flex flex-col gap-2">        
            {#each region.catches as catchData}
                {@const pkmn = pokemonList.find(x=>x.Name == catchData.pkmn)}
                {#if unlockedList.indexOf(pkmn) >= 0}
                    <div class="grid grid-cols-4 outline outline-slate-300 rounded-sm gap-4 items-center justify-center p-1">
                        <div class="rounded-sm outline outline-slate-200" 
                            style={"background-image:url(" + (pkmn?.Image ?? "/images/pkmn/Unknown.jpg") + 
                                ");background-size:cover;min-width:40px;aspect-ratio:1/1;"}>
                
                        </div>    
                        <div class="font-semibold pr-2">
                            {pkmn?.Name}
                        </div>
                        <div class="flex items-center justify-center">
                            <div class={"pokemon-type pokemon-type-" + pkmn?.Type1.toLowerCase()}>
                                {pkmn?.Type1}
                            </div>
                            <div class={"pokemon-type pokemon-type-" + pkmn?.Type2.toLowerCase()}>
                                {pkmn?.Type2}
                            </div>
                        </div>            
                        <div>
                            {catchData.rate}
                        </div>               
                    </div>   
                {:else}
                    <div class="grid grid-cols-4 outline outline-slate-300 rounded-sm gap-4 items-center justify-center p-1">
                        <div class="rounded-sm outline outline-slate-200" 
                            style={"background-image:url(/images/pkmn/Unknown.jpg);background-size:cover;min-width:40px;aspect-ratio:1/1;"}>                
                        </div>    
                        <div class="font-semibold pr-2">
                            ?????????
                        </div>
                        <div class="flex items-center justify-center">
                            <div class={"pokemon-type pokemon-type-unknown"}>
                                ?????
                            </div>
                            <div class={"pokemon-type pokemon-type-unknown"}>
                                ?????
                            </div>
                        </div>            
                        <div>
                            ??%
                        </div>               
                    </div>   
                {/if}  
            {/each}
        </div>
    {/if}
</div>

<style>
@import '$lib/components/PokemonStyle.css';

@media (max-width: 600px) 
{
    .tooltip
    {
        width: 90%;
        left:10%;
    }
}

@media (min-width: 600px) 
{
    .tooltip
    {
        width: calc(min(50%,450px));
    }
}
</style>