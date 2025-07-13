/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",        // Path to your main HTML file in the `src` folder
    "./src/**/*.{html,js}",    // All HTML and JS files in the `src` folder
  ],
  theme: {
    extend: {
      colors: {
        'zulasPink': '#eba0c6'
      },
    }
  },
  plugins: [],
}

