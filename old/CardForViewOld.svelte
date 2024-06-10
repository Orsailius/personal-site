<script lang="ts">
    import TagIcons from "$lib/cardgame/data/TagIcons";
    import CardSetDatabase from "../src/lib/cardgame/data/CardSetDatabase";
    import type CardData from "../src/lib/cardgame/CardData";

    export let data:CardData;
    export let applyTransform:boolean = true;
</script>

<div class={"relative rounded-xl p-2 card-image " + (applyTransform ? "card-image-transform" : "") + " flex bg-white border-4 border-base-200 justify-center select-none text-black bg-no-repeat"} 
      style={"background-image: url('" + data.cardArt + "');background-size: cover;"}>
        <div class="absolute" style="top:-1rem;left:-1rem">
            <div class="avatar">
                <div class="w-12 flex items-center rounded-full bg-white ring ring-primary ring-offset-base-100 ring-offset-2">
                    <div class={"w-full text-center text-3xl font-semibold text-black"} style="margin-top: 0.4rem;">
                        {data.power}
                    </div>                
                </div>
            </div>
        </div>
        <div class="absolute" style="top:-1rem;right:-1rem">
            <div class="avatar">
                <div class="w-12 flex items-center rounded-full bg-white ring ring-primary ring-offset-base-100 ring-offset-2">
                    <div class={"w-full text-center text-3xl font-semibold text-black"} style="margin-top: 0.4rem;">
                        {data.cost}
                    </div>                
                </div>
            </div>
        </div>     
        {#if data.abilities != null} 
            <div class="absolute bg-gray-200 rounded-sm w-full text-center bottom-0 flex items-center" style="height:37.5%">
                <div class="absolute w-full text-center p-2 text-md md:text-lg" style="">                
                    {#each data.abilities as ability}
                        {ability.cardText}
                    {/each}                    
                </div>
            </div>
        {:else}
            <div class="absolute bg-gray-300 rounded-sm w-full text-center bottom-0 flex items-center" style="height:9.25%">

            </div>
        {/if}
        <div class={"absolute bg-gray-300 rounded-xl w-5/6 md:w-3/4 grid grid-cols-6 " + 
             (data.abilities != null? "bottom-1/3 left-1/8" : "bottom-4 left-1/8" )}>
            <div class="avatar">
                <div class="w-8 flex items-center rounded-full bg-white ring ring-primary ring-offset-base-100 ring-offset-1">
                    <img src={CardSetDatabase[data.cardSetId].icon} alt=""/>
                </div>
            </div>
            <div class="font-semibold col-span-4 flex items-center">
                <div class="font-semibold text-center text-sm md:text-lg w-full">
                    {data.name}
                </div>
            </div>
            <div class="avatar">
                <div class="w-8 flex items-center rounded-full bg-white ring ring-primary ring-offset-base-100 ring-offset-1">
                    <img src={CardSetDatabase[data.cardSetId].icon} alt=""/>
                </div>
            </div>
        </div>
        <div class="absolute flex w-full place-content-center" style="bottom:-1.75rem;">
            {#if data.tags != undefined}
                {#each data.tags as t}
                    <div class="avatar m-2">
                        <div class="w-8 flex items-center rounded-full bg-white ring ring-primary ring-offset-base-100 ring-offset-2">
                            <div class="w-full text-center text-3xl font-semibold">
                                <img src={TagIcons[t]} alt=""/>
                            </div>                
                        </div>
                    </div>
                {/each}      
            {/if}  
        </div> 
</div>

<style>
    @media (width > 580px)
    {
        .card-image{
            width:256px;
            height:358px; /*1.398 aspect-ratio*/            
        }

        .card-image-transform
        {
            transform: scale(0.5) translate(-45%,-45%);
        }
    }

    @media (width < 580px)
    {
        .card-image
        {
            width:50vw;
            height:calc(50vw * 1.398);           
        } 

        .card-image-transform
        {
            transform: scale(0.355) translate(-83%,-83%);
        }
    } 

    .floatingAway
    {
        animation: floatPath 1.25s linear;
        animation-fill-mode: forwards;
    }

    @keyframes floatPath
    {
        from { transform: translateY(0rem); opacity: 1;}
        to   { transform: translateY(-3rem); opacity: 0; }
    }   

    .costsTooMuch
    {
        background: repeating-linear-gradient(
            45deg,
            #f06d22,
            #f06d22 20px,
            #46529822 20px,
            #72769122 40px
            );
        opacity:0.4;
        width:100%;
    }
</style>
