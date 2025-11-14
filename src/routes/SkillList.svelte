<script lang="ts">
	import {
		Html5Brands,
		Css3Brands,
		JsSquareBrands,
		ReactBrands,
		GithubBrands
	} from 'svelte-awesome-icons';
	import { onMount } from 'svelte';
	import CircleDanceIcon from '$lib/images/CircleDanceIcon.svelte';
	const skills = [
		{
			name: 'HTML5',
			icon: Html5Brands,
			type: 'sa',
			color: 'text-orange-500',
			bgColor: 'bg-orange-500'
		},
		{ name: 'CSS3', icon: Css3Brands, type: 'sa', color: 'text-blue-500', bgColor: 'bg-blue-500' },
		{
			name: 'JavaScript',
			icon: JsSquareBrands,
			type: 'sa',
			color: 'text-yellow-500',
			bgColor: 'bg-yellow-500'
		},
		{
			name: 'React',
			icon: ReactBrands,
			type: 'sa',
			color: 'text-blue-400',
			bgColor: 'bg-blue-400'
		},
		{
			name: 'GitHub',
			icon: GithubBrands,
			type: 'sa',
			color: 'text-white',
			bgColor: 'bg-neutral-900'
		},
		{
			name: 'Svelte',
			icon: 'svelte.svg',
			type: 'custom',
			color: 'text-orange-600',
			bgColor: 'bg-orange-600'
		},
		{
			name: 'Tailwind CSS',
			icon: 'tailwind.svg',
			type: 'custom',
			color: 'text-blue-400',
			bgColor: 'bg-blue-400'
		},
		{
			name: 'TypeScript',
			icon: 'typescript.svg',
			type: 'custom',
			color: 'text-blue-600',
			bgColor: 'bg-blue-600'
		},
		{
			name: 'Next.js',
			icon: 'nextjs.svg',
			type: 'custom',
			color: 'text-white',
			other: 'invert',
			bgColor: 'bg-neutral-900'
		},
		{
			name: 'MongoDB',
			icon: 'mongodb.svg',
			type: 'custom',
			color: 'text-green-500',
			bgColor: 'bg-green-500'
		}
	];
	const length = skills.length;

	const images: any = import.meta.glob(
		['$lib/images/icons/**.jpg', '$lib/images/icons/**.png', '$lib/images/icons/**.svg'],
		{ eager: true, as: 'url' }
	);

	const containerSize = 320; // px, diameter of circle
	const radius = 120; // px, distance from center to icons
	let rotation = $state(0);
	let recent = $state(0);
	let index = $state(2);
	let currentSkill = $state(skills[length - index - 1]);
	const rotationSpeed = 1; // degrees per second

	const rotateCircle = () => {
		rotation = rotation + rotationSpeed;
		recent += rotationSpeed;
		if (recent >= 360 / length) {
			recent = 0;
			index = (index + 1) % length;
			console.log({ rotation, index });
			console.log(length - index - 1);
			console.log(skills[length - index - 1].name);
			currentSkill = skills[length - index - 1];
		}
	};
	onMount(() => {
		const interval = setInterval(rotateCircle, 100);
		return () => clearInterval(interval);
	});
</script>

<div class="flex flex-col items-center justify-center text-white">
	<h1 class="mb-4 text-4xl font-bold">Skills</h1>
	<div
		class="relative flex flex-wrap justify-center transition-transform"
		style="width: {containerSize}px; height: {containerSize}px; transform: rotate({rotation}deg);"
	>
		<div
			class="absolute inset-0 flex h-full w-full items-center justify-center transition-transform"
			style="transform: rotate(-{rotation}deg);"
		>
			<CircleDanceIcon size={40} />
		</div>
		<div
			class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform transition-transform"
			style="transform: rotate(-{rotation}deg);"
		>
			<div
				class="w-36 h-16 rounded-full transition-colors duration-500 {currentSkill.color} flex items-center justify-center text-lg font-bold bg-radial from-oglala-900/90 to-transparent "
			>
				{currentSkill.name}
			</div>
		</div>

		{#each skills as skill, i}
			{@const angle = i * (360 / length)}
			<div
				class="absolute top-1/2 left-1/2 m-4 flex flex-col items-center {skill.color} transition-duration-1000 transition-transform"
				style="transform: translate(-100%, -100%) rotate({angle}deg) translate({radius}px) rotate(-{angle}deg) rotate(-{rotation}deg);"
				title={skill.name}
			>
				{#if skill.type === 'sa'}
					<svelte:component this={skill.icon as any} class="h-10 w-10" />
				{:else if skill.type === 'custom'}
					<img
						src={images['/src/lib/images/icons/' + skill.icon]}
						alt={skill.name}
						class="h-10 w-10 {skill.other || ''}"
					/>
				{/if}
			</div>
		{/each}
	</div>
</div>

<style>
</style>
