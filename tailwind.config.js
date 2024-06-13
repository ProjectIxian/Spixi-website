/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./node_modules/flowbite/**/*.js",
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    colors: {
      'spixi': '#17334F',
      'spixi-dark': '#F0F2F4'
    },
    fontFamily: {
      'lexend': ['Lexend', 'sans-serif'],
    },
    letterSpacing: {
      'hero': '-1.92px',
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'),
  ],
  darkMode: 'class',
}

