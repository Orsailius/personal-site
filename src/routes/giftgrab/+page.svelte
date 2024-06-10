<script lang="ts">
    import { onMount } from 'svelte';

    onMount(async () => {
		var Game = (await import('$lib/phaser/GiftGrabGame')).Game;
        var GameConfig = (await import('$lib/phaser/GiftGrabGame')).GameConfig;
        (window as any)._game = new Game(GameConfig);
	});
</script>

<svelte:head>
	<title></title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="bg-base-100 h-full" style="min-height:92.25vh">   
	<h1 class="text-4xl pt-8 font-semibold text-center mb-4">Gift Grab</h1>     
    <div id="phaser" style="max-height:75vh"></div>
</div>

<style>

</style>
