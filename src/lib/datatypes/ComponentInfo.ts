import type InputInfo from "./InputInfo";

export default class ComponentInfo
{
    name:string = "";
    description:string = "";
    inputInfo?:InputInfo[];
    testInput:any
}