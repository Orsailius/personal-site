<script lang="ts">
    import ColorInput from '$lib/components/ColorInput.svelte';
    import SemiboldLabel from '$lib/components/SemiboldLabel.svelte';
    import type EffectsData from "$lib/datatypes/EffectsData";
    import type { Writable } from 'svelte/store';
    import Color, { getActiveToggleColor } from "$lib/Color";

    export let effectsData:Writable<EffectsData>;
    
</script>

<div class="flex flex-wrap m-4 gap-2">    
    <label class="form-control w-full max-w-xs pb-4">
        <SemiboldLabel name={"Contrast"} />
        <div class="join">
            <input type="number" 
            bind:value={$effectsData.contrast}          
            class="input input-bordered w-full join-item max-w-xs text-lg font-medium" />
            <div class="join-item input input-bordered bg-slate-100 label">%</div>
        </div>       
    </label>
    <label class="form-control w-full max-w-xs pb-4">
        <SemiboldLabel name={"Brightness"} />
        <div class="join">
            <input type="number" 
            bind:value={$effectsData.brightness}          
            class="input input-bordered w-full join-item max-w-xs text-lg font-medium" />
            <div class="join-item input input-bordered bg-slate-100 label">%</div>
        </div>    
    </label>
    <label class="form-control w-full max-w-xs pb-4">
        <SemiboldLabel name={"Saturation"} />
        <input type="number" 
            bind:value={$effectsData.saturate}          
            class="input input-bordered w-full max-w-xs text-lg font-medium" />
    </label>    
    <label class="form-control w-full max-w-xs pb-4">
        <SemiboldLabel name={"Hue Rotate"} />
        <input type="number" 
            bind:value={$effectsData.hueRotate}          
            class="input input-bordered w-full max-w-xs text-lg font-medium" />
    </label>
    <div class="form-control flex items-center">
        <label class="form-control w-full max-w-xs">
            <SemiboldLabel name={"Blur"} />
            <div class="join">
                <input type="number" bind:value={$effectsData.blur} placeholder="Type here" class="input input-bordered w-full max-w-xs join-item" />
                <select bind:value={$effectsData.blurType} class="select select-bordered w-full max-w-xs join-item">
                    <option value="px" selected>px</option>
                    <option value="em">em</option>
                    <option value="vw">vw</option>
                </select>
            </div>                
        </label>
    </div>  
    <label class="form-control w-full max-w-xs pb-4">
        <SemiboldLabel name={"Sepia"} />
        <input type="number" 
            bind:value={$effectsData.sepia}          
            class="input input-bordered w-full max-w-xs text-lg font-medium" />
    </label>   
    <label class="form-control w-full max-w-xs pb-4">
        <SemiboldLabel name={"Grayscale"} />
        <input type="number" 
            bind:value={$effectsData.grayscale}          
            class="input input-bordered w-full max-w-xs text-lg font-medium" />
    </label>  
    <label class="form-control w-full max-w-xs pb-4">
        <SemiboldLabel name={"Invert"} />
        <input type="number" 
            bind:value={$effectsData.invert}          
            class="input input-bordered w-full max-w-xs text-lg font-medium" />
    </label>
</div>	
