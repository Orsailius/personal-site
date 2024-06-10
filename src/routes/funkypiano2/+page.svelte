<script lang="ts">
    import { construct_svelte_component, each, onMount } from 'svelte/internal';
    import * as Tone from "tone"
    import Song from '$lib/datatypes/Song'
 
    import {Hsluv} from 'hsluv';
    import {CondensedMusicFormat, singleNote, upperChord} from '$lib/datatypes/CondensedMusicFormat';
    import { getMusicNoteIndex, type GeneralNote, type MusicNote, type LetterNoteWithOctave, lno } from '$lib/datatypes/MusicNote';
    import SynthPool from '$lib/datatypes/SynthPool';
    import SongBuilder from '$lib/datatypes/SongBuilder';
    import OctaveDivision from "$lib/datatypes/OctaveDivision";
    import { Letters12, Letters8 } from '$lib/datatypes/NoteFormat';

    type int = number;

    let chords:GeneralNote[][] = [
       /* [24,26,28],
        [24,18,28],
        [22,24,26],
        [22,16,26],
        [25,27,30],*/
    ]

    let converter = new Hsluv();
    let synthPool:SynthPool;
    let recorder:Tone.Recorder;
    //
    let audioContext:AudioContext;    
    //
    let isRecording:boolean = false;
    let hasRecordedAudio:boolean = false;
    let isPlayingRecording:boolean = false;
    //
    let recording:Blob;
    let audio:any;
    let audioSource:any;
    //
    const octaveCount:number = 8;
    let chordInput:string;
    $: chord = chordInput?.split(",");
    let song:any;
    let octaveDivision:OctaveDivision = OctaveDivision.Exp8;
  
    onMount(()=>
    {
        recorder = new Tone.Recorder();
        synthPool = new SynthPool();  
        audioContext = new AudioContext(); 
        //
        createHotCrossBuns();
        populateChords();
    })

    function createHotCrossBuns()
    {
        song = new Song(OctaveDivision.Exp12Piano);
        const builder:SongBuilder = new SongBuilder();
        builder.noteFormat = new Letters12();
        builder.song = song;
        builder.playH("E").thenH("D").thenH("C").wait(500)
        .thenH("E").thenH("D").thenH("C").wait(500)
        .thenQ("E").thenQ("E").thenQ("E").thenQ("E")
        .thenQ("D").thenQ("D").thenQ("D").thenQ("D")
        .thenH("E").thenH("D").thenH("C");        
        song = song.convert(OctaveDivision.DivisionalExp8);
       //song = song;
    }

    function createHappyBirthday()
    {
        song = new Song(OctaveDivision.Exp12Piano);
        //const builder:SongBuilder = new SongBuilder();
        //builder.song = song;
        //builder.playQ(24).thenQ(24).thenH(25).thenH(24).thenH(27).thenD(26);
        song = song;
    }

    function createRandomSong()
    {
        song = new Song(octaveDivision);
        for(var i =0; i < 100;i++)
        {
            const chord = upperChord(1000*i, <MusicNote>(Math.round(Math.random() * 63)));
            song.push(chord);
        }
    }

    function populateChords()
    {
        for(var i = 18; i < 36;i++)
        {
            for(var j = i+1; j < 36;j++)
            {
                chords.push([<MusicNote>i,<MusicNote>j]);
                for(var k = j+1; k < 36;k++)
                {
                    chords.push([<MusicNote>i,<MusicNote>j,<MusicNote>k]);
                }
            }
        }
        chords = chords;
    }

    async function playSong()
    {
        for(const chord of song.chords)
        {
            console.log(chord.notes);
            setTimeout(()=>
            {
                playChordFromArrayForSong(chord.notes);
                console.log(chord.notes);
            }, chord.startTime);             
        }
    }

    function playNoteByFreqOsc(freq:number, duration:number)
    {
        var oscillator = audioContext.createOscillator();
        oscillator.type = 'sine'
        oscillator.frequency.value = freq;    
        //
        var gainNode = audioContext.createGain()
        gainNode.gain.value = 0.1 // 10 %          
        //
        gainNode.connect(audioContext.destination);
        oscillator.connect(gainNode);
        //
        oscillator.start();
        gainNode.gain.setTargetAtTime(0, audioContext.currentTime, duration /1000 - 0.01);
        gainNode.gain.setTargetAtTime(0.005, audioContext.currentTime, 0.1);

        setTimeout(function()
        {
            var now = audioContext.currentTime;
           
            oscillator.stop(); //.stop(now+0.05);
        }, duration)
    }

    function playNoteByFreq(freq:number|number[], duration:number)
    {
        synthPool.playNote(freq, duration);
    }

    function playChord()
    {
        for(const index of chord)
        {
            const nindex = parseInt(index);
            if(isNaN(nindex))
            {
                continue;
            }
            const note = octaveDivision.getFreq(nindex);
            playNoteByFreq(note, 250);
        }
    }

    
    function playChordFromArray(arr:GeneralNote[], duration:number = 500)
    {
        playNoteByFreq(arr.map(x=>octaveDivision.getFreq(getMusicNoteIndex(x))),duration);
    }

    function playChordFromArrayForSong(arr:GeneralNote[], duration:number = 500)
    {
        playNoteByFreq(arr.map(x=>song.octaveDivision.getFreq(getMusicNoteIndex(x))),duration);
    } 
  
	function playNote(noteIndex:int)
    {
        const note = octaveDivision.getFreq(noteIndex);
        console.log("Playing freq: " + note)
        playNoteByFreq(note, 250);
    }

    function getColour(noteIndex:any)
    {
        converter.hsluv_h = getHue(noteIndex);
        converter.hsluv_s = 100;
        converter.hsluv_l = 12 + (octaveCount * octaveDivision.size) * ((noteIndex/ octaveDivision.size)/(octaveDivision.size));
        converter.hsluvToHex();
        return converter.hex;
    }

    function getHueMath(noteIndex:int)
    {
        return 360 * ((noteIndex % octaveDivision.size) / octaveDivision.size);
    }

    function getHue(noteIndex:int)
    {       
        /*if(octaveDivision.size == 8)
        {
            let m = noteIndex % octaveDivision.size;
            let arr= [
                0,
                24.7,
                85.9,
                130,
                192,
                250,
                290,
                320
            ]
            return arr[m];
        }*/
        return getHueMath(noteIndex);
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
	<title>Funky Piano 2</title>
	<meta name="description" content="Play that funkier music" />
</svelte:head>

<div class="bg-base-100 h-full" style="min-height:92.25vh">   
	<h1 class="text-4xl pt-8 font-semibold text-center">Funky Piano 2: The Refunkening</h1>   
    <select class="select w-full bg-slate-800 join-item" bind:value={octaveDivision}>
        {#each OctaveDivision.values as division, index}
            <option selected value={division}>Octaves: {division.name}</option> 
        {/each}
    </select>
	<div class="grid gap-0 grid-flow-dense m-2" style={"grid-template-columns: repeat(" + octaveDivision.size + ", minmax(0, 1fr));"}>        
        {#each {length: octaveDivision.size * octaveCount} as _, i}
            <button style={"min-height:5vh;background: " + getColour(i)} on:click={()=>playNote(i)} class="p-0 m-0">
                {i}
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
    <div>
        <div>
            Song Player
        </div>
        <button class="btn btn-primary" on:click={playSong}>
            Play Song
        </button>
    </div>
    <div>
        <div>
            Chord Player
        </div>
        
        <div class="grid grid-rows-1 grid-cols-3">
            <input type="text" class="input" bind:value={chordInput}/>
            <button class="btn" on:click={playChord}>
                Play
            </button>
            <div class="flex flex-col">
                {#if chord != null}        
                    {#each chord as note}
                        <button style={"background: " + getColour(note)} class="p-0 m-0">
                            {note}
                        </button>
                    {/each}
                {/if}
            </div>
        </div>    
    </div>
    <div class="flex w-full flex-wrap gap-1">
        {#each chords as chord }
            <button class="flex flex-col p-1" on:click={()=>playChordFromArray(chord)}>
                {#if chord != null}        
                    {#each chord as note}
                        <button style={"background: " + getColour(note)} class="p-1">
                            {note}
                        </button>
                    {/each}
                {/if}
            </button>
        {/each}
    </div>
</div>

<style>
</style>
