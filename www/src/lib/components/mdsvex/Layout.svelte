<script lang="ts" module>
  export { default as a } from "./a.svelte";
</script>

<script lang="ts">
  let { children } = $props();
</script>

{@render children?.()}
