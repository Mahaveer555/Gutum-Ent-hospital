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
          DEFAULT: '#C92032',
          dark: '#8F1020',
          50: '#FFF5F5',
          100: '#FFE3E5',
          200: '#FFC7CC',
          300: '#FFA1A8',
          400: '#FF6D78',
          500: '#C92032',
          600: '#B0182A',
          700: '#8F1020',
          800: '#6E0B17',
          900: '#4D050D',
        },
        medicalnavy: {
          DEFAULT: '#102A43',
          light: '#243B53',
          dark: '#0B1D33',
        },
        softblue: '#F3F7FA',
        bordergrey: '#E2E8F0',
        whatsappgreen: '#25D366',
        rosebg: '#FFF5F5',
        roseborder: '#FFE3E5',
        hospitalgrey: '#F3F7FA',
        darkheading: '#102A43',
        bodytext: '#334E68',
        successgreen: '#25D366',
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
        heading: ['Plus Jakarta Sans', 'sans-serif'],
      },
      borderRadius: {
        'card': '18px',
        'xl2': '24px',
      },
      boxShadow: {
        'hospital': '0 8px 30px rgba(16, 42, 67, 0.04), 0 4px 12px rgba(201, 32, 50, 0.03)',
        'hospital-lg': '0 16px 36px rgba(16, 42, 67, 0.08), 0 8px 24px rgba(201, 32, 50, 0.06)',
        'red-btn': '0 6px 20px rgba(201, 32, 50, 0.3)',
      }
    },
  },
  plugins: [],
}
