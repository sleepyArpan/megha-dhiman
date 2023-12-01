import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        white: "#fdfaf9",
        pale: "#f9ecea",
        light: "#e7b7ad",
        med: "#733302",
        dark: "#371710",
      },
      boxShadow: ({ theme }) => ({
        highlight: `inset 0 -2px 0 ${theme("colors.light")}`,
      }),
    },
  },
  plugins: [],
} satisfies Config;
