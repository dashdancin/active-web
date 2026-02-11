/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  safelist: [
    "bg-white",
    "bg-white/40",
    "scale-125",
    "opacity-0",
    "opacity-100"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
