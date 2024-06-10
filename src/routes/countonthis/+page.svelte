<script lang="ts">
	import { browser } from '$app/environment';	
    import { construct_svelte_component, each, onMount } from 'svelte/internal';
    import {builtinWaitedList} from '$lib/data/builtinWaitedList';

    let waitedList:Waited[] = ensureBasics(loadCustomWaited());
    let popup:any;
    let waitedName:string = "";
    let waitedDate:any = null;
    let waitedTag:string;

    function loadCustomWaited()
    {
        if(browser)
        {
            var item = window.localStorage.getItem("customWaited");
            if(item != null)
            {
                var dummyList = JSON.parse(item) as Waited[];
                dummyList.forEach(x=>{
                    x.date = new Date(x.date)
                });
                return dummyList;
            }
        }
        return [];
    }

    function ensureBasics(fromLoad:Waited[])
    {
        if(fromLoad.length == 0)
        {
            builtinWaitedList.forEach(x=>
            {
                fromLoad.push(x as Waited);
            });
        }        
        return fromLoad;
    }

    interface Waited
    {
        date:Date;
        name:string;
        tags:string[];
        starred?:boolean;
        days?:number;
        hours?:number;
        minutes?:number;
        seconds?:number;
        past?:boolean;
    }

    onMount(() => 
    {
		let timer = setInterval(() => 
        {
            var now = new Date().getTime();
			waitedList.forEach(w=>
            {
                calculateTimeDifference(w, now);
            });
            refreshList();
	    },
        1000);
	})

    function calculateTimeDifference(waited:Waited,now:number)
    {       
        let difference = waited.date.getTime() - now;  
        if(difference < 0)
        {
            difference = -difference;
            waited.past = true;
        }
        waited.days = Math.floor(difference / (3600000 * 24));
        waited.hours = Math.floor((difference % (3600000 * 24)) / (3600000));
        waited.minutes = Math.floor((difference % (3600000)) / (1000 * 60));
        waited.seconds = Math.floor((difference % (60000)) / 1000);
    }

    function refreshList()
    {
        waitedList.sort((a:Waited,b:Waited)=> 
        {
            if(!a.starred && a.past && !b.past)
            {
                return 2;
            }
            else if(!b.starred && b.past && !a.past)
            {
                return -2;
            }
            if(a.starred && !b.starred)
            {
                return -2;
            }
            else if(b.starred && !a.starred)
            {
                return 2;
            }
            const diff = a.date.getTime() - b.date.getTime();
            if(diff > 0)
            {
                return 1;
            }
            else if(diff < 0)
            {
                return -1;
            }
            return a.name.localeCompare(b.name);
        });
        waitedList = waitedList;
    }

    function toggleStar(waited:Waited)
    {
        waited.starred = !waited.starred;
        refreshList();
    }

    function getWaitedColor(waited:Waited)
    {
        var color = "red-500"
        if(waited.tags.findIndex(x=>x=="Game") >= 0)
        {
            color = "orange-500";
        }
        else if(waited.tags.findIndex(x=>x=="Movie") >= 0)
        {
            color = "green-500";
        }
        else if(waited.tags.findIndex(x=>x=="Politics") >= 0)
        {
            color = "purple-500";
        }
        else if(waited.tags.findIndex(x=>x=="Holiday") >= 0)
        {
            color = "blue-500";
        }
        if(waited.past)
        {
            return "border-solid border-4 border-" + color + " bg-gray-400";
        }
        return "bg-" + color;
    }

    const forTailwindStatic = ["border-red-500","border-blue-500","border-purple-500","border-green-500","border-orange-500"]

    const tagCategories:TagCategory[] =
    [
        {
            name: "Game",
            color: "bg-orange-500"
        },
        {
            name: "Movie",
            color: "bg-green-500"
        },
        {
            name: "Politics",
            color: "bg-purple-500"
        },
        {
            name: "Holiday",
            color: "bg-blue-500"
        },
        {
            name: "Other",
            color: "bg-red-500"
        }
    ]

    interface TagCategory
    {
        name:string;
        color:string;
    }

    function addWaited()
    {
        if(waitedDate == null || waitedName == "")
        {
            return;
        }
        waitedList.push({
            date:new Date(waitedDate + 'T00:00'),
            name:waitedName,
            tags:[
                waitedTag
            ]
        });
        waitedList = waitedList;
        window.localStorage.setItem("customWaited", JSON.stringify(waitedList));
        popup.close();
    }
	
