<script lang="ts">
    import PagePreview from './PagePreview.svelte';
    import { websites } from '$lib/websites';
</script>
<div class="flex flex-col inset-0 fixed pt-20 overflow-auto ">
    <div class="flex-1 grid grid-cols-2 gap-8 p-8">
        {#each websites as website}
            <PagePreview 
                name={website.name}
                description={website.description}
                image={website.image}
                url={website.url}
                githubUrl={website.github}
                longdescription={website.longdescription || "" }
            />
        {/each}
    </div>
</div>