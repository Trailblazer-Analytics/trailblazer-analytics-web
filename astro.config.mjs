import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";

// Check if we're building for GitHub Pages (production)
const isProd = process.env.NODE_ENV === 'production' || process.env.GITHUB_ACTIONS;

export default defineConfig({
  integrations: [react(), tailwind(), mdx()],
  output: "static",
  site: "https://anykolaiszyn.github.io",
  base: isProd ? "/trailblazer-analytics-devkit" : "/",
  trailingSlash: "ignore"
});
