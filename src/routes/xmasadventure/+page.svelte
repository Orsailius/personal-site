<script lang="ts">
	import { browser } from '$app/environment';	
    import type { Choice } from '$lib/datatypes/AdventureNode';
    import type AdventureNode from '$lib/datatypes/AdventureNode';
    import Typewriter from 'svelte-typewriter'

    var options:Choice[];
    let textLog:string[] = [];
    let resource:number = 0;
    let resourceName:string = "";
    let items:string[] = [];
    let popup:any;

    const endingList = [
        `Just Chillin'`,
        `We All Scream for Ice Cream`,
        `Way Cold`,
        `Hall of the Mountain`,
        `Frakking Big Oil`,
        `Mancer, Cryo Mancer`,
        `Santa's Slay`,
    ]

    let gotEndings:string[] = loadEndings();

    function loadEndings()
    {        
        if(browser)
        {
            var item = window.localStorage.getItem("gotEndings");
            if(item != null)
            {
                return JSON.parse(item) as string[];
            }
        }
        return [];
    }

    function giveEnding(ending:string)
    {
        gotEndings.push(ending);
        gotEndings = gotEndings;
        window.localStorage.setItem("gotEndings", JSON.stringify(gotEndings));
    }

    const playAgainChoice =  
    {
        text:"Play Again",
        action:()=>
        {
            resource = 0,
            resourceName = "",
            items = [];
        },
        goto:0
    };

    const santaFight2 = [
    {
        text:"Shoot Icicles",
        action: ()=>
        {
            resource-=1;
        },
        goto:26
    },
    {
        text:"Freeze the floor",
        goto:27
    },
    {
        text:"Stand your ground",
        action: ()=>
        {
            resource-=1;
        },
        goto:28
    }]

    const santaFight3 = [
    {
        text:"Run Away!",
        action: ()=>
        {
            resource-=1;
        },
        goto:29
    },
    {
        text:"Ice Beam!",
        action: ()=>
        {
            resource-=1;
        },
        goto:30
    },
    {
        text:"Commune with the Spirit of Christmas",
        goto:31
    }]

    const santaFight4 = [
    {
        text:"End This",
        action:()=>
        {
            giveEnding("Mancer, Cryo Mancer")
        },
        filter: ()=>
        {
            return resource > 0;
        },
        goto:32
    },
    {
        text:"The Long Nap",
        action:()=>
        {
            giveEnding("Santa's Slay")
        },
        filter: ()=>
        {
            return resource <= 0;
        },
        goto:33
    }];

    const nodes:AdventureNode[] = 
    [
        {//0
            staticText:"Welcome to a Christmas Adventure! This a text based game where christmasish things happen. Choose your class to start the Adventure!",
            options:
            [
                {
                    text:"Cryomancer", //James Bond
                    goto:1
                },
                {
                    text:"Grinch (Coming December 18th)" //Heist Movie
                },
                {
                    text:"Baker (Coming December 22nd)" //Hallmark
                },
                {
                    text:"Detective (Coming December 26th)" //Murder Mystery
                },
            ]
        },
        {//1
            staticText:`Its time to chill! You are a Cryomancer, a master of the icy magics. You can create ice and snow at your fingertips and single-handedly run 
            an ice cream parlor. But today, when you woke up, it was... slightly warm! You can feel the effects of Global Warming and that is not cool with you! 
            How are you going to freeze Global Warming in its tracks!? `,
            options:
            [
                {
                    text:"Let it go!",
                    action:()=>
                    {
                        giveEnding("Just Chillin'")
                    },
                    goto:2
                },
                {
                    text:"Use my powers to stop Big Polluters",
                    action: ()=>
                    {
                        resourceName = "Health";
                        resource = 5;
                    },
                    goto:9
                },
                {
                    text:"I'm not, this is an opportunity!",
                    goto:4
                },
                {
                    text:"Try directly cooling the planet with your powers",
                    goto:3                    
                },
            ]
        },
         {//2
            staticText:`You decide to let it go, the warm never bothered you anyways. Your sister has been constantly singing/begging for you to hang out.
            So for the first time in like forever you just chill and build a snowman with her.
            
            Ending: Just Chillin'
            `,
            options:
            [
                {
                    text:"Yay! Play Again",
                    goto:0
                }
            ]
        },
        {//3
            staticText:`You try in vain to cool the planet by blasting it with ice, making it snow alot, and giving it the cold shoulder. Nothing works, the planet
            just warms faster than you can cool it`,
            options:
            [
                {
                    text:"Back to cube one",
                    goto:1
                }
            ]
        },
         {//4
            staticText:`You start thinking when it gets hot people are gunna wanna stay cool. You make the cool. How are you going to take advantage of this?`,
            options:
            [
                {
                    text:"Start that ice cream parlor you've joked about",
                    action:()=>
                    {
                        giveEnding("We All Scream for Ice Cream")
                    },
                    goto:5
                },
                {
                    text:"Start a cult that worships you",
                    goto:6
                }
            ]
        },
         {//5
            staticText:`Ice cream business is booming! Customers line up outside your store for their favorite frosty treat. Your powers mean you don't 
            need freezers and you save on power bill. You earn quite the profit and live comfortably. This is until the world starts collapsing, since you
             didn't actually do anything about Global Warming
             
            Ending: We All Scream for Ice Cream`,
            options:
            [
                playAgainChoice
            ]
        },
         {//6
            staticText:`You are the master of ice, the one true savior for the chosen few. Those who join you in your ice palace and worship you shall be spared
            the hellish heat of damnation!
            
            Where will you build your cult compound.. err ice palace?`,
            options:
            [
                {
                    text:"On a hill overlooking a beautiful lake",
                    action:()=>
                    {
                        giveEnding("Way Cold")
                    },
                    goto:7
                },
                {
                    text:"Deep inside a mountain",
                    action:()=>
                    {
                        giveEnding("Hall of the Mountain")
                    },
                    goto:8
                }
            ]
        }, 
        {//7
            staticText:`Your palace looks magnificent upon that hill. It is a sparkling monument to your glory! Your followers rejoice and you are
            happy and worshiped. For a short time. Turns out your massive 'hey look at my sweet cult palace' doesn't go over with almost anyone not in your cult.
            Your palace didn't at all follow city ordinances, people are jealous of it, you never actually purchased the land, people are not happy with cults,
            the league of awesome mages extraordinaire (LAME) think you are abusing your power and are mad you won't pay your membership dues. This of course
            all pales in comparison to the federal government's somewhat negative opinion of the whole situation. 

            When things start literally heating up, your cool becomes the new oil. And suddenly your cult is enemy number 1, and terrorists? The military quickly
            destroys your palace and 'liberates' your cult. You are detained indefinitely for your crimes but really they just do research on you, trying to get that
            sweet sweet cooling magic.
            
            Ending: Way Cold`,
            options:
            [
                playAgainChoice
            ]
        },
         {//8
            staticText:`Sure you can't marvel at your palace from the outside, but its way more secret and safe inside of a mountain. You keep your people
            safe and they keep up the worship. The rest of the world slowly wilts under the oppressive heat and their refusal to kneel to you.

            After a time the heat levels out, but at a temperature that is much too hot. It is straining to use your powers all the time to keep the palace 
            cool, but it is the situation you put yourself in. Long live the ruler of the mountain!
            
            Ending: Hall of the Mountain`,
            options:
            [
                playAgainChoice
            ]
        },
          {//9
            staticText:`You set off to stop large corporations from using and extracting fossils fuels. Your first target is a frakking station. 
            If you can freeze the main internal techno-babble regulator the station will malfunction and explode!
            
            How do you infiltrate the station?`,
            options:
            [
                {
                    text:"Blast through the front door",
                    goto:10
                },
                {
                    text:"Make an ice road over the fence",
                    goto:12
                },
                {
                    text:"Impersonate a Safety Inspector",
                    goto:13
                },
                {
                    text:"Wait for nightfall and carve out a section of the fence",
                    goto:14
                }
            ]
        },
         {//10
            staticText:`The temperature drops and snow begins to fall. Visability is near zero when the hails starts. You assualt the front of the station
            projecting beams of ice and shooting icicles. You hear the Wilhelm screams of your enemies as the main gate topples to your arctic force.

            The sound of gunfire breaks the howling of the wind as you realize that they have guns. While icicles are effective, bullets are more so. 
            You get clipped in the arm and create a block of ice to hide behind.

            *-1 Health*

            You fashion a magic snowball that rolls all over the grounds collecting snow and debris alike. You roll it over the remaining security on the ground
            which only leaves the one guard in the tower. You glance toward the tower and take another hit in the shoulder.

            *-1 Health*

            You focus your powers and smash your snowball into the base of the tower, causing the guard to fall, incapacitating him.`,
            options:
            [
                {
                    text:"Enter the Station",
                    action: ()=>
                    {
                        resource-=2;
                    },
                    goto:11
                },
            ]
        },
          {//11
            staticText:`You enter station and there's no one in the room, but there are probably people elsewhere in the facility.
                      
            How do you proceed?`,
            options:
            [
                {
                    text:"Charge straight for the regulator",
                    action:()=>
                    {
                        giveEnding("Frakking Big Oil")
                    },
                    goto:15
                },
                {
                    text:"Search for a medkit",
                    action:()=>
                    {
                        giveEnding("Frakking Big Oil")
                    },
                    filter:()=>
                    {
                        return resource < 10;
                    },
                    goto:16
                },
                {
                    text:"Move stealthly to the regulator",
                    action:()=>
                    {
                        giveEnding("Frakking Big Oil")
                    },
                    goto:17
                },
                {
                    text:"Look for documents",
                    action:()=>
                    {
                        giveItem("Frakking Documents")
                    },
                    goto:18
                }
            ]
        },
          {//12
            staticText:`You pave a road of ice over top of the fence and slide right into the base. You didn't think anyone would see your frozen
            path, but the guard in the tower spotted you.
            
            A shot rings out through the air as you feel a pain in your leg.

            *-1 Health*

            You awkwardly slip and fall just in front of a secluded door.
            `,
            options:
            [
                {
                    text:"Enter the Station",
                    action: ()=>
                    {
                        resource-=1;
                    },
                    goto:11
                },
            ]
        },
           {//13
            staticText:`You put together a quick costume and make a fake badge so you look like a safety inspector.

            You approach the front gate and flash the badge. The guard lets you in and tells you to go into the supervisor's hut just outside the station.
            The supervisor greets you and smiles. A large guard walks in the door behind you and the supervisor informs you that the inspecotr was just here 
            yesterday.

            It's a trap!

            The guard grabs you and struggle to break free. You conjure an icicle and stab him in the knee. The supervisor has taken this time to grab his pistol
            and fires at you. You dodge, but not enough and it grazes your hip.
            
            *-1 Health*

            You take an icicle and launch it into the supervisor, knocking him out. The guard punches you in the back staggering you forward. You turn around and 
            Forst Shock him into submission.

            Afterward you creep towards the nearby station door
            `,
            options:
            [
                {
                    text:"Enter the Station",
                    action: ()=>
                    {
                        resource-=1;
                    },
                    goto:11
                },
            ]
        },
         {//14
            staticText:`You wait for nightfall to approach the station. You sneak around to the back and flash freeze a section of the fence. A
            quick blast of arctic wind shatters the frozen area of fencing. You duck through the opening and sneak to the back door.

            You repeat your trick with the overly cheap door lock, giving you a way in
            `,
            options:
            [
                {
                    text:"Enter the Station",
                    goto:11
                },
            ]
        },
           {//15
            dynamicText: ()=>
            {
                resource--;
                return `You dash down the hallways to the regulator thingy. As you pass a door an engineer trips you and you fall. Before you can
            get up she hits you with a wrench.

            *-1 Health*

            You blast arctic wind pushing her back into the room, and seal the door with ice.

            You find the regulator and unleash elemental fury upon it until it is frozen solid. The sound of machinery breaking and grinding to a halt
            permeates the air around you, not unlike an old abandoned cannith manufactory. An explosion or two can be heard outside and you use the distraction
            to escape the station unnoticed           

            You have done a great service the environment. Is just one step, but its in the right direction!

            Ending: Frakking Big Oil
            Health Left: ` + resource + `
            `},
            options:
            [
                playAgainChoice
            ]
        },
          {//16
            dynamicText: ()=>
            {
                resource++;
                return `You search around for a medkit, and you find one! You quickly patch your self up and feel healthier

            *+1 Health*         
            
            While searching you see a map of the station and it shows a maintenance route to the regulator. You follow the route and
            are able to get to the regulator room without running into anyone.

            You find the regulator and unleash elemental fury upon it until it is frozen solid. The sound of machinery breaking and grinding to a halt
            permeates the air around you, not unlike an old abandoned cannith manufactory. An explosion or two can be heard outside and you use the distraction
            to escape the station unnoticed       
            
            You have done a great service the environment. Is just one step, but its in the right direction!

            Ending: Frakking Big Oil
            Health Left: ` + resource + `
            
            `},
            options:
            [
                playAgainChoice
            ]
        },
        {//17
            dynamicText: ()=>
            {
                return `You sneak down the halls looking for the regulator room. You do stealthly spy stuff like hide in shadows or behind boxes, 
                duck into rooms, etc. You see an engineer walking down the halls and wait until she passes. You crawl toward the door to the regulator 
                room, then stand up because there was no real reason to be crawling

                You find the regulator and unleash elemental fury upon it until it is frozen solid. The sound of machinery breaking and grinding to a halt
                permeates the air around you, not unlike an old abandoned cannith manufactory. An explosion or two can be heard outside and you use the distraction
                to escape the station unnoticed          
                
                Ending: Frakking Big Oil
                Health Left: ` + resource + `

            `},
            options:
            [
                playAgainChoice
            ]
        },
          {//18
            staticText:`You take the time to search the offices for documents. If you can find more information on the inner working of the corporation,
            maybe you can find a way to cripple them for good. You find a document with a list of facilities and another with accounts. You take these
            to review later, for now a regulator has your name on it. You do a quick search to see if you missed anything.

            While searching you see a map of the station and it shows a maintenance route to the regulator. You follow the route and
            are able to get to the regulator room without running into anyone.

            You find the regulator and unleash elemental fury upon it until it is frozen solid. The sound of machinery breaking and grinding to a halt
            permeates the air around you, not unlike an old abandoned cannith manufactory. An explosion or two can be heard outside and you use the distraction
            to escape the station unnoticed       
            
            You have done a great service the environment. Is just one step, but its in the right direction!

            `,
            options:
            [
                {
                    text:"Review the Documents",
                    goto:19
                }
            ]
        },
        {//19
            staticText:`You scan over the documents and don't see anything out of the ordinary. Until you notice the address of several of the account holders
            is in a peculiar place. 
            
            The North Pole!

            That can't be right. The only thing at the north pole is Santa. Santa wouldn't be bankrolling big oil?!
            There's only one thing to do! Give you a singular option so I can write less. I mean, confront Santa at the North Pole!

            `,
            options:
            [
                {
                    text:"Confront Santa!",
                    goto:20
                }
            ]
        },
        {//20
            staticText:`You rush to the North Pole. Your mind in a frenzy, it can't be true! You pull up on Santa Drive and... its not cold!

            Santa's yard is filled with space heaters. Elves are lounging about in bikinis. The reindeer are fully shaved. You can't believe your eyes!

            You march right up to Santa's door and ring the bell. 

            *Ho Ho Ho*

            The door opens and the big man himself is standing there. 
            
            "So you've finally arrived"
            `,
            options:
            [
                {
                    text:"Santa tell me its not true!",
                    goto:21
                },
                {
                    text:"Wtf Santa what the heck is going on!",
                    goto:21
                },
                {
                    text:"*Make random noises*",
                    goto:21
                },
                {
                    text:"Hello. My name is Inigo Montoya. You killed my father. Prepare to die.",
                    goto:22
                },
            ]
        },
        {//21
            staticText:`*Ho Ho Ho*

            "You've uncovered my secret affiliations I see. Very well, I'll spout off my evil plan!"

            "Winter after Winter, so cold. Its freezing at the North Pole and my arthritis, my god. But I am committed to making
            and delivering gifts to all the good boys and good little girls. So I thought why not just heat up the place a bit. 
            I started with the heaters but it was just not enough. Plus the power bill. Then I thought of global warming!"

            "If I just made the whole planet hotter, I could rid myself of these infernal heaters. Every day I would sing Mele Kalikimaka and rejoice
            in my grass skirt! I didn't even have to do much, those corporations were already doing it, they just needed a little nudge."

            "Soon I will have my resort, North Polooza, and every day will be Merry! At least for me..."

            "I guess now I'm on the naughty list. Better than being on the dead list!"

            Santa lunges at you with a peppermint punch!

            `,
            options:
            [
                {
                    text:"Dodge then counter attack",
                    goto:22
                },
                {
                    text:"Block",
                    goto:22
                },
                {
                    text:"Back up",
                    goto:22
                }
            ]
        },
         {//22
            staticText:`Santa is unprepared for your immediate action.

            You chuck new-fallen snow into his face, blinding him temporarily. You rush into the house and take the high ground.

            His cheeks were like roses, his nose like a cherry! He spoke not a word, but went straight to work.

            Santa swings his carnage candy cane from left to right at you!

            `,
            options:
            [
                {
                    text:"Grab the Cane",
                    action: ()=>
                    {
                        resource-=1;
                    },
                    goto:23
                },
                {
                    text:"Blast him with Artic air",
                    action: ()=>
                    {
                        resource-=1;
                    },
                    goto:24
                },
                {
                    text:"Leap over the Cane",
                    goto:25
                }
            ]
        },
        {//23
            staticText:`You attempt to grab the cane, but Santa is too strong and you end up clear across the room

            *-1 Health*

            He charges at you like a bowl full of Jelly
            `,
            options: santaFight2
        },
         {//24
            staticText:`You blast him with arctic air, but he is pretty much used to it. You get whacked and end up clear across the room

            *-1 Health*

            He charges at you like a bowl full of Jelly
            `,
            options: santaFight2
        },
         {//25
            staticText:`You leap over the cane all acrobatic like, and Santa stumbles a bit in disbelief

            He charges at you like a bowl full of Jelly
            `,
            options: santaFight2
        },
        {//26
            staticText:`You conjure icicles and shoot them at Santa. They just bounce right off that belly.
            He hits you hard and visions of sugar-plums dance in your head

            *-1 Health*

            A wink of his eye and a twist of his head
            Soon gave you to know you had something to dread

            Santa calls upon Spirit of Christmas to finish you off
            `,
            options: santaFight3
        },
        {//27
            staticText:`You freeze the floor in front of Santa. He slips and falls, which arose such a clatter.
          
            A wink of his eye and a twist of his head
            Soon gave you to know you had something to dread

            Santa calls upon Spirit of Christmas to finish you off
            `,
            options: santaFight3
        },
         {//28
            staticText:`You are standing your ground. You are the frozen wall of justice and none shall pass!
            You are now on the ground wincing in pain.

            *-1 Health*
          
            A wink of his eye and a twist of his head
            Soon gave you to know you had something to dread

            Santa calls upon Spirit of Christmas to finish you off
            `,
            options: santaFight3
        },
         {//29
            staticText:`You make a run for it! But the Spirit of Christmas is too fast and catches you
            It is the spirit of giving; giving you pain.

            *-1 Health*
            `,
            options: santaFight4
        },
        {//30
            staticText:`You cast Ice Beam a 90 power move it's sure to finish off your opponent.
            The Spirit of Christmas resists the attack since its a Ghost/Ice type. It casts the gift of pain, which is a rock

            Its super effective!

            *-1 Health*
            `,
            options: santaFight4
        },
        {//31
            staticText:`You center yourself and commune with the Spirit of Christmas. 
            You tell it that Santa has abandoned the true meaning of Christmas, by being selfish.
            Santa is giving the gift of carbon emmissions, all so he can bath in the sun. 
            Your argument works and the Spirit of Christmas abandons Santa

            "No! This cannot be!"
            `,
            options: santaFight4
        },
        {//32
            dynamicText: ()=>
            {
                return `You focus all your energy and the temperature drops 50 degrees. Santa's old bones ache.

            "No! I am Santa, lord of the North Pole, and none shall defeat me!"

            Massive chunks of ice burst through the floor and float middair. Shearing winds spiral around the room knocking Santa's
            hat to the floor

            "You think what I do is easy?! Huh? You wouldn't last a day in my shoes!"

            You command the ice at Santa it relentlessly bombards him. You cast a cone of frost at Santa
            sealing the ice chunks around him. 

            Santa is now encased in ice, magically frozen for eternity!

            You walk over and pick up Santa's cap. You sit back in Santa's rocking chair, glancing at the room you have both destroyed.
            The hat sparkles in your hands and you proclaim
            "There must always be a Santa"
            You lift the hat and place it on your head feeling the power coursing within it. Through the magic of Christmas the room cleans itself up.

            You have won, and now you sit on the Frozen Throne
            
            Ending: Mancer, Cryo Mancer
            Health Left: ` + resource + `

            `},
            options: [
                playAgainChoice
            ]
        },
        {//33
            dynamicText: ()=>
                {
                    return `You fall to the floor, the pain unbearable, your hit points 0.

                    Santa laughs *Ho Ho Ho*

                    "You really thought you could take on Saint Nick"
                    He follows it shortly with a jolly o kick.

                    "Looks like the world is getting coal this year after all"

                    Santa sits on top of your chest nearly crushing you

                    "Happy Christmas to all, and to all a good night!"

                    The last thing you see is Santa's red glove flying toward your face
                
                Ending: Santa's Slay
                Health Left: ` + resource + `
                `},
                options: [
                    playAgainChoice
                ]
            },

    ]

    function setNode(node:AdventureNode)
    {
        console.log("Setting Node: " + node.staticText)
        options = node.options;
        if(node.dynamicText != null)
        {
            textLog.push(node.dynamicText() as string);
        }
        else
        {
            textLog.push(node.staticText as string);
        }
        textLog.push("................");
        textLog = textLog;
        //textLog.push((node.dynamicText == undefined ? node.staticText : node.dynamicText()) as string);
    }    

    function giveItem(item:string)
    {
        items.push(item);
        items = items;
    }

    function takeItem(item:string)
    {
        items = items.filter(x=>x!=item);
    }

    function pickOption(option:Choice)
    {
        console.log("Picking option: " + option.text)
        console.log("Picking goto: " + option.goto)
        if(option.action != null)
        {
            option.action();
        }
        if(option.goto != undefined)
        {
            setNode(nodes[option.goto]);
        }
    }

    setNode(nodes[0]);
    
