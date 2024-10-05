import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "phone-background": "url('/src/assets/phone/default_wallpaper.webp')"
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        "tjmad-red": "#c43540",
        "tjmad-blue": "#15204a"
      }
    },
  },
  plugins: [],
}

