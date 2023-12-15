<script lang="ts">
    import StarRating from "./StarRating.svelte";
    import logo from '$lib/images/python-logo-only.svg';

    export let url:string;
</script>

<div class="rounded-lg p-2 flex items-center bg-base-100 border border-sm border-base-200 gap-4">
    <video controls preload="metadata" class="w-full">
        <track kind="captions"/>
        <source src={url} type="video/mp4" />
    </video>
</div>

<script context="module" lang="ts">
    import type ComponentInfo from "$lib/datatypes/ComponentInfo";

    export const info:ComponentInfo = {
       name:"Video Player",
       description:"Custom html5 video player component",
       inputInfo:[
            {
                name:"url",
                varType:"Resource",
                description:"Location of the video resource",
                path:""
            }
        ],
        testInput:
        {
            url:"https://sveltejs.github.io/assets/caminandes-llamigos.mp4"
        },
   }
</script>
