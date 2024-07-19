<script lang="ts">
   export let statValue:number;
   export let statName:string;

   let percent = 100*(statValue/255);

   let barColor:string = "";

    $:if(percent > 60)
        {
            barColor = "bg-purple-500";
        }
        else if(percent > 45)
        {
            barColor = "bg-blue-500";
        }
        else if(percent > 35)
        {
            barColor = "bg-green-500";
        }
        else if(percent > 25)
        {
            barColor = "bg-yellow-500";
        }
        else if(percent > 10)
        {
            barColor = "bg-orange-500"
        }
        else
        {
            barColor ="bg-red-500";
        }

</script>

<div class="grid grid-cols-3 items-center">
    <span class="mr-2 md:mr-3 text-right text-gray-600 font-semibold">{statName}</span>
    <div class="w-full h-full bar bg-white outline outline-1 outline-gray-600 col-span-2 flex relative justify-items-center items-center place-items-center rounded-md"
            >
        <div class={"absolute w-full h-full rounded-md " + barColor} style={"width:" + percent + "%"}>
        </div>
        <div class="text-gray-600 w-full text-center align-middle z-10 font-semibold">
            {statValue}
        </div>                            
    </div>
</div>

<style>
@import '$lib/components/PokemonStyle.css';

@media (max-width: 600px) 
{
    .bar
    {
        height:20px;
        min-width:100px;
        max-width: 110px;
        margin-left: 10%;
    }
}

@media (min-width: 600px) 
{
    .bar
    {
        height:20px;
        min-width:100px;
    }
}
</style>

