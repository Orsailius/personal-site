export default interface AdventureNode
{
    staticText?:string;
    dynamicText?:(() => string | undefined) | undefined;
    options:Choice[];
}

export interface Choice
{
    text?:string;
    action?:any;
    filter?:any;
    goto?:number;
}