/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "#18181b", // dark gray
          light: "#27272a",
        },
        foreground: {
          DEFAULT: "#f4f4f5", // light gray for text
        },
        accent: {
          DEFAULT: "#f59e42", // amber-like accent
        },
      },
    },
  },
  plugins: [],
};
