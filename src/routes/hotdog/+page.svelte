<script lang="ts">
	import { browser } from '$app/environment';	
    import { construct_svelte_component, each } from 'svelte/internal';
    import {dndzone} from "svelte-dnd-action";
    
    let image:string = "";
    let isHotdog:boolean;
    //
    let inGame:boolean = false;
    //
    let timeToPick:number = 4.5;
    let timer:any;
    let intervalTimer:any;
    let timeLeft:number;
    let durationPercent:number;
    //
    let score:number = 0;
    let lives:number = 0;
    let waitingAfterGame:boolean = false;

    const imageList:PossibleHotdog[] =[
        {img:"/images/hotdogs/America.jpg",isHotdog:true},
        {img:"/images/hotdogs/Balloon.jpg",isHotdog:false},
        {img:"/images/hotdogs/Burger21.jpg",isHotdog:false},
        {img:"/images/hotdogs/Carrot.jpg",isHotdog:false},
        {img:"/images/hotdogs/ChiliPepper.jpg",isHotdog:false},
        {img:"/images/hotdogs/Corn.jpg",isHotdog:false},
        {img:"/images/hotdogs/DogHose.jpg",isHotdog:false},
        {img:"/images/hotdogs/DogSnow.jpg",isHotdog:false},
        {img:"/images/hotdogs/Grill.jpg",isHotdog:true},
        {img:"/images/hotdogs/Grill2.jpg",isHotdog:true},
        {img:"/images/hotdogs/Hamburger.jpg",isHotdog:false},
        {img:"/images/hotdogs/Hotdog15.jpg",isHotdog:true},
        {img:"/images/hotdogs/Hotdog19.jpg",isHotdog:true},
        {img:"/images/hotdogs/Hotdog22.jpg",isHotdog:true},
        {img:"/images/hotdogs/HotdogStuff.jpg",isHotdog:true},
        {img:"/images/hotdogs/HotdogStyle.png",isHotdog:true},
    ]
	
    function onStart()
    {
        inGame = true;
        lives = 3;
        score = 0;
        timeToPick = 4.5;
        image="";
        setTimeout(nextImage, 1000);
    }

    function nextImage()
    {
        clearTimeout(timer);
        clearInterval(intervalTimer);
        timeLeft = timeToPick;
        timer = setTimeout(timeoutOnPick, timeLeft * 1000)        
        intervalTimer = setInterval(()=>
        {
            timeLeft -= 0.03333;
        },33.33);
        //
        const chosenImage = imageList[~~(Math.random() * imageList.length)]
        image = chosenImage.img;
        isHotdog = chosenImage.isHotdog;
        //
        if(timeToPick > 0.75)
        {
            timeToPick *= 0.97;
        }
    }

    function timeoutOnPick()
    {
        lives--;
        if(lives <= 0)
        {
            clearTimeout(timer);
            clearInterval(intervalTimer);
            endGame();
            return;
        }
        nextImage();
    }

    function onHotdog(chosenHotdog:boolean)
    {
        if((chosenHotdog && isHotdog) || (!chosenHotdog && !isHotdog))
        {
            score++;
        }
        else
        {
            lives--;
            if(lives <= 0)
            {
                clearTimeout(timer);
                clearInterval(intervalTimer);
                endGame();
                return;
            }
        }        
        nextImage();
    }

    function endGame()
    {
        inGame = false;
        waitingAfterGame = true;
        setTimeout(()=>{waitingAfterGame = false;}, 2000);
    }

    interface PossibleHotdog
    {
        img:string,
        isHotdog:boolean
    }

    $:
    {
        const v = timeLeft/timeToPick;
        if(Number.isFinite(v))
        {
            durationPercent = v;
        }
        else
        {
            durationPercent = 0;        
        }
    }

    function getColorByDuration(percent:number)
    {
        if(percent > 0.5)
        {
            return "progress-success";
        }
        else if(percent > 0.25)
        {
            return "progress-warning";
        }
        return "progress-error"
    }

</script>

<svelte:head>
	<title></title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="bg-base-100 h-full" style="min-height:92.25vh">   
	<h1 class="text-4xl pt-8 font-semibold text-center">Hotdog, No Hotdog!</h1>  
   
    <div class="flex flex-col m-4">
        {#if inGame || score > 0}
            <div class="flex justify-evenly mb-2">
                <div class="text-xl">
                    Lives: {lives}
                </div>
                <div class="text-xl">
                    Score: {score}
                </div>
            </div>
        {/if}
        {#if inGame}        
            <progress class={"progress w-full mb-1 " + getColorByDuration(durationPercent)} value={durationPercent} max="1"></progress>
            <div class="flex content-center flex-shrink" style="height:50vh;">
                {#if image == ""}
                    <div class="text-4xl font-semibold text-center w-full align-middle flex-grow" style="align-self: center;">
                        Ready?!
                    </div>   
                {:else}                
                    <img src={image} alt="Hotdog?" class="object-contain object-center flex-grow"/>
                {/if}
            </div>
            <div class="grid grid-cols-2 gap-2 m-2">
                <button class="btn btn-success btn-lg" on:click={()=>onHotdog(true)}>
                    Hotdog
                </button>
                <button class="btn btn-error btn-lg" on:click={()=>onHotdog(false)}>
                    No Hotdog
                </button>
            </div>
        {:else}
            <div class="flex content-center flex-shrink" style="height:50vh;">
                <img src={imageList[0].img} alt="Hotdog?" class="object-contain object-center flex-grow"/>
            </div>
            <button class={"btn btn-success btn-lg m-4 " + (waitingAfterGame ? "btn-disabled" : "")} on:click={onStart}>
                Start!
            </button>  
        {/if}
    </div>   
</div>

<style>

</style>
