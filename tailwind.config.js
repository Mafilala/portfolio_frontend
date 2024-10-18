/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#AF0A13",
        heading: "#5E3BEE",
        primaryLight: "#C3484E",
        footerBg: "#F5E1E2",
      },
      textColor: {
        "primary-text": "#333333",
        "secondary-text": "#666666",
      },
    },
  },

  plugins: [],
};
