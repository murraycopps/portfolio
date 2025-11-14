<script lang="ts">
    import PagePreview from './PagePreview.svelte';
    import { websites } from '$lib/websites';
	import MovingShoes from './MovingShoes.svelte';
</script>
<div class="flex flex-col inset-0 gap-16 fixed pt-80 overflow-auto text-white">
    <div class="grid grid-cols-3 gap-8 p-8 intro">
        <div class="h-full flex col-span-2 flex-col gap-8">
            <h1 class="text-7xl font-bold">Welcome to My Portfolio</h1>
            <p class="text-3xl">
                Here is a collection of my recent projects. These showcase my best work and my skills using a variety of technologies.
            </p>
        </div>
        </div>
    <div class="relative flex-1 grid grid-cols-2 gap-8 p-8">
        <div class="absolute col-start-2 w-1/2 right-1/4 top-6">
            <MovingShoes />
        </div>
        {#each websites as website}
            <PagePreview 
                name={website.name}
                description={website.description}
                image={website.image}
                url={website.url}
                githubUrl={website.github}
                type={website.type || "Project"}
                longdescription={website.longdescription || "" }
            />
        {/each}
    </div>
</div>

<style>
    .intro {
        height: max(300px, calc(100vh - 10rem));
    }
</style>