/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // ✅ covers all inside src
  ],
  theme: {
    extend: {},
  },
  plugins: [
    daisyui
  ],
}


