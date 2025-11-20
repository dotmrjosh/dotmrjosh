<script lang="ts">
  import { page } from "$app/state";

  type Props = {
    title?: string;
    description?: string;
    img?: string | URL;
  };

  const { title = "dotmrjosh", description = "just trying to make the unvrs a little nicer", img }: Props = $props();
</script>

<!-- Primary Meta Tags -->
<title>{title}</title>
<meta name="title" content={title} />
<meta name="description" content={description} />

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website" />
<meta property="og:url" content={page.url.toString()} />
<meta property="og:title" content={title} />
<meta property="og:description" content={description} />
{#if img}
  <meta property="og:image" content={img.toString()} />
{/if}

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:url" content={page.url.toString()} />
<meta property="twitter:title" content={title} />
<meta property="twitter:description" content={description} />
{#if img}
  <meta property="twitter:image" content={img.toString()} />
{/if}
