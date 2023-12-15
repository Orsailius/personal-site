<script lang="ts">
    import ColorChoiceButton, { info as ColorChoiceButtonInfo } from "$lib/components/ColorChoiceButton.svelte";
    import ColorInput, { info as ColorInputInfo } from "$lib/components/ColorInput.svelte";
    import ComponentPreview from "$lib/components/ComponentPreview.svelte";
    import ContactForm, { info as ContactFormInfo } from "$lib/components/ContactForm.svelte";
    import DataTable4D, { info as DataTable4DInfo } from "$lib/components/DataTable4D.svelte";
	import VideoPlayer, { info as VideoPlayerInfo } from "$lib/components/VideoPlayer.svelte";
	import ProgressiveImageLoader, { info as ProgressiveImageLoaderInfo } from "$lib/components/ProgressiveImageLoader.svelte";
	import CardImage, { info as CardImageInfo } from "$lib/components/CardImage.svelte";
	import CardGrid, { info as CardGridInfo } from "$lib/components/CardGrid.svelte";
	import ProjectCard, { info as ProjectCardInfo } from "$lib/components/ProjectCard.svelte";
	//use enum like casing for info?
    import SkillSlide, { info as SkillSlideInfo } from "$lib/components/SkillSlide.svelte";
    import StarRating, { info as StarRatingInfo } from "$lib/components/StarRating.svelte";
    import type ComponentInfo from "$lib/datatypes/ComponentInfo";

	let componentInfo:ComponentInfo = SkillSlideInfo;

	let availableComponents = [ 
		SkillSlide, 
		StarRating, 
		ColorChoiceButton, 
		ColorInput, 
		ContactForm,
		DataTable4D,
		VideoPlayer,
		ProgressiveImageLoader,
		CardImage,
		CardGrid,
		ProjectCard];
	let infos = [
		SkillSlideInfo, 
		StarRatingInfo, 
		ColorChoiceButtonInfo,
		ColorInputInfo,
		ContactFormInfo,
		DataTable4DInfo,
		VideoPlayerInfo,
		ProgressiveImageLoaderInfo,
		CardImageInfo,
		CardGridInfo,
		ProjectCardInfo];

	let currentComponent = 10;

</script>
<svelte:head>
	<title>Preview Components</title>
	<meta name="previewComponents" content="Components in Site" />
</svelte:head>

<div class="drawer lg:drawer-open">
	<input id="my-drawer" type="checkbox" class="drawer-toggle hidden" />
	<div class="drawer-content bg-base-100">
		<div class="flex flex-col-reverse justify-between gap-6 xl:flex-row">
			<ComponentPreview 
				component={availableComponents[currentComponent]} 
				componentInfo={infos[currentComponent]}/>			
			<div>

			</div>	
		</div>	
	</div> 
	<div class="drawer-side">
	  	<label for="my-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
	  	<ul class="menu p-4 w-80 min-h-full bg-base-100 text-base-content">
			{#each availableComponents as component, index}
				<li>
					<button on:click={() => (currentComponent = index)}>
						<span>
							<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
							</svg>
						</span>
						<span class="undefined">
							{infos[index].name}
						</span> 
					</button>
				</li>
			{/each}			
			<li></li>	
	  	</ul>
	</div>
</div>

<style>
	.preview {
	    background-image: repeating-linear-gradient(45deg,hsl(var(--b1)),hsl(var(--b1)) 13px,hsl(var(--b2)) 13px,hsl(var(--b2)) 14px);
	}

	.text-2xs
	{
		font-size: 0.5rem; /* 12px */
		line-height: 0.75rem; /* 16px */
	}
</style>