<script lang="ts">
  import type { PostModule } from "$lib/blog";

  const posts = import.meta.glob<PostModule>("/src/blog/*", { eager: true });
  const entries = Object.entries(posts).sort(([a], [b]) => +(a < b));
</script>

<ul class="flex flex-col gap-2">
  {#each entries as [path, { metadata: post }] (path)}
    {@const slug = path.split("/").at(-1)!.split(".").at(0)!}
    {@const published = new Date(slug)}
    <li class="group first:col-span-2">
      <a href={`/blog/${slug}/`}>
        <article class="group flex justify-between items-center gap-2">
          <h2 class="truncate shrink-0 leading-none font-semibold">{post.title}</h2>
          <hr class="border-b dark:border-zinc-600 border-zinc-400 w-full" />
          <time class="text-sm opacity-40" datetime={published.toISOString()}>
            {published.toLocaleDateString()}
          </time>
        </article>
      </a>
    </li>
  {/each}
</ul>
