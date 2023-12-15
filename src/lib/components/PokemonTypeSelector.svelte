<script lang="ts">
    import { pokemonTypes } from '$lib/data/pokemonTypes';
    export let title:string
    export let type = 0
</script>

<label class="form-control w-full max-w-xs p-2">   
    <div class="label">
        <span class="label-text">{title}</span>
      </div>
    <select class={"select select-bordered pokemon-type-select pokemon-type-" + pokemonTypes[type].name.toLowerCase()} bind:value={type}>
        {#each pokemonTypes as pokemonType, index}
            <option value={index} class={"pokemon-type pokemon-type-" + pokemonType.name.toLowerCase()}>
                {pokemonType.name}
            </option>
        {/each}
    </select>
</label>

<!--<script context="module" lang="ts">
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
</script>-->
