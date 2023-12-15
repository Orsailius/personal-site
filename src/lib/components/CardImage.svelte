<script lang="ts">
    import { onMount } from "svelte";
    import ProgressiveImageLoader from "./ProgressiveImageLoader.svelte";

    export let url:string;      
 
</script>

<div class="rounded-lg p-2 card-image flex bg-base-100 border border-sm border-base-200 justify-center">
    <ProgressiveImageLoader url={url}
        classes={"object-contain w-full rounded-xl"}/>   
</div>

<script context="module" lang="ts">
    import type ComponentInfo from "$lib/datatypes/ComponentInfo";

    export const info:ComponentInfo = {
       name:"Card Image",
       description:"Loads images progressibely with mipmaps",
       inputInfo:[
            {
                name:"url",
                varType:"Resource",
                description:"Location of the image resource",
                path:""
            }
        ],
        testInput:
        {
            url:"src/lib/images/test/IndianPirate.jpg",
        },
   }
</script>

<style>
	.card-image {
	   width:256px;
       height:358px;
	}
</style>
