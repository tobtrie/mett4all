const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        ...defaultTheme.fontFamily,
        hero: ['MetalMania']
      },
      backgroundImage: {
        eagle: "url(/img/Mett4All-Logo.svg)",
      },
    },
  },
  plugins: [],
};
