import {type BirthdayPokemon, getRandomPokemon, getRandomAllowedMove, getMoveset} from "../data/birthdayPokemonList";
import moves, { type PokemonMove } from "../data/pokemonMoves";

export default class BirthdayPokemonInstance
{
    pokemon:BirthdayPokemon;
    moves: PokemonMove[] = [];  

    hasAnyMoveThatIsSuperEffective(type:any)
    {
        for(const move of this.moves)
        {            
            if(type.weakTo.includes(move.Type.name))
            {
                return true;
            }
        }
        return false;
    }

    hasAnyMoveThatIsNormalEffective(type:any)
    {
        for(const move of this.moves)
        {
            if(!type.weakTo.includes(move.Type.name) && 
                !type.resists.includes(move.Type.name)&& 
                !type.immuneTo.includes(move.Type.name))
            {
                return true;
            }
        }
        return false;
    }

    hasAnyMoveThatResisted(type:any)
    {
        for(const move of this.moves)
        {
            if(type.resists.includes(move.Type.name))
            {
                return true;
            }
        }
        return false;
    }

    populateWithRandomAllowedMoves()
    {
        for(let i =0;i <4;i++)
        {           
            let temp = getRandomAllowedMove(this.pokemon);
            if(temp == null || temp.Name == null)
            {
                temp = getMoveset(this.pokemon)[0];
                if(temp == null)
                {
                    temp = moves[0];
                }
            }
            this.moves[i] = temp;
        }
    }
}

export function createInstance(pkmn:BirthdayPokemon)
{
    const inst = new BirthdayPokemonInstance();
    inst.pokemon = pkmn;    
    inst.populateWithRandomAllowedMoves();
    return inst;
}

export function createRandom()
{
    return createInstance(getRandomPokemon());
}