<script lang="ts">
  import Foot from "$lib/components/Foot.svelte";
  import Meta from "$lib/components/Meta.svelte";

  let { data } = $props();
</script>

<svelte:head>
  <Meta title={data.post.metadata.title} description={data.post.metadata.description} />
</svelte:head>

<div class="truncate">
  <a class="text-zinc-400 transition-colors hover:text-black dark:text-zinc-600 dark:hover:text-white" href="/blog">blog</a>
  <span>/</span>
  <span>{data.post.metadata.title}</span>
</div>
<p class="text-zinc-400 dark:text-zinc-600">{data.post.metadata.description}</p>
<main class="prose dark:prose-invert prose-zinc z-10 mt-14 max-w-none">
  <data.post.default />
</main>
<Foot />
