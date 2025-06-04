/**
 * Use a plain object export for Tailwind config in Astro projects.
 * The defineConfig helper is not required and can cause issues with some setups.
 */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx}"],
  theme: {
    extend: {
      colors: {
        brandGreen: "#008F55",
        brandGold: "#CFB53B"
      }
    }
  },
  plugins: []
};
