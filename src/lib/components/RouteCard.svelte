<script lang="ts">
    import RouteCardData, { RouteCategory } from '$lib/datatypes/RouteCardData';
    import CustomGylph from './glyphs/CustomGylph.svelte';

    export let routeCardData:RouteCardData;	

    function getColor()
    {
        if(routeCardData.category == RouteCategory.Game)
        {
            return "bg-green-700";
        }
        else if(routeCardData.category == RouteCategory.Media)
        {
            return "bg-purple-600";
        }
        return "bg-blue-600";
    }
        

    let hovering = false;
</script>

<a class={"route-card glass-shine-effect mb-8 outline outline-1 outline-white-300 rounded-xl flex flex-col p-4 gap-4 items-center justify-center text-white " + getColor()}
    on:mouseenter={()=>hovering = true} on:mouseleave={()=>hovering=false} href={routeCardData.route} style="text-decoration:none;">	
    <CustomGylph glyphName={routeCardData.icon} width={"48px"} height={"48px"}/>
    <div class="text-xl text-center font-semibold">
        {routeCardData.name}
    </div>
    <div class="text-md text-center">
        {routeCardData.description}
    </div>
    <div class={hovering ? "opacity-100" : "opacity-0"} style="transition:all 0.3s ease-in;">
        Click to Visit!
    </div>
</a>

<style>

    .route-card
    {    
        width: 200px;
        height: 300px;
        transition: all 0.2s;
        box-shadow:
            0 0 6px 2px #fff,  /* inner white */
            0 0 10px 3px #f0f, /* middle magenta */
            0 0 14px 4px #0ff, /* outer cyan */
            inset 0 0 6px 2px #fff,  /* inner white */
            inset 0 0 10px 3px #f0f, /* middle magenta */
            inset 0 0 14px 4px #0ff; /* outer cyan */
    }

    .route-card:hover
    {
        transform: scale(1.2);
        transition: all 0.3s ease-in-out;
    }

    .glass-shine-effect 
    {       
       /* box-shadow: 0 8px 32px 0 rgba(107, 107, 107, 0.37);*/
        backdrop-filter: blur(6px);
        -webkit-backdrop-filter: blur(6px);
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        position: relative;
        transition: transform 200ms ease;
        overflow: hidden;
    }

    .glass-shine-effect:before 
    {
        content: "";
        position: absolute;
        height: 150%;
        width: 50px;
        transform: rotate(30deg);
        background-color: rgba(255, 255, 255, 0.2);
        left: -200px;
    }

    .glass-shine-effect:hover:before 
    {
        transition: left 500ms ease;
        left: 300px;
    }
</style>

