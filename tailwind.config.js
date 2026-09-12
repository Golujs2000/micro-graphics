/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mg-cyan': {
          DEFAULT: '#00a4e4',
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#00a4e4',
          600: '#0284c7',
          700: '#0369a1',
        },
        'mg-gold': {
          DEFAULT: '#fcba03',
          light: '#fde047',
          amber: '#f59e0b',
          dark: '#d97706',
        },
        'mg-magenta': {
          DEFAULT: '#e11d48',
          hover: '#be123c',
          light: '#ffe4e6',
        },
        'mg-navy': {
          DEFAULT: '#0b132b',
          dark: '#070b19',
          light: '#1c2541',
        },
        'mg-slate': {
          DEFAULT: '#0f172a',
          card: '#1e293b',
          muted: '#64748b',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'glow-cyan': '0 0 25px -5px rgba(0, 164, 228, 0.4)',
        'glow-gold': '0 0 25px -5px rgba(252, 186, 3, 0.4)',
        'card-hover': '0 20px 35px -10px rgba(11, 19, 43, 0.12), 0 8px 10px -6px rgba(11, 19, 43, 0.08)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
