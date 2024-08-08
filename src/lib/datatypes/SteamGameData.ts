export default class SteamGameData
{
    name:string;
    link:string;
    description:string;
    image:string;
}

export const gameList:SteamGameData[] = [
    {
        name: "Ficterra",
        link: "https://store.steampowered.com/app/852880/Ficterra/",
        description: " Ficterra is a sandbox crafting adventure with in-game modding that you can explore solo or with friends.\n" + 
        "\nJourney out alone or bring friends along with you.",
        image:"/images/games/Ficterra1.webp"
    },
    {
        name: "Horse And Go Seek",
        link: "https://store.steampowered.com/app/1927410/Horse_and_Go_Seek/",
        description: " Get ready to gallop through scenic locations with your majestic horse to " + 
        "find all the hidden animals!\n\n Travel through a variety of different landscapes to unlock horses, hair colors, levels, spirits and worlds.",
        image:"/images/games/WinScreenPost.png"
    },
    {
        name: "Quick Tower Defence Ultimate",
        link: "https://store.steampowered.com/app/2051530/Quick_Tower_Defence_Ultimate/",
        description: " Unlock upgrades, talents and colours for your towers to defend against scores of enemies. " + 
        "\n\nMake your own maps or download more from the workshop",
        image:"/images/games/Talents.png"
    },
    {
        name: "Minigame Blast!",
        link: "https://store.steampowered.com/app/1185410/Minigame_Blast/",
        description: " Grab your controllers and get ready to party, Minigame Blast is here! " + 
        "\n\n Play solo or up to 8 players in this minigame arcade experience. " + 
        "Explore 16 minigames in multiple game modes.",
        image:"/images/games/TanksCover.png"
    },
];