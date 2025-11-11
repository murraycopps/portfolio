<script lang="ts">
	let { name, description, image, url, githubUrl, longdescription = '' } = $props();
	const images: any = import.meta.glob(
		['$lib/images/**.jpg', '$lib/images/**.png', '$lib/images/**.svg'],
		{ eager: true, as: 'url' }
	);
	let expanded = $state(false);
</script>

<div
	class="bg-oglala-800 flex w-full flex-col items-center justify-center rounded-2xl p-4 text-white"
>
	<div class="flex w-full max-w-2xl flex-col items-center justify-center gap-4 rounded-2xl">
		<h1 class="text-center text-3xl font-bold">{name}</h1>
		<p class="max-h-60 overflow-auto text-center text-lg">{description}</p>
		{#if longdescription}
			<button
				class="bg-oglala-500 hover:bg-oglala-600 mb-2 rounded px-4 py-2"
				on:click={() => (expanded = !expanded)}
			>
				{expanded ? 'Show Less' : 'Read More'}
			</button>
		{/if}
		<div class="relative w-full">
			{#if longdescription && expanded}
				<div class="absolute top-0 right-0 left-0 z-10 bg-oglala-700 rounded-lg p-4">
					<p class="max-h-60 overflow-auto text-center text-lg">
						{longdescription}
					</p>
				</div>
			{/if}
		</div>
		{#if image}
			<img src={images['/src/lib/images/' + image]} alt={name} class=" w-full rounded-lg" />
		{/if}
		<div class="flex w-full justify-evenly">
			{#if url}
				<a href={url} class=" text-blue-500 hover:underline" target="_blank">View Project</a>
			{/if}
			{#if githubUrl}
				<a href={githubUrl} class=" text-blue-500 hover:underline" target="_blank">View on GitHub</a
				>
			{/if}
		</div>
	</div>
</div>
