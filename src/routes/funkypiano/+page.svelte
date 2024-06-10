<script lang="ts">
    import { construct_svelte_component, each, onMount } from 'svelte/internal';
    import * as Tone from "tone"
 
    import {Hsluv} from 'hsluv';

    const notes = [      
        "C",
        "C#",
        "D",
        "D#",
        "E",
        "F",
        "F#",
        "G",
        "G#",
        "A",
        "A#",
        "B",
    ]

    let converter = new Hsluv();
    let synth:any;
    let recorder:Tone.Recorder;
    //
    let isRecording:boolean = false;
    let hasRecordedAudio:boolean = false;
    let isPlayingRecording:boolean = false;
    //
    let recording:Blob;
    let audio:any;
    let audioSource:any;

    onMount(()=>
    {
        recorder = new Tone.Recorder();
        synth = new Tone.Synth().connect(recorder).toDestination();       
    })
  
	function playNote(noteIndex:integer)
    {
        const note = getNote(noteIndex);
        //play a middle 'C' for the duration of an 8th note
        synth.triggerAttackRelease(note, "8n");
    }

    function getNote(noteIndex:integer)
    {
        return notes[noteIndex %  notes.length] + (Math.floor(noteIndex/ notes.length) + 1);
    }

    function getColour(noteIndex:integer)
    {
        converter.hsluv_h = 360 * (noteIndex % notes.length) / 12;
        converter.hsluv_s = 80;
        converter.hsluv_l = 100 * ((noteIndex/ notes.length)/(notes.length+1)+(1/13));
        converter.hsluvToHex();
        return converter.hex;
    }

    async function record()
    {
        if(isRecording)
        {
            hasRecordedAudio = true;
            recording = await recorder.stop();    
            console.log("Recording sizE: " + recording.size);            
            const url = URL.createObjectURL(recording);
            audioSource.src = url;
            audio.load();
        }
        else
        {            
            recorder.start();
        }
        isRecording = !isRecording;       
    }
</script>

<svelte:head>
	<title>Funky Piano</title>
	<meta name="description" content="Play that funky music" />
</svelte:head>

<div class="bg-base-100 h-full" style="min-height:92.25vh">   
	<h1 class="text-4xl pt-8 font-semibold text-center">Funky Piano</h1>   
	<div class="grid grid-cols-12 gap-0 grid-flow-dense m-2">        
        {#each {length: notes.length * 7} as _, i}
            <button style={"min-height:10vh;background: " + getColour(i)} on:click={()=>playNote(i)} class="p-0 m-0">
                {"__"}
            </button>
        {/each}       
    </div>    
    <div class="flex">
        {#if isRecording}    
        <button on:click={record} class="btn btn-warning m-2">
            Stop
        </button>
        {:else}
            <button on:click={record} class={"btn m-2 btn-error " + (!isPlayingRecording ? "" : "btn-disabled")}>
                Record
            </button>
        {/if}
        {#if hasRecordedAudio}
            <audio controls bind:this={audio}>
                <source bind:this={audioSource}/>
            </audio>    
        {/if}
    </div>
   
</div>

<style>
</style>
