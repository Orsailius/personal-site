type Enumerate<N extends number, Acc extends number[] = []> = Acc['length'] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc['length']]> 

export type IntegerRange<F extends number, T extends number> = Exclude<Enumerate<T>, Enumerate<F>> 

export type MusicNote = IntegerRange<0, 64>

export type LetterNote = 
    "C" |"C#" |"D" | "D#" | "E" |"F" | "F#" | "G" | "G#"| "A" | "A#" | "B"

export let letters = {
    "C":0,
    "C#":1, "D":2, "D#":3, "E":4,"F":5, "F#":6, "G":7, "G#":8, "A":9, "A#":10, "B":11
}

export type LetterNoteWithOctave = 
{
    letter:LetterNote,
    octave:IntegerRange<0,8>
}

export function lno(letter:LetterNote, octave:IntegerRange<0,8>) : LetterNoteWithOctave
{
    return {letter:letter, octave:octave}
}

export type WesternNote = IntegerRange<0, 96> | LetterNote | LetterNoteWithOctave

export type GeneralNote = MusicNote | WesternNote

function isMusicNote(note:GeneralNote): note is MusicNote
{
    return true;
}

function isWesternNote(note:GeneralNote): note is WesternNote
{
    return true;
}

function isLetterNote(note:GeneralNote): note is LetterNote
{
    return true;
}

function isLetterNoteWithOctave(note:GeneralNote): note is LetterNoteWithOctave
{
    return true;
}

export function getMusicNoteIndex(note:GeneralNote) : number
{
    if(isMusicNote(note))
    {
        console.log("Music Note");
        return note;
    }
    if(isWesternNote(note))
    {
        console.log("Western Note");
        if(isLetterNote(note))
        {
            let assumedIndexStart = 36;
            let index = assumedIndexStart + letters[note];
            console.log(index);
            return index;
        }
        else if(isLetterNoteWithOctave(note))
        {
            return 12 * note.octave + letters[note.letter];
        }
        return note;
    }
    return 0;
}