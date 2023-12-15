<script lang="ts">
    import IntersectionObserver from "svelte-intersection-observer";
    import { onMount, tick } from "svelte";

    export let url:string;      
    export let currentMipmap:number = 4;
    export let tickRates:number[] = [1,1,0.75,0.25];
    export let classes:string = "";

    let element:any;
    let isLoading:boolean = false;
    let intersecting:boolean;

    $: currentUrl = currentMipmap == 0 ? url : url.substring(0,url.length-4) + "_x" + currentMipmap + url.substring(url.length-4);
    $: tickRate = 1000 * tickRates[currentMipmap-1]

    onMount(async () => 
    {
        setTimeout(() => 
        {
            loadNextMipmap();
        },tickRate);
	});

    function onError()
    {
        isLoading = true;
        currentMipmap = 0;
    }

    function loadNextMipmap()
    {
        if(isLoading)
        {
            return;
        }       
        currentMipmap--;
        //console.log("Loading mipmap " + currentMipmap);
        if (currentMipmap > 0)
        {
            if(intersecting)
            {
                isLoading = true;
                setTimeout(() => 
                {
                    isLoading = false;
                    loadNextMipmap();
                },tickRate);
            }
            else
            {
                isLoading = false;
               // console.log("Stopping, since offscreen");
            }          
        }
        else
        {
            isLoading = false;
           // console.log("Stopping, since full image loaded");
            currentMipmap = 0;
        }
    }

    function reset()
    {
        /*currentMipmap = 4;
        setTimeout(() => 
        {
            loadNextMipmap();
        },tickRate);*/
    }
 
</script>

<IntersectionObserver {element} threshold={0.1} on:observe="{(e) => 
    {  
        intersecting = e.detail.isIntersecting;
        if(intersecting)
        {
            //console.log("Starting since onScreen: " + e.detail.intersectionRatio); 
            loadNextMipmap();
        }        
    }}">
    <img src={currentUrl} on:error={onError} bind:this={element} alt="" on:click={reset} on:keypress={reset} class={classes}/>
</IntersectionObserver>

<script context="module" lang="ts">
    import type ComponentInfo from "$lib/datatypes/ComponentInfo";

    export const info:ComponentInfo = {
       name:"Progressive Image Loader",
       description:"Loads images progressibely with mipmaps",
       inputInfo:[
            {
                name:"url",
                varType:"Resource",
                description:"Location of the image resource",
                path:""
            },
            {
                name:"classes",
                varType:"String",
                description:"Format the image wiht classes",
                path:""
            }
        ],
        testInput:
        {
            url:"src/lib/images/test/IndianPirate.jpg",
            classes:"w-full rounded-lg"
        },
   }
</script>
