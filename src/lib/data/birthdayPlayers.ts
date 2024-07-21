import exclusivePkmnTasks from "./exclusivePkmnTasks";
import { type Writable, writable, get } from "svelte/store";

var birthdayPlayers:Writable<any[]> = writable([
    {
        id:0,
        name:"Nobody",
        gymsBeat:[false,false,false,false,false,false,false,false],
        eliteFourBeat:[false,false,false,false,false],
        pokemonCaught:0,
        pokemonSeen:0,
        cash:0,
        deaths:0,
        normalEffectiveness:0,
        tms:0,
        multiPlace1:0,
        multiPlace2:0,
        score:0
    },
    {
        id:1,
        name:"Kenny", 
        gymsBeat:[false,false,false,false,false,false,false,false],
        eliteFourBeat:[false,false,false,false,false],
        pokemonCaught:0,
        pokemonSeen:0,
        cash:0,
        deaths:0,
        normalEffectiveness:0,
        tms:0,
        multiPlace1:0,
        multiPlace2:0,
        score:0
    },
    {
        id:2,
        name:"Alex", 
        gymsBeat:[false,false,false,false,false,false,false,false],
        eliteFourBeat:[false,false,false,false,false],
        pokemonCaught:0,
        score:0
    },
    {
        id:3,
        name:"Henry", 
        gymsBeat:[false,false,false,false,false,false,false,false],
        eliteFourBeat:[false,false,false,false,false],
        pokemonCaught:0,
        pokemonSeen:0,
        cash:0,
        deaths:0,
        normalEffectiveness:0,
        tms:0,
        multiPlace1:0,
        multiPlace2:0,
        score:0
    },
    {
        id:4,
        name:"Huy", 
        gymsBeat:[false,false,false,false,false,false,false,false],
        eliteFourBeat:[false,false,false,false,false],
        pokemonCaught:0,
        pokemonSeen:0,
        cash:0,
        deaths:0,
        normalEffectiveness:0,
        tms:0,
        multiPlace1:0,
        multiPlace2:0,
        score:0
    },
    {
        id:5,
        name:"Justin", 
        gymsBeat:[false,false,false,false,false,false,false,false],
        eliteFourBeat:[false,false,false,false,false],
        pokemonCaught:0,
        pokemonSeen:0,
        cash:0,
        deaths:0,
        normalEffectiveness:0,
        tms:0,
        multiPlace1:0,
        multiPlace2:0,
        score:0
    },
]);
export default birthdayPlayers;

export function calculatePlayerScores()
{ 
    let players = get(birthdayPlayers);
    for(const player of players)
    {
        player.score = 0;
        for(const gym of player.gymsBeat)
        {
            if(gym)
            {
                player.score += 5;
            }
        }
        for(const elite4 of player.eliteFourBeat)
        {
            if(elite4)
            {
                player.score += 10;
            }
        }
        player.score += player.pokemonCaught;
    }
    scoreByRanking(players,(a,b)=>b.pokemonSeen - a.pokemonSeen,(x)=>x.pokemonSeen == 0, 1);
    scoreByRanking(players,(a,b)=>b.cash - a.cash,(x)=>x.cash == 0, 1);
    scoreByRanking(players,(a,b)=>-(b.deaths - a.deaths),(x)=>x.deaths == 0, 1);
    scoreByRanking(players,(a,b)=>b.normalEffectiveness - a.normalEffectiveness,(x)=>x.normalEffectiveness == 0, 1);
    scoreByRanking(players,(a,b)=>b.tms - a.tms,(x)=>x.tms == 0, 1);
    scoreByRanking(players,(a,b)=>-(b.multiPlace1 - a.multiPlace1),(x)=>x.multiPlace1 == 0, 2);
    scoreByRanking(players,(a,b)=>-(b.multiPlace2 - a.multiPlace2),(x)=>x.multiPlace2 == 0, 2);
    players.sort((a,b)=>a.id - b.id);
    for(const task of exclusivePkmnTasks)
    {
        players[task.winner].score += task.points;
    }
    birthdayPlayers.set(players);
}

function scoreByRanking(players:any[], comparator:any,emptyCheck:any, pointsPerRank:number)
{
    let dontCount = true;
    for(const player of players)
    {
        if(!emptyCheck)
        {
            dontCount = false;
        }
    }
    if(dontCount)
    {
        return;
    }
    players.sort(comparator);
    let score = pointsPerRank * 5;
    for(const player of players)
    {
        player.score += score;
        score-= pointsPerRank;
    }
}