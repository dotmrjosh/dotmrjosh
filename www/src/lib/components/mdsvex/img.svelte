<script lang="ts">
  import type { HTMLImgAttributes } from "svelte/elements";
  import type { Snippet } from "svelte";

  let { src, alt: config, ...restProps }: HTMLImgAttributes & { children: Snippet } = $props();
  const resolvedSrc = src;
  const alt = config?.split(':').at(0);
  const classes = config?.split(':').at(1);
</script>

<img class={classes} src={resolvedSrc} alt={alt} {...restProps} />
