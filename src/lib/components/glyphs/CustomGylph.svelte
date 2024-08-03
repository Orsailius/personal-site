<script lang="ts">
    import getGlyphPath from "$lib/data/gylphPaths";

    export let width = "16px";
    export let height = "16px";
    export let glyphName = "TV";

    let glyphs:string|string[] = getGlyphPath(glyphName);

    let paths:string[];
    if(typeof glyphs === 'string')
    {
        paths =  [glyphs];
    } 
    else
    {
        paths = glyphs;
    }

</script>

<svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill="currentColor" class="bi" viewBox="0 0 16 16">
    {#each paths as glyph}
        <path d={glyph} />
    {/each} 
</svg>