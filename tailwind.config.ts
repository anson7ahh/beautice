import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        mobile: "572px",
        tablet: "995px",
        ipadMini: "1200px",
        desktop: "1440px",
      },
      container: {
        center: true,
        screens: {
          mobile: "572px",
          tablet: "990px",
          ipadMini: "1200px",
          desktop: "1440px",
        },
      },

      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        darkblue: "#091156",
        darkgray: "#8b8b8b",
        darkslateblue: "#41487F",
        vividpink: "#FF64AE",
      },
      fontFamily: {
        poppins: "Poppins, sans-serif, -apple-system",
        serif: ["Source\\ Serif\\ 4", "ui-serif", "serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
