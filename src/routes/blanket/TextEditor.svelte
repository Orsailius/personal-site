<script lang="ts">
    import ColorInput from '$lib/components/ColorInput.svelte';
    import type TextData from "$lib/datatypes/TextData";
    import type { Writable } from 'svelte/store';

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

<div class="flex flex-wrap m-4">
    <div class="flex items-center p-2">
        <label class="form-control w-full max-w-xs">
            <div class="label">
                <span class="label-text">Title Text</span>
            </div>
            <input type="text" bind:value={$textData.titleText} placeholder="Type here" class="input input-bordered w-full max-w-xs" />
        </label>
    </div>
    <div class="flex items-center p-2">
        <!-- svelte-ignore a11y-label-has-associated-control -->
        <label class="form-control w-full max-w-xs">
            <div class="label">
                <span class="label-text">Background Colour</span>
            </div>          
            <ColorInput bind:color={$textData.backgroundColor} onSelect={(c)=>{}}/>
        </label>
    </div>
    <div class="flex items-center p-2">
        <!-- svelte-ignore a11y-label-has-associated-control -->
        <label class="form-control w-full max-w-xs">
            <div class="label">
                <span class="label-text">Font Colour</span>
            </div>          
            <ColorInput bind:color={$textData.fontColor} onSelect={(c)=>{}}/>
        </label>
    </div>
    <div class="flex items-center p-2">
        <label class="form-control w-full max-w-xs">
            <div class="label">
                <span class="label-text">Font Size</span>
            </div>
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
    <div class="flex items-center p-2">
        <label class="form-control w-full max-w-xs">
            <div class="label">
                <span class="label-text">Font</span>
            </div>
            <input list="fonts" class="input input-bordered w-full max-w-xs" bind:value={$textData.font} />
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
            <input type="number" bind:value={$textData.fontWeight} class="input input-bordered w-full max-w-xs" />
        </label>
    </div>
    <div class="flex items-center p-2">
        <label class="form-control w-full max-w-xs">
            <div class="label">
                <span class="label-text">Rotate</span>
            </div>
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
    <div class="grid grid-cols-2 items-center mt-8 p-2">
        <div class="text-center p-2">
            Italics?
        </div>
        <input type="checkbox" bind:checked={$textData.isItalics} class="checkbox checkbox-primary" />
    </div>    
    <div class="grid grid-cols-2 items-center mt-8 p-2">
        <div class="text-center p-2">
            Flip?
        </div>
        <input type="checkbox" bind:checked={$textData.isFlipped} class="checkbox checkbox-primary" />
    </div> 
    <div class="flex items-center p-2 col-span-2 md:col-span-1">
        <label class="form-control w-full max-w-xs">
            <div class="label">
                <span class="label-text">Outline</span>
            </div>
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
    <div class="flex items-center p-2 col-span-2 lg:col-span-1">
        <label class="form-control w-full max-w-xs">
            <div class="label">
                <span class="label-text">Path</span>
            </div>
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

