<script lang="ts">
    import type Skill from "$lib/datatypes/Skill";
    import SkillSlide from "./SkillSlide.svelte";

    export let skills:Array<Skill>;
    export let title:string;
</script>

<div>
    <div class="w-full text-center text-4xl text-white font-semibold mb-6">
        {title}
    </div>
    <!--<div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 m-2 gap-2">-->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:flex flex-wrap gap-2 m-2 max-w-screen-lg
    relative overflow-x-auto items-center justify-center">
        {#each skills as skill}
            <SkillSlide skill={skill}/>
        {/each}
    </div>
</div>