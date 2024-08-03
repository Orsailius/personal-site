<script lang="ts">
  import DesignedText from './DesignedText.svelte';

    import TextEditor from './TextEditor.svelte';
    import TextData from '$lib/datatypes/TextData';   
    import { writable, type Writable } from "svelte/store";
    import galleries, { type Gallery } from '$lib/datatypes/Gallery';
    import EffectsEditor from './EffectsEditor.svelte';
    import EffectsData, { buildEffectsFilter } from '$lib/datatypes/EffectsData';
    
    let textData:Writable<TextData> = writable(new TextData());
    let effectsData:Writable<EffectsData> = writable(new EffectsData());
    let borderImage:string = "/images/aipaint/Eye0.png";
    let landscape = false;
    let image:string = "/images/blanket/ComfyUI_01382_.png";
    let isFixed = true;

    $: sortedGalleries = galleries.sort((a:Gallery,b:Gallery)=>
    {
        if(a.name == "Blanket")
        {
            if(b.name == "Blanket")
            {
                return 0;
            }
            return -1;
        }
        if(b.name == "Blanket")
        {
            return 1;
        }
        return 1;
    })

    function setChosenImage(imageChosen:string)
    {
        image = imageChosen;
    }

    function toggleFixed()
    {
        isFixed = !isFixed;
    }
	
</script>

<svelte:head>
	<title>Blanket Tool</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="w-full">    
    <div class="flex flex-col lg:grid lg:grid-cols-6">   
        <div class="w-full lg:col-span-4 bg-slate-800 flex justify-center" style="z-index:100" class:hidden={!isFixed}>
            <div class="relative m-2 outline outline-dotted outline-white" class:landscape={landscape} style="height:50vh;width:33vh;">
                <div class="main-image" style={"background-image: url(" + image +");"}>

                </div>  
            </div>
        </div>   
        <div class="w-full lg:col-span-4 bg-slate-800 flex justify-center" style="z-index:100" class:fixed={isFixed}>
            <div class="relative m-2 outline outline-dotted outline-white" class:landscape={landscape} style="height:50vh;width:33vh;">
                <div class="main-image h-full" style={"background-image: url(" + image +");"
                     + buildEffectsFilter($effectsData)}>                     
                    <DesignedText textData={textData}/>
                </div> 
                <!--<div class="border-image" style={"background-image: url(\"" + borderImage + "\");"}>
    
                </div>-->
            </div>
            <div class="flex flex-col">
                <button class="btn bg-slate-600" on:click={toggleFixed}>
                
                </button> 
                <button class="btn bg-slate-600" on:click={toggleFixed}>
                
                </button>
                <button class="btn bg-slate-600" on:click={toggleFixed}>
                
                </button>   
                <button class="btn bg-slate-600" on:click={toggleFixed}>
                
                </button>                    
            </div>                 
        </div>         
        <div class="relative col-span-2 bg-slate-800 p-1">
            <!--<h1 class="absolute text-xl font-semibold text-right pr-5 top-1 right-0 text-white">Blanket Designer</h1> -->
            <div class="tabs tabs-lifted">
                <input type="radio" name="tabs" role="tab" class="tab bg-slate-300 text-lg font-semibold" aria-label="Image"/>
                <div role="tabpanel" class="tab-content bg-slate-500  rounded-tr rounded-br rounded-bl">
                    <div class="col-span-2 rounded-xl galleryList">                        
                        <div class=" flex flex-wrap gap-1 p-4 items-center place-content-around" style="min-height:70vh">
                            {#each sortedGalleries as gallery}
                                {#each gallery.pieces as piece}
                                    <button class="flex flex-col justify-center items-center" on:click={()=>setChosenImage(piece.image)}>
                                        <img src={piece.image} alt={piece.name} class="rounded-xl" style="max-width:120px; width:100%"/>
                                        <div class="text-center text-white">
                                            {gallery.name}
                                        </div>    
                                    </button>     
                                {/each}           
                            {/each}
                        </div>            
                    </div>
                </div>  
                <input type="radio" name="tabs" role="tab" class="tab bg-slate-300 text-lg font-semibold" aria-label="Text" checked/>
                <div role="tabpanel" class="tab-content bg-slate-200 rounded-tr rounded-br rounded-bl">
                    <TextEditor textData={textData}/>
                </div>
                <input type="radio" name="tabs" role="tab" class="tab bg-slate-300 text-lg font-semibold" aria-label="Border"/>
                <div role="tabpanel" class="tab-content bg-orange-200 h-20 rounded-tr rounded-br rounded-bl">

                </div>            
                <input type="radio" name="tabs" role="tab" class="tab bg-slate-300 text-lg font-semibold" aria-label="Effects"/>
                <div role="tabpanel" class="tab-content bg-blue-100 rounded-tr rounded-br rounded-bl">
                    <EffectsEditor effectsData={effectsData}/>
                </div>    
            </div>           
        </div>  
    </div>
</div>


<style>
    @font-face { font-family: Public Sans; src: url('$lib/fonts/PublicSans-VariableFont_wght.ttf'); } 
    @font-face { font-family: Pacifico; src: url('$lib/fonts/Pacifico-Regular.ttf'); } 
    @font-face { font-family: Lobster; src: url('$lib/fonts/Lobster-Regular.ttf'); } 

    .border-image
    {        
        background-size:cover;
        opacity:65%;
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
    }

    .landscape
    {
        transform: rotate(90deg);
    }

    .main-image
    {        
        position: absolute;
        background-size:cover;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
    }
</style>