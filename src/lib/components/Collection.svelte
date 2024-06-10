<script lang="ts">
    import type CardData from "$lib/cardgame/CardData";
    import { CardSetId } from "$lib/cardgame/data/CardSetId";
    import SortType from "$lib/cardgame/data/SortType";
    import { writable, type Writable } from "svelte/store";
    import DoubleRangeSlider from "./DoubleRangeSlider.svelte";
    import Search from "./glyphs/Search.svelte";
    import CardForView from "$lib/cardgame/CardForView.svelte";
    import autoAnimate from '@formkit/auto-animate';
    import type { Tag } from "$lib/cardgame/data/Tag";
    import SortAsc from "./glyphs/SortAsc.svelte";
    import SortDes from "./glyphs/SortDes.svelte";
    import DimpleCover from "$lib/cardgame/DimpleCover.svelte";
    import MenuCover from "$lib/cardgame/MenuCover.svelte";
    import DeckData from "$lib/cardgame/DeckData";
    import { onMount } from 'svelte';	
	import { browser } from '$app/environment';
    import { cardDatabase, compileDeck, getCurrentDeckOrEmpty} from "$lib/cardgame/IntraSceneData";

    //
    const minCost:Writable<number> = writable(0);
    const maxCost:Writable<number> = writable(1);
    const minPower:Writable<number> = writable(0);
    const maxPower:Writable<number> = writable(1);
    //
    //
    let chosenSet:CardSetId|null = null;
    let searchValue:string = "";    
    let sortType:SortType = SortType.Set;
    let sortDirection:boolean = true;//ascending
    //
    let isEditingDeck:boolean = true;
    let currentDeck:DeckData = new DeckData();
    //
    onMount(()=>
    {
       currentDeck = getCurrentDeckOrEmpty();
    });

	function saveDeck()
    { 
        if (browser)
        {
            console.log("Saving")
            window.localStorage.setItem("lastDeck", compileDeck(currentDeck))
        }
        else
        {
            console.log("Not in browser")
        }
    }

    //https://stackoverflow.com/questions/7225407/convert-camelcasetext-to-title-case-text
    function niceify(id:string|CardSetId)
    {
        const result = id.toString().replace(/([A-Z])/g, " $1");
        return result.charAt(0).toUpperCase() + result.slice(1);
    }

    $: niceMinCost = Math.round(10 * $minCost - 5);
    $: niceMaxCost = Math.round(10 * $maxCost - 5);
    $: niceMinPower = Math.round(60 * $minPower);
    $: niceMaxPower = Math.round(60 * $maxPower);

    $:sortedDatabase = sort(cardDatabase);

    function toggleSortDirection()
    {
        sortDirection = !sortDirection;
    }

    $: sort = (data:CardData[])=>
    {
        if(sortDirection)
        {
            data.sort(sortType.sortFunction);
        }
        else
        {
            data.sort((a,b) => sortType.sortFunction(b,a));
        }
        return data;
    }

    $: filter = (cardData:CardData)=>
    {
        if(cardData.cost > niceMaxCost || cardData.cost < niceMinCost)
        {
            return false;
        }
        if(cardData.power > niceMaxPower || cardData.power < niceMinPower)
        {
            return false;
        }
        if(chosenSet != null)
        {
            // ya super great job
            // @ts-expect-error
            if(CardSetId[chosenSet] != cardData.cardSetId)
            {
                return false;
            }
        }
        if(searchValue != "")
        {
            return doStringSearch(cardData);           
        }
        return true;
    }

    function doStringSearch(cardData:CardData)
    {
        if(hasSubstring(cardData.name,searchValue))
        {
            return true;
        }
        if(isTag(searchValue) && cardData.hasTag(searchValue))
        {
            return true;
        }
        let title = toTitleCase(searchValue);
        if(isTag(title) && cardData.hasTag(title))
        {
            return true;
        }
        if(cardData.abilities != null)
        {
            for (const ability of cardData.abilities) 
            {
                if(hasSubstring(ability.cardText, searchValue))
                {
                    return true;
                }
            }
        }       
        return false;
    }

    //this could be much better
    function hasSubstring(baseString:string, lookingFor:string)
    {
        return baseString.toLowerCase().indexOf(lookingFor.toLowerCase()) >= 0;
    }

    //https://stackoverflow.com/questions/196972/convert-string-to-title-case-with-javascript
    function toTitleCase(str:string) 
    {
        return str.replace(
            /\w\S*/g,
            function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            }
        );
    }

    function isTag(maybe:string): maybe is Tag
    {
        return true;
    }

    function clickCard(data:CardData)
    {
        if(!isEditingDeck)
        {
            return;
        }       
        if(data.created)
        {
            return;
        }
        if(currentDeck.cards.find(x=>x == data.id) != null)
        {
            currentDeck.removeCard(data);
        }
        else
        {
            if(currentDeck.canAddMoreCards())
            {
                currentDeck.cards.push(data.id);
            }            
        }
        currentDeck = currentDeck;
        saveDeck();
    }

    function clickCardInDeck(id:number)
    {
        currentDeck.removeCardById(id);
        currentDeck = currentDeck;
        saveDeck();
    }

