<script lang="ts">
	let { name, description, image, url, githubUrl, longdescription = "" } = $props();
	const images: any = import.meta.glob(
		['$lib/images/**.jpg', '$lib/images/**.png', '$lib/images/**.svg'],
		{ eager: true, as: 'url' }
	);
	let expanded = false;
</script>

<div class="flex w-full flex-col items-center justify-center text-white">
	<div class="flex w-full max-w-2xl flex-col items-center justify-center gap-4 rounded-2xl p-4">
		<h1 class="text-center text-3xl font-bold">{name}</h1>
		<p class="text-center text-lg max-h-60 overflow-auto">{description}</p>
		{#if longdescription}
			<button
				class="mb-2 rounded bg-oglala-500 px-4 py-2 hover:bg-oglala-600"
				on:click={() => (expanded = !expanded)}
			>
				{expanded ? 'Show Less' : 'Read More'}
			</button>
		{/if}
		{#if longdescription && expanded}
			<p class="text-center text-lg max-h-60 overflow-auto">{longdescription}</p>
		{/if}
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


