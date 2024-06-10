<script lang="ts">
    import BoardSpace from '$lib/cardgame/BoardSpace.svelte';
    import Card from '$lib/cardgame/Card.svelte';
    import DeckPile from '$lib/cardgame/DeckPile.svelte';
    import Player from '$lib/cardgame/Player';
    import Deck from '$lib/cardgame/Deck';
    import type CardInstance from '$lib/cardgame/CardInstance';
    import type CardData from '$lib/cardgame/CardData';
    import {GamePhase} from '$lib/cardgame/GamePhase';
    import PlayerSide from '$lib/cardgame/PlayerSide';
    import MenuCover from '$lib/cardgame/MenuCover.svelte';
    import type BoardSpaceColumn from "$lib/cardgame/BoardSpaceColumn";
    import RandomAI from "$lib/cardgame/ai/RandomAI";
    import { wait } from '$lib/cardgame/Utils';
    import type CardDragData from '$lib/cardgame/data/CardDragData';
    import ResourceBar from "$lib/components/ResourceBar.svelte";
    import RadialProgress from "$lib/components/RadialProgress.svelte";
    import { writable, type Writable } from 'svelte/store';
    import {flip} from 'svelte/animate';
	import {crossfade} from 'svelte/transition';
    import DimpleCover from '$lib/cardgame/DimpleCover.svelte';
    import { getCurrentDeckOrRandom, getRandomDeck } from '$lib/cardgame/IntraSceneData';
    import { onMount } from 'svelte';
	const [send, receive] = crossfade({});

    let currentPhase:GamePhase;
    let player:Player = new Player();   
    player.refresh = playerRefresh;
    let ai:Player = new Player();    
    ai.ai = new RandomAI();
    ai.refresh = aiRefresh;
    let turn:number = 0;
    //
    const dragged:Writable<CardDragData|null> = writable(null);
    //
    //Intrascene data for now?
    const pointsForVictory:number = 1200;
    export let cardDatabase:CardData[];
    //makeFakeHand(player);
    //
    let boardColumns:BoardSpaceColumn[] = [
        {
            color:"#ff000055",
        },
        {
            color:"#00dd0055",
        },
        {
            color:"#0000ff55",
        }
    ];
    //
    let visibleEndTurn:boolean = false;
    //

    onMount(()=>
    {
        init();
    });    

    function init()
    {
        player.deck = getCurrentDeckOrRandom().createInstanceForPlayer(player);
        ai.deck = getRandomDeck().createInstanceForPlayer(ai);
        setupSides();
        progressToDrawPhase();
    }    

    function setupSides()
    {
        var yourSide = new PlayerSide()	
        var theirSide = new PlayerSide()
        //
        yourSide.player = player
        yourSide.otherSide = theirSide
        player.side = yourSide
        //
        theirSide.player = ai
        theirSide.otherSide = yourSide
        ai.side = theirSide
    }

    function handleWaitingAreaSort(e:any)
    {        
        player.hand = e.detail.items;
        player = player;
    }

    function fullRefresh()
    {
        player = player;
        ai = ai;
    }

    function playerRefresh()
    {
        player = player;
    }

    function aiRefresh()
    {
        ai = ai;
    }  

    async function progressToDrawPhase()
    {
        currentPhase = GamePhase.Draw
        await wait(0.5);        
        drawCardsForPlayer(player);
        drawCardsForPlayer(ai);
        fullRefresh();
        await wait(0.5);
        progressToPlayPhase();
    }

    function progressToPlayPhase()
    {
        currentPhase = GamePhase.Play
        visibleEndTurn = true;
    }

    async function onEndTurnPressed()
    {
        visibleEndTurn = false;
        await progressToWaitingPhase();
    }

    async function progressToWaitingPhase()
    {
        currentPhase = GamePhase.Waiting;
        ai.ai.onWaitingPhase(ai);
        fullRefresh();
        await wait(1);
        await progressToResolvingPhase();
    }


    async function progressToResolvingPhase()
    {
        currentPhase = GamePhase.Resolving;     
        await flipCards();
        await resolveOnPlayAbilities();   
        await scoreTurn();
        await resolveAfterTurnAbilities();
        await resolveEndTurnInHandAbilities();
        await wait(1);
        await revertTurnBonuses();
        advanceTurnCounter();
        await progressToReturnToDeck();
    }

    async function revertTurnBonuses()
    {
        await player.revertTurnBonuses();
        await ai.revertTurnBonuses();
    }

    async function resolveOnPlayAbilities()
    {
        for(var i  =0; i < 3;i++)
        {
            await player.resolveOnPlayAbility(i);
            await ai.resolveOnPlayAbility(i);
        }
    }

    async function resolveAfterTurnAbilities()
    {
        for(var i  =0; i < 3;i++)
        {
            await player.resolveAfterTurnAbility(i);
            await ai.resolveAfterTurnAbility(i);
        }
    }


    async function resolveEndTurnInHandAbilities()
    {
        await player.resolveEndTurnInHandAbility();
        await ai.resolveEndTurnInHandAbility();
    }


    async function flipCards()
    {
        for(var i= 0;i < 3;i++)
        {
            boardColumns[i].revealed = true;     
            if(player.play[i] == null)
            {
                player.essence += 1;
            }
            if(ai.play[i] == null)
            {
                ai.essence += 1;
            }
            await wait(0.5);       
        }
    }

    async function scoreTurn()
    {               
        await wait(1);
        for(var i= 0;i < 3;i++)
        {           
            boardColumns[i].fighting = true;     
            let yourPower = player.play[i]?.power ?? 0;
            let theirPower = ai.play[i]?.power ?? 0;
            let score = yourPower - theirPower;
            player.play[i]?.setLastScore(score);
            ai.play[i]?.setLastScore(-score);
            boardColumns[i].score = score;
            console.log(score);
            if(score > 0)
            {
                player.score += score;                
            }
            else if(score < 0)
            {
                ai.score -= score;                
            }
            else
            {

            }    
            await wait(0.5);       
        }
        checkVictory()
        player = player;
        ai = ai;
        await wait(0.5)
    }

    function checkVictory()
    {
        if(player.score >= pointsForVictory && ai.score < pointsForVictory)
        {
            //win for player
        }
        else if(player.score < pointsForVictory && ai.score >= pointsForVictory)
        {
            //win for ai/other
        }
        else if(player.score >= pointsForVictory && ai.score >= pointsForVictory)
        {
            if(player.score > ai.score)
            {
                //player win overtime
            }
            else if(ai.score > player.score)
            {
                //ai win overtime
            }
            else
            {
                //still overtime
            }
        }        
    }

    async function progressToReturnToDeck()
    {
        currentPhase = GamePhase.ReturnToDeck;  
        boardColumns.forEach(x=>
        {
            x.fighting = false;
            x.score = undefined;
            x.revealed = false;
        })
        ai.returnCardsToDeck();
        player.returnCardsToDeck();
        boardColumns = boardColumns;
        fullRefresh();
        await wait(1);
        await progressToDrawPhase();
    }  

    function advanceTurnCounter()
    {
        turn += 1;
    }

    async function drawCardsForPlayer(p:Player)
    {
        await drawCardsInner(p.refillHand(), p);
    }

    async function drawCardsInner(drawn:CardInstance[], p:Player)
    {
        //this is handled automagically in refillhand, we just need to update
        //console.log("Draw cards inner")
        //console.log(drawn);
        player = player;
        await wait(2);
    }

    function handleHandDrop(e:any)
    {
        e.preventDefault();
        if($dragged != null)
        {
            $dragged.onSuccess($dragged, -1,0);
            dragged.set(null);
        }
    }

    function handleOnCardDrop(card:CardInstance, e:any)
    {
        e.preventDefault();
        if($dragged != null)
        {
            $dragged.onSuccess($dragged, player.hand.indexOf(card),2);
            dragged.set(null);
        }
    }

    function handleDragStart(card:CardInstance, e:any)
    {       
        if(card.canBePlayed())
        {
            dragged.set({
                card:card,          
                from:0,  
                onSuccess: (data:CardDragData, index:number, location:number)=>
                {
                    //dragged from hand to hand
                    if(location != 1)
                    {
                        return;
                    }
                    //dragged from hand to board space
                    data.card.owner.moveCardToSpace(data.card,index);
                    fullRefresh();
                }
            })
        }
    }

    function handleDragEnd(card:CardInstance, e:any)
    {       
        if($dragged != null)
        {
            if($dragged.card == card)
            {
               dragged.set(null);
            }
        }
    }

    function handleDragOver(e:any)
    {
        console.log("Over hand")
        e.preventDefault();
    }

    function handleOnCardOver(e:any)
    {
        console.log("Over card in hand")
        e.preventDefault();
        e.stopPropagation();
    }
 
