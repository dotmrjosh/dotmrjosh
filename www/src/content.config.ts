import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  // Load Markdown and MDX files in the `src/content/blog/` directory.
  loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
  // Type-check frontmatter using a schema
  schema: ({ image }) => {
    const heroOrGradient = z.union([
      z.object({
        heroImage: image(),
      }),
      z.object({
        gradient: z.string().array(),
      }),
    ]);
    return z
      .object({
        title: z.string(),
        description: z.string(),
        // Transform string to Date object
        published: z.coerce.date(),
      })
      .and(heroOrGradient);
  },
});

export const collections = { blog };
