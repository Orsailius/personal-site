<script lang="ts">
    import BasicStringComponent from "$lib/typedrive/BasicStringComponent.svelte";
    import UnknownComponent from "$lib/typedrive/UnknownComponent.svelte";
    import { isString } from "markdown-it/lib/common/utils";

    interface Profile
    {
        firstName:string;
        lastName:string;
        age:number;
        weight:number;
    }

    class FirstName{}
    class LastName{}
    type Age = number;
    type Weight = number; 

    let testProfile:Profile = 
    {
        firstName: "John",
        lastName: "Smith",
        age:54,
        weight:178
    }

    function fieldToFunction<T>(fieldName:string, fieldValue:T)
    {
        if(isGeneralType(fieldValue))
        {
            //console.log("Is general type");
            return getComponentForType(findVerboseType(fieldName));
        }
        return getComponentForType(fieldValue);
    }

    function findVerboseType(fieldName:string)
    {
        if(fieldName.includes("first"))
        {
            return FirstName;
        }
        if(fieldName.includes("last"))
        {
            return LastName;
        }
        const dumb:string = "dumb";
        return typeof dumb;
    }

    function getComponentForType<T>(valueOfType:T)
    {
        //console.log(valueOfType);
        //console.log(typeof(valueOfType));
        if(valueOfType === FirstName)
        {
            return BasicStringComponent;
        }
        if(valueOfType === LastName)
        {
            return BasicStringComponent;
        }
        if(typeof(valueOfType) == typeof(5))
        {
            return BasicStringComponent;
        }
        if(typeof(valueOfType) == typeof("string"))
        {
            return BasicStringComponent;
        }
        return UnknownComponent;
    }

    function isGeneralType<T>(fieldType:T) : boolean
    {
        if(isString(fieldType))
        {
            return true;
        }
        if(typeof(fieldType) == typeof(5))
        {
            return true;
        }
        return false;
    }

    function getComponentsForObject<T>(obj:T)
    {
        let list = [];   
        for(const key in obj)
        {          
            if(key == null)
            {
                continue;
            }
            //console.log("Doing " + key.toString());
            //@ts-ignore
            const value = obj[key];
            //console.log("F/V " + key.toString() + "=" + value);
            let mapObject = 
            {
                field:key.toString(),
                value: value,                    
                component:fieldToFunction(key.toString(),value)
            }
            //console.log(mapObject);
            list.push(mapObject);
        }
        return list;
    }

    /*
    Take data from class/interface infer verbose type
    Choose design based on the number and type of properties as well as which props should be editable
    Pick components for design based on above
    Populate our 'universal' svelte component 
    ---
    Handle lists based on size/type of design children (grid, flex, pagination, w/e)   
    */
</script>

<svelte:head>
	<title>Type Drive</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="bg-base-100 h-full" style="min-height:92.25vh">   
    <div class="p-4 m-4 outline outline-1">
        {#each getComponentsForObject(testProfile) as fieldMap}        
            <svelte:component 
                this={fieldMap.component} 
                obj={testProfile} 
                field={fieldMap.field} 
                value={fieldMap.value}/>
        {/each}
    </div>   
</div>

<style>
</style>
