/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Aarogyam Medical Red Theme (#ef2028)
        medicalred: {
          DEFAULT: '#ef2028',
          dark: '#cf131b',
          darker: '#b5121b',
          deep: '#7d0b12',
          bright: '#ef2028',
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef2028',
          600: '#e31b23',
          700: '#cf131b',
          800: '#b5121b',
          900: '#7d0b12',
        },
        // Aarogyam Charcoal & Slate Neutrals
        medicalnavy: {
          DEFAULT: '#171717',
          light: '#262626',
          dark: '#0f0f0f',
        },
        // Warm Hospital Canvas (Aarogyam #faf9f7)
        warmbg: '#faf9f7',
        warmsurface: '#f7f6f3',
        warmcard: '#ffffff',
        hospitalgrey: '#faf9f7',
        softblue: '#f7f6f3',
        bordergrey: '#e5e2dc',
        
        // Brand & System Tokens
        whatsappgreen: '#25D366',
        rosebg: '#fef2f2',
        roseborder: '#fee2e2',
        darkheading: '#171717',
        bodytext: '#404040',
        successgreen: '#25D366',

        // Legacy Fallback Mappings (fixes all legacy components)
        medical: {
          DEFAULT: '#ef2028',
          dark: '#b5121b',
        },
        coral: {
          DEFAULT: '#ef2028',
          hover: '#cf131b',
        },
        teal: {
          DEFAULT: '#171717',
          hover: '#262626',
          700: '#0f0f0f',
        },
        aqua: '#fef2f2',
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
        'hospital': '0 8px 30px rgba(0, 0, 0, 0.04), 0 4px 12px rgba(239, 32, 40, 0.04)',
        'hospital-lg': '0 16px 36px rgba(0, 0, 0, 0.08), 0 8px 24px rgba(239, 32, 40, 0.06)',
        'red-btn': '0 8px 25px rgba(239, 32, 40, 0.35)',
        'medical': '0 8px 30px rgba(239, 32, 40, 0.08)',
      }
    },
  },
  plugins: [],
}
