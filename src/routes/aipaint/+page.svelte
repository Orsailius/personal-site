<script lang="ts">
    import { onMount } from 'svelte';

    let game:any;
    let selectBrush:any;
    let selectPainting:any;
    let clear:any;

    onMount(async () => {
		var Game = (await import('$lib/phaser/AIPaintGame')).Game;
        var GameConfig = (await import('$lib/phaser/AIPaintGame')).GameConfig;
        game = (window as any)._game = new Game(GameConfig);

        selectBrush = (brush:AIBrush)=>
        {
            game.setBrush(brush.id);
        }

        selectPainting = (index:number)=>
        {
            game.setImage(index);
        }

        clear = ()=>
        {
            game.clear();
        }

	});

    const brushes:AIBrush[] =
    [
        {
            id:0,
            name:"Van Gogh",
            icon:""
        },
        {
            id:1,
            name:"Cartoon",
            icon:""
        },
        {
            id:2,
            name:"Realistic",
            icon:""
        },
        {
            id:3,
            name:"Art Deco",
            icon:""
        },
        {
            id:4,
            name:"Purple",
            icon:""
        },
        {
            id:5,
            name:"Christmas",
            icon:""
        },
    ]

    const paintings:string[] = [
        "Woman",
        "Sunflower",       
        "Griffin",
        "Vortex",
        "Eye",
        "Peacocks"
    ]

    interface AIBrush
    {
        id:number;
        name:string;
        icon:string;
    } 

</script>

<svelte:head>
	<title></title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="bg-base-100 h-full" style="min-height:92.25vh">   
	<h1 class="text-4xl pt-4 font-semibold text-center mb-1">AI Paint Brush</h1>    
    <div class="font-semibold text-2xl align-middle text-center content-center basis-1/3 m-1">
        Pictures
    </div>
    <div class="flex gap-1 place-content-center items-center m-1">       
        {#each paintings as painting, index}
            <button class="btn btn-primary btn-xs" on:click={()=>selectPainting(index)}>
                {painting}
            </button>
        {/each}
    </div>
    <div id="phaser" style="max-height:62vh"></div>
    <div class="font-semibold text-2xl align-middle text-center content-center basis-1/3 m-1">
        Brushes
    </div>
    <div class="flex gap-1 place-content-center items-center m-1">       
        {#each brushes as brush}
            <button class="btn btn-primary btn-xs" on:click={()=>selectBrush(brush)}>
                {brush.name}
            </button>
        {/each}
    </div>
    <div class="flex gap-1 place-content-center items-center m-2">   
        <button class="btn btn-error btn-xs" on:click={()=>clear()}>
            Erase Painting
        </button>
    </div>
</div>

<style>

</style>
