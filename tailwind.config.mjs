/**
 * Use a plain object export for Tailwind config in Astro projects.
 * The defineConfig helper is not required and can cause issues with some setups.
 */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx}"],  theme: {
    extend: {
      colors: {
        // Trailblazer Analytics Brand Colors
        trailblazerGreen: "#004225",    // Primary background / brand base
        brandGreen: "#004225",          // Alias for backwards compatibility
        goldAccent: "#CFAF60",          // Highlights, compass points
        brandGold: "#CFAF60",           // Alias for backwards compatibility
        ivorySand: "#F7F2E7",          // Interior background fill
        deepGraphLine: "#1D2E26",       // Chart and line iconography
        softBlack: "#111111",           // Typography on light backgrounds
        mutedWhite: "#FAFAFA"           // Typography on dark backgrounds
      }
    }
  },
  plugins: []
};
