const flowbite = require("flowbite-react/tailwind");
// eslint-disable-next-line no-undef
const plugin = require('tailwindcss/plugin')
// eslint-disable-next-line no-undef
const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    flowbite.content(),
  ],
  extend: {
    colors: {
      "dark": {
        light: "#475569",
        DEFAULT: "#334158",
        dark: "#1e293b"
      },
      "light": {
        light: "",
        DEFAULT: "	#F8F8FF",
        dark: ""
      },
    },
  },
  plugins: [
    // ...
    flowbite.plugin(),
    plugin(function({ addBase, theme }) {
      addBase({
        'h1': { fontSize: theme('fontSize.2xl') },
        'h2': { fontSize: theme('fontSize.xl') },
        'h3': { fontSize: theme('fontSize.lg') },
      })
    }),

  ],
};

