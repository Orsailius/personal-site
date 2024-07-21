<script lang="ts">
  import CatchemPanel from './CatchemPanel.svelte';

  import BossPanel from './BossPanel.svelte';

    import ExclusiveTaskCard from './ExclusiveTaskCard.svelte';
    import exclusivePkmnTasks from "$lib/data/exclusivePkmnTasks";
    import birthdayPlayers, { calculatePlayerScores } from "$lib/data/birthdayPlayers";
 
</script>

<div class="flex flex-col gap-3">
    <div class="outline outline-4 m-2 p-4 outline-orange-400 rounded-xl bg-orange-100">
        <div class="text-4xl font-semibold text-center">
            Score
        </div>
        <div class="p-4 gap-4 md:gap-2 grid grid-rows-5 md:grid-cols-5 md:grid-rows-1 w-full space-evenly">
            {#each $birthdayPlayers as player}
                {#if player.id != 0}
                <div>
                    <div class="text-3xl font-semibold text-center">
                        {player.name}
                    </div> 
                    <div class="text-2xl font-semibold text-center">
                        {player.score}
                    </div>                    
                </div>                  
                {/if}
            {/each}
        </div>
    </div>
    <div class="outline outline-4 m-2 p-4 outline-blue-400 rounded-xl bg-blue-100">
        <div class="text-4xl font-semibold text-center">
            First to...
        </div>
        <div class="flex p-4 flex-wrap gap-2">
            {#each exclusivePkmnTasks as task}
                <ExclusiveTaskCard exclusiveTask={task} />
            {/each}
        </div>
    </div>   
    <BossPanel />
    <CatchemPanel />   
</div>   

<style>
@import '$lib/components/PokemonStyle.css';
</style>