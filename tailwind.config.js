/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // --- Kridha Hospital Premium Healthcare Color Palette ---
        primary: {
          DEFAULT: '#1578c9',       // Signature Kridha Medical Royal Blue
          dark: '#0b5ea8',          // Deep Blue for hovers, headers, accents
          darker: '#084882',        // Ultra-deep navy blue
          light: '#3b98e0',         // Soft blue highlight
          50: '#f0f7fd',
          100: '#e0effa',
          200: '#b8daf6',
          300: '#8ec3f1',
          400: '#5ba6e9',
          500: '#1578c9',
          600: '#0b5ea8',
          700: '#084882',
          800: '#06335c',
          900: '#04223d',
        },
        secondary: {
          DEFAULT: '#2ea7a0',       // Medical Teal / Cyan Accent
          dark: '#248882',
          light: '#4ec1ba',
          50: '#f0faf9',
          100: '#d5f3f1',
        },
        // Emergency & Alert Red (Matching Kridha logo-red)
        'logo-red': {
          DEFAULT: '#e11d28',
          dark: '#b8141d',
          50: '#fef2f2',
          100: '#fee2e2',
        },
        // Star Ratings & Accents
        gold: {
          DEFAULT: '#f4b400',
          dark: '#d99500',
          light: '#ffd34d',
        },
        // Canvas & Surface Backgrounds (Clean Hospital Tone)
        'bg-soft': '#f5f8fc',       // Crisp icy hospital background
        'bg-muted': '#eef4f9',      // Subtle card & section surface
        'border-medical': '#d9e3ee',// Soft clinical border grey
        border: '#d9e3ee',

        // Typography
        text: {
          DEFAULT: '#1f2937',       // Dark slate gray body/headings
          light: '#6b7280',         // Muted gray secondary text
          dark: '#111827',          // Strong black-slate
        },

        // Brand & Functional Tokens
        whatsappgreen: '#25D366',
        successgreen: '#00a86b',

        // Backward compatibility mappings (keeps legacy classes working cleanly)
        medicalred: {
          DEFAULT: '#1578c9',
          dark: '#0b5ea8',
          darker: '#084882',
          bright: '#2ea7a0',
          50: '#f0f7fd',
          100: '#e0effa',
        },
        medicalnavy: {
          DEFAULT: '#0b2447',
          light: '#1f2937',
          dark: '#0a1424',
        },
        darkheading: '#1f2937',
        bodytext: '#4b5563',
        rosebg: '#f0f7fd',
        roseborder: '#d9e3ee',
        warmbg: '#f5f8fc',
        warmsurface: '#eef4f9',
        warmcard: '#ffffff',
        hospitalgrey: '#f5f8fc',
        softblue: '#f0f7fd',
        bordergrey: '#d9e3ee',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Manrope', 'sans-serif'],
        heading: ['Plus Jakarta Sans', 'sans-serif'],
      },
      borderRadius: {
        'card': '16px',
        'xl2': '24px',
      },
      boxShadow: {
        'hospital': '0 4px 20px -2px rgba(21, 120, 201, 0.08), 0 2px 6px -1px rgba(0, 0, 0, 0.04)',
        'hospital-lg': '0 12px 32px -4px rgba(21, 120, 201, 0.12), 0 4px 12px -2px rgba(0, 0, 0, 0.05)',
        'hospital-xl': '0 20px 40px -6px rgba(21, 120, 201, 0.16), 0 8px 16px -4px rgba(0, 0, 0, 0.06)',
        'blue-btn': '0 8px 24px rgba(21, 120, 201, 0.35)',
        'teal-btn': '0 8px 24px rgba(46, 167, 160, 0.35)',
        'red-btn': '0 8px 24px rgba(225, 29, 40, 0.30)',
      }
    },
  },
  plugins: [],
}