</script>

<svelte:head>
	<title>Christmas Adventure</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="bg-base-100">   
    <div class="grid grid-cols-6 w-full items-center pl-8 pr-8">
        <h1 class="text-4xl m-2 font-semibold mt-8 col-span-3 text-left">Adventure Awaits!</h1>  
        <div class="col-span-1 lg:col-span-2"></div>
        <button class="btn btn-primary col-span-2 lg:col-span-1 mr-4 mt-4 pr-4" on:click={()=>popup.showModal()}>
            Endings
        </button>
    </div>	  
    <div class="grid grid-cols-6 m-4 p-2 items-center">
        <div class="bg-neutral-900 text-green-600 col-span-2 text-2xl flex p-2" style="height:5vh">
            <div style="align-self:center ;white-space: pre-line">
                {#if resourceName != ""}
                    {resourceName} : {resource}
                {/if}
            </div>
        </div>       
        <div class="bg-neutral-900 text-green-600 col-span-4 text-lg flex" style="height:5vh">
            <div style="align-self:center; width:100%">
                Items:
                {#each items as item}
                    {item},
                {/each}
            </div>
        </div>
        <div class="bg-black col-span-6 text-green-600 p-4 flex " style="height:55vh;overflow-y: scroll;white-space: nowrap;flex-direction: column-reverse">            
            <div style="margin-top:auto !important;white-space: pre-line">                
                {#each textLog as log, index}
                    {#if index == textLog.length-2}
                        <Typewriter>
                            <p>
                                {log}
                            </p> 
                            <br />    
                        </Typewriter>  
                    {:else}
                        <p>
                            {log}
                        </p> 
                        <br />   
                    {/if}
                {/each}          
            </div>
        </div>
        <div class="bg-neutral-950 col-span-6 grid grid-cols-2 grid-rows-2 items-center gap-1">
            {#if options != null}
                {#each options as option}
                    {#if option.filter == null || option.filter()}
                        <button class="col-span-1 btn btn-neutral m-2" on:click={()=>pickOption(option)}>
                            {option.text}
                        </button>
                    {/if}
                {/each}
            {/if}
        </div>
        <dialog bind:this={popup} class="modal">
            <div class="modal-box">            
                <h3 class="font-bold text-lg mb-2">Endings: Gotta Catch Em All</h3>
                <div class="grid grid-cols-3 p-2 gap-2">
                    {#each endingList as ending}    
                        <div class={"btn " + (gotEndings.indexOf(ending) >= 0 ? "btn-primary" : "btn-disabled")}>
                            {ending}
                        </div>   
                    {/each}
                </div>
                <div class="modal-action">
                <form method="dialog">
                    <!-- if there is a button in form, it will close the modal -->
                    <button class="btn">Close</button>
                </form>
                </div>
            </div>
        </dialog>
    </div>  
  
</div>