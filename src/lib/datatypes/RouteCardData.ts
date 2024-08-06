import TV from "../components/glyphs/TV.svelte";

export default class RouteCardData
{
    name:string;
    route:string;
    description:string;
    category:RouteCategory;
    gradient1?:string;
    gradient2?:string;
    icon?:string;
}

export enum RouteCategory
{
    Game,
    Tool,
    Media,    
}

export const routeList:RouteCardData[] = [
    {
        name: "Movie Quote Cryptogram",
        route: "cryptogram",
        description: "Solve cryptograms of famous movie quotes",
        category: RouteCategory.Game,
        icon:"Film"
    },
    {
        name: "Old Timey Video",
        route: "otv",
        description: "Watch videos from youtube with an old timey filters",
        category: RouteCategory.Media,
        icon:"TV"
    },
    {
        name: "Christmas Movie Tierlist",
        route: "tierlist",
        description: "Rank christmas movies by placing them into tiers",
        category: RouteCategory.Media,
        icon:"Tree"
    },
    {
        name: "AI Art Gallery",
        route: "aiart",
        description: "View a collection of AI generated art",
        category: RouteCategory.Media,
        icon:"Easel"
    },
    {
        name: "AI Paint",
        route: "aipaint",
        description: "Colour in pencil drawings using AI",
        category: RouteCategory.Tool,
        icon:"Brush"
    },
    {
        name: "Count On This",
        route: "countonthis",
        description: "Countdowns to various events, add your own!",
        category: RouteCategory.Tool,
        icon:"Date"
    },
    {
        name: "Fireworks Display",
        route: "fireworks",
        description: "A small fireworks display to ring in the new year",
        category: RouteCategory.Media,
        icon:"Happy"
    },
    {
        name: "Markdown Tester",
        route: "markdown",
        description: "Test out markdown with a side by side comparison",
        category: RouteCategory.Tool,
        icon:"Markdown"
    },
    {
        name: "Font Title Tool",
        route: "fonttitle",
        description: "Test out various fonts and text designs",
        category: RouteCategory.Tool,
        icon:"Font"
    },
    {
        name: "Funky Piano",
        route: "funkypiano",
        description: "Play and record songs on a colourful funky piano",
        category: RouteCategory.Tool,
        icon:"Music"
    },
    {
        name: "Gift Grab",
        route: "giftgrab",
        description: "Run around and collect gifts",
        category: RouteCategory.Game,
        icon:"Gift"
    },
    {
        name: "Hotdog, No Hotdog",
        route: "hotdog",
        description: "Can you identify hot dogs and not hot dogs quickly?",
        category: RouteCategory.Game,
        icon:"Egg"
    },
    {
        name: "Pokemon Counter Finder",
        route: "pkmn",
        description: "Find the best type counters to a pokemon",
        category: RouteCategory.Tool,
        icon:"Search"
    },
    {
        name: "Wiki Presenter",
        route: "wikipresent",
        description: "Have wikipedia articles presented to you",
        category: RouteCategory.Media,
        icon:"Projector"
    },
    {
        name: "Html Card Maker",
        route: "cardmaker",
        description: "Add content to an html card",
        category: RouteCategory.Tool,
        icon:"Projector"
    },
];