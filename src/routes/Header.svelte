<script lang="ts">
	import { page } from '$app/stores';
	// @ts-ignore
	import logo from '$lib/images/svelte-logo.svg';
	// @ts-ignore
	import github from '$lib/images/github.svg';

	import { onMount } from 'svelte'
	import { themeChange } from 'theme-change'
	import { browser } from '$app/environment';

	// NOTE: the element that is using one of the theme attributes must be in the DOM on mount
	onMount(() => {
	themeChange(false)
	// 👆 false parameter is required for svelte
	});

	function isDateOkay(date:Date)
	{
		return date <= new Date();
	}

	const sites = [
		{
			name: "Old Timey Video",
			link: "/otv",
			date: new Date('2023/12/16')
		},
		{
			name: "Font Title Tool",
			link: "/fonttitle",
			date: new Date('2023/12/17')
		},
		{
			name: "Pokemon Hard Counter",
			link: "/pkmn",
			date: new Date('2023/12/18')
		},
		{
			name: "Markdown Editor",
			link: "/markdown",
			date: new Date('2023/12/20')
		},
		{
			name: "Christmas Movie Tierlist",
			link: "/tierlist",
			date: new Date('2023/12/21')
		},
		{
			name: "How Long Until?",
			link: "/countonthis",
			date: new Date('2023/12/22')
		}
	]

</script>

<header class="sticky top-0 z-50">
	<div class="navbar bg-base-200">
		<div class="navbar-start">
		  <div class="dropdown">
			<div tabindex="-1" class="btn btn-ghost lg:hidden">
			  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
			</div>
			<ul tabindex="-1" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
				<!--<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
					<a href="/">Home</a>
				</li>
				<li aria-current={$page.url.pathname === '/previewComponents' ? 'page' : undefined}>
					<a href="/previewComponents">Components</a>
				</li>-->
				<li>
					<details>
						<summary>15 Days of Website</summary>
						<ul class="bg-base-200 rounded-t-none">
							<li><a href="/xmasadventure"> Christmas Adventure</a></li>
						 	{#each sites as site}								
								<li><a href={isDateOkay(site.date) ? site.link : ""}>
									{isDateOkay(site.date) ? site.name : site.name + " (Coming " + site.date.toDateString() + ")"}
								</a></li>
							{/each}
						</ul>
					</details>
				</li>
			</ul>
		  </div>
		  <!--<div class="btn btn-ghost normal-case text-xl">Justin Moore</div>-->
		</div>
		<div class="navbar-center hidden lg:flex">
		  <ul class="menu menu-horizontal px-1">
			<!--<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">Home</a>
			</li>
			<li aria-current={$page.url.pathname === '/previewComponents' ? 'page' : undefined}>
				<a href="/previewComponents">Components</a>
			</li>-->
			<!--<li>
				<a href="cards/GodotCardSuitGame.html">Cards</a>
			</li>-->
			<li>
				<details>
					<summary>15 Days of Website</summary>
					<ul class="bg-base-200 rounded-t-none">
						<li><a href="/xmasadventure"> Christmas Adventure</a></li>
						{#each sites as site}								
						<li><a href={isDateOkay(site.date) ? site.link : ""}>
							{isDateOkay(site.date) ? site.name : site.name + " (Coming " + site.date.toDateString() + ")"}
						</a></li>
					   {/each}
					</ul>
				</details>
			</li>
		  </ul>
		</div>
		<div class="navbar-end">			
			<label class="swap swap-rotate">
				<input type="checkbox" data-toggle-theme="coolDark,coolLight" data-act-class="ACTIVECLASS"/>
				<svg class="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
					<path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
				<svg class="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
					<path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>				
			</label>
		  <!--<a class="btn">Button</a>-->
		</div>
	  </div>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
	}
</style>
