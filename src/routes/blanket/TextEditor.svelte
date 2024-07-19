<script lang="ts">
    import ColorInput from '$lib/components/ColorInput.svelte';
    import SemiboldLabel from '$lib/components/SemiboldLabel.svelte';
    import type TextData from "$lib/datatypes/TextData";
    import type { Writable } from 'svelte/store';
    import Color, { getActiveToggleColor } from "$lib/Color";

    export let textData:Writable<TextData>;
        
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

<div class="flex flex-wrap m-4 gap-2">
    <label class="form-control max-w-xs">
        <SemiboldLabel name={"Title Text"} />     
        <input type="text" 
            bind:value={$textData.titleText}   
            placeholder="Type here"       
            class="input input-bordered w-full max-w-xs text-lg font-medium" />
    </label>
    <div class="form-control flex items-center">
        <!-- svelte-ignore a11y-label-has-associated-control -->
        <label class="form-control w-full max-w-xs">
            <SemiboldLabel name={"Font Colour"} />      
            <ColorInput bind:color={$textData.fontColor} onSelect={(c)=>{}}/>
        </label>
    </div>
    <div class="form-control flex items-center">
        <label class="form-control w-full max-w-xs">
            <SemiboldLabel name={"Font Size"} />
            <div class="join">
                <input type="number" bind:value={$textData.fontSize} placeholder="Type here" class="input input-bordered w-full max-w-xs join-item" />
                <select bind:value={$textData.fontSizeType} class="select select-bordered w-full max-w-xs join-item">
                    <option value="px" selected>px</option>
                    <option value="em">em</option>
                    <option value="%">%</option>
                    <option value="vw">vw</option>
                    </select>
            </div>                
        </label>
    </div>
    <div class="form-control flex items-center">
        <label class="form-control w-full max-w-xs">
            <div class="label">
                <span class="label-text font-semibold text-lg" style="line-height:1rem">Font</span>
            </div>
            <input list="fonts" class="input input-bordered w-full max-w-xs" bind:value={$textData.font} />
            <datalist id="fonts">
                {#each fonts as family}
                    <option value={family} />
                {/each}
            </datalist> 
        </label>
    </div>
    <label class="form-control w-full max-w-xs pb-4">
        <SemiboldLabel name={"Boldness"} />
        <input type="number" 
            bind:value={$textData.fontWeight}          
            class="input input-bordered w-full max-w-xs text-lg font-medium" />
    </label>
    <div class="form-control flex items-center">
        <label class="form-control w-full max-w-xs">
            <SemiboldLabel name={"Rotate"} />     
            <div class="join">
                <input type="number" bind:value={$textData.rotation} class="input input-bordered w-full max-w-xs join-item" />
                <select bind:value={$textData.rotationType} class="select select-bordered w-full max-w-xs join-item">
                    <option value="deg" selected>deg</option>
                    <option value="turn">turn</option>
                    <option value="rad">rad</option>
                    <option value="grad">grad</option>
                    </select>
            </div>                
        </label>
    </div>
    <label class="form-control w-full max-w-xs">
        <SemiboldLabel name={"Horizontal Offset"} />     
        <div class="join">
            <input type="number" bind:value={$textData.positionX} placeholder="Type here" class="input input-bordered w-full max-w-xs join-item" />
            <select bind:value={$textData.positionXType} class="select select-bordered w-full max-w-xs join-item">
                <option value="px">px</option>
                <option value="em">em</option>
                <option value="%" selected>%</option>
                <option value="vw">vw</option>
                </select>
        </div>                
    </label>
    <label class="form-control w-full max-w-xs">
        <SemiboldLabel name={"Vertical Offset"} />
        <div class="join">
            <input type="number" bind:value={$textData.positionY} placeholder="Type here" class="input input-bordered w-full max-w-xs join-item" />
            <select bind:value={$textData.positionYType} class="select select-bordered w-full max-w-xs join-item">
                <option value="px" >px</option>
                <option value="em">em</option>
                <option value="%" selected>%</option>
                <option value="vw">vw</option>
                </select>
        </div>                
    </label>
    <div class="form-control p-2 items-center flex justify-center">
        <label class="label cursor-pointer">
            <span class={"label-text text-lg font-semibold pr-3 " + getActiveToggleColor($textData.isItalics)}>
                Italics
            </span> 
            <input type="checkbox" class="toggle" bind:checked={$textData.isItalics} />
        </label>
    </div>
    <div class="form-control p-2">
        <label class="label cursor-pointer">
            <span class={"label-text text-lg font-semibold pr-3 " + getActiveToggleColor($textData.isFlipped)}>
                Flipped
            </span> 
            <input type="checkbox" class="toggle" bind:checked={$textData.isFlipped} />
        </label>
    </div>
    <div class="form-control flex items-center col-span-2 md:col-span-1">
        <label class="form-control w-full max-w-xs">
            <SemiboldLabel name={"Outline"} />
            <div class="join">
                <input type="number" bind:value={$textData.outlineWidth} class="input input-bordered w-full max-w-xs join-item" />  
                <div class="join-item">
                    <ColorInput bind:color={$textData.outlineColor} onSelect={(c)=>{}}/>        
                </div>                    
            </div>    
            <div class="label">
                <span class="label-text">Width</span>
                <span class="label-text">Color</span>
            </div>            
        </label>
    </div>
    <div class="form-control flex items-center col-span-2 lg:col-span-1">
        <label class="form-control w-full max-w-xs">
            <SemiboldLabel name={"Path"} />
            <div class="join">                    
                <select  class="select select-bordered w-full max-w-xs join-item" bind:value={$textData.pathId}>
                    {#each paths as path, index}
                        <option value={index}> {path.name}</option>
                    {/each}
                </select>
                <input type="number" bind:value={$textData.curviness} class="input input-bordered w-full max-w-xs join-item" />                                      
                <input type="number" bind:value={$textData.pathScale} class="input input-bordered w-full max-w-xs join-item" />
                <input type="checkbox" bind:checked={$textData.showCurve} class="checkbox checkbox-primary mt-3" />
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

<style>
    @font-face { font-family: Public Sans; src: url('$lib/fonts/PublicSans-VariableFont_wght.ttf'); } 
    @font-face { font-family: Pacifico; src: url('$lib/fonts/Pacifico-Regular.ttf'); } 
    @font-face { font-family: Lobster; src: url('$lib/fonts/Lobster-Regular.ttf'); } 
</style>

