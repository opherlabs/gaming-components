import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '25%': { transform: 'translate(150px, -100px) rotate(90deg)' },
          '50%': { transform: 'translate(-100px, 200px) rotate(180deg)' },
          '75%': { transform: 'translate(-150px, -150px) rotate(270deg)' },
        }
      },
      animation: {
        'float': 'float 40s ease-in-out infinite',
      },
      
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
