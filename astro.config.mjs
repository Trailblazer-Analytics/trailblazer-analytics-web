import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";

export default defineConfig({
  integrations: [react(), tailwind(), mdx()],
  output: "static",
  site: "https://anykolaiszyn.github.io/trailblazer-analytics-devkit",
  base: "/trailblazer-analytics-devkit",
  trailingSlash: "always",
  build: {
    assetsPrefix: "/trailblazer-analytics-devkit",
  }
});
