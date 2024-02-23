import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "main-custom-a": "#FF3300",
        "main-custom-b": "#FF9500",
        "main-custom-c": "#FFC300",
        "main-custom-d": "#646464",
        "main-custom-e": "#cccccc",
      },
    },
    transitionProperty: {
      height: "height",
    },
  },
  plugins: [],
};
export default config;
