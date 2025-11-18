<script lang="ts">
	import SkillList from '../SkillList.svelte';
	import nationals from '$lib/images/nationals.JPEG';
	import profilePic from '$lib/images/profilePic.JPEG';
</script>

<div class="grid grid-cols-3 gap-8 p-8 text-white">
	<div class="col-span-2 flex flex-col items-start justify-center gap-16 pt-30">
		<div class="flex items-center gap-10">
			<img src={nationals} alt="Murray Copps at Nationals" class="w-48 rounded-full" />

			<h1 class="w-full text-8xl font-bold">About Me</h1>
		</div>
		<p class="text-3xl">
			I’m a Computer Science student specializing in algorithm design and
			modern web development. I focus on building responsive, functional websites using frameworks
			like React, Svelte, and Next.js, with an emphasis on clean architecture and clear
			communication. My goal is to create interfaces that feel intuitive - simple layouts, readable
			structure, and interactions that make information easy to understand and use. I believe strong
			web design comes from reducing complexity, and I aim to write code that’s both maintainable
			and user-focused.
		</p>
	</div>

	<div class="flex flex-col items-center justify-start p-8">
		<img src={profilePic} alt="Murray Copps" class="w-full rounded-2xl" />
	</div>
</div>
<div class="mt-40 mb-24 grid grid-cols-2">
    <div class="flex flex-col items-center justify-start">

        <div class="flex flex-col items-start gap-4 justify-start text-white">
            <h2 class="mb-8 text-5xl font-bold text-center w-full ">Fun Facts</h2>
            <p class="text-2xl"> - NCAA XC and Track Athlete </p>
            <p class="text-2xl"> - Forges and sells custom knives </p>
            <p class="text-2xl"> - Carves and sells wooden spoons </p>
            <p class="text-2xl"> - Uses Circle Dance as my buisness name </p>
            <p class="text-2xl"> - Avid hiker and outdoors enthusiast </p>
            
        </div>
    </div>
	<div class="flex flex-col items-center justify-start pt-8">
		<SkillList scale={1.5} />
	</div>
</div>
