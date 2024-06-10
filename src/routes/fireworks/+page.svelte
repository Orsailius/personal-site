<script lang="ts">
    import { Fireworks } from '@fireworks-js/svelte'
    import type { FireworksOptions } from '@fireworks-js/svelte'
    import BeatBeat from '$lib/import/BeatBeat'
    import { onMount } from 'svelte';

    let fw: Fireworks;
    let options: FireworksOptions = 
    {
        autoresize: true,
        opacity: 0.5,
        acceleration: 1.05,
        friction: 0.97,
        gravity: 1.5,
        particles: 50,
        traceLength: 3,
        traceSpeed: 10,
        explosion: 5,
        intensity: 30,
        flickering: 50,
        lineStyle: 'round',
        hue: {
            min: 0,
            max: 360
        },
        delay: {
            min: 30,
            max: 50
        },
        rocketsPoint: {
            min: 33,
            max: 66
        },
        lineWidth: {
            explosion: {
            min: 1,
            max: 5
            },
            trace: {
            min: 1,
            max: 4
            }
        },
        brightness: {
            min: 50,
            max: 80
        },
        decay: {
            min: 0.015,
            max: 0.03
        },
        mouse: {
            click: true,
            move: false,
            max: 10
        }
    };
    let playing:boolean = false;
    let startMusic:any;

    onMount(()=>
    {
        fw.fireworksInstance().stop(false);  
    });

    async function onStart()
    {
        console.log("Pressed Start")
        playing = true;
        let context = new AudioContext();
        const resp = await fetch("/audio/newyears1.mp3");
        const file = await resp.arrayBuffer();
        context.decodeAudioData(file, async (buffer) => 
        {
            fw.fireworksInstance().start();          
            const source = context.createBufferSource();
            source.buffer = buffer;
            source.loop = true;
            source.connect(context.destination);
            source.start();           
        });       
    }  

    function onBeat(t:number)
    {
        const fireworks = fw.fireworksInstance();
        fireworks.launch(1);
        console.log(t);
    }

</script>

<svelte:head>
	<title>Fireworks</title>
	<meta name="description" content="Ring in the new year with some audio based Fireworks!" />
</svelte:head>

<div class="bg-base-100 h-full " style="min-height:92vh">
	<h1 class="text-4xl pt-8 font-semibold text-center">Ring in the New Year</h1>
  <div class="flex flex-col place-content-center m-2 mr-2" style="min-height:80vh">
    {#if !playing}
        <button class="btn btn-primary btn-lg" on:click={onStart}>
            Start!
        </button>
    {/if}
    <Fireworks
        bind:this={fw}
        {options}
        class="fireworks" style="min-height:80vh"
    />
  </div>
</div>

<style>
</style>
