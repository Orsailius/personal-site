<script lang="ts">
    import Database from "$lib/datatypes/Database";
    import { allTasks, currentProject, currentTask } from "$lib/datatypes/Stores";
    import Task from "$lib/datatypes/Task";
    import Icon from '@iconify/svelte';
    import TaskEditor from "./TaskEditor.svelte";


    let paused = false;
    let editorShown=false;

    function toggleEditor()
    {
        editorShown=!editorShown;
    }

    function pauseTask()
    {
        $currentTask?.timeWorked.push(Date.now());       
        paused = true;
        Database.saveData();
    }

    function continueTask()
    {
        $currentTask?.timeWorked.push(Date.now());
        paused = false;
        Database.saveData();
    }

    function stopTask()
    {
        $currentTask?.timeWorked.push(Date.now());
        Database.clearCurrentTask();
        $currentTask = null;
    }

</script>

{#if $currentTask != null}
    <div class="bg-slate-300 rounded-lg p-3">    
        <div class="relative font-semibold text-lg flex w-full">
            {$currentTask.name}
            <div class="absolute right-0 top-0" on:click={toggleEditor}>
                <Icon icon="majesticons:edit-pen-2" />
            </div>  
        </div>       
        {#if editorShown}
        <TaskEditor task={$currentTask}/>
        {/if}  
        <div class="bg-slate-300 rounded-lg">    
            {#if paused}
            <div class="btn mt-2 bg-green-500" on:click={continueTask}>
                Continue Task
            </div>
            {:else}
            <div class="btn mt-2 bg-blue-500" on:click={pauseTask}>
                Pause Task
            </div>
            {/if}
            <div class="btn mt-2 bg-error" on:click={stopTask}>
                Stop Task
            </div>
        </div>
    </div>
{/if}
