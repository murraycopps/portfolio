<script lang="ts">
	import '../app.css';
	import LargeNavbar from './LargeNavbar.svelte';
	import SmallNavbar from './SmallNavbar.svelte';

	let { children } = $props();
</script>

<LargeNavbar />
<SmallNavbar />


<main class="large overflow-y-scroll overflow-x-hidden lg:mt-16 lg:pt-4">
	{@render children()}
</main>

<style>
	.large {
		height: calc(100vh - 4rem);
	}
	
	* {
		transition: all 0.5s ease-in-out;
	}

</style>
