/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.astro"],
  theme: {
    extend: {
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
        "6xl": "3rem",
        "7xl": "3.5rem",
        "8xl": "4rem",
        "9xl": "4.5rem",
        "10xl": "5rem",
      },
    },
  },
  plugins: [],
};
