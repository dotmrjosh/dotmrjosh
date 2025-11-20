import type { PageLoad } from "./$types";
import type { PostModule } from "$lib/blog";

export const load: PageLoad = async ({ params }) => {
  const post = await (import(`../../../../blog/${params.slug}.mdx`) as Promise<PostModule>);

  return {
    post,
  };
};
