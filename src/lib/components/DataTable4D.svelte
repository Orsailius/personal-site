<script lang="ts">
    export let headings:string[];
</script>

<div class="bg-base-100 w-full p-8 rounded-lg">
    <p class="mb-2"> Data </p>
    <table class="table-xs md:table-sm table-pin-rows table table-zebra w-full">
        <thead>
            <tr>
                <th>
                    {headings[0]}
                </th>
                <th>
                    {headings[1]}
                </th>
                <th>
                    {headings[2]}
                </th>
                <th>
                    {headings[3]}
                </th>
            </tr>
        </thead>
    	<tbody>

        </tbody>
    </table>
</div>


<script context="module" lang="ts">
    export const info = {
       name:"Data Table 4D",
       description:"A data table for 4D data",
       inputInfo:[
        ],
       testInput:{
        headings:["Temperature", "Rainfall","Elevation","Lightness"]
       },
   }
</script>


<style>
	.outer-box {
	    padding: 0.125rem;
	}
</style>
