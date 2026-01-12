<script lang="ts">
  type Link = { label: string; href: string; target?: "_blank" };
  const nav: Link[] = [
    { label: "blog", href: "/blog" },
    // { label: "projects", href: "/projects" },
  ];

  const socials: Link[] = [
    { label: "git", href: "https://gitlab.com/dotmrjosh", target: "_blank" },
    { label: "twitch", href: "https://www.twitch.tv/dotmrjosh", target: "_blank" },
    { label: "bsky", href: "https://bsky.app/profile/dotmrjosh.dev", target: "_blank" },
    { label: "twitter", href: "https://twitter.com/dotmrjosh", target: "_blank" },
    { label: "linkedin", href: "https://www.linkedin.com/in/dotmrjosh/", target: "_blank" },
  ];
</script>

<nav class="flex flex-wrap gap-2 md:flex-col md:gap-1">
  <div class="flex gap-2">
    {#each nav as n}
      <a class="transition-colors text-zinc-600 hover:text-white" href={n.href} target={n.target}>
        {n.label}
      </a>
    {/each}
  </div>
  <div class="max-md:basis-full md:flex-col gap-2 flex">
    <div class="md:mt-7">
      <p>socials:</p>
    </div>
    {#each socials as s}
      <a class="transition-colors text-zinc-600 hover:text-white" href={s.href} target={s.target}>
        {s.label}
      </a>
    {/each}
  </div>
</nav>
