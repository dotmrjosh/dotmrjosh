import type { PageLoad } from "./$types";
import type { PostModule } from "$lib/blog";
import { error } from "@sveltejs/kit";

export const load: PageLoad = async ({ params }) => {
  const post = await (import(/* @vite-ignore */ `/src/blog/${params.slug}/post.mdx`).catch((err) => err) as Promise<PostModule | Error>);

  if (post instanceof Error) {
    console.log(post);
    error(404, "post not found");
  }

  return {
    post,
  };
};
