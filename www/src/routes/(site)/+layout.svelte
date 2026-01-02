<script lang="ts">
  import Nav from "$lib/components/Nav.svelte";
  import Foot from "$lib/components/Foot.svelte";

  let { children } = $props();
</script>

<div class="grid md:grid-cols-[14rem_1fr]">
  <div>
    <Nav />
  </div>
  <main class="z-10 mt-7 md:mt-0">
    {@render children()}
  </main>
  <Foot />
</div>
