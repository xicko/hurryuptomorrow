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
      },
      animation: {
        subtleGlow: 'subtleGlow 5s infinite ease-in-out',
      },
    },
  },
  plugins: [],
} satisfies Config;
