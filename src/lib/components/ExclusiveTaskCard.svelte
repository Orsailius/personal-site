<script lang="ts">
    import PlayerSelector from './PlayerSelector.svelte';

    export let exclusiveTask:any;

</script>

<div class="outline p-4 outline-2 bg-white rounded-xl">
    <div class="text-lg font-semibold">
        {exclusiveTask.name}
    </div>
    <div>
        Points: {exclusiveTask.points}
    </div>
    <div>
        <PlayerSelector exclusiveTask={exclusiveTask}/>
    </div>
</div>

<style>
@import '$lib/components/PokemonStyle.css';
</style>