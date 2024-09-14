/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        slideIn: 'slideIn 0.2s ease-out forwards',
        fadeIn: 'fadeIn 0.3s ease-in-out',
      },
      scrollbar: {
        none: 'scrollbar-width: none; -ms-overflow-style: none;',
      },
      colors: {
        background: {
          DEFAULT: "hsl(var(--background))",
          primary: "#ededed",
        },
      },
    },
  },
  plugins: [],
};