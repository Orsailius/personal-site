<script lang="ts">
    import MadeCard from '$lib/components/MadeCard.svelte';
import MadeCardData, { ContentType } from '$lib/datatypes/MadeCardData';
    import * as ohm from 'ohm-js';

    const myGrammar = ohm.grammar(String.raw`
    CardCreator {

    Exp
    = Stuff*
    
    Stuff
    = Content Class? Style?
    | Content Style? Class?

    Class
    = "[" (~"]" any )* "]"
    
    Style
    = "{" (~"}" any )* "}"
    
    Content
    = "\"" string "\"" --text
    | "image" "(" (~")" any )* ")" --image
    | "link"  "(" (~")" any )* ")"  "\"" string "\"" --link
    | "button"  "(" (~")" any )* ")"  "\"" string "\"" --button
    | "html" "("(~")" any )* ")" --html
    | "group" ident --group
    | "all" --all

    Capture
    = "<" ident ">"  

    ident  (an identifier)
    = letter alnum*
    
    string
        = (~"\"" any )+

    number  (a number)
    = digit* "." digit+  -- fract
    | digit+             -- whole
    }
    `);

    const examples:string[] = [
        `"Normal Text"
        "How are ya?" [outline rounded-xl font-semibold p-4 silly] {padding-top:25px;}
        button (/bahama) "Bahama Time!"
        image (/images/pkmn/Diablous1.jfif)
        link (/otv) "Otv"
        html (<input type="text" style="max-width:150px" class="text-center text-black"> 
            Enter text here </input>)
        group silly [text-2xl text-purple-400] {background-color: #0ff}
        all [mb-1]
        `
    ]

 
    let cardData:MadeCardData = new MadeCardData();

    const semantics = myGrammar.createSemantics();
    semantics.addOperation('eval',
    {
        _iter(...children) 
        {
            children.map(x=>x.evalInner())
        }
    });
    semantics.addOperation('evalInner',
    {
        Stuff(content, stuff1, stuff2)
        {
            content.evalInner();
            stuff1.evalInner();
            stuff2.evalInner();
        },
        _iter(...children)
        {
            children.map(x=>x.evalInner());
        },
        Content_text(_1, str, _2)
        {
            cardData.pushWorking();
            cardData.workingContent = 
            {
                payload: str.sourceString,
                type: ContentType.Text        
            };
        },
        Content_button(_1, _2, link, _3, _4, str, _5)
        {
            cardData.pushWorking();
            cardData.workingContent = 
            {
                payload: { text:str.sourceString, link:link.sourceString},
                type: ContentType.Button        
            };
        },
        Content_link(_1, _2, link, _3, _4, str, _5)
        {
            cardData.pushWorking();
            cardData.workingContent = 
            {
                payload: { text:str.sourceString, link:link.sourceString},
                type: ContentType.Link        
            };
        },
        Content_image(_1, _2, link, _3)
        {
            cardData.pushWorking();
            cardData.workingContent = 
            {
                payload: link.sourceString,
                type: ContentType.Image        
            };
        },
        Content_html(_1, _2, html, _3)
        {
            cardData.pushWorking();
            cardData.workingContent = 
            {
                payload: html.sourceString,
                type: ContentType.Html        
            };
        },
        Content_group(_1, id)
        {
            cardData.addStyleGroup(id.sourceString);
        },
        Content_all(_1)
        {
            cardData.addStyleGroup("!all!");
        },
        Class(_1, parts, _2)
        {
            cardData.assignClasses(parts.sourceString);
        },
        Style(_1, parts, _2)
        {
            cardData.assignStyle(parts.sourceString);
        }
    });

    let code:string = examples[0];
    let matchResult:string = "";

    function build()
    {
        matchResult = "Building...";        
        cardData = new MadeCardData();
        if(code == null)
        {
            code = "";
        }
        let match = myGrammar.match(code);
        if(match.succeeded())
        {            
            matchResult = "Success";
            semantics(match).eval();     
            cardData.pushWorking();
            cardData.applyStyleGroups();
            cardData = cardData;       
        }
        else
        {
            matchResult = "Failure";
        }
    }

    var typingTimer:any;

    function waitBuild()
    {
        clearTimeout(typingTimer);
        typingTimer = setTimeout(build, 1000);
    }

    build();

</script>

<svelte:head>
	<title>Card Maker Language</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="bg-base-100 h-full" style="min-height:92.25vh">   
    <div class="text-4xl text-center font-semibold pt-8">
        Make a Web Card
    </div>
    <div class="text-sm text-center pb-8">
        Using a Domain Specific Language
    </div>
    <div class="flex">      
        <div class="flex flex-col w-1/2 bg-blue-100 items-center justify-center gap-2 p-8">
            <textarea class="textarea textarea-primary w-full"
                style="min-height: 25rem; max-height: 100rem;"
                placeholder="Bio" 
                bind:value={code}
                on:input={waitBuild}/>
            <!--<button class="btn btn-primary" on:click={build}>
                Refresh
            </button>-->
            <div>
                {matchResult}
            </div>
        </div>       
        <div class="flex w-1/2 bg-yellow-100 items-center justify-center">
            <div class="flex items-center justify-center w-2/3 bg-white rounded-xl outline outline-4 outline-gray-200 p-4 m-4 pt-12">
                <MadeCard madeCardData={cardData} />
            </div>
        </div>
    </div>	
</div>

<style>
</style>
