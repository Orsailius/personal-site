<script lang="ts">
    import Database from "$lib/datatypes/Database";
    import { allTasks } from "$lib/datatypes/Stores";
    import Task from "$lib/datatypes/Task";


    export let startDate:Date;

    const endDate = new Date(startDate.getTime()+(7*24*60*60*1000));

    function getHour(twentyFour:number)
    {
        var hour = twentyFour % 12;
        if(hour == 0)
        {
            hour = 12;
        }
        return hour + ":00 " + (twentyFour >= 12 ? "p.m." : "a.m.");
    }

    function getTotalTimeWorkedThisWeek()
    {
        const startTime = startDate.getTime();
        const endTime = endDate.getTime();
        var sum:number = 0;
        for(var entry of $allTasks)
        {
            sum += entry[1].timeWorkedDuring(startTime, endTime);
        }
        return sum;
    }

    function didWorkDuringHour(hour:number, day:number)
    {
        const hourStart = new Date(startDate.getTime()+(day*24*60*60*1000) + (hour * 60 * 60 * 1000));
        const hourEnd = new Date(startDate.getTime()+(day*24*60*60*1000) + ((hour +1) * 60 * 60 * 1000));
        const startTime = hourStart.getTime();
        const endTime = hourEnd.getTime();
        //console.log("Checking: " + hourStart + " with " + $allTasks.size);
        for(var entry of $allTasks)
        {
            if(entry[1].wasWorkingDuringTime(startTime, endTime))
            {
                console.log("Found at " + hourStart);
                return true;
            }
        }
        return false;
    }

  
</script>

<div class="">
    <table class="timesheet timesheet-zebra w-full ">       
        <thead>
            <tr>
                <th>Hour</th> 
                <th colspan="2">Sunday</th> 
                <th colspan="2">Monday</th> 
                <th colspan="2">Tuesday</th> 
                <th colspan="2">Wednesday</th> 
                <th colspan="2">Thursday</th> 
                <th colspan="2">Friday</th>
                <th colspan="2">Saturday</th>
            </tr>
        </thead> 
        <tbody>
            {#each {length: 24} as _, i}
                <tr class="text-sm">
                    {#if i % 6 == 0}
                        <th class="quarter-day">{getHour(i)}</th> 
                    {:else}
                        <th>{getHour(i)}</th> 
                    {/if}
                    {#each {length: 14} as _, j}
                        <td class={didWorkDuringHour(i,j) ? "worked-day":""} on:click={()=>{}}> </td> 
                    {/each}
                </tr>
            {/each}   
        </tbody>      
        <thead>
            <tr>
                <th>Total</th> 
                <th colspan="2">Sunday</th> 
                <th colspan="2">Monday</th> 
                <th colspan="2">Tuesday</th> 
                <th colspan="2">Wednesday</th> 
                <th colspan="2">Thursday</th> 
                <th colspan="2">Friday</th>
                <th colspan="2">Saturday</th>
            </tr>
        </thead>   
    </table>
  </div>

<style>
    .timesheet {
        display: table;
        table-layout: auto;
    }

    .timesheet th:first-child {
        position: sticky;
        left: 0px;
        z-index: 11;
    }

    .timesheet {
        position: relative;
        text-align: center;
    }

    .quarter-day
    {
        background-color: #FFBB66 !important;
    }

    .worked-day
    {
        background-color: #BBFF66 !important;
    }

  .timesheet tr.active th,
    .timesheet tr.active td,
    .timesheet tr.active:nth-child(even) th,
    .timesheet tr.active:nth-child(even) td {
    --tw-bg-opacity: 1;
    background-color: hsl(var(--b3, var(--b2)) / var(--tw-bg-opacity))
}
  .timesheet tr.hover:hover th,
    .timesheet tr.hover:hover td,
    .timesheet tr.hover:nth-child(even):hover th,
    .timesheet tr.hover:nth-child(even):hover td {
    --tw-bg-opacity: 1;
    background-color: hsl(var(--b3, var(--b2)) / var(--tw-bg-opacity))
}
  .timesheet:where(:not(.timesheet-zebra)) :where(thead, tbody, tfoot) :where(tr:not(:last-child) :where(th, td)) {
    border-bottom-width: 1px;
    --tw-border-opacity: 1;
    border-color: hsl(var(--b2, var(--b1)) / var(--tw-border-opacity))
}
  .timesheet :where(thead, tfoot) :where(th, td) {
    --tw-bg-opacity: 1;
    background-color: hsl(var(--b2, var(--b1)) / var(--tw-bg-opacity));
    font-size: 0.75rem;
    line-height: 1rem;
    font-weight: 700;
}
 .timesheet :where(tbody th, tbody td) {
    --tw-bg-opacity: 1;
    background-color: hsl(var(--b1) / var(--tw-bg-opacity))
}
   .timesheet-zebra tbody tr:nth-child(even) th,
      .timesheet-zebra tbody tr:nth-child(even) td {
    --tw-bg-opacity: 1;
    background-color: hsl(var(--b2, var(--b1)) / var(--tw-bg-opacity))
}

.timesheet tbody th,
      .timesheet tbody td {
    border:1px solid #CCCCCC;
    padding-left: 12px;
    padding-right: 12px;
    padding-top: 0px;
    padding-bottom: 0px;
    border-top:1px;
    border-bottom:1px;
}

.timesheet th{
    border:1px solid #AAAAAA;
}

:where(.timesheet *:first-child) :where(*:first-child) :where(th, td):first-child {
    border-top-left-radius: 0.5rem
}

:where(.timesheet *:first-child) :where(*:first-child) :where(th, td):last-child {
    border-top-right-radius: 0.5rem
}

:where(.timesheet *:last-child) :where(*:last-child) :where(th, td):first-child {
    border-bottom-left-radius: 0.5rem
}

:where(.timesheet *:last-child) :where(*:last-child) :where(th, td):last-child {
    border-bottom-right-radius: 0.5rem
}
</style>
  