<script lang="ts">
  import type { HTMLAnchorAttributes } from "svelte/elements";
  import type { Snippet } from "svelte";

  let { href, children, ...restProps }: HTMLAnchorAttributes & { children: Snippet } = $props();

  const isExternal = $derived(href?.startsWith("http://"));
  const target = $derived(isExternal ? "_blank" : undefined);
</script>

<a {href} {target} {...restProps}>
  {@render children?.()}
</a>
