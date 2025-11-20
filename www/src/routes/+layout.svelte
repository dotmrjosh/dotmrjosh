<script lang="ts">
  import "$lib/style.css";
  import "@fontsource-variable/gabarito";

  import Grain from "$lib/components/effects/Grain.svelte";
  import favicon from "$lib/assets/favicon.svg";

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

<div class="relative isolate flex min-h-screen justify-center overflow-x-clip dark:bg-zinc-800 dark:text-white">
  <Grain />
  <div class="min-h-screen w-full max-w-4xl px-7 lg:px-0">
    <header class="py-4 lg:py-7">
      <h1>
        <a class="text-7xl text-zinc-400 transition-colors hover:text-black dark:text-zinc-600 dark:hover:text-white" href="/">dotmrjosh</a>
      </h1>
    </header>
    {@render children()}
  </div>
</div>
