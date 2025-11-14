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
			name: 'HTML',
			icon: Html5Brands,
			type: 'sa',
			color: 'text-orange-500',
			bgColor: 'bg-orange-500',
			ringColor: 'ring-orange-500'
		},
		{
			name: 'CSS',
			icon: Css3Brands,
			type: 'sa',
			color: 'text-blue-500',
			bgColor: 'bg-blue-500'
		},
		{
			name: 'JavaScript',
			icon: JsSquareBrands,
			type: 'sa',
			color: 'text-yellow-500',
			bgColor: 'bg-yellow-500',
			ringColor: 'ring-yellow-500'
		},
		{
			name: 'React',
			icon: ReactBrands,
			type: 'sa',
			color: 'text-blue-400',
			bgColor: 'bg-blue-400',
			ringColor: 'ring-blue-400'
		},
		{
			name: 'GitHub',
			icon: GithubBrands,
			type: 'sa',
			color: 'text-white',
			// bgColor: 'bg-neutral-900',
			// ringColor: 'ring-neutral-900'
			bgColor: 'bg-white',
			ringColor: 'ring-white'
		},
		{
			name: 'Svelte',
			icon: 'svelte.svg',
			type: 'custom',
			color: 'text-orange-600',
			bgColor: 'bg-orange-600',
			ringColor: 'ring-orange-600'
		},
		{
			name: 'Tailwind',
			icon: 'tailwind.svg',
			type: 'custom',
			color: 'text-blue-400',
			bgColor: 'bg-blue-400',
			ringColor: 'ring-blue-400'
		},
		{
			name: 'TypeScript',
			icon: 'typescript.svg',
			type: 'custom',
			color: 'text-blue-600',
			bgColor: 'bg-blue-600',
			ringColor: 'ring-blue-600'
		},
		{
			name: 'Next.js',
			icon: 'nextjs.svg',
			type: 'custom',
			color: 'text-white',
			other: 'invert',
			// bgColor: 'bg-neutral-900',
			// ringColor: 'ring-neutral-900'
			bgColor: 'bg-white',
			ringColor: 'ring-white'
		},
		{
			name: 'MongoDB',
			icon: 'mongodb.svg',
			type: 'custom',
			color: 'text-green-500',
			bgColor: 'bg-green-500',
			ringColor: 'ring-green-500'
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
	let index = $state(2 + length / 2);
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

		<!-- <div
			class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform transition-transform"
			style="transform: rotate(-{rotation}deg);"
		>
			<div
				class="h-36 w-36 rounded-full transition-colors duration-500 {currentSkill.color} from-oglala-900/90 flex items-center justify-center bg-radial to-oglala-900/50 text-lg font-bold"
			>
				{currentSkill.name}
			</div>
		</div> -->

		{#each skills as skill, i}
			{@const angle = i * (360 / length)}
			<div
				class="absolute top-1/2 left-1/2 m-4 flex flex-col items-center justify-center {skill.color} transition-duration-1000 h-16 w-16 transition-transform"
				style="transform: translate(-75%, -75%) rotate({angle}deg) translate({radius}px) rotate(-{angle}deg) rotate(-{rotation}deg);"
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

	<div
		class="relative mt-6 ring-4 {currentSkill.ringColor} flex w-30 items-center justify-center rounded-full px-4 py-2 text-xl font-semibold transition-all {currentSkill.color}"
	>
		<div
			class=" absolute -top-4 left-1/2 h-4 w-6 -translate-x-1/2 transform transition-colors {currentSkill.bgColor} clip"
		></div>

		{currentSkill.name}
	</div>
</div>

<style>
	.clip {
		clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
	}
</style>
