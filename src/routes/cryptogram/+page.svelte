<script lang="ts">

    let puzzleList = [
        {
            quote:"Release the Kraken!",
            source: "Clash of the Titans"
        },
        {
            quote:"That's my secret, Captain: I'm always angry.",
            source: "Marvel's The Avengers"
        },
        {
            quote:"Nobody makes me bleed my own blood. Nobody!",
            source: "Dodgeball: A True Underdog Story"
        },
        {
            quote:"This is the day you will always remember as the day you almost caught Captain Jack Sparrow!",
            source: "Pirates of the Caribbean: The Curse of the Black Pearl"
        },
        {
            quote:"We're goin' streaking!",
            source: "Old School"
        },
        {
            quote:"I have had it with these motherfucking snakes on this motherfucking plane!",
            source: "Snakes on a Plane"
        },
        {
            quote:"You motorboatin' son of a bitch!",
            source: "Wedding Crashers"
        },
        {
            quote:"What is this? A center for ants? How can we be expected to teach children to learn how to read...if they can't even fit inside the building?",
            source: "Zoolander"
        },
        {
            quote:"I have nipples Greg. Could you milk me?",
            source: "Meet the Parents"
        },
        {
            quote:"With great power comes great responsibility.",
            source: "Spider-Man"
        },
        {
            quote:"You shall not pass!",
            source: "Lord of the Rings: The Fellowship of the Ring"
        },
        {
            quote:"I love lamp.",
            source: "Anchorman: The Legend of Ron Burgundy"
        },
        {
            quote:"Why so serious?",
            source: "The Dark Knight"
        },
        {
            quote:"You're a wizard, Harry.",
            source: "Harry Potter and the Sorcerer's Stone"
        },
        {
            quote:"Orges are like onions.",
            source: "Shrek"
        },
        {
            quote:"Do you know what happens to a toad when it's struck by lightning? The same thing that happens to everything else.",
            source: "X-Men"
        },
        {
            quote:"I don't like sand. It's all coarse, and rough, and irritating. And it gets everywhere.",
            source: "Star Wars: Episode II - Attack of the Clones"
        },
        {
            quote:"Dear 8-pound, 6-ounce newborn infant Jesus...",
            source: "Talladega Nights: The Ballad of Ricky Bobby"
        },
        {
            quote:"You're tearing me apart, Lisa!",
            source: "The Room"
        },
        {
            quote:"I'm the Juggernaut, bitch!",
            source: "X-Men: The Last Stand"
        },
        {
            quote:"I see dead people.",
            source: "The Sixth Sense"
        }
        ,
        {
            quote:"The first rule of Fight Club is: You do not talk about Fight Club.",
            source: "Fight Club"
        }
    ];


    interface Puzzle
    {
        quote:string;
        source:string;
    }

    let cipher:string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let guessCipher:any = {};
    let puzzle:Puzzle|null = null;
    let cryptogram:string;
    let combine:string;
    let isVictory:boolean = false;
    let words:string[];

    $: 
    {
        if(cryptogram != null)
        {
            words =  cryptogram.split(/[\s\n]+/);
        }
    }   

    function generateNewCipher()
    {
        cipher = shuffle('ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split("")).join("");
        console.log("New Cipher: " + cipher);
    }

    //fisher-yates, https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
    function shuffle(array:string[]) 
    {
        let currentIndex = array.length,  randomIndex;
        // While there remain elements to shuffle.
        while (currentIndex > 0) 
        {
            // Pick a remaining element.
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
        return array;
    }


    function randomCyptogram()
    {
        isVictory = false;
        guessCipher = {};
        //
        generateNewCipher();
        puzzle = puzzleList[~~(Math.random() * puzzleList.length)];
        combine = puzzle.quote + "\n " + puzzle.source;
        cryptogram = applyCipher(combine);
    }


    function applyCipher(text:string)
    {
        text = text.toUpperCase();
        let result = "";
        for(var i =0; i < text.length;i++)
        {
            //console.log("converting " + text.charAt(i));
            let index = text.charCodeAt(i) - 'A'.charCodeAt(0);
            if(index < 0 || index >= cipher.length)
            {
                result += text.charAt(i);
            }
            else
            {
                result += cipher.charAt(index);
            }
            //console.log(result);
        }
        return result;
    }

    function formatCipher(event:any, letter:string)
    {
        let guess = event.data;
        if(guess == null)
        {
            guessCipher[letter] = " ";
            return;
        }
        if(guess.length == 0)
        {
            guessCipher[letter] = " ";
            return;
        }
        if(guess.length > 1)
        {
            guess = guess[guess.length-1];
        }
        guessCipher[letter] = guess.toUpperCase();
        checkVictory();
    }

    function checkVictory()
    {
        //console.log(guessCipher);
        //console.log(cipher);
        for(var i =0; i < cryptogram.length;i++)
        {
            if(cipher.indexOf(cryptogram[i]) < 0)
            {
                continue;
            }
            let letter = guessCipher[cryptogram[i]];
            //console.log("our guess is: " +letter)
            if(letter  == null)
            {
                //console.log("Guess cipher does not contain a letter for : " + cryptogram[i]);
                return;
            }
            else if(cipher[letter.charCodeAt(0) - 'A'.charCodeAt(0)] != cryptogram[i])
            {
                //console.log("Guess cipher is wrong for letter : " + cryptogram[i] + ", is: " + cipher[letter.charCodeAt(0)- 'A'.charCodeAt(0)]);
                return;
            }
            else
            {
                //onsole.log("Guess is correct!");
            }
        }
        isVictory = true;
    }

</script>

<svelte:head>
	<title>Cryptogram</title>
	<meta name="description" content="Guess the Cryptogram" />
</svelte:head>

<div class="bg-base-100 h-full" style="min-height:92.25vh">   
	<h1 class="text-4xl pt-8 font-semibold text-center">Movie Quote Cryptogram!</h1>   
    <div class="text-lg pt-1 text-center mb-8 mt-1 mr-2 ml-2">Each cryptogram is a quote from a movie, followed by the movie's name</div> 
    <div class="text-center" style="white-space: pre-line">
        {#if puzzle == null}
            <button class="btn btn-primary btn-lg" on:click={randomCyptogram}>
                Generate Cryptogram!
            </button>        
        {:else}
            <div class="flex flex-row flex-wrap place-content-center gap-1 m-1">
                {#each words as word}
                    <div class="flex place-content-evenly gap-2">               
                        {#each word as letter}
                            {#if cipher.indexOf(letter) >= 0}
                                <div class="flex flex-col place-content-evenly">
                                    <input type="text" pattern="[A-Za-z]{1}" class="text-white text-center bg-primary" style="max-width:20px" 
                                        value={guessCipher[letter] ?? ""} on:input={(e)=>formatCipher(e,letter)}/>
                                    <div>
                                        {"_"}
                                    </div>
                                    <div>
                                        {letter}
                                    </div>                            
                                </div>     
                            {:else if letter == '\n'}
                                <div class="flex flex-grow basis-full">
                                </div>  
                                <div class="flex flex-grow basis-full text-center justify-center align-baseline">
                                    -----------------------------------------
                                </div>  
                            {:else}
                                <div class="flex flex-col">
                                    {letter}
                                </div>                        
                            {/if}               
                        {/each}
                    </div>
                    <div class="flex basis-4">
                    </div>  
                {/each}
            </div>           
            {#if isVictory}
                <div class="text-3xl m-8">
                    Victory!
                </div>
                <button class="btn btn-primary btn-lg" on:click={randomCyptogram}>
                    Generate Cryptogram!
                </button>   
            {/if}
        {/if}
    </div>
</div>

<style>

</style>
