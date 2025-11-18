<script>
	import CircleDance from '$lib/images/CircleDance.png';
	import Divider from './Divider.svelte';
	import { clickOutside } from '$lib/utils/clickOutside.js';

	let out = false;
</script>

<header
	class="fixed top-0 left-0 z-50 flex h-screen align-middle text-white lg:hidden"
	use:clickOutside
	onoutsideclick={() => (out = false)}
>
	<button
		class=" fixed top-0 left-0 z-50 flex flex-col items-center p-4"
		onclick={() => (out = !out)}
	>
		<img src={CircleDance} alt="Circle Dance" class="h-12 w-12" />
		<div class="fixed top-18 flex h-3 w-12 flex-col">
			<span
				class="absolute h-1 w-full rounded-full bg-white {out
					? 'top-rotate top-1'
					: 'top-0  rotate-0'}"
			></span>
			<span
				class="absolute h-1 w-full rounded-full bg-white {out
					? 'bottom-rotate bottom-1'
					: 'bottom-0 rotate-0'}"
			>
			</span>
		</div>
	</button>
	<div
		class="bg-oglala-500 fixed top-0 right-1/3 left-0 flex h-full flex-col items-center gap-2 p-2 pb-4 pt-20 align-middle text-xl {out
			? 'circle-clip-visible'
			: 'circle-clip-hidden'}"
	>
		<a
			class="hover:bg-oglala-600 flex items-center rounded-sm px-8 py-2"
			href="/"
			onclick={() => (out = false)}>My Work</a
		>
		<Divider horizontal />
        <a
            class="hover:bg-oglala-600 flex items-center rounded-sm px-8 py-2"
            href="/about"
            onclick={() => (out = false)}>About</a
        >
        <Divider horizontal />
        <a
            class="hover:bg-oglala-600 flex items-center rounded-sm px-8 py-2"
            href="/contact"
            onclick={() => (out = false)}>Contact</a
        >
        <div class="flex-1"></div>
		<h2 class=" text-2xl name text-center">Murray Copps Portfolio</h2>
        
	</div>
</header>

<style>
	.name {
		font-family: 'Grechen Fuemen';
	}
	.circle-clip-hidden {
		clip-path: circle(0% at 0 0);
	}

	.circle-clip-visible {
		clip-path: circle(150% at 0 0);
	}
	* {
		transition: all 0.5s ease-in-out;
	}
	.top-rotate {
		transform: rotate(30deg);
	}
	.bottom-rotate {
		transform: rotate(-30deg);
	}
	.top-18 {
		top: 4.5rem;
	}
</style>
