import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#ea580c",   /* Orange-600 */
          light: "#f97316",     /* Orange-500 */
          dark: "#c2410c",      /* Orange-700 */
        },
        accent: {
          DEFAULT: "#D4AF37",
          light: "#dfc260",
          dark: "#a6851e",
        },
        secondary: "#FFFFFF",
        textMain: "#1F2937",
        bgLight: "#F8FAFC",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-outfit)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
