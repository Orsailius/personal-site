<script lang="ts">
    import RightArrow from "./glyphs/RightArrow.svelte";

    export let color:number[];
    export let title:string;
    export let desc:string;
    export let clickAction:()=>void;

</script>

<button class={"row-span-2 flex flex-col items-center justify-center hover:brightness-125 menu-button select-none"}
    style={"--r:" + color[0] +";--g:" + color[1] + ";--b:" + color[2]}
    on:click={clickAction}>
    <div class="font-semibold text-lg md:text-3xl lg:text-5xl">
        {title}
    </div>
    <div class="text-sm md:text-xl lg:text-3xl p-2">
       {desc}
    </div>
    <RightArrow />
</button>

<style>
    .menu-button
    {
        transition: all 0.5s ease;
        border-radius:1rem;
        /*background: linear-gradient(rgb(var(--r) var(--g) var(--b)), rgb(var(--r) var(--g) var(--b)) saturation(50%));*/
        background-image: linear-gradient(to left,rgb(var(--r), var(--g), var(--b)),rgb(calc(var(--r) * 2), calc(var(--g) * 2), calc(var(--b) * 2)));
    }
</style>