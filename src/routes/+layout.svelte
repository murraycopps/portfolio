<script lang="ts">
	import '../app.css';
	import CircleDanceIcon from '$lib/images/CircleDanceIcon.svelte';
	import Divider from './Divider.svelte';

	let { children } = $props();
</script>

<header
	class="bg-oglala-500 fixed top-0 right-0 left-0 z-50 flex flex-row items-center gap-2 p-2 align-middle text-xl text-white sm:h-auto"
>
	<h2 class="ml-4 text-3xl relative name mb-4">
		Murray Copps
		<span class="absolute top-6 left-30 ">
			Portfolio
		</span>
	</h2>
	<div class="flex-1"></div>
	<a class="flex items-center px-4" href="/"> Work </a>
	<Divider />
	<a class="flex items-center px-4" href="/about"> About </a>
	<Divider />
	<a class="flex items-center px-4" href="/contact"> Contact </a>
	<Divider />
	<a class=" flex items-center px-4" href="/">
		<CircleDanceIcon size={12} bold />
	</a>
</header>

<main class="large overflow-y-scroll overflow-x-hidden lg:mt-16 lg:pt-4">
	{@render children()}
</main>

<style>
	.large {
		height: calc(100vh - 4rem);
	}
	
	.name {
		font-family: 'Grechen Fuemen';
	}
	* {
		transition: all 0.5s ease-in-out;
	}
	header {
		font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
		z-index: 1000;
	}

	header::after {
		content: '';
		position: absolute;
		bottom: -30px;
		left: 0;
		width: 300%;
		height: 30px;
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 20' preserveAspectRatio='none'%3E%3Cpath d='M0 0h2000v12.5c-50 0-50-6.25-100-6.25s-50 6.25-100 6.25-50-6.25-100-6.25-50 6.25-100 6.25-50-6.25-100-6.25-50 6.25-100 6.25-50-6.25-100-6.25-50 6.25-100 6.25-50-6.25-100-6.25-50 6.25-100 6.25-50-6.25-100-6.25-50 6.25-100 6.25-50-6.25-100-6.25-50 6.25-100 6.25-50-6.25-100-6.25-50 6.25-100 6.25-50-6.25-100-6.25-50 6.25-100 6.25-50-6.25-100-6.25S50 12.5 0 12.5V0z' fill='%23A50021'/%3E%3C/svg%3E");
		background-repeat: repeat-x;
	}
</style>
