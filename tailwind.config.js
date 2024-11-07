/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}", "./components/**/*.{ts,tsx,js,jsx}" ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'], // Add 'Inter' font family
      },
      fontSize: {
        p2: '16px', // Custom font size for P2
      },
      lineHeight: {
        p2: '24px', // Custom line height for P2
      },
    },
  },
  plugins: [],
}
  