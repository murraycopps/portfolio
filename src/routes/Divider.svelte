<script>
	export let horizontal = false;
</script>

{#if horizontal}
	<div class="my-auto h-0.5 w-2/3 rounded-sm"></div>
{:else}
	<div class="ver my-auto h-10 rounded-sm"></div>
{/if}

<style>
	.ver {
		width: 2px;
	}

	div {
		background-color: currentColor;
	}
</style>
