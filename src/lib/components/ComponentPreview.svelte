<script lang="ts">
   import type ComponentInfo from "$lib/datatypes/ComponentInfo";
    import ColorChoiceButton from "./ColorChoiceButton.svelte";
    import ColorInput from "./ColorInput.svelte";

   export let componentInfo:ComponentInfo;
   export let component:any;

   let previewColor = "#33aacc";

   function setColor(color:string)
   {
		previewColor = color;
   }
</script>

<div class="w-full max-w-4xl flex-grow">
	{#if componentInfo != null}	
		<h1 class="text-4xl font-bold text-left m-4 mt-8"> {componentInfo.name}</h1>
		<div class="m-4">
			<p class="mb-2"> {componentInfo.description} </p>
			<table class="table-xs md:table-sm table-pin-rows table w-full">
				<thead>
					<tr class="border-b-0">
						<th class="bg-secondary rounded-l-lg lg:py-3 text-secondary-content">
							Parameter
						</th>
						<th class="bg-secondary lg:py-3 text-secondary-content">
							Type
						</th>
						<th class="bg-secondary lg:py-3 text-secondary-content">
							Test Value
						</th>
						<th class="bg-secondary rounded-r-lg lg:py-3 text-secondary-content">
							Description
						</th>
					</tr>
				</thead>
				<tbody>
					{#if componentInfo.inputInfo != undefined && componentInfo.inputInfo.length > 0}
						{#each componentInfo.inputInfo as inputInfo}
							<tr>
								<th class="w-2/12 font-normal">
									<span class="whitespace-nowrap font-mono">
										{inputInfo.name}
									</span>
								</th>
								<td class="w-1/12">
									<span class="badge badge-sm badge-outline w-24 whitespace-nowrap">
										{inputInfo.varType}
									</span>
								</td>
								<th class="w-3/12 font-normal">
									<span class="whitespace-nowrap font-mono">
										{#if inputInfo.varType == "String" || inputInfo.varType == "Resource"}
											{#if inputInfo.path == ""}
												<input type="text" placeholder="Type here" 
													class="input input-sm input-bordered input-primary w-full max-w-xs" 
													bind:value={componentInfo.testInput[inputInfo.name]}/>
											{:else}	
												<input type="text" placeholder="Type here" 
													class="input input-sm input-bordered input-primary w-full max-w-xs" 
													bind:value={componentInfo.testInput[inputInfo.path][inputInfo.name]}/>
											{/if}
										{:else if inputInfo.varType == "Color"}
											{#if inputInfo.path == ""}
												<ColorInput 
													color={componentInfo.testInput[inputInfo.name]} 
													onSelect={(c)=>componentInfo.testInput[inputInfo.name] = c}/>
											{:else}	
												<ColorInput 
													color={componentInfo.testInput[inputInfo.path][inputInfo.name]} 
													onSelect={(c)=>componentInfo.testInput[inputInfo.path][inputInfo.name] = c}/>
											{/if}
										{:else if inputInfo.varType == "Range"}
											{#if inputInfo.path == ""}
												<input type="range" min="0" max="4" 
														bind:value={componentInfo.testInput[inputInfo.name]} 
														class="range range-xs range-primary" step="1" />
												<div class="w-full flex justify-between text-2xs px-2">
													<span>|</span>
													<span>|</span>
													<span>|</span>
													<span>|</span>
													<span>|</span>
												</div>
											{:else}	
												<input type="range" min="0" max="4" 
													bind:value={componentInfo.testInput[inputInfo.path][inputInfo.name]} 
													class="range range-xs range-primary" step="1" />
												<div class="w-full flex justify-between text-2xs px-2">
													<span>|</span>
													<span>|</span>
													<span>|</span>
													<span>|</span>
													<span>|</span>
												</div>
											{/if}
										{:else if inputInfo.varType == "Number"}
											{#if inputInfo.path == ""}
												<input type="number" 
														bind:value={componentInfo.testInput[inputInfo.name]} 
														class="input input-sm input-bordered input-primary w-full max-w-xs"/>											
											{:else}	
												<input type="number"
													bind:value={componentInfo.testInput[inputInfo.path][inputInfo.name]} 
													class="input input-sm input-bordered input-primary w-full max-w-xs" />											
											{/if}
										{/if}
									</span>
								</th>
								<th class="w-6/12 font-normal">
									<span class="">
										{inputInfo.description}
									</span>
								</th>
							</tr>
						{/each}
					{/if}							
				</tbody>
			</table>					
			<div class="mb-4"></div>
			<div style={"background-image: repeating-linear-gradient(45deg," + previewColor + "," + previewColor + " 13px, oklch(var(--b2)) 13px, oklch(var(--b2)) 14px);"}  
			class="flex bg-base-300 border border-base-500 
				rounded-b-box rounded-tr-box relative overflow-x-auto items-center justify-center min-h-48 p-16">	
				<div class="absolute flex flex-col top-2 left-2 gap-1">
					<ColorChoiceButton color="white" onSelect={setColor} />
					<ColorChoiceButton color="#eeeeee" onSelect={setColor} />	
					<ColorChoiceButton color="#aaaaaa" onSelect={setColor} />	
					<ColorChoiceButton color="#111111" onSelect={setColor} />
					<ColorChoiceButton color="#33aacc" onSelect={setColor} />
				</div>			
				<svelte:component this={component} {...componentInfo.testInput}/>
			</div>		
		</div>
	{/if}
</div>

<style>

	:root
	{
		--preview-color: white;
	}

	.preview {
	    background-image: repeating-linear-gradient(
			45deg,
			hsl(var(--b1)),
			hsl(var(--b1)) 13px,
			hsl(var(--b2)) 13px,
			hsl(var(--b2)) 14px);
	}

	.text-2xs
	{
		font-size: 0.5rem; /* 12px */
		line-height: 0.75rem; /* 16px */
	}
</style>