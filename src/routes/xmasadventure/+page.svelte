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
    //
    let thief:number;
    let grifter:number;
    let muscle:number;
    let driver:number;
    let maxCash = 1000000;
    let plan = 0;
    let copAttention = 0;
    //

    const endingList = [
        `Just Chillin'`,
        `We All Scream for Ice Cream`,
        `Way Cold`,
        `Hall of the Mountain`,
        `Frakking Big Oil`,
        `Mancer, Cryo Mancer`,
        `Santa's Slay`,
    ]

    const endingListGrinch = [
        `High on Christmas`,
        `It's All Been Done`,
        `Wallet Two Sizes Too Small`,
        `Double Cross Your Heart`,
        `St Knicked`,
        `Ocean's 25th`,// no cop presence, good max cash
        `Santa Supreme`,
        `Red John Wedding`,
        `Chimney Smoke Monster`
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
                    text:"Grinch (Coming December 19th)", //Heist Movie,
                    //goto:34
                },
                {
                    text:"Baker (Coming December 23rd)" //Hallmark
                },
                {
                    text:"Detective (Coming December 27th)" //Murder Mystery
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
        {//34 Grinch Start
            staticText: "You're a mean one, Mr. Grinch. Tis the season for you to get even meaner.\r"+
                "As you stare down from your cave, your face makes a scowl. 'I've had enough of these Who folk, maybe I'll throw in the towel'\r"+
                "When suddenly an idea pops into your head, 'What if I stole Christmas instead!'",
            options: [
                {
                    text:"It's far too crazy a thought, I'll just be depressed and smoka da pot",
                    action:()=>
                    {
                        giveEnding("High on Christmas")
                    },
                    goto:35
                },
                {
                    text:"I'll dress up like Santa that loveably chap, and steal all their gifts while their taking a nap",
                    action:()=>
                    {
                        giveEnding("It's All Been Done")
                    },
                    goto:36
                },
                {
                    text:"I'll hit the source and burgle Santa's workshop, but I'll need a team, the cream of the crop",
                    action: ()=>
                    {
                        resourceName = "Cash";
                        resource = 1000;
                        maxCash = 1000000;
                    },
                    goto:37
                }
            ]
        },
        {//35 
            staticText: "You're sad cause all day and all night, you'll have to put up Whos in delight'.\r"+
                "You flop in your chair of bean bag design, and drink some old eggnog from your devilish stein.'\r"+
                "Rolling wrapping paper as quick a mouse, you call max to get grass on the far side of your house. \r" +
                "Finally blessed with a moment of peace, you lay back and smoke that sweet christmas wreath\r\r"+
                "Ending: High on Christmas",
            options: [
                playAgainChoice
            ]
        },
         {//36
            staticText: "Needle is taken to thread as you sew up a suit while you dream up a sled.\r"+
                "You put antlers on Max to make him look jolly, and suddenly then you realize your folly\r"+
                "'This is just like I did in the book, all the same. What the bells is even the point of this game' \r" +
                "*Hey, I let you have your pick, not my fault your boring and not super quick* \r"+
                "Now you are kinda pissed at this shit, so you just take your ending and proceed to quit \r\r" +
                "Ending: It's All Been Done",
            options: [
                playAgainChoice
            ]
        },
        {//37
                staticText: "You've made up your mind its the big score you need, but you'll need a crack team to meet your greed\r" +
                "Now every troupe needs a mind so damn smart, and of course you yourself will be playing that part\r "+
                "Next, you'll need a cat burglar so light footed and quick, that robbing the workshop will be painless and slick\r" +
                "You scan the roster of matching spry thieves, but each has an upfront cost you'll need to appease \r"
                ,
            options: [
                {
                    text:"Selena a woman who's much like a cat, but oddly does not come with a hat. $250 ",
                    action:()=>
                    {
                        thief = 0;
                        resource -= 250;
                    },
                    goto:38
                },
                {
                    text:"Jimmy the Mook is not too bright, but his price happens to make you delight. $100",
                    action:()=>
                    {
                        thief = 1;
                        resource -= 100;
                    },
                    goto:38
                },
                {
                    text:"Francois is said to be sly like the fox, by for his price you hope its not just talk. $400",
                    action: ()=>
                    {
                        thief = 2;
                        resource -= 400;
                    },
                    goto:38
                }
            ]
        },
          {//38
            staticText: "The thief is only the first of your team, you'll need more than that to realize your dream\r" +
                "To dazzle and razzle the sussiest baka, you'll need a scoundrel who can do a the talka\r "+
                "Back to the postings of criminals sauve, I look for candidate right for the job \r"
                ,
            options: [
                {
                    text:"Patrick is flashy with smiles and tricks, he's after red john and that's kinda his schtick. $300 ",
                    action:()=>
                    {
                        grifter = 0;
                        resource -= 300;
                    },
                    goto:39
                },
                {
                    text:"Vala will spin you a tale a woe, while robbing you blind from head to toe. $400",
                    action:()=>
                    {
                        grifter = 1;
                        resource -= 400;
                    },
                    goto:39
                },
                {
                    text:"Mr Linus is said to fell from the sky, but I wouldn't believe a word from this guy. $200",
                    action: ()=>
                    {
                        grifter = 2;
                        resource -= 200;
                    },
                    goto:39
                }
            ]
        },
          {//39
            staticText: "With the mouth taken care of its time for the muscle, times running out so you begin to hussle\r" +
                "You flip through the pages of strong men and women, hoping to see you next perfect villain\r "
                ,
            options: [
                {
                    text:"Kronk is chipper, useful and strong, however the brains in his head might be wrong. $100 ",
                    action:()=>
                    {
                        muscle = 0;
                        resource -= 100;
                    },
                    goto:40
                },
                {
                    text:"Juggernaut tells you his name and calls you a bitch, but he's strong as an ox and could cause some fits. $500",
                    action:()=>
                    {
                        muscle = 1;
                        resource -= 500;
                    },
                    goto:40
                },
                {
                    text:"Xena is a fierce armored amazon who shouts a war cry, ayyi yyyyii iii. $250",
                    action: ()=>
                    {
                        muscle = 2;
                        resource -= 250;
                    },
                    goto:40
                }
            ]
        },
          {//40
            staticText: "Last but not least is the getaway driver, you'll need someone fast you can get on fiverr\r"
                ,
            options: [
                {
                    text:"Its seems you can't afford anyone else, you'll have to put this plan on the shelf",
                    filter:()=>
                    {
                        return resource < 200;
                    },
                    action:()=>
                    {
                        giveEnding("Wallet Two Sizes Too Small")
                    },
                    goto:41
                },
                {
                    text:"Vanellope likes candy and her voice is pitchy, but her special skill is when she's glitchy. $200 ",
                    action:()=>
                    {
                        driver = 0;
                        resource -= 200;
                    },
                    goto:42
                },
                {
                    text:"Ricky shakes and bakes, and likes to go fast, he'll tell you himself if you're not first you're last. $400",
                    action:()=>
                    {
                        driver = 1;
                        resource -= 400;
                    },
                    goto:42
                },
                {
                    text:"Frank is slick, professional and sticks to his rules, never changes the deal unlike some of those fools. $300",
                    action: ()=>
                    {
                        driver = 2;
                        resource -= 300;
                    },
                    goto:42
                }
            ]
        },
         {//41 
            staticText: "Without the cash needed to fund your endeavour, you flop on your couch in warm knitted sweater'.\r"+
                "It seems your wallet was two sizes too small, with your cash maybe you shouldn't have spent it all.'\r"+
                "You take comfort in knowing in the very least, you can go down to Whosville and steal their roast beast. \r\r" +
                "Ending: Wallet Two Sizes Too Small",
            options: [
                playAgainChoice
            ]
        },
          {//42 
            staticText: "You've assembled the team, you've done it at last, It's finally time to say hello to the cast'.\r"+
                "You invite them all over to scheme up a scheme, to pick the best ideas from your custom built team.'\r",
            options: [
                {
                    text:"Screw best ideas your the brains of the op, the brilliantist plans shall come from your top",
                    goto:43
                },
                {
                    text:"Juggernaut says just to smash through the wall, why even try to do thinking at all",
                    filter:()=>
                    {
                        return muscle == 1;
                    },
                    action:()=>
                    {
                        plan = 0;
                    },
                    goto:44
                },
                {
                    text:"Kronk just repeats whatever you say, its the best plan that you've heard today",
                    filter:()=>
                    {
                        return muscle == 0;
                    },
                    goto:43
                },
                {
                    text:"Patrick is sure he can get in with a smile, a quick distraction and dash of fine style",
                    filter:()=>
                    {
                        return grifter == 0;
                    },
                    action:()=>
                    {
                        plan = 1;
                    },
                    goto:44
                },
                {
                    text:"Linus has already thought of plans 2,3, and 4. He's got all the angles to get through that door",
                    filter:()=>
                    {
                        return grifter == 2;
                    },
                    action:()=>
                    {
                        plan = 2;
                    },
                    goto:44
                },
                {
                    text:"Selena thinks prowling is our best approach, find a sneaky way in before we do poach",
                    filter:()=>
                    {
                        return thief == 0;
                    },
                    action:()=>
                    {
                        plan = 3;
                    },
                    goto:44
                },
                {
                    text:"Francois insists his way is the best, avoid lasers; have wires strapped to his chest",
                    filter:()=>
                    {
                        return thief == 2;
                    },
                    action:()=>
                    {
                        plan = 3;
                    },
                    goto:44
                },
            ]
        },
        {//43 
            staticText: "Your mind is a marvel that science can't crack, your green hairy head has crime its' singular track'.\r"+
                "Blueprints, passwords, schemes galore, your brilliance just spills out all over the floor'\r" +
                "Then you the Grinch got an awfully wonderful thought, the crime of the century is about to be wrought'\r",
            options: [
                {
                    text:"An all frontal assault with un-magnanimous force, like Vikings you'll strike with the heart of the Norse",
                    action:()=>
                    {
                        plan = 0;
                    },
                    goto:44
                },
                {
                    text:"With sly wit and cunning you'll bluff your way in, you'll fool St. Nick up to his chinny chin chin",
                    action:()=>
                    {
                        plan = 1;
                    },
                    goto:44
                },
                {
                    text:"Through intricate planning and fallbacks en masse, you'll rob Santa's jolly plump cherry red ass",
                    action:()=>
                    {
                        plan = 2;
                    },
                    goto:44
                },
                {
                    text:"In the dark night your team will be creeping, to steal all the toys that Santa's been keeping",
                    action:()=>
                    {
                        plan = 3;
                    },
                    goto:44
                }
            ]
        },
        {//44
            staticText: "With your plan more or less chosen, you get to the car to find that its frozen '.\r"+
                "After de-icing the car you turn you hop in the seat, and your driver quickly turns up the heat'\r",
            options: [
                {
                    text:"Vanellope put the candy car into gear, your team lets out a quick little cheer",
                    filter:()=>
                    {
                        return driver == 0 && muscle != 0;
                    },
                    action:()=>
                    {
                        maxCash -= 10000;
                    },
                    goto:45
                },
                {
                    text:"Vanellope and Kronk get to talking bout food, it slows your progress but cheers up the mood",
                    filter:()=>
                    {
                        return driver == 0 && muscle == 0;
                    },
                    action:()=>
                    {
                        maxCash -= 15000;
                        copAttention--;
                    },
                    goto:45
                },
                {
                    text:"Ricky doesn't wait and puts his foot to the pedal, its time for a true test of his meddle",
                    filter:()=>
                    {
                        return driver == 1 && thief != 2;
                    },
                    action:()=>
                    {
                        copAttention += 3;
                    },
                    goto:46
                },
                {
                    text:"Ricky and Francois start yelling quite loud, both it seems are much too proud",
                    filter:()=>
                    {
                        return driver == 1 && thief == 2;
                    },
                    action:()=>
                    {
                        copAttention += 3;
                        maxCash -= 5000;
                    },
                    goto:46
                },
                {
                    text:"Frank tells you to buckle your seatbelts, and starts driving so fast you see ice melt",
                    filter:()=>
                    {
                        return driver == 2 && grifter != 1;
                    },
                    goto:47
                },
                {
                    text:"Vala hits on Frank, it just got weird, it's at this time you wish your mind cleared",
                    filter:()=>
                    {
                        return driver == 2 && grifter == 1;
                    },
                    action:()=>
                    {
                        maxCash -= 5000;
                    },
                    goto:47
                },
            ]
        },
        {//45 
            staticText: "Vanellope drives with sweet finesse, down the streets with zero distress'.\r"+
                "Sadly while driving we spot a candy store, and the breaks are slammed as she shrieks 'S'more!''\r" +
                "We waste near an hour filling our traps, as our driver gushes over each and every snack'\r",
            options: [
                {
                    text:"After we're all full and stuffed to the brim, we speed to the workshop where our night begins",
                    goto:48
                }
            ]
        },
        {//46 
            staticText: "Ricky speeds over one hundred and fifty, you tell him to slow it, but he just gets shifty'.\r"+
                "It's not long before a cop catches on, and sirens start blaring so your sanity's gone'\r" +
                "Ricky manuevers and speeds even faster, at extreme reckless driving it seems Ricky's the master'\r"+
                "The cops try to desperately to keep on our tail, but Ricky jumps a bridge which ensures theres no jail",
            options: [
                {
                    text:"After we crazily dodged the police, we speed to the workshop to get our piece",
                    goto:48
                }
            ]
        },
        {//47 
            staticText: "Franks shifts like a pro and easily makes it thru snow'.\r"+
                "A trip uneventful, peaceful and quick. It won't be long til we're robbing St. Nick'\r",
            options: [
                {
                    text:"After we cruised to the workshop unharmed, we see the place has yet be alarmed",
                    goto:48
                }
            ]
        },
        {//48 
            staticText: "You grin with glee as your prize is in sight; Santa's workshop will be emptied this night'.\r"+
                "The time has begun to enact your plan, you chuckle insanely like a madman '\r",
            options: [
                {
                    text:"Kronk!",
                    filter:()=>
                    {
                        return plan == 0 && muscle == 0;
                    },
                    action:()=>
                    {
                        maxCash -= 10000;
                    },
                    goto:49
                },
                {
                    text:"Juggernaut!",
                    filter:()=>
                    {
                        return plan == 0 && muscle == 1;
                    },
                    action:()=>
                    {
                        maxCash -= 500000;
                    },
                    goto:50
                },
                {
                    text:"Xena!",
                    filter:()=>
                    {
                        return plan == 0 && muscle == 2;
                    },
                    action:()=>
                    {
                        maxCash -= 50000;
                        copAttention++;
                    },
                    goto:51
                }
            ]
        },
         {//49 
            staticText: "Kronk charges the door then comes to stop, he asks the elf guard nicely if we can rob his shop'.\r"+
                "The elf laughs at first thinking a jest, but Kronk's expression leaves no guess'\r"+
                "A taser pops out and shocks Kronk a bunch, although he at the same time does land a punch\r"+
                "Now two bodies are flopped on the ground, you're very surprised they didn't make a sound\r" +
                "The rest of your team help big Kronk arise, and altering your plan at this point seems wise\r",
            options: [
                {
                    text:"You send in your grifter to con the room, as you sneak the rest to plunder this tomb",
                    goto:500 //to con plan
                }
            ]
        },
         {//50 
            staticText: "Juggernaut charges with reckless intent, the guard gets launched, you know not where he went'.\r"+
                "Juggernaut misses the door by a good solid meter, and smashes the wall straight into a heater'\r"+
                "A fire breaks out theres steam everywhere. The chaos is rampant; your man doesn't care\r"+
                "He charges and charges and breaks everything, including the stuff you were going to wring\r" +
                "You shout him to 'Stop!' and he finally relents, 'Sure boss, I just needed to vent'\r",
            options: [
                {
                    text:"You look around dismayed at all the carnage, saddened some of your take has turned into garbage",
                    goto:52 //to takeout
                }
            ]
        },
        {//51 
            staticText: "Xena runs in perilous thunder, her warcry tearing guards asunder'.\r"+
                "She jumps on her prey for a flawless takedown, and launches her chakram turning elves faces to frowns '\r"+
                "At a crack of a whip the control is hit, and the workshop door opens with gifts ready to ship\r"+
                "The elves litter the floor, all you hear is their groaning, surely a result of Xena's masterful owning\r",
            options: [
                {
                    text:"This turned out to be way easier than you thought, nothing could stop the team that you brought",
                    goto:52 //to takeout
                }
            ]
        },
         {//52 takeout
            staticText: "Teams thief picks the good stuff out to load into vehicle.\r", //dynamic text i guess
            //decide to  take valuable item but gain cop attention, goes same node, but one gives max cash & attn
            options: [
                {
                    text:"This turned out to be way easier than you thought, nothing could stop the team that you brought",
                    goto:53 //santa arrives
                }
            ]
        },
        {//53 santa arrvices
            staticText: "Santa arrives and your con man does talking.\r", //dynamic text i guess
            options: [
                {
                    //you fail to talk good
                    text:"This turned out to be way easier than you thought, nothing could stop the team that you brought",
                    goto:500 //to santa fight
                },
                {
                    //someone was working with santa this whole time
                    text:"This turned out to be way easier than you thought, nothing could stop the team that you brought",
                    goto:500 //to santa fight
                },
                {
                    //someone betrays you and gets away with stuff, you have low cop attn and just are sad but get away
                    text:"This turned out to be way easier than you thought, nothing could stop the team that you brought",
                    goto:54 //ending:double cross your heart
                },
                {
                    //someone betrays you and gets away with stuff, you have high cop attn and get in prison
                    text:"This turned out to be way easier than you thought, nothing could stop the team that you brought",
                    goto:55 //ending:betrayed and doing time
                }
            ]
        },
        {//54 double cross sad ending
            staticText: "Santa arrives and your con man does talking.\r", 
            options: [
                playAgainChoice
            ]
        },
        {//55 double cross prison ending
            staticText: "Santa arrives and your con man does talking.\r", 
            options: [
                playAgainChoice
            ]
        },
        {//56 santa fight
            staticText: "Santa arrives and your con man does talking.\r", 
            //dynamic text for the fight
            //we add up the 'combat score' of your team and do a check against santa
            options: [
                {
                    //you beat santa and get away
                    text:"This turned out to be way easier than you thought, nothing could stop the team that you brought",
                    goto:57 //ending:St Knicked
                },
                {
                    //santa beats you up and y'all go to prison
                    text:"This turned out to be way easier than you thought, nothing could stop the team that you brought",
                    goto:58 //ending: Santa Supreme
                }
            ]
        },
        {//57 ending st knicked
            staticText: "Santa arrives and your con man does talking.\r", //dynamic text about amount stole + whether
            //you gotta hide from cops
            options: [
                playAgainChoice
            ]
        },
        {//58 ending santa supreme
                staticText: "Santa arrives and your con man does talking.\r", //y'all in jail and beat up
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
	<meta name="description" content="Coming this Christmas: Adventure!" />
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
                    {#each endingListGrinch as ending}    
                        <div class={"btn " + (gotEndings.indexOf(ending) >= 0 ? "btn-success" : "btn-disabled")}>
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