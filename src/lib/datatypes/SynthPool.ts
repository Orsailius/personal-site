import * as Tone from "tone"

export default class SynthPool
{
    freeList:Tone.PolySynth[] = [];

    playNote(frequency:number|number[], duration:number)
    {
        let synth:Tone.PolySynth;
        if(this.freeList.length == 0)
        {
            synth = this.#allocateNew();
        }
        else
        {
            synth = this.freeList.pop()!;
        }
        //
        synth.triggerAttackRelease(frequency,duration/1000);
        // 
        setTimeout(()=>
        {
            this.freeList.push(synth);
        }, 
        duration + 10);
    }

    #allocateNew() : Tone.PolySynth
    {
        return new Tone.PolySynth().toDestination();
    }
}