/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customColor: 'hsl(231, 20%, 61%)',
        lightPurple: '#f9f8fb',
        lightPeach: '#fef8f1',
      },
    },
  },
  plugins: [],
}

