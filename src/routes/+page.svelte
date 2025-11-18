<script lang="ts">
	import PagePreview from './PagePreview.svelte';
	import { websites } from '$lib/websites';
	import MovingShoes from './MovingShoes.svelte';
</script>

<div class="fixed inset-0 flex flex-col gap-16 overflow-auto pt-20 lg:pt-80 text-white">
	<div class="grid lg:grid-cols-3 gap-8 p-8">
		<div class="lg:col-span-2 flex h-full flex-col gap-8">
			<h1 class="sm:text-7xl text-6xl font-bold">Welcome to My Portfolio</h1>
			<p class="text-3xl">
				Here is a collection of my recent projects. These showcase my best work and my skills using
				a variety of technologies.
			</p>
		</div>
	</div>
	<div class="relative grid flex-1 lg:grid-cols-2 gap-8 pt-30 sm:pt-30 lg:pt-8 p-2 sm:p-8">

		<div class=" absolute lg:top-6 top-28 right-44 scale-65 sm:scale-100 md:right-16 lg:right-48 lg:col-start-2 w-1/2">
			<MovingShoes />
		</div>
		{#each websites as website}
			<PagePreview
				name={website.name}
				description={website.description}
				image={website.image}
				url={website.url}
				githubUrl={website.github}
				type={website.type || 'Project'}
				longdescription={website.longdescription || ''}
			/>
		{/each}
	</div>
</div>

<style>
</style>
