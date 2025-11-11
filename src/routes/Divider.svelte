<script>
	export let horizontal = false;
</script>
{#if horizontal}
<div class="w-2/3 h-0.5 my-auto rounded-sm" />
{:else}
<div class="h-10 ver my-auto rounded-sm" />
{/if}

<style>
	.ver{
		width: 2px;
	}

	div {
		background-color: currentColor;
	}
</style>
