<!-- https://eugenkiss.github.io/7guis/tasks#timer -->

<script lang="ts">
    import type Task from '$lib/datatypes/Task';

    export let task:Task;
	const date = new Date(0); // The 0 there is the key, which sets the date to the epoch
	date.setUTCSeconds(task.timeCreated);
</script>

<div class="grid grid-cols-3">
	<div class="font-semibold">
		Time Started:
	</div>
	<div>{date}</div>
</div>
