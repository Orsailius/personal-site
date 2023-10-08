<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/svelte-logo.svg';
	import github from '$lib/images/github.svg';
</script>

<header class="sticky top-0 z-50">
	<div class="navbar bg-slate-100">
		<div class="navbar-start">
		  <div class="dropdown">
			<div tabindex="-1" class="btn btn-ghost lg:hidden">
			  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
			</div>
			<ul tabindex="-1" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
			  <li><a>Item 1</a></li>
			  <li>
				<a>Parent</a>
				<ul class="p-2">
				  <li><a>Submenu 1</a></li>
				  <li><a>Submenu 2</a></li>
				</ul>
			  </li>
			  <li><a>Item 3</a></li>
			</ul>
		  </div>
		  <a href="#top" class="btn btn-ghost normal-case text-xl">Justin Moore</a>
		</div>
		<div class="navbar-center hidden lg:flex">
		  <ul class="menu menu-horizontal px-1">
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">Home</a>
			</li>
			<li aria-current={$page.url.pathname === '/previewComponents' ? 'page' : undefined}>
				<a href="/previewComponents">Components</a>
			</li>
			<li>
				<a href="cards/GodotCardSuitGame.html">Cards</a>
			</li>
		  </ul>
		</div>
		<div class="navbar-end">
		  <a class="btn">Button</a>
		</div>
	  </div>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
	}
</style>
