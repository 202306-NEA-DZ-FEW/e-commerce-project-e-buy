/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      colors: {
        EBuyYellow: "#FDC761",
        EBuyBlue: "#3FDEFF",
        EBuyTurquoise: "#61FFC7",
        EBuyOrange: "#FFC761",
        EBuyDeepOrange: "#FFA461 ",
        EBuyLightBlue: "#61BFFF",
        EBuyGray: "#3F4646",
      },
      fontFamily: {
        causten: ["Causten", "sans-serif"],
        core: ["Core Sans C", "sans"],
        lucky: ["Luckiest Guy", "cursive"],
        lato: ["Lato", "sans-serif"],
        open: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
}
