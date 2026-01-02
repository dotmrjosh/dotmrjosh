<script lang="ts">
  import type { PageProps } from "./$types";

  let { data }: PageProps = $props();
</script>

<ul class="flex flex-col gap-2">
  {#each data.posts as [slug, post] (slug)}
    <li class="group first:col-span-2">
      <a href={post.url}>
        <article class="group flex items-center justify-between gap-2">
          <h2 class="shrink-0 truncate leading-none font-semibold">{post.title}</h2>
          <hr class="w-full border-b border-zinc-400 dark:border-zinc-600" />
          <time class="whitespace-nowrap text-sm opacity-40" datetime={slug.toISOString()}>
            {slug.toLocaleDateString("en-AU", {
              weekday: "short",
              year: "numeric",
              month: "numeric",
              day: "numeric",
            })}
          </time>
        </article>
      </a>
    </li>
  {/each}
</ul>
