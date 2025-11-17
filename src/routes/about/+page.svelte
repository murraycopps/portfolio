<script lang="ts">
	import SkillList from '../SkillList.svelte';
</script>

<div class="grid grid-cols-3 gap-8 p-8 text-white">
	<div class="col-span-2 flex h-full flex-col gap-8">
		<h1 class="text-7xl font-bold">About Me</h1>
		<p class="text-2xl">
			I’m a Computer Science student specializing in algorithm design and modern web development,
			with a strong interest in building interfaces that prioritize clarity, simplicity, and
			usability. I enjoy working across the stack, but I’m especially drawn to the frontend—where
			design decisions directly shape how people interact with information.
			<br /><br />
			I build responsive, performant web applications using frameworks like React, Svelte, and Next.js,
			focusing on clean architecture and thoughtful UX patterns. My goal is always to create websites
			that feel intuitive from the moment someone lands on the page: layouts that communicate information
			clearly, interactions that make sense without explanation, and visual structures that stay out
			of the user’s way.
			<br /><br />
			I believe that the best web design comes from reducing complexity, not adding more. Whether I’m
			refining components, organizing data, or structuring a page, I aim to write code that is both maintainable
			and scalable while delivering a refined, functional experience.
		</p>
	</div>
	<SkillList />
</div>
