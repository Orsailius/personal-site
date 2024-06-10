<script lang="ts">
	import { browser } from '$app/environment';	
    import { construct_svelte_component, each } from 'svelte/internal';
    import {lazyLoad} from '$lib/lazyLoad';
    import { Splide, SplideSlide } from '@splidejs/svelte-splide';
    import '@splidejs/splide/dist/css/themes/splide-default.min.css'
    import galleries, { type Gallery } from '$lib/datatypes/Gallery';	    

    let chosenGallery:Gallery = galleries[0];
    let currentIndex:number = 0;
    let inFullViewMode:boolean = false;
    let overlay:any;

    function randomGalleryImage(gallery:Gallery)
    {
        if(gallery.pieces.length == 0)
        {
            return "";
        }
        return gallery.pieces[~~(Math.random() * gallery.pieces.length)].image;
    }

    function setChosenGallery(gallery:Gallery)
    {
        chosenGallery = gallery;
    }

    function focusOnImage(index:number)
    {
        currentIndex = index;
        inFullViewMode = true;
    }

    function onClickFocus(e:any)
    {
        console.log(e.target);
        if (!(e.target instanceof HTMLImageElement || e.target instanceof SVGElement))
        {
            inFullViewMode = false;
        }
    }

</script>

<svelte:head>
	<title>AI Art Gallery</title>
	<meta name="description" content="Check out some AI Art" />
</svelte:head>

<div class="bg-base-100 h-full" style="min-height:92.25vh">   
	<h1 class="text-4xl pt-8 font-semibold text-center">AI Art Gallery</h1>
	<div class="grid m-4 ml-2 mr-2 md:ml-8 md:mr-8 grid-cols-6 gap-2">
        <div class="col-span-2 rounded-xl galleryList" style="background-color:#556677">
            <div class="w-full flex justify-center items-center" style="background-color:#33333333;min-height:5vh">
                <div class="text-center align-center end text-2xl font-semibold text-white" style="font-family:Bitter">
                    Galleries
                </div>                             
            </div>
            <div class=" flex flex-wrap gap-1 p-4 items-center place-content-around" style="min-height:70vh">
                {#each galleries as gallery}
                    <button class="flex flex-col justify-center items-center" on:click={()=>setChosenGallery(gallery)}>
                        <img src={randomGalleryImage(gallery)} alt={gallery.name} class="rounded-xl" style="max-width:120px; width:100%"/>
                        <div class="text-center text-white">
                            {gallery.name}
                        </div>    
                    </button>                
                {/each}
            </div>            
        </div>
        <div class="col-span-4 rounded-xl" style="background-color:#444444">
            <div class="m-4 ml-2 mr-2 md:mr-8 md:ml-8 flex flex-wrap items-center place-content-around gap-2">
                {#each chosenGallery.pieces as artwork,index (artwork.name)}
                    <button class="rounded-lg overflow-hidden" on:click={()=>focusOnImage(index)}>
                        <img class="artwork" style="max-height:25vh;" src="/images/artwork/Placeholder.jpg" use:lazyLoad={artwork.image} alt={artwork.name} />
                    </button>
                {/each}
            </div>
        </div>
        {#if inFullViewMode}
            <button bind:this={overlay} class="overlay" on:click={onClickFocus}>
                <Splide options={ { pagination: false,perPage:1,type : 'loop',start:currentIndex } } aria-label="My Favorite Images">
                    {#each chosenGallery.pieces as artwork,index (artwork.name)}                    
                        <SplideSlide class="flex justify-center items-center justify-items-center">
                            <div class="flex flex-col mt-4">
                                <img use:lazyLoad={artwork.image} alt={artwork.name}/>
                                <div class="text-center text-2xl pt-2">
                                    {artwork.name}
                                </div>
                            </div>                            
                        </SplideSlide>
                    {/each}
                </Splide>
            </button>
        {/if}
    </div>   
</div>

<style>
    .artwork 
    {
        opacity: 0;
        transition: all 3s ease;
    }

    .galleryList
    {
        position: sticky;
        top: 0;
        height: 100vh;
        box-sizing: border-box;
    }

    .overlay{
        position:fixed;
        background-color: rgba(0,0,0,0.9);
        width:100%;
        height:100%;
        top:0px;
        left:0px;
        z-index:1000;
    }
</style>
