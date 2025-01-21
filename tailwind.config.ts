import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "main-bg": "#2a3447",
        "soft-bg": "#384256",
        "dark-bg": "#222b3c",
        "main-color": "#ffffff",
        "soft-color": "#dddddd",
        "dark-color": "#2a3447",
      },
    },
  },
  plugins: [],
} satisfies Config;
