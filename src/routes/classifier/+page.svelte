<script lang="ts">
	import { browser } from '$app/environment';	
    import { construct_svelte_component, each } from 'svelte/internal';
    import {dndzone} from "svelte-dnd-action";

    const questionTree:Node =
    [
        {

        }
    ]    

    interface Node
    {

    }

    interface Question extends Node
    {
        question:string;
        answers:Answer[];
    }

    interface Result
    {
        language:string;
        blurb:string;
    }

    interface Answer
    {
        text:string;
        node:Node
    }

</script>

<svelte:head>
	<title></title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="bg-base-100 h-full" style="min-height:92.25vh">   
	<h1 class="text-4xl pt-8 font-semibold text-center">What Type of Gamer are You?</h1>     
   
</div>

<style>

</style>