</script>

<div class={"w-full bg-transparent h-full rounded-lg"}>
   
    <div class="flex flex-wrap items-center"> <!-- filter bar-->
        <div class="join flex-grow-0 m-0">
            <button class="btn btn-square join-item bg-slate-800 w-8 flex items-center justify-center">
               <Search /> 
            </button>
            <input class="input input-bordered join-item bg-slate-800" bind:value={searchValue} />           
        </div>
        <div class="bg-slate-800 pr-2 pl-2 flex flex-col flex-grow rounded-lg" style="height:3rem;">
            <DoubleRangeSlider start={minCost} end={maxCost}/>  
            <div class="flex-grow text-xs">
                Cost Between {niceMinCost} and {niceMaxCost}
            </div>  
        </div>
        <div class="bg-slate-800 pr-2 pl-2 flex flex-col flex-grow rounded-lg" style="height:3rem;">
            <DoubleRangeSlider start={minPower} end={maxPower}/>  
            <div class="flex-grow text-xs">
                Power Between {niceMinPower} and {niceMaxPower}
            </div>  
        </div>
        <label class="form-control flex-grow">
            <select class="select select-bordered bg-slate-800 " bind:value={chosenSet}>
              <option selected value={null}>Any Set</option>
              {#each Object.values(CardSetId) as idValue}
                {#if idValue.toString().length > 2}
                    <option value={idValue}>{niceify(idValue)}</option>
                {/if}
              {/each}
            </select>
        </label>
        <label class="flex flex-grow join">
            <select class="select w-full bg-slate-800 join-item" bind:value={sortType}>
                {#each SortType.values as sortType, index}
                    <option selected value={sortType}>Sort By {sortType.name}</option> 
                {/each}
            </select>            
            <button class="btn btn-square join-item bg-slate-800 w-16 flex items-center justify-center" on:click={toggleSortDirection}>
                {#if sortDirection}
                    <SortAsc width={"2rem"} height={"2rem"}/> 
                {:else}
                    <SortDes width={"2rem"} height={"2rem"} /> 
                {/if}
             </button>
        </label>
        <div class="form-control flex-grow" style="height:3rem;">
            <label class="label cursor-pointer bg-slate-800 rounded-lg h-full">
              <span class="label-text pr-2">Show Collected</span> 
              <input type="checkbox" checked={true} class="checkbox" />
            </label>
        </div>
        <div class="form-control flex-grow" style="height:3rem;">
            <label class="label cursor-pointer bg-slate-800 rounded-lg h-full">
              <span class="label-text pr-2">Show Missing</span> 
              <input type="checkbox" checked={true} class="checkbox" />
            </label>
        </div>
        <div class={"w-full bg-orange-300 rounded-lg flex flex-wrap items-center place-content-around pt-4 pb-4 gap-5 p-2"} 
            style="flex-grow:1;"
            use:autoAnimate={{duration:100}}>
            {#each sortedDatabase as cardData (cardData.id)}
                {#if filter(cardData)}
                    <button class="card-for-view" on:click={()=>clickCard(cardData)}>                     
                      <CardForView data={cardData} width={146} isInDeck={currentDeck.hasCard(cardData.id)}/>
                    </button>            
                {/if}    
            {/each}
        </div>
        <div class={"w-full rounded-lg"} style="flex-grow:1;content:'';height:10vh">
           
        </div>
        <div class="fixed" style="bottom:0%;left:1.9rem;height:15%;width:calc(100% - 4.9rem);">           
            <div class="fixed bg-gray-700 rounded-tr-xl rounded-tl-xl p-4 flex" style="bottom:10%;left:1.9rem;height:5%;width:calc(max(25%, 300px))">
                <div class="flex text-left items-center font-semibold w-full h-full text-sm md:text-lg">
                    My Sweet Deck
                </div>          
                <div class="flex text-right items-center justify-end font-semibold w-full h-full text-sm md:text-lg">
                    {currentDeck.cards.length} / 14 Cards
                </div>        
            </div>
            <div class="fixed bg-gray-700 rounded-tr-xl p-2" style="bottom:0%;right:3rem;height:10%;width:calc(100% - 4.9rem);">               
                <div class="flex place-content-center items-center gap-1" style="padding-right:50px" use:autoAnimate={{duration:100}}>
                    {#each currentDeck.cards as id (id)}
                        <button class="card-for-view-deck flex-shrink"  on:click={()=>clickCardInDeck(id)}>
                            <CardForView data={cardDatabase.find(x=>x.id == id) ?? cardDatabase[0]} width={100} />
                        </button>                        
                    {/each}
                </div>          
            </div>
            <MenuCover />
            <DimpleCover />
        </div>        
    </div>     
    
</div>

<style>

    @media (width < 580px)
   {
        .card-for-view
        {
            transition: transform 0.25s;
        }

        .card-for-view:hover
        {
            transform: scale(1.75);
            z-index: 100;
        }

        .card-for-view-deck
        {
            transition: transform 0.25s;
            min-width: 0px;
        }

        .card-for-view-deck:hover
        {
            transform: scale(1.75) translate(-75%,-55%);
            z-index: 100;
        }
   }    

    @media (width > 580px)
    {
        .card-for-view
        {                       
            transition: transform 0.25s;
        }

        .card-for-view:hover
        {
            transform: scale(1.75);
            z-index: 100;
        }

        .card-for-view-deck
        {                       
            transition: transform 0.25s;
            min-width: 0px;
        }

        .card-for-view-deck:hover
        {
            transform: scale(1.75) translate(0%,-55%);
            z-index: 100;
        }
    }

    @media (768px < height) and (width > 480px)
   {
      .collection-view
      {
        height:75vh;
      }
   }

   @media (612px < height < 768px) and (width > 480px)
   {
      .collection-view
      {
        height:70vh;
      }
   }

   @media (height < 612px) and (width > 480px)
   {
      .collection-view
      {
        height:65vh;
      } 
   } 

   @media (868px < height) and (width < 1000px)
   {
      .collection-view
      {
        height:68.5vh;
      }
   }

   @media (742px < height < 868px) and (width < 1000px)
   {
      .collection-view
      {
        height:64vh;
      }
   }

   @media (600px < height < 742px) and (width < 1000px)
   {
      .collection-view
      {
        height:55vh;
      } 
   } 

   @media (height < 600px) and (width < 1000px)
   {
      .collection-view
      {
        height:45vh;
      } 
   } 
</style>