/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        medicalred: {
          DEFAULT: '#D62828',
          dark: '#A4161A',
          bright: '#E63946',
          50: '#FFF1F2',
          100: '#FFE4E6',
          200: '#FFD6D9',
          600: '#E63946',
          700: '#D62828',
          800: '#A4161A',
          900: '#7A0C0E',
        },
        rosebg: '#FFF1F2',
        roseborder: '#FFD6D9',
        hospitalgrey: '#F7F8FA',
        darkheading: '#1F2937',
        bodytext: '#52606D',
        successgreen: '#16A085',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Manrope', 'Plus Jakarta Sans', 'sans-serif'],
      },
      borderRadius: {
        'card': '20px',
        'xl2': '24px',
      },
      boxShadow: {
        'hospital': '0 10px 30px -5px rgba(214, 40, 40, 0.08), 0 4px 12px rgba(164, 22, 26, 0.04)',
        'hospital-lg': '0 20px 40px -10px rgba(214, 40, 40, 0.14), 0 8px 20px rgba(164, 22, 26, 0.08)',
        'red-btn': '0 8px 20px -4px rgba(214, 40, 40, 0.35)',
      }
    },
  },
  plugins: [],
}
