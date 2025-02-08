import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      images: {
        unoptimized: true,
      },
     
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'], // Define roboto font
      },
      colors: {
        background: "var(--background)", // Custom background color
        foreground: "var(--foreground)", // Custom foreground color
      },
      fontWeight: {
        thin: '100',
        hairline: '100',
        extralight: '200',
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      }, // <-- Added closing brace here
    },
  },
  plugins: [],
};

export default config;

