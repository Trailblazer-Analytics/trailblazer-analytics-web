import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  integrations: [react(), tailwind(), mdx({
    remarkPlugins: [],
    rehypePlugins: [],
    remarkRehype: {
      // Suppress warnings about duplicate IDs
      clobberPrefix: '',
      footnoteLabel: 'Footnotes',
      footnoteBackLabel: 'Back to content',
      // Silence warnings from unknown directives
      passThrough: ['mdxJsxFlowElement', 'mdxJsxTextElement']
    }
  }), sitemap()],
  output: "static",
  site: "https://www.trailblazeranalytics.com",
  base: "/",
  image: {
    // Enable AVIF and WebP formats for local images
    formats: ['avif', 'webp'],
  },
  build: {
    assets: `assets-${Date.now()}`,
  },  markdown: {
    // Suppress rehype warnings
    syntaxHighlight: 'prism',
    // Disable warnings for the external links
    gfm: false,
    smartypants: true,
    rehypePlugins: [],
    remarkPlugins: [],
    remarkRehype: { 
      footnoteLabel: 'Footnotes',
      footnoteBackLabel: 'Back to content',
      // Suppress warnings about duplicate IDs
      clobberPrefix: ''
    },
  },
  // Exclude docs folder from processing to reduce warnings
  excludeFiles: {
    content: ['docs/**/*'],
    blogEntryImportGlob: ['!docs/**/*']
  },
  vite: {
    logLevel: 'warn', // Reduce verbose logging
    build: {
      // Suppress "large chunk" warnings
      chunkSizeWarningLimit: 1000,
    },
  },
});
