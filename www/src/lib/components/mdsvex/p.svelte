<script lang="ts">
  import type { Snippet } from "svelte";

  let { children, ...restProps }: { children: Snippet } = $props();
</script>

<p class="relative" {...restProps}>
  {@render children?.()}
</p>
