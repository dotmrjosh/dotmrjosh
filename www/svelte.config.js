import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { mdsvex } from "mdsvex";
import adapter from "@sveltejs/adapter-cloudflare";
import { resolve } from "node:path";

/** @type {import("@sveltejs/kit").Config} */
const config = {
  preprocess: [
    vitePreprocess(),
    mdsvex({
      extensions: [".svx", ".md", ".mdx"],
      layout: resolve("./src/lib/components/mdsvex/Layout.svelte"),
    }),
  ],
  kit: {
    adapter: adapter(),
    alias: {
      blog: "./src/blog",
    },
  },
  extensions: [".svelte", ".svx", ".md", ".mdx"],
};

export default config;
