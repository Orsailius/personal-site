<script lang="ts">
    import { onMount } from "svelte";
    import ProgressiveImageLoader from "./ProgressiveImageLoader.svelte";

    export let url:string;      
    export let name:string;
    export let description:string;

    let showDescription:boolean;

    function onHover()
    {
        showDescription = true;
    }

    function onUnHover()
    {
        showDescription = false;
    }

</script>

<div on:mouseenter={onHover}  on:mouseleave={onUnHover} class="relative rounded-lg card-image flex flex-col justify-center">
    <div class={"relative w-full object-contain rounded-xl top-0 left-0 right-0 " + 
        (showDescription ? "greyscale-0" : "greyscale-25")}>        
        <ProgressiveImageLoader url={url}
            classes={"object-contain w-full rounded-xl"}/>
    </div>
    <div class={"absolute w-full flex flex-col flex-grow left-0 right-0 bottom-0 bg-primary p-2 rounded-bl-lg rounded-br-lg "}>
        <div class="text-primary-content text-lg w-full font-bold text-center flex-grow">
            {name}
        </div>
        <div class={"text-primary-content bg-primary text-sm w-full text-left flex-grow-0  " + 
            (showDescription ? "shown-description" : "collapsed-description")}>         
            <div>
                {description}
            </div>       
        </div>   
    </div>
   
</div>

<script context="module" lang="ts">
    import type ComponentInfo from "$lib/datatypes/ComponentInfo";

    export const info:ComponentInfo = {
       name:"Project Card",
       description:"Loads images progressibely with mipmaps",
       inputInfo:[
            {
                name:"url",
                varType:"Resource",
                description:"Location of the image resource",
                path:""
            },
            {
                name:"name",
                varType:"String",
                description:"Name of the project",
                path:""
            },
            {
                name:"description",
                varType:"String",
                description:"Description of the project",
                path:""
            }
        ],
        testInput:
        {
            url:"src/lib/images/test/FicterraCard.png",
            name:"Ficterra",
            description:"Ficterra is a sandbox crafting adventure with in-game modding that you can explore solo or with friends"
        },
   }
</script>

<style>
	.card-image {
	   width:200px;
       height:300px;
	}

    .shown-description
    {
        max-height: 500px;
        line-height: 1.15rem;
        opacity: 100;
        transition: max-height 0.25s ease-in, opacity 0.25s ease-in, line-height 0.25s ease-in;
    }

    .collapsed-description{
        max-height: 0;
        opacity: 0;
        line-height: 0rem;
        transition: max-height 0.15s ease-out, opacity 0.25s ease-out, line-height 0.25s ease-out;
        
    }

    .greyscale-0
    {
        filter: grayscale(0) brightness(1.25);
        transition: filter 0.25s ease-in;
    }

    .greyscale-25
    {
        filter: grayscale(0.25) brightness(0.75);
        transition: filter 0.25s ease-out;
    }
 
</style>
