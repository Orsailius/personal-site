<script lang="ts">
    import MadeCardData, { ContentType } from '$lib/datatypes/MadeCardData';

    export let madeCardData:MadeCardData;

    let hovering = false;
</script>

<div class={"route-card glass-shine-effect mb-8 outline outline-1 outline-white-300 " + 
    "rounded-xl flex flex-col p-4 gap-4 items-center justify-center text-white bg-blue-600"}
    on:mouseenter={()=>hovering = true} on:mouseleave={()=>hovering=false}>	    
    {#each madeCardData.contentList as content}
        {#if content.type == ContentType.Image}
            <img 
                src={content.payload} 
                alt=""
                class={"text-md text-center " + content.classes} 
                style={content.style} /> 
        {:else if content.type == ContentType.Html}
                <div
                class={"text-md text-center " + content.classes} 
                style={content.style}>   
                    {@html content.payload}
                </div>
        {:else if content.type == ContentType.Button}
            <a
            class={"btn btn-success text-md text-center " + content.classes} 
            style={"text-decoration:none; " + content.style}
            href={content.payload.link}>   
                {content.payload.text}
            </a>
        {:else if content.type == ContentType.Link}
            <a
            class={"text-md text-center " + content.classes} 
            style={content.style}
            href={content.payload.link}>   
                {content.payload.text}
            </a>
        {:else}
            <div class={"text-md text-center " + content.classes} style={content.style}>   
                {content.payload}
            </div>
        {/if}
    {/each}
</div>

<style>

    .route-card
    {    
        width: 200px;
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

