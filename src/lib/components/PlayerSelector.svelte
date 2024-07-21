<script lang="ts">  
    import birthdayPlayers, {calculatePlayerScores} from "$lib/data/birthdayPlayers";
    export let exclusiveTask:any;

</script>

<select bind:value={exclusiveTask.winner} on:change={calculatePlayerScores} class="select select-bordered w-full max-w-xs join-item">
    {#each $birthdayPlayers as player}
        <option value={player.id}>{player.name}</option>
    {/each}
</select>

<style>
@import '$lib/components/PokemonStyle.css';
</style>