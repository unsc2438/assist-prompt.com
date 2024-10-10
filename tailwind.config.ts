import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    colors: {
      transparent: "transparent",
      black: "hsl(0, 0%, 9%, 0.8)",
      white: "hsl(0, 0%, 96%, 0.8)",
      green: "hsla(140, 71%, 45%, 0.8)",
      yellow: "hsla(45, 85%, 47%, 0.8)",
      red: "hsla(0, 82%, 60%, 0.8)"
    }
  },
  plugins: [tailwindcssAnimate]
};

export default config;
