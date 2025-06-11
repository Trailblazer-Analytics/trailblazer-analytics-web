import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";

// Add custom language aliases for languages that Prism doesn't recognize
const customLanguages = {
  'm': 'clike',          // Alias m to C-like syntax
  'tableau': 'javascript', // Alias tableau to JavaScript syntax
};

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
  })],
  output: "static",
  site: "https://www.trailblazeranalytics.com",
  base: "/",  build: {
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
    // Custom language handling for syntax highlighting
    prism: {
      handleMissingLanguage: true, // Don't warn for missing languages
    }
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
