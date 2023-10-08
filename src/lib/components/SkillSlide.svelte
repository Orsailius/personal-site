<script lang="ts">
    import type Skill from "$lib/datatypes/Skill";
    import StarRating from "./StarRating.svelte";

    export let skill:Skill;   
</script>

<div class="rounded-lg p-2 flex items-center h-16 bg-base-100 border border-sm border-base-200 gap-4">
    <img class="object-contain w-2/12 h-full" src={skill.icon} alt="icon"/>
	<p class="text-base-content/60 font-title py-4 font-light text-black md:text-2xl whitespace-nowrap w-7/12 text-center">
        {skill.name}
    </p>
    <StarRating rating={skill.fluency} ratingName={"rating-" + skill.name}/>
</div>

<script context="module" lang="ts">
    import type ComponentInfo from "$lib/datatypes/ComponentInfo";

    export const info:ComponentInfo = {
       name:"Skill Slide",
       description:"Component to show off fluency in a programming language, tool, etc.",
       inputInfo:[
            {
                name:"name",
                varType:"String",
                description:"The name of the skill",
                path:"skill"
            },
            {
                name:"icon",
                varType:"Resource",
                description:"Location of the icon resource",
                path:"skill"
            },
            {
                name:"fluency",
                varType:"Range",
                description:"Integer representing fluency in skill from 0 (1 star - slightly know) to 4 (5 star - fluent)",
                path:"skill"
            },
        ],
        testInput:
        {
           skill:{
            name:"Python",
            icon:"src/lib/images/python-logo-only.svg",
            fluency:2
           }
       },
   }
</script>
