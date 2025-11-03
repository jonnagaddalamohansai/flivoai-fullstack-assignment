/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        flivoBlue: "#2563eb",
        heroTop: "#e9f6ff",
        heroBottom: "#bde4ff"
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"]
      },
      boxShadow: {
        'popup': '0 10px 30px rgba(2,6,23,0.15)'
      }
    },
  },
  plugins: [],
}
