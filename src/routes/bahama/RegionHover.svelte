<script lang="ts">
    import RegionPopup from "./RegionPopup.svelte";
    import MediaQuery from "svelte-media-queries";

    export let region:any;

    let x:number;
	let y:number;
    let isHovered:boolean = false;

    let style = "top:" + region.y + "%;left:" + region.x + "%;width:"
     + region.width + "%;height:" + region.height + "%";
	
	function mouseOver(event:any) 
    {
		x = event.pageX + 5;
		y = event.pageY + 5;
	}

	function mouseMove(event:any) 
    {
		x = event.pageX + 5;
		y = event.pageY + 5;
	}

	function mouseLeave() 
    {
		isHovered = false;
	}
</script>

<div
    class={"absolute bg-transparent"}
    style={style}
    on:mouseenter={()=>{isHovered=true;}}
    on:mouseover={mouseOver}
    on:mouseleave={mouseLeave}
    on:mousemove={mouseMove}
    on:focus={()=>{}}>
    
  
</div>

{#if isHovered}
    <MediaQuery query="(min-width: 768px)" let:matches>
        {#if matches}
            <RegionPopup region={region} isSM={false}/>
        {:else}            
            <RegionPopup region={region} isSM={true}/>
        {/if}
    </MediaQuery>
{/if}

<style>
@import '$lib/components/PokemonStyle.css';
</style>