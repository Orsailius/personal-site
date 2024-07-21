<script lang="ts">
    import birthdayPlayers, { calculatePlayerScores } from "$lib/data/birthdayPlayers";
    import MediaQuery from "svelte-media-queries";

    let gymNames = ["Grass","Fighting","Rock","Dark /Ghost","Psychic /Electric","Steel","Fire /Dragon","Ice /Fairy"]
    let eliteFourNames = ["Smugly","Betsy Beach","Spinera","Pirate Jenkins","Bahama Ben"]
 
</script>

<div class="outline outline-4 m-2 p-4 outline-red-400 rounded-xl bg-red-100">
    <div class="text-4xl font-semibold text-center">
        Bosses
    </div>   
    <div class="p-2 w-full flex flex-col">
        <MediaQuery query="(min-width: 768px)" let:matches>
            {#if matches}
                <div class="bg-white outline outline-2 grid boss-grid z-10 p-2 rounded-tr-xl rounded-tl-xl">
                    <div class="text-sm md:text-2xl font-semibold text-center col-span-2">
                        Player
                    </div>                                     
                    {#each gymNames as name}
                        <div class="text-center text-xs md:text-sm text-wrap header-text">
                            {name}
                        </div>                   
                    {/each}
                    {#each eliteFourNames as name}
                        <div class="text-center text-xs md:text-sm text-wrap header-text">
                            {name}
                        </div>                   
                    {/each}
                </div>            
                {#each $birthdayPlayers as player}
                    {#if player.id != 0}
                        <div class="bg-white outline outline-1 grid boss-grid p-2">
                            <div class="text-sm md:text-2xl font-semibold text-center col-span-2">
                                {player.name}
                            </div>                                     
                            {#each player.gymsBeat as beat,index}
                                <input type="checkbox" 
                                    class="checkbox place-self-center" 
                                    bind:checked={player.gymsBeat[index]} 
                                    on:change={calculatePlayerScores}
                                    />
                            {/each}
                            {#each player.eliteFourBeat as beat,index}
                                <input type="checkbox" 
                                class="checkbox place-self-center" 
                                bind:checked={player.eliteFourBeat[index]} 
                                on:change={calculatePlayerScores}
                                />
                        {/each}
                        </div>                  
                    {/if}
                {/each}
            {:else}            
                <div class="bg-white outline outline-2 grid grid-cols-10 z-10 p-2 rounded-tr-xl rounded-tl-xl">
                    <div class="text-sm md:text-2xl font-semibold text-center col-span-2">
                        Player
                    </div>                                     
                    {#each gymNames as name}
                        <div class="text-center text-2xs md:text-sm text-wrap header-text">
                            {name}
                        </div>                   
                    {/each}
                </div>            
                {#each $birthdayPlayers as player}
                    {#if player.id != 0}
                        <div class="bg-white outline outline-1 grid grid-cols-10 p-2">
                            <div class="text-sm md:text-2xl font-semibold text-center col-span-2">
                                {player.name}
                            </div>                                     
                            {#each player.gymsBeat as beat,index}
                                <input type="checkbox" 
                                    class="checkbox place-self-center" 
                                    bind:checked={player.gymsBeat[index]} 
                                    on:change={calculatePlayerScores}
                                    />
                            {/each}
                        </div>                  
                    {/if}
                {/each}
                <div class="bg-white outline outline-2 grid grid-cols-7 z-10 p-2">
                    <div class="text-sm md:text-2xl font-semibold text-center col-span-2">
                        Player
                    </div>     
                    {#each eliteFourNames as name}
                        <div class="text-center text-2xs md:text-sm text-wrap header-text">
                            {name}
                        </div>                   
                    {/each}
                </div>            
                {#each $birthdayPlayers as player}
                    {#if player.id != 0}
                        <div class="bg-white outline outline-1 grid grid-cols-7 p-2">
                            <div class="text-sm md:text-2xl font-semibold text-center col-span-2">
                                {player.name}
                            </div>    
                            {#each player.eliteFourBeat as beat,index}
                                <input type="checkbox" 
                                class="checkbox place-self-center" 
                                bind:checked={player.eliteFourBeat[index]} 
                                on:change={calculatePlayerScores}
                                />
                        {/each}
                        </div>                  
                    {/if}
                {/each}
            {/if}
        </MediaQuery>        
    </div>
</div>

<style>
@import '$lib/components/PokemonStyle.css';

.boss-grid
{
    grid-template-columns: repeat(15, minmax(0, 1fr));
    align-items: center;
    justify-content: center;
}

.text-2xs
{
    font-size: 0.6rem;
    line-height: 0.75rem;
}

</style>

