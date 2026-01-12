<script lang="ts" module>
  export { default as a } from "./a.svelte";
  export { default as img } from "./img.svelte";
  export { default as p } from "./p.svelte";
</script>

<script lang="ts">
  let { children } = $props();
</script>

{@render children?.()}
