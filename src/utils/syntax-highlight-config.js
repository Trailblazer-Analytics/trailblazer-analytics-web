// Custom syntax highlighting configuration
import { defineConfig } from 'astro/config';

// Add custom language aliases for languages that Prism doesn't recognize
const customLanguages = {
  'm': 'clike',          // Alias m to C-like syntax
  'tableau': 'javascript', // Alias tableau to JavaScript syntax
};

export default defineConfig({
  markdown: {
    syntaxHighlight: 'prism',
    // Custom language handling
    prism: {
      // Custom language support
      customLanguages: Object.entries(customLanguages).map(([lang, alias]) => ({
        languageName: lang,
        extend: alias,
      })),
    },
  },
});
