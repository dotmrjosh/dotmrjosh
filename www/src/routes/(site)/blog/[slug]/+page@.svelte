<script lang="ts">
  import Foot from "$lib/components/Foot.svelte";
  import Meta from "$lib/components/Meta.svelte";

  let { data } = $props();
</script>

<svelte:head>
  <Meta title={data.post.metadata.title} description={data.post.metadata.description} />
</svelte:head>

<div class="truncate">
  <a class="transition-colors text-zinc-600 hover:text-white" href="/blog">blog</a>
  <span>/</span>
  <span>{data.post.metadata.title}</span>
</div>
<p class="text-zinc-600">{data.post.metadata.description}</p>
<main
  class={[
    "z-10 mt-14 max-w-none",
    "prose prose-invert prose-zinc",
    "prose-code:before:content-none prose-code:after:content-none",
    "prose-blockquote:prose-p:before:content-none prose-blockquote:prose-p:after:content-none",
  ]}
>
  <data.post.default />
</main>
<Foot />
