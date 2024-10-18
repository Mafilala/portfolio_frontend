import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5E3BEE",
        heading: "#5E3BEE",
      },
      textColor: {
        "primary-text": "#333333",
        "secondary-text": "#666666",
      },
    },
  },
  plugins: [],
};
export default config;
