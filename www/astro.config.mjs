// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: "https://dotmrjosh.dev",
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [sitemap(), mdx()],
  // adapter: cloudflare(),
});
