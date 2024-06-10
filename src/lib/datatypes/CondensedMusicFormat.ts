import BitArray from "./BitArray";
import type InputInfo from "./InputInfo";
import type {GeneralNote, MusicNote} from "./MusicNote";
import type NoteFormat from "./NoteFormat";

export class CondensedMusicFormat
{
    attackRelease: number;
    duration:number; //in ms
    startTime:number; //in ms from start
    instrument:number;
    notes:number[];

    save()
    {
        let bits = new BitArray(this.notes.length <= 4 ? 64 : 96, null);
    }  

    setDuration(d:number)
    {
        this.duration = d;
        return this;
    }

    next(cmf:CondensedMusicFormat)
    {
        cmf.startTime = this.startTime + this.duration;
        cmf.duration = this.duration;
    }

    copyWithoutNotes()
    {
        const clone = new CondensedMusicFormat();
        clone.attackRelease = this.attackRelease;
        clone.duration = this.duration;
        clone.startTime = this.startTime;
        clone.instrument = this.instrument;
        return clone;        
    }

}

export function simpleChord(startTime:number, notes:number[])
{
    let chord = new CondensedMusicFormat();
    chord.attackRelease = 0;
    chord.notes = notes;
    chord.duration = 500;
    chord.startTime = startTime;
    chord.instrument = 0;
    return chord;
}

export function upperChord(startTime:number, note:MusicNote)
{
    return simpleChord(startTime, [note, <any>note + 2, <any>note + 4])
}

export function singleNote(startTime:number, note:number)
{
    return simpleChord(startTime, [note])
}
