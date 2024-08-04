export interface PokemonRegion
{
    x:number;
    y:number;
    width:number;
    height:number;
    name:string;
    description:string;
    catches?: 
    {
        pkmn:string,
        rate:string
    }[];
}

let regions:PokemonRegion[] = [
    {
        x:41.75,
        y:4.5,
        width:13.5,
        height:16.6,
        name:"Sludgebelt",
        description:"This path of steel and sludge leads to the region's Elite 4",
        catches:
        [
            {
                pkmn:"Drudrip",
                rate:"40%"
            },   
            {
                pkmn:"Kevlair",
                rate:"40%"
            },           
            {
                pkmn:"Smogun",
                rate:"5%"
            },
            {
                pkmn:"Trapclap",
                rate:"5%"
            },
        ]
    },
    {
        x:42,
        y:21.1,
        width:13,
        height:13,
        name:"Chaos City",
        description:"This city is between the volcano path to the west and icy caves to the east",
    },
    {
        x:55,
        y:9.15,
        width:22,
        height:11.25,
        name:"Tiara Rime",
        description:"Acessible through the ice caves this is home to the Ice/Fairy Gym",
    },
    {
        x:55,
        y:20.5,
        width:10.5,
        height:11.25,
        name:"Icy Imagine",
        description:"These icy caves are said to be mystical",
        catches:
        [
            {
                pkmn:"Wisper",
                rate:"40%"
            },   
            {
                pkmn:"Impidimp",
                rate:"40%"
            },           
            {
                pkmn:"Glacerror",
                rate:"10%"
            },
        ]
    },
    {
        x:20,
        y:20.5,
        width:22,
        height:6,
        name:"Fractured Fallout",
        description:"This ash covered route contains fire pokemon",
        catches:
        [
            {
                pkmn:"Firetot",
                rate:"40%"
            },   
            {
                pkmn:"Sizzlipede",
                rate:"40%"
            },           
            {
                pkmn:"Diablous",
                rate:"5%"
            },
            {
                pkmn:"Admiral Eagle",
                rate:"5%"
            },
        ]
    }, 
    {
        x:12.25,
        y:20.25,
        width:8,
        height:7,
        name:"Volcanus Prime",
        description:"The Fire/Dragon Gym resides in this city that sits atop a series of hot springs",
    }, 
    {
        x:42.75,
        y:34,
        width:12.25,
        height:14,
        name:"Watery Way",
        description:"Surf across the Watery Way and take a vacation on one of its many beach islands ",
        catches:
        [
            {
                pkmn:"Pwner",
                rate:"65%"
            },   
            {
                pkmn:"Coffish",
                rate:"35%"
            },          
        ]
    }, 
    {
        x:55,
        y:36.5,
        width:7,
        height:8,
        name:"Water Temple",
        description:"No one has ever said anything bad about this place",
        catches:
        [
            {
                pkmn:"Wreepur",
                rate:"30%"
            },   
            {
                pkmn:"Klankir",
                rate:"30%"
            },   
            {
                pkmn:"Hydractic",
                rate:"30%"
            },   
            {
                pkmn:"Mario",
                rate:"10%"
            },            
        ]
    }, 
    {
        x:43,
        y:48,
        width:12,
        height:11.4,
        name:"Hub Town",
        description:"Center of the Bahama Birthday region. The Steel Gym is located here",
    }, 
    {
        x:43,
        y:65.5,
        width:7,
        height:7,
        name:"Lime Town",
        description:"When life doesn't give you lemons, go to the Grass Gym here",
    }, 
    {
        x:44,
        y:74,
        width:5.5,
        height:5,
        name:"Midville",
        description:"Kinda in between places",
    }, 
    {
        x:44,
        y:88,
        width:7,
        height:5,
        name:"Starter Town",
        description:"Aptly named place where you start your journey",
    }, 
    {
        x:22,
        y:54,
        width:11,
        height:5,
        name:"Dojo Den",
        description:"This town is known for its fightin and its gamblin. Home to the Fighting Gym",
    }, 
    {
        x:4,
        y:40,
        width:13,
        height:6.5,
        name:"Neural Nadir",
        description:"Atop a mind-numbling high mountain this jungled town has good vibrations. Home to the Psychic/Electric gym",
    }, 
    {
        x:67.5,
        y:38,
        width:7,
        height:8.5,
        name:"Crazy Cove",
        description:"This small sandy town is the host of the Rock Gym",
    }, 
    {
        x:76,
        y:56,
        width:17,
        height:14,
        name:"Baleful Basin",
        description:"Dark things lurk secretly in this city. The Dark/Ghost gym haunts its halls ",
    }, 
    {
        x:44,
        y:79,
        width:7,
        height:9,
        name:"The Strand",
        description:"First adventure out onto The Strand",
        catches:
        [
            {
                pkmn:"Palmu",
                rate:"40%"
            },   
            {
                pkmn:"Baypig",
                rate:"40%"
            },          
            {
                pkmn:"Cubone",
                rate:"10%"
            },    
        ]
    }, 
    {
        x:51,
        y:79.5,
        width:9.5,
        height:6,
        name:"Shipwreck",
        description:"A ship crashed here containing rare and exotic pokemon",
        catches:
        [
            {
                pkmn:"Nukem",
                rate:"40%"
            },   
            {
                pkmn:"Khantractor",
                rate:"40%"
            },          
            {
                pkmn:"Le Ridy",
                rate:"10%"
            },    
        ]
    }, 
    {
        x:49,
        y:65.5,
        width:7.5,
        height:14,
        name:"Breezy Beach",
        description:"Take a stroll down this pleasantly windy beach",
        catches:
        [
            {
                pkmn:"Flatula",
                rate:"50%"
            },   
            {
                pkmn:"Wingull",
                rate:"45%"
            },  
            {
                pkmn:"Merci",
                rate:"5%"
            },       
        ]
    }, 
    {
        x:36,
        y:65.5,
        width:7.5,
        height:14.5,
        name:"Buggy Briar",
        description:"A forested area with a few bugs",
        catches:
        [
            {
                pkmn:"Gleetcher",
                rate:"45%"
            },   
            {
                pkmn:"Spinarak",
                rate:"49%"
            },    
            {
                pkmn:"Sawnick",
                rate:"5%"
            },       
        ]
    }, 
    {
        x:42,
        y:59.4,
        width:16,
        height:6.1,
        name:"Lime Lane",
        description:"Lime, Lime to my fa ace",
        catches:
        [
            {
                pkmn:"Limurder",
                rate:"45%"
            },   
            {
                pkmn:"Budew",
                rate:"49%"
            },        
            {
                pkmn:"Careagain",
                rate:"5%"
            },    
        ]
    }, 
    {
        x:22,
        y:49.4,
        width:21,
        height:4.5,
        name:"Punching Path",
        description:"Check yourself before you wreck yourself",
        catches:
        [
            {
                pkmn:"Timach",
                rate:"40%"
            },   
            {
                pkmn:"Hawlucha",
                rate:"40%"
            },    
            {
                pkmn:"Neoone",
                rate:"5%"
            },   
            {
                pkmn:"Miths",
                rate:"5%"
            },        
        ]
    }, 
    {
        x:16.75,
        y:36,
        width:17.5,
        height:13.5,
        name:"Mindshock Mountain",
        description:"The Big Rock Brainy Mountain",
        catches:
        [
            {
                pkmn:"Bonja",
                rate:"25%"
            },   
            {
                pkmn:"Pinkee",
                rate:"35%"
            },    
            {
                pkmn:"Sockemp",
                rate:"20%"
            },   
            {
                pkmn:"Paladin Guy",
                rate:"5%"
            },    
            {
                pkmn:"Mephis",
                rate:"5%"
            },       
        ]
    }, 
    {
        x:55,
        y:46,
        width:19,
        height:7,
        name:"Rocky Road",
        description:"Not as fun as it sounds",
        catches:
        [
            {
                pkmn:"Kylead",
                rate:"40%"
            },   
            {
                pkmn:"Archen",
                rate:"40%"
            },    
            {
                pkmn:"Cookin",
                rate:"10%"
            },        
        ]
    }, 
    {
        x:73,
        y:46,
        width:11,
        height:10,
        name:"Dead Dungeon",
        description:"Once upon a dungeon dreary I caught pokemon dark and eerie",
        catches:
        [
            {
                pkmn:"Dethel",
                rate:"40%"
            },   
            {
                pkmn:"Qhygone",
                rate:"35%"
            },    
            {
                pkmn:"Hartus",
                rate:"5%"
            },    
            {
                pkmn:"Saurus",
                rate:"5%"
            },       
            {
                pkmn:"Manbat",
                rate:"5%"
            },   
        ]
    }, 
];

export default regions;
