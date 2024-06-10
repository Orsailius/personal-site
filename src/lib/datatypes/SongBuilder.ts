import {CondensedMusicFormat, simpleChord} from "./CondensedMusicFormat";
import type { GeneralNote, MusicNote } from "./MusicNote";
import type NoteFormat from "./NoteFormat";
import Song from "./Song";

export default class SongBuilder
{
    song:Song;
    noteFormat:NoteFormat;
    lastDuration:number;

    playQ(notes:GeneralNote | GeneralNote [])
    {
        this.play(notes, 250);
        return this;
    }    

    playH(notes:GeneralNote | GeneralNote [])
    {
        this.play(notes, 500);
        return this;
    }     

    playD(notes:GeneralNote | GeneralNote [])
    {
        this.play(notes, 2000);
        return this;
    }    

    play(notes:GeneralNote | GeneralNote [], duration:number = 1000)
    {
        if(Array.isArray(notes))
        {
            this.song.push(simpleChord(this.lastTime, notes.map(this.noteFormat.convertToIndex)).setDuration(duration))
        }
        else
        {
            this.song.push(simpleChord(this.lastTime, [this.noteFormat.convertToIndex(notes)]).setDuration(duration))
        }
        this.lastDuration = duration;
        return this;
    }

    thenQ(notes:GeneralNote | GeneralNote [])
    {
        this.waitThenPlay(this.lastDuration, notes, 250);
        return this;
    }

    thenH(notes:GeneralNote | GeneralNote [])
    {
        this.waitThenPlay(this.lastDuration, notes, 500);
        return this;
    }

    then(notes:GeneralNote | GeneralNote [])
    {
        this.waitThenPlay(this.lastDuration, notes, 1000);
        return this;
    }

    thenD(notes:GeneralNote | GeneralNote [])
    {
        this.waitThenPlay(this.lastDuration, notes, 2000);
        return this;
    }

    waitThenPlay(time:number, notes:GeneralNote | GeneralNote [], duration:number = 500)
    {
        if(Array.isArray(notes))
        {
            this.song.push(simpleChord(this.lastTime + time, notes.map(this.noteFormat.convertToIndex)).setDuration(duration))
        }
        else
        {
            this.song.push(simpleChord(this.lastTime + time, [this.noteFormat.convertToIndex(notes)]).setDuration(duration))
        }
        this.lastDuration = duration;
    }

    wait(time:number)
    {
        this.lastDuration += time;
        return this;
    }

    get lastTime()
    {
        if(this.song.chords.length == 0)
        {
            return 0;
        }
        return this.song.chords[this.song.chords.length - 1].startTime;
    }
}