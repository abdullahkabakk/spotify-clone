module.exports = {
  jit: true,
  darkMode: "class",
  plugins: [
    require('tailwindcss-dark-mode')()
  ],
  theme: {
    darkSelector: '.dark-mode',
  },
  variants: {
    extend: {
      display: ["group-hover"],
    },
  },
}