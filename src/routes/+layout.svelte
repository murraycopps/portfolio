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

<main class="min-h-screen inline-block h-max pt-20 pb-8">
	{@render children()}
</main>

<style>


	main{
		overflow: hidden;
	}
	* {
		transition: all 0.5s ease-in-out;
	}
</style>
