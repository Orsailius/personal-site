<script lang="ts">
    import TextData from '$lib/datatypes/TextData';   
    import { type Writable } from "svelte/store";
    import paths from '$lib/datatypes/PathInfo';
    
    export let textData:Writable<TextData>;	
</script>

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

<style>
    @font-face { font-family: Public Sans; src: url('$lib/fonts/PublicSans-VariableFont_wght.ttf'); } 
    @font-face { font-family: Pacifico; src: url('$lib/fonts/Pacifico-Regular.ttf'); } 
    @font-face { font-family: Lobster; src: url('$lib/fonts/Lobster-Regular.ttf'); }   
</style>

