/** @type {import('tailwindcss').Config} */

import withMT from "@material-tailwind/react/utils/withMT";

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        myBlue: {
          50: "#51adcf",
        },
        primaryColor: "#0C1E4B",
        subColor: "#FFD600",
        textColor: "#2e2e2e",
        textDarkMode: "#FFFFFF",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
});
