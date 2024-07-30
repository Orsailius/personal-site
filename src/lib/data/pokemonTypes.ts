export interface PokemonType
{
    name:string;
    weakTo:string;
    resists:string;
    immuneTo:string;
}

export var pokemonTypes:PokemonType[] = 
[
    {
        name: "Normal",
        weakTo:"Fighting",
        resists:"",
        immuneTo: "Ghost"
    },
    {
        name: "Fire",
        weakTo:"Water,Ground,Rock",
        resists:"Fire,Grass,Ice,Bug,Steel,Fairy",
        immuneTo: ""
    },
    {
        name: "Water",
        resists:"Fire,Water,Ice,Steel",
        weakTo:"Electric,Grass",       
        immuneTo: ""
    },
    {
        name: "Electric",
        resists:"Electric,Flying,Steel",
        weakTo:"Ground",       
        immuneTo: ""
    },
    {
        name: "Grass",
        resists:"Water,Electric,Grass,Ground",
        weakTo:"Fire,Ice,Poison,Flying,Bug",       
        immuneTo: ""
    },
    {
        name: "Ice",
        resists:"Ice",
        weakTo:"Fire,Fighting,Rock,Steel",       
        immuneTo: ""
    },
    {
        name: "Fighting",
        resists:"Bug,Rock,Dark",
        weakTo:"Flying,Psychic,Fairy",       
        immuneTo: ""
    },
    {
        name: "Poison",
        resists:"Grass,Fighting,Poison,Bug,Fairy",
        weakTo:"Ground,Psychic",       
        immuneTo: ""
    },
    {
        name: "Ground",
        resists:"Poison,Rock",
        weakTo:"Water,Grass,Ice",       
        immuneTo: "Electric"
    },
    {
        name: "Flying",
        resists:"Grass,Fighting,Bug",
        weakTo:"Electric,Ice,Rock",       
        immuneTo: "Ground"
    },
    {
        name: "Psychic",
        resists:"Fighting,Psychic",
        weakTo:"Bug,Ghost,Dark",       
        immuneTo: ""
    },
    {
        name: "Bug",
        resists:"Grass,Fighting,Ground",
        weakTo:"Fire,Flying,Rock",       
        immuneTo: ""
    },
    {
        name: "Rock",
        resists:"Normal,Fire,Poison,Flying",
        weakTo:"Water,Grass,Fighting,Ground,Steel",       
        immuneTo: ""
    },
    {
        name: "Ghost",
        resists:"Poison,Bug",
        weakTo:"Ghost,Dark",       
        immuneTo: "Normal,Fighting"
    },
    {
        name: "Dragon",
        resists:"Fire,Water,Electric,Grass",
        weakTo:"Ice,Dragon,Fairy",       
        immuneTo: ""
    },
    {
        name: "Dark",
        resists:"Ghost,Dark",
        weakTo:"Fighting,Bug,Fairy",       
        immuneTo: "Psychic"
    },
    {
        name: "Steel",
        resists:"Normal,Grass,Ice,Flying,Psychic,Bug,Rock,Dragon,Steel,Fairy",
        weakTo:"Fire,Fighting,Ground",       
        immuneTo: "Poison"
    },
    {
        name: "Fairy",
        resists:"Fighting,Bug,Dark",
        weakTo:"Poison,Steel",       
        immuneTo: "Dragon"
    },
]

export let NORMAL:PokemonType = pokemonTypes[0];
export let FIRE:PokemonType = pokemonTypes[1];
export let WATER:PokemonType = pokemonTypes[2];
export let ELECTRIC:PokemonType = pokemonTypes[3];
export let GRASS:PokemonType = pokemonTypes[4];
export let ICE:PokemonType = pokemonTypes[5];
export let FIGHTING:PokemonType = pokemonTypes[6];
export let POISON:PokemonType = pokemonTypes[7];
export let GROUND:PokemonType = pokemonTypes[8];
export let FLYING:PokemonType = pokemonTypes[9];
export let PSYCHIC:PokemonType = pokemonTypes[10];
export let BUG:PokemonType = pokemonTypes[11];
export let ROCK:PokemonType = pokemonTypes[12];
export let GHOST:PokemonType = pokemonTypes[13];
export let DRAGON:PokemonType = pokemonTypes[14];
export let DARK:PokemonType = pokemonTypes[15];
export let STEEL:PokemonType = pokemonTypes[16];
export let FAIRY:PokemonType = pokemonTypes[17];
