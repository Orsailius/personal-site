<script lang="ts">
    export let value:number;
    export let max:number;
</script>

<div class="resource-bar w-4/4 select-none" style={"--width:" + Math.min((100 * value/max),97.5) 
    + "%;--underPercent:" + (100 * max/value) + "%;"}>
    <div class="bar">
      
    </div>     
    <div class="text-center font-bold text-white w-full absolute text-2xl">
        {value} Essence
    </div>
</div>

<style> 
    .resource-bar
    {
        position: relative;
        height:2em;
        background-color: black;
        border-radius: 1.5em;
        columns: white;
        box-sizing: border-box;
        padding: 0;
        margin:0;
    }

    .bar
    {
        display: flex;
        align-items: center;
        position: absolute;
        left: 0.25em;
        top: 0.25em;
        bottom: 0.25em;
        right:0.25em;
        width: calc(var(--width,0));
        transition: width 1s;
        max-width: calc(100%-1em);
        background: linear-gradient(
            90deg, 
            rgb(17, 78, 121) 0%,
            rgb(13, 166, 97) var(--underPercent,0%));
        border-radius: 15em;
        box-sizing: border-box;
    }
</style>