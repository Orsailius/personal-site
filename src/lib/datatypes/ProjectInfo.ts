export default class ProjectInfo
{
    name:string = "";
    shortDescription:string = "";
    url?:string="";
}

export let projects:ProjectInfo[] = [
    {
        name: "Ficterra",
        shortDescription :"Ficterra is a sandbox crafting adventure with in-game modding that you can explore solo or with friends"
    },
    {
        name: "Horse and Go Seek",
        shortDescription :"Horse Stuff"
    },
    {
        name: "Quick Tower Defence",
        shortDescription :"Quick Tower Defence Ultimate Stuff"
    },
    {
        name: "Minigame Blast",
        shortDescription :"Minigame Blast Stuff"
    },
    {
        name: "Car Launch",
        shortDescription :"Car Launch Stuff"
    },
    {
        name: "Escape This Place",
        shortDescription : "Escape This Place Stuff"
    },
    {
        name: "Anagram Master",
        shortDescription :"Anagram Master Stuff"
    },
    {
        name: "8 Rotate",
        shortDescription :"8 Rotate Stuff"
    },
    {
        name: "Quick Word Search",
        shortDescription :"Quick Word Search Stuff"
    },
    {
        name: "Transit Search",
        shortDescription :"Master's Thesis - Improved A* for static environments"
    },
]