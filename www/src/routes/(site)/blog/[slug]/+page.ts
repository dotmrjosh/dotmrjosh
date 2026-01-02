import type { PageLoad } from "./$types";
import type { PostModule } from "$lib/blog";
import { error } from "@sveltejs/kit";

export const load: PageLoad = async ({ params }) => {
  const post = await (import(`../../../../blog/${params.slug}.mdx`).catch(() => new Error("Not found")) as Promise<PostModule | Error>);

  if (post instanceof Error) {
    error(404, "post not found");
  }

  return {
    post,
  };
};
