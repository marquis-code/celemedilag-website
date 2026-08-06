/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Clash Display Variable', 'sans-serif'],
        body: ['Satoshi', 'sans-serif'],
      },
      colors: {
        skyBlue: '#87CEEB',
        royalBlue: '#4169E1',
        gold: '#FFD700',
      }
    },
  },
  plugins: [],
}
