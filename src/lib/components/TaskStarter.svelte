<script lang="ts">
    import Database from "$lib/datatypes/Database";
    import { allTasks, currentProject, currentTask } from "$lib/datatypes/Stores";
    import Task from "$lib/datatypes/Task";
    import { TaskOption } from "$lib/datatypes/TaskOption";
    import ComboBox from "./ComboBox/ComboBox.svelte";
    import TaskEditor from "./TaskEditor.svelte";

    let taskOptions = [...$allTasks].map(x=>
	{
		return new TaskOption(x[1].name,x[1]);		
	});

    let tab = 0;

    let taskName = "";

    if(false)
    {
        new Task();
    }

    let workingTask:Task|null = null;

    function onSelectOption(option:TaskOption)
    {
        taskName = option.text;
        console.log("Set taskName as " + taskName);
        workingTask = option.value;
        console.log("Set temp task as " + workingTask?.name);
    }  

    function onContinueTask()
    {
        if(workingTask != null)
        {
            Database.setCurrentTask(workingTask);
            $currentTask = workingTask;
            console.log("Working on task " + workingTask.name);
        }
    }

    function createAndStart()
    {
        if(workingTask != null)
        {
            workingTask.register();
            Database.setCurrentTask(workingTask);
            $currentTask = workingTask;
            console.log("Working on task " + workingTask.name);
        }
    }

    function setTabZero()
    {
        if($currentProject == null)
        {
            return;
        }
        tab = 0;
        workingTask = $currentProject.createTempTaskForProject();
    }

</script>

{#if $currentProject != null}
    <div class="bg-slate-300 rounded-lg p-2 pt-0">    
        <div class='btn btn-primary rounded-b-none mt-4' on:click={setTabZero} >
            Create new Task!
        </div>
        <div class='btn btn-secondary rounded-b-none mt-4' on:click={()=>tab=1}>
            Continue Task
        </div>
        <div class={"p-2 rounded-b-lg " + (tab == 0 ? "bg-primary rounded-tr-lg" : "bg-secondary ")}>
            {#if tab == 0}
                {#if workingTask == null}
                {:else}
                <TaskEditor task={workingTask} title={"Create Task"}/>
                <div class="btn mt-2 bg-green-500" on:click={createAndStart}>
                    Create and Start
                </div>
                {/if}
            {:else}
                <div class="bg-slate-200 p-2 rounded-lg">
                    <ComboBox name="Task" label="Task" placeholder="Choose a task..." options={taskOptions} onSelectOption={onSelectOption} />
                </div>
                <div class="btn mt-2 bg-green-500" on:click={onContinueTask}>
                    Work on Task
                </div>
            {/if}
        </div>       
    </div>
{/if}
