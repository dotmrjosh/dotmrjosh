import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { mdsvex } from "mdsvex";
import adapter from "@sveltejs/adapter-cloudflare";
import { resolve } from "node:path";

// Remark plugins
import headerIds from "./src/lib/components/mdsvex/plugins/header-ids.js";

/** @type {import("@sveltejs/kit").Config} */
const config = {
  preprocess: [
    vitePreprocess(),
    mdsvex({
      extensions: [".svx", ".md", ".mdx"],
      layout: resolve("./src/lib/components/mdsvex/Layout.svelte"),
      remarkPlugins: [
        headerIds,
      ],
    }),
  ],
  kit: {
    adapter: adapter(),
  },
  extensions: [".svelte", ".svx", ".md", ".mdx"],
};

export default config;
