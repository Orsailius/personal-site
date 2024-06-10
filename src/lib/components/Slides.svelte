<!-- https://joyofcode.xyz/beautiful-presentations-with-svelte-->
<script lang="ts">
	import { onMount } from 'svelte'	

    import 'reveal.js/dist/reveal.css'
	import 'reveal.js/dist/theme/white.css'

    let reveal;

	onMount(async () => {

        let Reveal = (await import('reveal.js'));       

		reveal = Reveal.initialize({
			// Display controls in the bottom right corner
controls: true,

// Display a presentation progress bar
progress: true,

// Push each slide change to the browser history
history: false,

// Enable keyboard shortcuts for navigation
keyboard: true,

// Enable the slide overview mode
overview: true,

// Vertical centering of slides
center: true,

// Loop the presentation
loop: false,

// Change the presentation direction to be RTL
rtl: false,

// Number of milliseconds between automatically proceeding to the 
// next slide, disabled when set to 0, this value can be overwritten
// by using a data-autoslide attribute on your slides
autoSlide: 0,

// Enable slide navigation via mouse wheel
mouseWheel: false,
		})
	})
</script>

<div class="reveal h-full w-full" style="min-height:50vh">
	<div class="slides h-full w-full" style="min-height:50vh">
		<slot />
	</div>
</div>

