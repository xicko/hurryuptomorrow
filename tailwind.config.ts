import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        subtleGlow: {
          '0%, 100%': {
            textShadow: '0 0 8px rgba(192, 17, 1, 0.5), 0 0 12px rgba(192, 17, 1, 0.4), 0 0 18px rgba(192, 17, 1, 0.3)',
            
          },
          '50%': {
            textShadow: '0 0 4px rgba(192, 17, 1, 0.3), 0 0 8px rgba(192, 17, 1, 0.2), 0 0 12px rgba(192, 17, 1, 0.1)',
            
          },
        },
        rotateY: {
          "0%": { transform: "rotateY(0deg)" },
          "100%": { transform: "rotateY(360deg)" },
        },
        fadeInOut: {
          '0%': { opacity: '1' },
          '35%': { opacity: '0.8' },
          '50%': { opacity: '0.2' },
          '65%': { opacity: '0.8' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        subtleGlow: 'subtleGlow 5s infinite ease-in-out',
        rotateY: "rotateY 13s linear infinite",
        fadeInOut: "fadeInOut 6.5s ease-in-out infinite",
      },
      rotate: {
        'y-0': 'rotateY(0deg)',
        'y-180': 'rotateY(180deg)',
      },
    },
  },
  plugins: [],
} satisfies Config;
