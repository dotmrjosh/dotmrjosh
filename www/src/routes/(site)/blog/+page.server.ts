import type { PageServerLoad } from "./$types";
import type { PostModule } from "$lib/blog";

const posts = import.meta.glob<PostModule>("/src/blog/*/post.mdx", { eager: true });
const entries = Object.entries(posts)
  .map(([path, post]) => {
    const slug = path.split("/").at(-2)!;
    return [
      new Date(slug),
      {
        url: `/blog/${slug}`,
        ...post.metadata
      },
    ] as const
  })
  .sort(([a], [b]) => b.getTime() - a.getTime());

export const load: PageServerLoad = async () => {
  return {
    posts: entries,
  };
};
