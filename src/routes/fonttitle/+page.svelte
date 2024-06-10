<script lang="ts">
	import { browser } from '$app/environment';	
    import ColorInput from '$lib/components/ColorInput.svelte';

    let backgroundColor:string = "#2299EE";
    let fontColor:string = "#ffffff";
    let titleText:string = "My Title";
    let fontSize:number = 96;
    let fontSizeType:string = "px";
    let font:string = "Bitter";
    let isItalics:boolean = false;
    let fontWeight:number = 400;
    let rotation:number = 0;
    let rotationType:string ="deg";
    let isFlipped:boolean = false;
    let outlineWidth:number = 0;
    let outlineColor:string = "#000000";
    let pathId:number = 0;
    let curviness:number = 2;
    let pathScale:number = 12;
    let showCurve:boolean = false;

    const fonts=[
        "Roboto",
        "Public Sans",
        "Open Sans",
        "Arial",
        "Times New Roman",
        "Domine",
        "Bitter",
        "Garamond",
        "Lato",
        "Rubik",
        "Pacifico",
        "Lobster"
    ].sort()

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
	
</script>

<svelte:head>
	<title>Font Title Tool</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div  class="bg-base-100">   
	<h1 class="text-4xl p-8 font-semibold text-center">Make a Cool Title</h1>
    <div style={"background-color: " + backgroundColor +"; min-height:33vh"}  
        class="flex bg-base-300 border border-base-500
        rounded-b-box rounded-tr-box relative items-center justify-center">	
        <svg viewBox="-960 -540 1920 1080" class="w-full" style="max-height:300px;">
            {#if showCurve}
                <path id="curve" d={paths[pathId].builder(curviness, pathScale)}/>
            {:else}
                <path id="curve" d={paths[pathId].builder(curviness, pathScale)} fill="transparent"/>
            {/if}
            <text x="25"  style={"text-anchor:middle; fill:"+fontColor +"; font-size:" + (4.16 * fontSize) + fontSizeType + ";font-family:" + font + ";" + "font-weight: " + fontWeight +
            ";transform: rotate(" + rotation + rotationType + ") " + (isFlipped ? " scale(-1,1)" : "") + ";"} 
            class={(isItalics ? "italic" : "")} paint-order="stroke" stroke={outlineColor} stroke-width={outlineWidth}>
              <textPath xlink:href="#curve" startOffset="50%" alignment-baseline="central">
                {titleText}
              </textPath>
            </text>
        </svg>
        <!--<div style={"color:"+fontColor +"; font-size:" + fontSize + fontSizeType + ";font-family:" + font + ";" + "font-weight: " + fontWeight +
            ";transform: rotate(" + rotation + rotationType + ") " + (isFlipped ? " scale(-1,1)" : "") +
            (outlineWidth != 0 ? ";-webkit-text-stroke: " + outlineWidth + "px " + outlineColor + ";" : "")} 
            class={"h1 max-w-full " + (isItalics ? "italic" : "")}>
            {titleText}
        </div>-->
    </div>		
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 m-4">
        <div class="flex items-center p-2">
            <label class="form-control w-full max-w-xs">
                <div class="label">
                  <span class="label-text">Title Text</span>
                </div>
                <input type="text" bind:value={titleText} placeholder="Type here" class="input input-bordered w-full max-w-xs" />
            </label>
        </div>
        <div class="flex items-center p-2">
            <!-- svelte-ignore a11y-label-has-associated-control -->
            <label class="form-control w-full max-w-xs">
                <div class="label">
                  <span class="label-text">Background Colour</span>
                </div>          
                <ColorInput bind:color={backgroundColor} onSelect={(c)=>{}}/>
            </label>
        </div>
        <div class="flex items-center p-2">
            <!-- svelte-ignore a11y-label-has-associated-control -->
            <label class="form-control w-full max-w-xs">
                <div class="label">
                  <span class="label-text">Font Colour</span>
                </div>          
                <ColorInput bind:color={fontColor} onSelect={(c)=>{}}/>
            </label>
        </div>
        <div class="flex items-center p-2">
            <label class="form-control w-full max-w-xs">
                <div class="label">
                  <span class="label-text">Font Size</span>
                </div>
                <div class="join">
                    <input type="number" bind:value={fontSize} placeholder="Type here" class="input input-bordered w-full max-w-xs join-item" />
                    <select bind:value={fontSizeType} class="select select-bordered w-full max-w-xs join-item">
                        <option value="px" selected>px</option>
                        <option value="em">em</option>
                        <option value="%">%</option>
                        <option value="vw">vw</option>
                      </select>
                </div>                
            </label>
        </div>
        <div class="flex items-center p-2">
            <label class="form-control w-full max-w-xs">
                <div class="label">
                  <span class="label-text">Font</span>
                </div>
                <input list="fonts" class="input input-bordered w-full max-w-xs" bind:value={font} />
                <datalist id="fonts">
                    {#each fonts as family}
                        <option value={family} />
                    {/each}
                </datalist> 
            </label>
        </div>
        <div class="flex items-center p-2">
            <label class="form-control w-full max-w-xs">
                <div class="label">
                  <span class="label-text">Font Weight</span>
                </div>
                <input type="number" bind:value={fontWeight} class="input input-bordered w-full max-w-xs" />
            </label>
        </div>
        <div class="flex items-center p-2">
            <label class="form-control w-full max-w-xs">
                <div class="label">
                  <span class="label-text">Rotate</span>
                </div>
                <div class="join">
                    <input type="number" bind:value={rotation} class="input input-bordered w-full max-w-xs join-item" />
                    <select bind:value={rotationType} class="select select-bordered w-full max-w-xs join-item">
                        <option value="deg" selected>deg</option>
                        <option value="turn">turn</option>
                        <option value="rad">rad</option>
                        <option value="grad">grad</option>
                      </select>
                </div>                
            </label>
        </div>
        <div class="grid grid-cols-2 items-center mt-8 p-2">
            <div class="text-center p-2">
                Italics?
            </div>
            <input type="checkbox" bind:checked={isItalics} class="checkbox checkbox-primary" />
        </div>    
        <div class="grid grid-cols-2 items-center mt-8 p-2">
            <div class="text-center p-2">
                Flip?
            </div>
            <input type="checkbox" bind:checked={isFlipped} class="checkbox checkbox-primary" />
        </div> 
        <div class="flex items-center p-2 col-span-2 md:col-span-1">
            <label class="form-control w-full max-w-xs">
                <div class="label">
                  <span class="label-text">Outline</span>
                </div>
                <div class="join">
                    <input type="number" bind:value={outlineWidth} class="input input-bordered w-full max-w-xs join-item" />  
                    <div class="join-item">
                        <ColorInput bind:color={outlineColor} onSelect={(c)=>{}}/>        
                    </div>                    
                </div>    
                <div class="label">
                    <span class="label-text">Width</span>
                    <span class="label-text">Color</span>
                  </div>            
            </label>
        </div>
        <div class="flex items-center p-2 col-span-2 lg:col-span-1">
            <label class="form-control w-full max-w-xs">
                <div class="label">
                  <span class="label-text">Path</span>
                </div>
                <div class="join">                    
                    <select  class="select select-bordered w-full max-w-xs join-item" bind:value={pathId}>
                        {#each paths as path, index}
                            <option value={index}> {path.name}</option>
                        {/each}
                    </select>
                    <input type="number" bind:value={curviness} class="input input-bordered w-full max-w-xs join-item" />                                      
                    <input type="number" bind:value={pathScale} class="input input-bordered w-full max-w-xs join-item" />
                    <input type="checkbox" bind:checked={showCurve} class="checkbox checkbox-primary mt-3" />
                </div>    
                <div class="label">
                    <span class="label-text">Type</span>
                    <span class="label-text">Curviness</span>
                    <span class="label-text">Scale</span>
                    <span class="label-text">Show</span>
                  </div>            
            </label>
        </div>
    </div>  
</div>

<style>
    @font-face { font-family: Public Sans; src: url('$lib/fonts/PublicSans-VariableFont_wght.ttf'); } 
    @font-face { font-family: Pacifico; src: url('$lib/fonts/Pacifico-Regular.ttf'); } 
    @font-face { font-family: Lobster; src: url('$lib/fonts/Lobster-Regular.ttf'); } 
</style>