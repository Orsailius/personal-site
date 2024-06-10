const galleries:Gallery[] = [
    {
        name:"AI Christmas",
        pieces:[
            {
                name:"Candy Canes",
                image:"/images/artwork/christmas/CandyCanes.jpg"
            },
            {
                name:"Christmas Tree",
                image:"/images/artwork/christmas/ChristmasTree.jpg"
            },
            {
                name:"Christmas Dinner",
                image:"/images/artwork/christmas/Dinner.jpg"
            },
            {
                name:"Elves",
                image:"/images/artwork/christmas/Elves.jpg"
            },
            {
                name:"Gingerbread",
                image:"/images/artwork/christmas/Gingerbread.jpg"
            },
            {
                name:"Grinch",
                image:"/images/artwork/christmas/Grinch.jpg"
            },
            {
                name:"Christmas Lights",
                image:"/images/artwork/christmas/Lights.jpg"
            },
            {
                name:"Mrs. Claus",
                image:"/images/artwork/christmas/MrsClaus.jpg"
            },
            {
                name:"Ornaments",
                image:"/images/artwork/christmas/Ornaments.jpg"
            },
            {
                name:"Presents",
                image:"/images/artwork/christmas/Presents.jpg"
            },
            {
                name:"Reindeer",
                image:"/images/artwork/christmas/Reindeer.jpg"
            },
            {
                name:"Santa",
                image:"/images/artwork/christmas/Santa.jpg"
            },
            {
                name:"Sleigh",
                image:"/images/artwork/christmas/Sleigh.jpg"
            },
            {
                name:"Snowman",
                image:"/images/artwork/christmas/Snoman.jpg"
            },
            {
                name:"Wreath",
                image:"/images/artwork/christmas/Wreath.jpg"
            },
        ]
    },
    {
        name:"Card Art",
        pieces:[
            {
                name:"Aquedect",
                image:"/images/artwork/cards/Aqueduct.jpg"
            },
            {
                name:"ArchimedesIsles",
                image:"/images/artwork/cards/ArchimedesIsles.jpg"
            },
            {
                name:"Blackbeard",
                image:"/images/artwork/cards/Blackbeard.jpg"
            },
            {
                name:"Brownies",
                image:"/images/artwork/cards/Brownies.jpg"
            },
            {
                name:"Dragon Tamer",
                image:"/images/artwork/cards/DragonTamer.jpg"
            },
            {
                name:"Farm House",
                image:"/images/artwork/cards/FarmHouse.jpg"
            },
            {
                name:"Frozen Lake",
                image:"/images/artwork/cards/FrozenLake.jpg"
            },
            {
                name:"H.P. Lovecat",
                image:"/images/artwork/cards/HPLovecat.jpg"
            },
            {
                name:"Ice Mage",
                image:"/images/artwork/cards/IceMage.jpg"
            },
            {
                name:"Rebellious",
                image:"/images/artwork/cards/Rebellious.jpg"
            },
            {
                name:"Rockstar",
                image:"/images/artwork/cards/Rockstar.jpg"
            },
            {
                name:"Ruins",
                image:"/images/artwork/cards/Ruins.jpg"
            },
            {
                name:"Octopus?",
                image:"/images/artwork/cards/SeaCreature.jpg"
            },
            {
                name:"Shih Tzu",
                image:"/images/artwork/cards/ShihTzu.jpg"
            },
            {
                name:"The Butler",
                image:"/images/artwork/cards/TheButler.jpg"
            },
        ]
    },      
    {
        name:"Misc",
        pieces:[
            {
                name:"Andes",
                image:"/images/artwork/misc/Andes.png"
            },
            {
                name:"Colour Hills",
                image:"/images/artwork/misc/ColourHills.png"
            },
            {
                name:"Cyberpunk Cozy",
                image:"/images/artwork/misc/CyberpunkCozy.png"
            },
            {
                name:"Detective",
                image:"/images/artwork/misc/Detective.png"
            },
            {
                name:"Divine",
                image:"/images/artwork/misc/Divine.png"
            },
            {
                name:"Edge Of Infinity",
                image:"/images/artwork/misc/EdgeOfInfinity.png"
            },
            {
                name:"Einstein",
                image:"/images/artwork/misc/Einstein.png"
            },
            {
                name:"Fluff Puppy",
                image:"/images/artwork/misc/FluffPuppy.png"
            },
            {
                name:"Jack",
                image:"/images/artwork/misc/Jack.png"
            },
            {
                name:"Jerry",
                image:"/images/artwork/misc/Jerry.png"
            },
            {
                name:"Lighthouse",
                image:"/images/artwork/misc/Lighthouse.png"
            },
            {
                name:"Lucinda",
                image:"/images/artwork/misc/Lucinda.png"
            },
            {
                name:"Modern Disney",
                image:"/images/artwork/misc/ModernDisney.png"
            },
            {
                name:"Mountain Forest",
                image:"/images/artwork/misc/MountainForest.png"
            },
            {
                name:"Neon",
                image:"/images/artwork/misc/Neon.png"
            },
            {
                name:"Streets of Paris",
                image:"/images/artwork/misc/ParisStreets.png"
            },
            {
                name:"Pose",
                image:"/images/artwork/misc/Pose.png"
            },
            {
                name:"Ragnorak",
                image:"/images/artwork/misc/Ragnorak.png"
            },
            {
                name:"Sloth",
                image:"/images/artwork/misc/Sloth.png"
            },
            {
                name:"Sunset",
                image:"/images/artwork/misc/Sunset.png"
            },
            {
                name:"Winter",
                image:"/images/artwork/misc/Winter.png"
            },
        ]
    },
]

export default galleries;

export interface Gallery
{
    name:string,
    pieces:Artwork[]
}

export interface Artwork
{
    name:string,
    description?:string,
    image:string
}