<script lang="ts">
	import { browser } from '$app/environment';	
    import { construct_svelte_component, each } from 'svelte/internal';
    import {dndzone} from "svelte-dnd-action";

    let tiers:Tier[] = [
        {
            name:"S",
            color:"bg-purple-500",
            items:[],
            id:0
        },
        {
            name:"A",
            color:"bg-blue-500",
            items:[],
            id:1
        },
        {
            name:"B",
            color:"bg-green-500",
            items:[],
            id:2
        },
        {
            name:"C",
            color:"bg-yellow-500",
            items:[ ],
            id:3
        },
        {
            name:"D",
            color:"bg-orange-500",
            items:[],
            id:4
        },
        {
            name:"F",
            color:"bg-red-500",
            items:[],
            id:5
        },
    ]

    let movies:Movie[] = 
    [
        {
            name:"Muppet Christmas Carol",
            image: "/images/movies/MuppetChristmasCarol.jpg",
            id:0
        },      
        {
            name:"A Charlie Brown Christmas",
            image:"/images/movies/CharlieBrown.jpg",
            id:1
        },
        {
            name:"National Lampoon's Christmas Vacation",
            image:"/images/movies/ChristmasVacation.jpg",
            id:2
        },
        {
            name:"Elf",
            image:"/images/movies/Elf.jpg",
            id:3
        },
        {
            name:"Frosty The Snowman",
            image:"/images/movies/FrostyTheSnowman.jpg",
            id:4
        },
        {
            name:"The Grinch (Jim Carrey)",
            image:"/images/movies/GrinchCarrey.jpg",
            id:5
        },
        {
            name:"The Grinch (Jim Cartoon)",
            image:"/images/movies/GrinchCartoon.jpg",
            id:6
        },
        {
            name:"Home Alone",
            image:"/images/movies/HomeAlone.jpg",
            id:7
        },
        {
            name:"Jingle All The Way",
            image:"/images/movies/JingleAllTheWay.jpg",
            id:8
        },
        {
            name:"Klaus",
            image:"/images/movies/Klaus.jpg",
            id:9
        },
        {
            name:"Miracle on 34th Street",
            image:"/images/movies/MicaleOn34thStreet.jpg",
            id:10
        },
        {
            name:"Home Alone 2",
            image:"/images/movies/HomeAlone2.jpg",
            id:11
        },
        {
            name:"The Nightmare Before Christmas",
            image:"/images/movies/NightmareBeforeChristmas.jpg",
            id:12
        },
        {
            name:"Planes, Trains and Automobiles",
            image:"/images/movies/PlanesTrainsAutomobiles.jpg",
            id:13
        },
        {
            name:"Rudolph the Red Nosed Reindeer",
            image:"/images/movies/Rudolph.jpg",
            id:14
        },
        {
            name:"The Santa Clause",
            image:"/images/movies/TheSantaClause.jpg",
            id:15
        },
        {
            name:"Die Hard",
            image:"/images/movies/DieHard.jpg",
            id:16
        },
    ].sort((a,b)=>a.name.localeCompare(b.name));

    let dropTargetStyle:any;

    interface Tier
    {
        id:number;
        name:string;
        color:string;
        items:Movie[];
    }

    interface Movie
    {        
        id:number;
        name:string;
        image:string;
    }
    
    function handleSort(tier:Tier, e:any)
    {
        tier.items = e.detail.items;
        tiers = tiers;
    }

    function handleWaitingAreaSort(e:any)
    {        
        movies = e.detail.items;
    }
	
</script>

<svelte:head>
	<title>Christmas Movie Tier List</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="bg-base-100 h-full" style="min-height:92.25vh">   
	<h1 class="text-4xl pt-8 font-semibold text-center">Rank Christmas Movies!</h1>
	<div class="grid m-4 ml-8 mr-8 grid-cols-6 gap-2">
        <div class="col-span-2 bg-secondary rounded-xl">
            <div class="w-full w-16 flex justify-center items-center" style="background-color:#33333333;min-height:5vh">
                <div class="text-center align-center end text-4xl font-semibold text-white" style="font-family:Bitter">
                    Idk
                </div>                             
            </div>
            <div class=" flex flex-wrap gap-1 p-4 items-center place-content-around" style="min-height:70vh"
            use:dndzone={{items:movies,morphDisabled:true}} 
            on:consider={handleWaitingAreaSort} 
            on:finalize={handleWaitingAreaSort} >
            {#each movies as movie (movie.id)}
                <div class="flex justify-center">
                    <img src={movie.image} alt={movie.name} class="rounded-xl" style="max-width:120px; width:100%"/>
                </div>                
            {/each}
        </div>
        </div>
        <div class="col-span-4">
            <div class="flex flex-col gap-1">
                {#each tiers as tier, index (tier.id)}
                    <section class={"flex " + tier.color + " rounded-xl"} style="min-height:12vh">
                        <div class="h-full w-16 flex justify-center items-center" style="background-color:#33333333;min-height:12vh">
                            <div class="text-center align-center end text-4xl font-semibold text-white" style="font-family:Bitter">
                                {tier.name}
                            </div>                             
                        </div>
                        <div class={"w-full flex flex-wrap items-center"} 
                                use:dndzone={{items:tier.items,morphDisabled:true,dropTargetStyle}} 
                                on:consider={(e)=>handleSort(tier,e)} 
                                on:finalize={(e)=>handleSort(tier,e)}>
                            {#each tier.items as movie (movie.id)}
                                <div class="flex justify-center">
                                    <img src={movie.image} alt={movie.name} class="rounded-xl " style="min-height:20px; max-height:11.5vh; width:100%"/>
                                </div>                
                            {/each}
                        </div>
                    </section>
                {/each}
            </div>
        </div>
    </div>   
</div>

<style>
@media (min-width: 640px) 
{
    .autogrid
    {
        grid-template-columns: repeat(1, minmax(0, 1fr));;
    }
}
@media (min-width: 1000px) 
{
    .autogrid
    {
        grid-template-columns: repeat(2, minmax(0, 1fr));;
    }
}
@media (min-width: 1440px) 
{
    .autogrid
    {
        grid-template-columns: repeat(3, minmax(0, 1fr));;
    }
}
</style>
