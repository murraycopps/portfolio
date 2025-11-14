<script lang="ts">
	let { name, description, image, url, githubUrl, type, longdescription = '' } = $props();
	const images: any = import.meta.glob(
		['$lib/images/**.jpg', '$lib/images/**.png', '$lib/images/**.svg'],
		{ eager: true, as: 'url' }
	);
	let expanded = $state(false);
	import { clickOutside } from '$lib/utils/clickOutside.js';
</script>

<div
	class="bg-oglala-800 flex w-full flex-col items-center justify-center rounded-2xl p-8 text-white"
>
	<div class="flex w-full h-full max-w-2xl flex-col items-center justify-center gap-4 rounded-2xl">
		<h1 class="text-center text-3xl font-bold">{name}</h1>
		<p class=" text-center text-lg">{description}</p>
		<div class=" flex w-full flex-1/2">
			{#if longdescription}
				<div
					class="flex w-full flex-col items-center justify-center"
					use:clickOutside
					onoutsideclick={() => (expanded = false)}
				>
					<button
						class="bg-oglala-500 hover:bg-oglala-600 mb-2 rounded px-4 py-2"
						onclick={() => (expanded = !expanded)}
					>
						{expanded ? 'Show Less' : 'Read More'}
					</button>
					<div class="relative w-full">
						{#if expanded}
							<div class="bg-oglala-700 absolute top-0 right-0 left-0 z-10 rounded-lg px-4 py-0.5">
								<p class="max-h-80 overflow-auto text-center text-lg whitespace-pre-line">
									{longdescription}
								</p>
							</div>
						{/if}
					</div>
				</div>
			{/if}
		</div>
		{#if image}
			<img src={images['/src/lib/images/' + image]} alt={name} class=" w-full rounded-lg" />
		{/if}
		<div class="flex w-full justify-evenly">
			{#if url}
				<a href={url} class=" text-blue-500 hover:underline" target="_blank">View {type}</a>
			{/if}
			{#if githubUrl}
				<a href={githubUrl} class=" text-blue-500 hover:underline" target="_blank">View GitHub</a>
			{/if}
		</div>
	</div>
</div>