</script>

<svelte:head>
	<title>Count on This</title>
	<meta name="description" content="See How long you have to wait" />
</svelte:head>

<div class="bg-base-100 h-full" style="min-height:92.25vh">   
	<h1 class="text-4xl pt-8 font-semibold text-center">How Long Until..?</h1>
    <div class="w-full flex pr-8 pt-2 justify-center">
        <button class="btn btn-accent" on:click={()=>popup.showModal()}>
            + Add Date
        </button>
    </div>  
	<div class="m-4 ml-8 mr-8 flex flex-wrap items-center gap-2">        
        {#each waitedList as waited}
            <div class={"p-4 rounded-lg relative flex flex-col items-center text-primary-content " + getWaitedColor(waited)}>
                <div class="text-xl md:text-4xl text-center pb-2 pr-4 pl-4 font-semibold">
                    {waited.name}
                </div>    
                <button class={"absolute mask mask-star-2 w-6 h-6 right-2 top-2 " + (waited.starred ? "bg-yellow-400" : "bg-gray-300")}
                    on:click={()=>toggleStar(waited)}>
                </button>   
                <div class="grid grid-flow-col gap-4 text-center items-center auto-cols-max">
                    <div class="flex flex-col">
                        <span class="font-mono text-xl md:text-4xl">
                            <span>  {waited.days} </span>
                        </span>
                        days
                    </div> 
                    <div class="flex flex-col">
                        <span class="countdown font-mono text-xl md:text-4xl">
                        <span style={"--value:" + waited.hours + ";"}></span>
                        </span>
                        hours
                    </div> 
                    <div class="flex flex-col">
                        <span class="countdown font-mono text-xl md:text-4xl">
                        <span style={"--value:" + waited.minutes + ";"}></span>
                        </span>
                        min
                    </div> 
                    <div class="flex flex-col">
                        <span class="countdown font-mono text-xl md:text-4xl">
                        <span style={"--value:" + waited.seconds + ";"}></span>
                        </span>
                        sec
                    </div>
                </div>
            </div>       
        {/each}
    </div>
    <dialog bind:this={popup} class="modal" id="addDateModal">
        <div class="modal-box">            
            <h3 class="font-bold text-4xl text-center mb-2">Add a Date</h3>
            <div class="flex flex-col">
                <label class="form-control w-full max-w-xs p-2">
                    <div class="label">
                      <span class="label-text">Event Name?</span>
                    </div>
                    <input type="text" placeholder="Type here" bind:value={waitedName} 
                        class={"input input-bordered w-full " + (waitedName == "" ? "input-warning" : "input-primary")} />                   
                </label>
                <label class="form-control w-full max-w-xs p-2">
                    <div class="label">
                      <span class="label-text">Date</span>
                    </div>
                    <input type="date" bind:value={waitedDate} class={"input input-bordered input-primary w-full " + (waitedDate == null ? "input-warning" : "input-primary")}/>                   
                </label>
                <div class="label p-3">
                    <span class="label-text">Category</span>
                </div>
                <div class="outline outline-1 outline-primary ml-3 rounded-xl grid grid-cols-2 gap-1 p-2">                
                   {#each tagCategories as tag,index}
                        <div class="form-control outline-2 outline-secondary outline-dashed rounded-xl m-1">
                            <label class="left-label cursor-pointer">
                                {#if index == 0}
                                    <input type="radio" bind:group={waitedTag} name="radio-10" value={tag.name} 
                                        class={"radio checked:" + tag.color} checked />
                                {:else}
                                    <input type="radio" bind:group={waitedTag} name="radio-10" value={tag.name}
                                        class={"radio checked:" + tag.color} />
                                {/if}                               
                                <span class="label-text pl-4 text-xl">{tag.name}</span>                             
                            </label>
                        </div>    
                    {/each}     
                </div>
                <button class={"btn btn-primary mt-2 ml-2 " + (waitedName == "" || waitedDate == null ? "btn-disabled" : "")} 
                    on:click={addWaited}>
                    Add
                </button>  
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

<style>
    .left-label
    {
        display: flex;
        user-select: none;
        align-items: center;
        justify-content: left;
        padding-left: 0.25rem;
        padding-right: 0.25rem;
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
    }
</style>