</script>

<svelte:head>
	<title>Card Game</title>
	<meta name="description" content="Play Some Cards" />
</svelte:head>

<div class="h-full bg-purple-800" style="aspect-ratio:16/9;width:100%;display: inline-block;">    
    <MenuCover />
    <DimpleCover />
	<div class="h-full">        
        <div class="relative h-full">
            <div class="absolute h-1/4 flex flex-shrink place-content-center items-center justify-center" 
                style=";top:-15%;width:75vw;left:9.5vw;z-index:10" >
                {#each ai.hand as card (card.id)}
                    <div class="opponentCardInHand" style="min-height:0px;min-width:0px;flex-basis:136px"
                        animate:flip
                        in:receive={{key:card.id}}
                        out:send={{key:card.id}}>
                        <Card inst={card}
                        hidden = {true}/>                    
                    </div>         
                {/each}
            </div>
            <div class="absolute grid grid-cols-11 md:grid-cols-5 w-full h-3/4" style="top:5%">
                <div class="col-span-1">
                    <div class="absolute left-2 md:left-4 top-9 md:top-10">
                        <RadialProgress current={ai.score} max={1200} colour={"#FF2200"}/>
                    </div>                    
                    <div class="absolute left-2 md:left-4 bottom-9 md:bottom-10">
                        <RadialProgress current={player.score} max={1200} colour={"#0022FF"}/>
                    </div>
                </div>
                <div class="col-span-9 grid grid-cols-3 md:col-span-3 board-mask">
                    {#each boardColumns as column, index}
                        <div class="flex flex-col gap-16 md:gap-8 p-4 place-content-center items-center col-span-1" style={"max-height:91.5vh;background-color:" + column.color}>
                            <BoardSpace playedCard={ai.play[index]} 
                                index={index}
                                dragged={dragged}
                                phase={currentPhase}
                                friendly={false} revealed={column.revealed} fullRefresh={fullRefresh} 
                                fighting={column.fighting} score={column.score != undefined ? -column.score : undefined}/>
                            <BoardSpace playedCard={player.play[index]} 
                                dragged={dragged}
                                index={index}
                                phase={currentPhase}
                                fullRefresh={fullRefresh} fighting={column.fighting} score={column.score}/>
                        </div>
                    {/each}
                </div>              
                <div class="col-span-1">
                    {#if visibleEndTurn}
                        <button class="absolute btn btn-sm md:btn btn-primary right-4" style="top:47%"
                            on:click={onEndTurnPressed}>
                            End Turn
                        </button>
                    {/if}
                </div>
            </div>
            <div class="absolute resource-bar-top">
                <ResourceBar value={ai.essence} max={10}/>
            </div>
            <div class="absolute resource-bar-bottom">
                <ResourceBar value={player.essence} max={10}/>
            </div>
            <div class="hand absolute h-1/4 flex dropzone place-content-center items-center justify-center" 
                style=";bottom:-5%;width:90vw;left:5vw"
                on:drop={handleHandDrop} 
                on:dragover={handleDragOver}>
                {#each player.hand as card (card.id)}
                    <div class={card == $dragged?.card ? "cardBeingDragged" : "cardInHand"} 
                        draggable={card.canBePlayed() && currentPhase == GamePhase.Play} 
                        animate:flip
                        in:receive={{key:card.id}}
                        out:send={{key:card.id}}
                        on:dragstart={(e)=>handleDragStart(card,e)}
                        on:dragend={(e)=>handleDragEnd(card,e)} 
                        on:drop={(e)=>handleOnCardDrop(card,e)} 
                        on:dragover={handleOnCardOver}
                        style="min-height:0px;min-width:0px;flex-basis:136px">
                        <Card inst={card}
                        hidden = {false}/>                    
                    </div>         
                {/each}
            </div>
            <div class="absolute md:right-0" style="top:6%;right:-30%">
                <div style="min-height:0px;min-width:0px;flex-basis:136px">
                    <DeckPile />                    
                </div>        
            </div>        
            <div class="absolute md:right-0" style="bottom:20%;right:-30%">
                <div style="min-height:0px;min-width:0px;flex-basis:136px">
                    <DeckPile />                    
                </div>        
            </div>
        </div>        
    </div>
</div>

<style>
    @media (min-width: 768px) 
    {
    
        .resource-bar-top
        {
            top: 10%;
            left:33%;
            right:33%
        }

        .resource-bar-bottom
        {
            bottom: 22.5%;
            left:33%;
            right:33%
        }
    }

    @media (max-width: 768px) 
   {
        .resource-bar-top
        {
            top: 10%;
            left:15%;
            right:15%
        }

        .resource-bar-bottom
        {
            bottom: 21.5%;
            left:15%;
            right:15%
        }
   } 

    .board-mask
    {
        clip-path: polygon(20% 0%, 80% 0, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%);
    }

    .cardInHand
    {
        /*width:128px;
        height:179px;*/
        transition: transform 0.2s, flex-grow 1s;
        transform: scale(0.4) translate(-50%,-15%)
    }

    .friendlyCardInDeck
    {
        right:0;
        bottom:20%;
    }

    .opponentCardInHand
    {
        /*width:128px;
        height:179px;*/
        transition: transform 0.2s;
        transform: scale(0.5)
    }

    .cardBeingDragged
    {
        transition: transform 0.2s;
        transform: scale(0.5);
        z-index: 100;
        opacity: 0.1;
    }


    .cardInHand:hover
    {
        transform: scale(0.8) translate(-50%,-28%);
        z-index: 100;
    }
</style>
