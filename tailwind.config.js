/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/index.html",        // Path to your main HTML file in the `src` folder
    "./src/**/*.{html,js}",    // All HTML and JS files in the `src` folder
  ],
  theme: {
    extend: {
      colors: {
        'zulasLightPink': '#FFE7F3',
        'zulasDarkerPink': '#EFA0CB',
      },
    }
  },
  plugins: [],
}

