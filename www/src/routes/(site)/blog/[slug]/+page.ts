import type { PageLoad } from "./$types";
import type { PostModule } from "$lib/blog";
import { error } from "@sveltejs/kit";

const posts = import.meta.glob<PostModule>("/src/blog/*/post.mdx", { eager: true });
const entries = Object.entries(posts)
  .map(([path, post]) => {
    const slug = path.split("/").at(-2)!;
    return [
      slug,
      post,
    ] as const
  });

export const load: PageLoad = async ({ params }) => {
  const post = entries.find(([slug]) => slug == params.slug)?.[1];

  if (!post) {
    error(404, "post not found");
  }

  return {
    post,
  };
};
