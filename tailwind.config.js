module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderWidth: {
        3: '3px'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
