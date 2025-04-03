import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF6363",
      },

      screens: {
        "3xs": "350px",
        "2xs": "480px",
        xs: "576px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1200px",
        "2xl": "1440px",
        "3xl": "1600px",
        "4xl": "1800px",
      },

      fontFamily: {
        regular: ["europa-grotesk-regular", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
