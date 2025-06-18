<script lang="ts">
    import PagePreview from './PagePreview.svelte';
    import { websites } from '$lib/websites';
</script>
<div class="flex flex-col inset-0 fixed pt-20 overflow-auto ">
    <div></div>
    <div class="flex-1 grid grid-cols-3 gap-4">
        {#each websites as website}
            <PagePreview 
                name={website.name}
                description={website.description}
                image={website.image}
                url={website.url}
                githubUrl={website.github}
            />
        {/each}
    </div>
</div>