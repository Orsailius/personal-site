<script lang="ts">
	import Counter from './Counter.svelte';
	import Database from '$lib/datatypes/Database';
    import type Task from '$lib/datatypes/Task';
    import TaskList from '$lib/components/TaskList.svelte';
    import Project from '$lib/datatypes/Project';
    import ProjectList from '$lib/components/ProjectList.svelte';
    import TaskEditor from '$lib/components/TaskEditor.svelte';
    import { allProjects, allTasks, currentProject, currentTask } from '$lib/datatypes/Stores';	
    import Timesheet from '$lib/components/Timesheet.svelte';
    import TaskStarter from '$lib/components/TaskStarter.svelte';
    import TaskTracker from '$lib/components/TaskTracker.svelte';
    import TaskTimeTaken from '$lib/components/TaskTimeTaken.svelte';


	let editingTask:Task|null = null;

	if($allProjects.size > 0)
	{
		Database.setCurrentProject($allProjects.entries().next().value);
	}

	function createProject()
	{
		$currentProject = Database.setCurrentProject(Project.createNew("Test Project"));
		$allProjects = Project.allProjects;		
		console.log("Project created");
	}

	function onClickProject(project:Project) 
	{
		Database.setCurrentProject(project);
		$currentProject = project;
	}

	function onClickTask(task:Task)
	{
		console.log("stuff");
		editingTask = task;
	}

	var curr = new Date; // get current date
	var first = curr.getDate() - curr.getDay(); // First day is the day of the month - the day of the week
	var last = first + 6; // last day is the first day + 6

	var firstday = new Date(new Date(curr.setDate(first)).toDateString());

</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<div class="font-semibold mb-2">
		Your personal project organizer
	</div>
	<div class="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 bg-slate-200 p-2 rounded-lg">
		<div class="col-span-1">
			<div class="btn btn-secondary"  on:click={createProject}>
				Create Project
			</div>			
		</div>
		<div class="col-span-1 lg:col-span-3 center">
			<h1 class="text-3xl">									
					<div class="text-6xl font-bold text-orange-600">
					{#if $currentProject != null}					
						{$currentProject.name}
					{:else}
						No Project Selected					
					{/if}
					</div>
					<div class="text-3xl">
						Current Project
					</div>	
			</h1>
			{#if $currentTask == null}
				<TaskStarter />	
			{:else}
				<TaskTracker />
				<TaskTimeTaken task={$currentTask} />	
			{/if}
					
			{#if editingTask != null}
				<TaskEditor task={editingTask} />								
			{/if}
			<Timesheet startDate={firstday}/>
			<Counter />
		</div>
		<div class="col-span-1">
			<ProjectList onClick={onClickProject}/>
			<div class="divider"></div>
			<TaskList onClick={onClickTask}/>
		</div>
	</div>


</section>

<style lang="postcss">
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	.center {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}


	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	/*.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}*/
</style>
