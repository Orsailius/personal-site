import {type IntegerRange,type LetterNote, type MusicNote, letters, type GeneralNote, type LetterNoteWithOctave } from "./MusicNote";

export default interface NoteFormat
{   
    convertToIndex:(note:GeneralNote)=>number;
}

export class Index8 implements NoteFormat
{
    convertToIndex = (note:GeneralNote) => 
    {
        let m = note as MusicNote;
        return m;
    }
}

export class Index12 implements NoteFormat 
{
    convertToIndex = (note:GeneralNote) => 
    {
        let m = note as IntegerRange<0,96>;
        return m;
    }
}

export class Letters8 implements NoteFormat
{
    convertToIndex = (note:GeneralNote) => 
    {
        let m = note as LetterNote;
        return 24 + letters[m];
    }
}

export class Letters12 implements NoteFormat
{
    convertToIndex = (note:GeneralNote) => 
    {
        let m = note as LetterNote;
        return 36 + letters[m];
    }
}

export class LettersOctave12 implements NoteFormat
{
    convertToIndex = (note:GeneralNote) => 
    {
        let m = note as LetterNoteWithOctave;
        return 12 * m.octave + letters[m.letter];
    }
}


