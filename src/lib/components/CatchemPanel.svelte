<script lang="ts">
    import birthdayPlayers, { calculatePlayerScores } from "$lib/data/birthdayPlayers";
 
</script>

<div class="outline outline-4 m-2 p-4 outline-green-400 rounded-xl bg-green-100">
        <div class="text-4xl font-semibold text-center">
            Gotta Catch'em All
        </div>
        <div class="p-2 w-full flex flex-col">
            <div class="bg-white outline outline-2 z-10 p-2 grid grid-cols-10 rounded-tr-xl rounded-tl-xl gap-1">
                <div class="md:text-2xl font-semibold text-center col-span-2">
                    Player
                </div>                                    
                <div class="text-xs md:text-sm md:font-semibold text-center">
                    Pkmn Caught
                </div>                                    
                <div class="text-xs md:text-sm md:font-semibold text-center">
                    Pkmn Seen
                </div>  
                <div class="text-xs md:text-sm md:font-semibold text-center">
                    Cash
                </div>      
                <div class="text-xs md:text-sm md:font-semibold text-center">
                    Deaths
                </div> 
                <div class="text-xs md:text-sm md:font-semibold text-center">
                    Normal Effect
                </div> 
                <div class="text-xs md:text-sm md:font-semibold text-center">
                    TMs
                </div>  
                <div class="text-xs md:text-sm md:font-semibold text-center">
                    Multi Rank 1
                </div>  
                <div class="text-xs md:text-sm md:font-semibold text-center">
                    Multi Rank 2
                </div>  
            </div>            
            {#each $birthdayPlayers as player}
                {#if player.id != 0}
                    <div class="bg-white outline outline-1 grid grid-cols-10 p-2 contents-center items-center gap-1">
                        <div class="md:text-2xl font-semibold text-center col-span-2">
                            {player.name}
                        </div> 
                        <input type="number" 
                            bind:value={player.pokemonCaught}   
                            on:change={calculatePlayerScores}       
                            class="input input-xs md:input-sm input-bordered w-full max-w-xs text-lg font-medium text-center" />
                        <input type="number" 
                            bind:value={player.pokemonSeen}   
                            on:change={calculatePlayerScores}       
                            class="input input-xs md:input-sm input-bordered w-full max-w-xs text-lg font-medium text-center" />
                        <input type="number" 
                            bind:value={player.cash}   
                            on:change={calculatePlayerScores}       
                            class="input input-xs md:input-sm input-bordered w-full max-w-xs text-lg font-medium text-center" />
                        <input type="number" 
                            bind:value={player.deaths}   
                            on:change={calculatePlayerScores}       
                            class="input input-xs md:input-sm input-bordered w-full max-w-xs text-lg font-medium text-center" />
                        <input type="number" 
                            bind:value={player.normalEffectiveness}   
                            on:change={calculatePlayerScores}       
                            class="input input-xs md:input-sm input-bordered w-full max-w-xs text-lg font-medium text-center" />
                        <input type="number" 
                            bind:value={player.tms}   
                            on:change={calculatePlayerScores}       
                            class="input input-xs md:input-sm input-bordered w-full max-w-xs text-lg font-medium text-center" />
                        <input type="number" 
                            bind:value={player.multi1}   
                            on:change={calculatePlayerScores}       
                            class="input input-xs md:input-sm input-bordered w-full max-w-xs text-lg font-medium text-center" />
                        <input type="number" 
                            bind:value={player.multi2}   
                            on:change={calculatePlayerScores}       
                            class="input input-xs md:input-sm input-bordered w-full max-w-xs text-lg font-medium text-center" />
                    </div>                  
                {/if}
            {/each}
        </div>
    </div>

<style>
@import '$lib/components/PokemonStyle.css';
</style>

