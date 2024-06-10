import {CondensedMusicFormat} from "./CondensedMusicFormat";
import type NoteFormat from "./NoteFormat";
import OctaveDivision from "./OctaveDivision";

export default class Song
{
    chords:CondensedMusicFormat[] = new Array<CondensedMusicFormat>();
    octaveDivision:OctaveDivision;
    noteFormat:NoteFormat;

    constructor(octaveDivision:OctaveDivision)
    {
        this.octaveDivision = octaveDivision;
    }

    push(chord:CondensedMusicFormat)
    {
        this.chords.push(chord);
    }

    convert(newOctave:OctaveDivision)
    {
        const song:Song = new Song(newOctave);
        song.octaveDivision = newOctave;
        for(const chord of this.chords)
        {
            const newChord = chord.copyWithoutNotes();           
            newChord.notes = [];
            for(var i= 0;i < chord.notes.length;i++)
            {
                const note = chord.notes[i];
                console.log("Reading note index: " + note);
                const freq = this.octaveDivision.getFreq(note);
                console.log("Has freq of " + freq);
                const nindex = newOctave.invFreq(freq);
                console.log("Index n new octave " + nindex);
                const newfreq = newOctave.getFreq(nindex);
                console.log("New Freq " + newfreq);
                newChord.notes.push(nindex);
            }
            song.push(newChord);
        }
        return song;
    }
}