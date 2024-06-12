<script lang="ts">
    import TextEditor from './TextEditor.svelte';
    import TextData from '$lib/datatypes/TextData';   
    import { writable, type Writable } from "svelte/store";
    import galleries from '$lib/datatypes/Gallery';
    import { text } from 'svelte/internal';

    class PathInfo
    {
        name:string
        builder:(curviness:number, pathScale:number)=>string

        constructor(name:string, builder:(curviness:number, pathScale:number)=>string) 
        {
            this.name = name;
            this.builder = builder;
        }       
        
    }

    const paths = [
        new PathInfo("Straight", (c,p)=>"M-1900,0 L1900,0"),
        new PathInfo("Hill", (c,p)=>
        {
            let scalePoint = 100 * p;
            let nearScale = scalePoint * 0.95;
            return "M-1900,0 L-" + scalePoint + ",0 C-" + nearScale + "," + -c*50 + " " + nearScale + "," + -c*50 + " " + scalePoint + ",0 L" + scalePoint + ",0 1900,0"
        }),
        new PathInfo("Wave", (c,p)=>
        {
            let scalePoint = 100 * p;
            let halfScale = scalePoint/2;
            return "M-1900,0 L-" + scalePoint + ",0 Q-" + halfScale + "," + -c*50 + 
                                " 0,0 Q" + halfScale + "," + c*50 + " " + scalePoint + ",0 L" + scalePoint + ",0 1900,0"
        })
    ]

    let canvas:any;
    let textData:Writable<TextData> = writable(new TextData());
    let borderImage:string = "/images/aipaint/Eye0.png";
    let landscape = false;
    let image:string = "/images/aipaint/Eye0.png";
    let isFixed = true;

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
            <div class="relative m-2 outline outline-dotted outline-white" class:landscape={landscape} style="height:50vh;weight:25vh;">
                <div class="main-image" style={"background-image: url(" + image +");"}>

                </div>  
            </div>
            <button class="btn bg-slate-600" on:click={toggleFixed}>
                
            </button>            
        </div>   
        <div class="w-full lg:col-span-4 bg-slate-800 flex justify-center" style="z-index:100" class:fixed={isFixed}>
            <div class="relative m-2 outline outline-dotted outline-white" class:landscape={landscape} style="height:50vh;weight:25vh;">
                <div class="main-image" style={"background-image: url(" + image +");"}>

                </div>        
                <div class="flex h-full  absolute top-0 left-0
                    relative items-center justify-center" 
                    style={"transform: translate(" + $textData.positionX + "" + $textData.positionXType+ ",-" + $textData.positionY + "" + $textData.positionYType + ")"}>	
                    <svg viewBox="-960 -540 1920 1080" class="w-full" style="max-height:300px;">
                        {#if $textData.showCurve}
                            <path id="curve" d={paths[$textData.pathId].builder($textData.curviness, $textData.pathScale)}/>
                        {:else}
                            <path id="curve" d={paths[$textData.pathId].builder($textData.curviness, $textData.pathScale)} fill="transparent"/>
                        {/if}
                        <text x="25"  style={"text-anchor:middle; fill:"+$textData.fontColor +"; font-size:" + (4.16 * $textData.fontSize) + $textData.fontSizeType + ";font-family:" + $textData.font + ";" + "font-weight: " + $textData.fontWeight +
                        ";transform: rotate(" + $textData.rotation + $textData.rotationType + ") " + ($textData.isFlipped ? " scale(-1,1)" : "") + ";"} 
                        class={($textData.isItalics ? "italic" : "")} paint-order="stroke" stroke={$textData.outlineColor} stroke-width={$textData.outlineWidth}>
                        <textPath xlink:href="#curve" startOffset="50%" alignment-baseline="central">
                            {$textData.titleText}
                        </textPath>
                        </text>
                    </svg>
                </div>
                <!--<div class="border-image" style={"background-image: url(\"" + borderImage + "\");"}>
    
                </div>-->
            </div>
            <button class="btn bg-slate-600" on:click={toggleFixed}>
                
            </button>            
        </div>         
        <div class="col-span-2 bg-slate-200 p-1">
            <h1 class="text-4xl p-4 font-semibold text-center">Design a Blanket</h1> 
            <div class="tabs tabs-lifted pt-1 md:pt-5">
                <input type="radio" name="tabs" role="tab" class="tab bg-slate-300 text-lg font-semibold" aria-label="Image"/>
                <div role="tabpanel" class="tab-content bg-blue-200  rounded-tr rounded-br rounded-bl">
                    <div class="col-span-2 rounded-xl galleryList" style="background-color:#556677">
                        <div class="w-full flex justify-center items-center" style="background-color:#33333333;min-height:5vh">
                            <div class="text-center align-center end text-2xl font-semibold text-white" style="font-family:Bitter">
                                Galleries
                            </div>                             
                        </div>
                        <div class=" flex flex-wrap gap-1 p-4 items-center place-content-around" style="min-height:70vh">
                            {#each galleries as gallery}
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
                <div role="tabpanel" class="tab-content bg-orange-200  rounded-tr rounded-br rounded-bl">

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