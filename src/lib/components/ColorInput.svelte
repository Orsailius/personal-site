<script lang="ts">
    export let onSelect:(color:string) => void;   
    export let color:string; 
</script>

<div class="join">
    <input class="join-item input input-sm input-bordered input-primary w-full max-w-xs" 
        bind:value={color} on:change={()=>onSelect(color)}/>
    <input type="color" class="join-item input input-sm p-0 pr-1 pl-1 input-bordered input-primary bg-slate-200"
        bind:value={color} on:change={()=>onSelect(color)}/>
</div>


<script context="module" lang="ts">
    export const info = {
       name:"Color Input",
       description:"A input box for choosing color",
       inputInfo:[
            {
                name:"color",
                varType:"String",
                description:"Valid css color name or code",
                path:""
            },
        ],
       testInput:{
           color:"#e96a02",
           onSelect:(c:string)=>{}
       },
   }
</script>


<style>
	.outer-box {
	    padding: 0.125rem;
	}
</style>
