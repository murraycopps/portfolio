<script lang="ts">
	import nationals from '$lib/images/nationals.JPEG';
</script>

<div class="grid h-full gap-16 p-4 text-white lg:grid-cols-2 lg:p-16">
	<div class="flex w-full max-w-screen flex-col items-center justify-center">
		<img src={nationals} alt="Murray Copps at Nationals" class="w-full max-w-128 rounded-4xl" />
	</div>
	<div class="flex flex-col items-center justify-start gap-4 pt-20 pb-16">
		<h1 class="w-full text-5xl font-bold md:text-6xl lg:text-8xl">Contact Me</h1>
		<p class="text-2xl lg:text-3xl">
			If you'd like to get in touch with me, you can email me at
			<a href="mailto:murraycopps@gmail.com" class="text-oglala-400 hover:text-oglala-300 underline"
				>murraycopps@gmail.com</a
			>
		</p>
		<p class="text-2xl lg:text-3xl">
			Check out my GitHub and LinkedIn profiles for more information about my work and experience:
			<a
				href="https://github.com/murraycopps"
				class="text-oglala-400 hover:text-oglala-300 underline"
				target="_blank">GitHub</a
			>
			and
			<a
				href="https://www.linkedin.com/in/murraycopps"
				class="text-oglala-400 hover:text-oglala-300 underline"
				target="_blank">LinkedIn</a
			>.
		</p>
	</div>
</div>
