import { type BirthdayPokemon } from "../data/birthdayPokemonList";
import { pokemonTypes } from "../data/pokemonTypes";
import BirthdayPokemonInstance, { createInstance, createRandom } from "./BirthdayPokemonInstance";
import PokemonTeamNote from "./PokemonTeamNote";

export default class PokemonTeamData
{
    pokemonTeam:BirthdayPokemonInstance[];
    typeDefences:number[][] = [[0,0,0,0]];
    typeOffences:number[][] = [[0,0,0,0]];
    selectedPokemonBinding:BirthdayPokemon[] = [];
    defenceNotes:PokemonTeamNote[] = [];
    offenceNotes:PokemonTeamNote[] = [];

    randomize()
    {
        this.pokemonTeam = [
            createRandom(),
            createRandom(),
            createRandom(),
            createRandom(),
            createRandom(),
            createRandom()];
        for(let i =0; i < this.pokemonTeam.length;i++)
        {
            this.selectedPokemonBinding[i] =  this.pokemonTeam[i].pokemon;
        }
        this.populateTypeDefences();
        this.populateTypeOffences();
    }

    updatePokemon(index:number)
    {        
        if(index >= this.pokemonTeam.length)
        {
            return;
        }
        if(this.pokemonTeam[index].pokemon == this.selectedPokemonBinding[index])
        {
            return;
        }
        this.pokemonTeam[index] = createInstance(this.selectedPokemonBinding[index]);
        this.populateTypeDefences();
        this.populateTypeOffences();
    }

    updateOffence()
    {
        this.populateTypeOffences();
    }

    populateTypeOffences()
    {
        for(let i = 0; i < 18;i++)
        {
            this.typeOffences[i] = [0,0,0,0];
        }
        let typeIndex = 0;   
        for(const type of pokemonTypes)
        {          
            for(const pkmn of this.pokemonTeam)
            {
                if(pkmn.hasAnyMoveThatIsSuperEffective(type))
                {
                    this.typeOffences[typeIndex][0]++;
                }
                else if(pkmn.hasAnyMoveThatIsNormalEffective(type))
                {
                    this.typeOffences[typeIndex][1]++;
                }
                else if(pkmn.hasAnyMoveThatResisted(type))
                {
                    this.typeOffences[typeIndex][2]++;
                }
                else
                {
                    this.typeOffences[typeIndex][3]++;
                }               
            }
            typeIndex++;
        }
    }

    populateTypeDefences()
    {
        for(let i = 0; i < 18;i++)
        {
            this.typeDefences[i] = [0,0,0,0];
        }
        for(const inst of this.pokemonTeam)
        {
            const type1 = pokemonTypes.find(x=>x.name == inst.pokemon.Type1);
            const type2 = pokemonTypes.find(x=>x.name == inst.pokemon.Type2);
            let typeIndex = 0;
            for(const type of pokemonTypes)
            {
                if(type1?.immuneTo.includes(type.name) || type2?.immuneTo.includes(type.name))
                {
                    this.typeDefences[typeIndex][0]++;
                }
                else if(type1?.resists.includes(type.name))
                {
                    if(!type2?.weakTo.includes(type.name))
                    {                    
                        this.typeDefences[typeIndex][1]++;
                    }
                } 
                else if(type2?.resists.includes(type.name))
                {
                    if(!type1?.weakTo.includes(type.name))
                    {                    
                        this.typeDefences[typeIndex][1]++;
                    }
                } 
                else if(type1?.weakTo.includes(type.name))
                {
                    if(!type2?.resists.includes(type.name))
                    {                    
                        this.typeDefences[typeIndex][3]++;
                    }
                }
                else if(type2?.weakTo.includes(type.name))
                {
                    if(!type1?.resists.includes(type.name))
                    {                    
                        this.typeDefences[typeIndex][3]++;
                    }
                }
                else
                {
                    this.typeDefences[typeIndex][2]++;
                }
                typeIndex++;
            }
        }
    }
}