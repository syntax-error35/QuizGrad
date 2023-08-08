/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#FCC822",
        correct: "#45C486",
        wrong: "#A40021",
        pagebg: "#EDE8E3",
        question: "#191D63",
      }
    },
  },
  plugins: [],
}

