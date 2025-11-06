// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./utils/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Add custom colors from DEVELOPMENT_PLAN.md
      colors: {
        primary: "#ff6b35",
        light: "#fff",
        dark: "#000",
      },
      // Add custom fonts from DEVELOPMENT_PLAN.md
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
        agdasima: ["Agdasima", "sans-serif"],
        petrona: ["Petrona", "serif"],
        serif: ['"Playfair Display"', 'serif'],
      },
    },
  },
  // Add plugins from package.json
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};
export default config;
