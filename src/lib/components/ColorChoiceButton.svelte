<script lang="ts">
    export let onSelect:(color:string) => void;   
    export let color:string; 
</script>

<div class="rounded-md outer-box shadow-md flex border border-slate-200 items-center bg-slate-100">
    <button class="rounded-md w-4 h-4 shadow-md flex items-center gap-4" style={"background-color:"+color } on:click={()=>onSelect(color)}>
    
    </button>
</div>

<script context="module" lang="ts">
    export const info = {
       name:"Color Choice Button",
       description:"A Simple button that can be clicked on to return the color it shows",
       inputInfo:[
            {
                name:"color",
                varType:"Color",
                description:"Valid css color name or code",
                path:""
            },
        ],
       testInput:{
           color:"#e96a02",
           onSelect:(c:string)=>alert(c)
       },
   }
</script>


<style>
	.outer-box {
	    padding: 0.125rem;
	}
</style>
