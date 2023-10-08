<script lang="ts">
    export let rating:number;   
    export let ratingName:string; 
</script>

<div class="rating">
    {#each Array(5) as _, index (index)}
        {#if index == rating}
            <input 
                type="radio"
                class="mask mask-star-2 bg-green-500 disabled" 
                name={ratingName}
                checked disabled/>
        {:else}
            <input type="radio"
                name={ratingName}
                class="mask mask-star-2 bg-green-500 disabled" disabled/>
        {/if}
    {/each}
</div>

<script context="module" lang="ts">
    export const info = {
       name:"Star Rating",
       description:"Shows a rating in stars of something, not interactable",
       inputInfo:[
            {
                name:"rating",
                varType:"Range",
                description:"Integer representing a rating from 0 (1 star) to 4 (5 star)",
                path:""
            },
            {
                name:"ratingName",
                varType:"String",
                description:"Unique string to refer to this rating object",
                path:""
            },
        ],
       testInput:{
           rating:2,
           ratingName:"myRating"
       },
   }
</script>
