<script lang="ts">
    import SteamGameData from '$lib/datatypes/SteamGameData';

    export let steamGame:SteamGameData;
    export let leftImage:boolean = true;

    let hovering = false;
</script>

<div class={"grid grid-rows-2 grid-cols-1 md:grid-cols-2 md:grid-rows-1 route-card glass-shine-effect mb-8 outline outline-1 outline-white-300 rounded-xl flex flex-col md:gap-4 items-center justify-center text-white "}
    style={"max-width:800px;"}
    on:mouseenter={()=>hovering = true} on:mouseleave={()=>hovering=false}>   
    <div class="main-image " style={"background-image: url(" + steamGame.image + ");" 
         + (leftImage ? "order:1" : "order:2")}>

    </div>
    <div class="flex flex-col p-4 m-4 gap-4 " style={leftImage ? "order:2" : "order:1"}>
        <div class="text-2xl text-left font-semibold">
            { steamGame.name}
        </div>
        <div class="text-sm text-left pb-2" style="white-space: pre-line">
            {steamGame.description}
        </div>
        <a class={"steam-button rounded-xl text-lg bg-blue-700 text-center outline outline-4 outline-white p-4 font-semibold " + 
            (hovering ? "opacity-100" : "opacity-75")} 
            style="transition:all 0.2s ease-in;text-decoration:none;"
            href={steamGame.link}
            target="_blank"
            rel="noreferrer noopener">
            Check it out on Steam!
        </a>
    </div>   
</div>

<style>

    .main-image
    {
        width: 100%;
        height: 100%;
        padding: 0%;
        margin: 0%;
        z-index: -10;
        background-size:cover;
        background-position: center;
        box-shadow:
            inset 0 0 6px 1px #fff,  /* inner white */
            inset 0 0 10px 2px #f0f, /* middle magenta */
            inset 0 0 14px 2px #0ff; /* outer cyan */
    }

    .steam-button
    {
        display: inline-block;        
    }

    .steam-button:hover
    {
        transform: rotate(-1deg) scale(1.05);
    }

    .route-card
    {    
        width: 100%;
        transition: all 0.2s;
        box-shadow:
            0 0 6px 1px #fff,  /* inner white */
            0 0 10px 2px #f0f, /* middle magenta */
            0 0 14px 3px #0ff, /* outer cyan */
            inset 0 0 6px 1px #fff,  /* inner white */
            inset 0 0 10px 2px #f0f, /* middle magenta */
            inset 0 0 14px 2px #0ff; /* outer cyan */
        background: linear-gradient(to bottom right, #444444 50%, #5555cc 125%);
    }

    .route-card:hover
    {
        transition: all 0.3s ease-in-out;
        transform: scale(1.05);
    }

    .glass-shine-effect 
    {       
       /* box-shadow: 0 8px 32px 0 rgba(107, 107, 107, 0.37);*/
        backdrop-filter: blur(6px);
        -webkit-backdrop-filter: blur(6px);
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
        transition: left 750ms ease;
        left: 1200px;
    }
</style>

