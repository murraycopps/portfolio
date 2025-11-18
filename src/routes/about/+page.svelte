<script lang="ts">
	import SkillList from './SkillList.svelte';
	import profilePic from '$lib/images/profilePic.JPEG';
	import { onMount, } from 'svelte';


	let large = $state(true);

	onMount(() => {
		const handleResize = () => {
			if (window.innerWidth > 1024) {
				large = true;
			} else {
				large = false;
			}
		};
		handleResize();
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	});
</script>

<div class="grid lg:grid-cols-3 md:grid-cols-2 lg:gap-8 lg:p-8 gap-4 p-4 text-white">
	<div class="row-start-2 md:row-auto lg:col-span-2 flex flex-col items-start justify-center gap-4 md:gap-8 lg:gap-4 lg:pt-30">
		<h1 class="w-full text-5xl md:text-6xl lg:text-8xl font-bold">About Me</h1>
		<p class="text-xl md:text-2xl lg:text-3xl">
			I’m a Computer Science student specializing in algorithm design and modern web development. I
			focus on building responsive, functional websites using frameworks like React, Svelte, and
			Next.js, with an emphasis on clean architecture and clear communication. My goal is to create
			interfaces that feel intuitive - simple layouts, readable structure, and interactions that
			make information easy to understand and use. I believe strong web design comes from reducing
			complexity, and I aim to write code that’s both maintainable and user-focused.
		</p>
	</div>

	<div class="flex row-start-1 md:row-auto  flex-col items-center sm:items-end md:items-center w-full sm:pr-16 justify-center md:p-4 ">
		<img src={profilePic} alt="Murray Copps" class="max-w-72 lg:max-w-full w-full rounded-2xl" />
	</div>
</div>
<div class="grid md:grid-cols-2 gap-8 p-4 mb-16 md:mt-8 lg:mt-16 pb-16">
	<div class="flex row-start-2 md:row-auto flex-col items-center justify-start">
		<div class="flex flex-col items-start justify-start gap-4 text-white">
			<h2 class="mb-8 w-full text-center text-5xl font-bold">Fun Facts</h2>
			<p class="text-2xl">- NCAA XC and Track Athlete</p>
			<p class="text-2xl">- Forges and sells custom knives</p>
			<p class="text-2xl">- Carves and sells wooden spoons</p>
			<p class="text-2xl">- Uses Circle Dance as my buisness name</p>
			<p class="text-2xl">- Avid hiker and outdoors enthusiast</p>
		</div>
	</div>
	<div class="flex row-start-1 md:row-auto flex-col items-center justify-start pt-8 md:pt-0">
		<SkillList scale={large ? 1.5 : 1} />
	</div>
</div>
