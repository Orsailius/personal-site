<script lang="ts">
    export let headings:string[];
    
    const data:number[][] = 
    [
        [1,	1,	0.25,	1],
        [1,	0.1,	0.33,	0.66],
        [1.5,	0.5,	0.5,	1],
        [1.75,	1.33,	0.6,	1],
        [0.4,	1.4,	0.65,	1.4],
        [0.75,	1,	0.65,	0.8],
        [1.75,	0.5,	0.65,	0.1],
        [1.25,	0.9,	0.75,	1.4],
        [1.6,	1.6	,1,	1.4],
        [0.75,	0.2	,1.25,	0.66],
        [0.75,	1,	1.25,	1.5],
        [1.25,	1,	1.45,	1],
        [0,	1.9,	1.7	,0.5],
        [0.1,	1.6,	1.1,	1.33],
        [0.6,	0.25,	1.7,	0.66],
        [0.4,	1.3,	1.6,	1.25],
        [1.27,	0.3,	1.65,	0.8],
        [1.3,	0.6,	0.9,	0.1],
        [1.4,	1.4	,0.65,	1.5],
        [0.6,	1.7,	0.8,	1.7],
        //[0.5,	1.2,	0.5,	1.1],
    ]

    /*function distance(row1:number[], row2:number[])
    {
        var dist:number = 0;
        for(var i =0; i < row1.length;i++)
        {
            dist += Math.abs(row1[i] - row2[i])
        }
        return dist;
    }   

    function printField()
    {
        var list:Array<any> = new Array<any>();
        for(var i =0; i <2; i+= 0.333)
        {
            for(var j =0.333; j <2; j+= 0.333)
            {
                for(var k =0.666; k <= 1.333; k+= 0.333)
                {
                    for(var l=0; l<2; l+= 0.333)
                    {
                        var arr:number[] = [i,j,k,l];
                        var dist = 0;
                        for(var r = 0;r < data.length;r++)
                        {
                            dist += distance(arr, data[r]);
                        }
                        
                        list.push([arr, dist]);
                    }
                }
            }
        }
        list.sort((a,b)=>
        {
            return a[1] > b[1] ? 1 : (a[1] == b[1] ? 0 : -1);
        });
        console.log(list);
    }

    printField();*/

    /*for(var i =0; i <=2; i+= 0.25)
    {
        for(var j =0; j <=2; j+= 0.25)
        {
            for(var k =0; k <=2; k+= 0.25)
            {
                for(var l=0; l<=2; l+= 0.25)
                {
                    var arr:number[] = [i,j,k,l];
                    var dist = 0;/*
                    for(var r = 0;r < data.length;r++)
                    {
                        dist += distance(arr, data[r]);
                    }
                    //console.log(arr + " has " + dist);
                }
            }
        }
    }*/
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
            {#each data as row}
                <tr>
                    {#each row as cell}
                        <th class="w-2/12 font-normal">
                            <span class="whitespace-nowrap font-mono">
                                {cell}
                            </span>
                        </th>
                    {/each}
                </tr>
            {/each}
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
        headings:["Rainfall", "Temperature","Elevation","Lightness"]
       },
   }
</script>


<style>
	.outer-box {
	    padding: 0.125rem;
	}
</style>
