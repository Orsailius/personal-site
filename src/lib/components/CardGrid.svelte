<script lang="ts">
    import { onMount } from "svelte";
    import CardImage from "./CardImage.svelte";

    export let amount:number;      
 
</script>

<div class="grid grid-cols-2 gap-4">
    {#each {length: amount} as _, i}
        <CardImage url="src/lib/images/test/IndianPirate.jpg"/>
    {/each} 
</div>

<script context="module" lang="ts">
    import type ComponentInfo from "$lib/datatypes/ComponentInfo";

    export const info:ComponentInfo = {
       name:"Card Grid",
       description:"Grid of Card Images",
       inputInfo:[
            {
                name:"amount",
                varType:"Number",
                description:"Amount of card images to load",
                path:""
            }
        ],
        testInput:
        {
            amount:15,
        },
   }
</script>
