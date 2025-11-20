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

<nav class="flex gap-7 md:flex-col md:gap-1">
  {#each nav as n}
    <a class="text-zinc-400 transition-colors hover:text-black dark:text-zinc-600 dark:hover:text-white" href={n.href} target={n.target}>
      {n.label}
    </a>
  {/each}
  <div class="mt-7">
    <p>socials</p>
  </div>
  {#each socials as s}
    <a class="text-zinc-400 transition-colors hover:text-black dark:text-zinc-600 dark:hover:text-white" href={s.href} target={s.target}>
      {s.label}
    </a>
  {/each}
</nav>
