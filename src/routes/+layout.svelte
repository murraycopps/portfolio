<script lang="ts">
	import '../app.css';
	import LargeNavbar from './LargeNavbar.svelte';
	import SmallNavbar from './SmallNavbar.svelte';
	import { onMount } from 'svelte';

	let { children } = $props();


	let large = false;

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

<LargeNavbar />
<SmallNavbar />

<main class="h-screen overflow-x-hidden overflow-y-scroll pt-20">
	{@render children()}
</main>

<style>
	.large {
		height: calc(100vh - 5rem);
	}

	* {
		transition: all 0.5s ease-in-out;
	}
</style>
