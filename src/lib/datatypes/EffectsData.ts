export default class EffectsData
{
    sepia:number = 0;
    blur:number = 0;
    blurType:string = "px";
    contrast:number = 100;
    grayscale:number = 0;
    hueRotate:number = 0;
    brightness:number = 100;
    invert:number = 0;
    saturate:number = 100;    
}

//outside for svelte?
export function buildEffectsFilter(data:EffectsData)
{
    let css:string = "filter: grayscale(" + data.grayscale + "%) ";
    if(data.sepia != 0)
    {
        css += "sepia(" + data.sepia  +"%) ";
    }
    if(data.blur != 0)
    {
        css += "blur(" + data.blur + data.blurType + ") ";
    }
    if(data.brightness != 100)
    {
        css += "brightness(" + data.brightness + "%) ";
    }
    if(data.contrast != 100)
    {
        css += "contrast(" + data.contrast + "%) ";
    }
    if(data.grayscale != 0)
    {
        css += "grayscale(" + data.grayscale + "%) ";
    }
    if(data.hueRotate != 0)
    {
        css += "hue-rotate(" + data.hueRotate + "deg) ";
    }
    if(data.invert != 0)
    {
        css += "invert(" + data.invert + "%) ";
    }
    if(data.saturate != 100)
    {
        css += "saturate(" + data.saturate + "%) ";
    }
    css += ";"
    return css;
}