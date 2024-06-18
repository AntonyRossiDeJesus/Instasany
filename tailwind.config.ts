import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('../assets/bg-hero.svg')",
      },

      colors: {
        "green-primary": "#1d3531",
        "green-actived": "#5d8a83",
        "green-border": "#2a4b46",
        "green-btn": "#ccec60",
        "green-title-card": "#719d96",
      },

      maxWidth: {
        grid: "77.5rem",
        "text-hero": "66rem",
        "area-icons": "54.6rem",
        "area-mockups": "59.8rem",
        "area-cards": "82.5rem",
      },
      height: {
        "section-hero": "54.6rem",
        "area-cards": "35.1rem",
      },
    },
  },
  plugins: [],
};
export default config;
