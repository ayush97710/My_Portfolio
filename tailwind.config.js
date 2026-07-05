/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#0A0A0A',
        cyan: {
          neon: '#00EEFF'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px #00EEFF, 0 0 10px #00EEFF' },
          '100%': { boxShadow: '0 0 20px #00EEFF, 0 0 30px #00EEFF' },
        }
      }
    },
  },
  plugins: [],
}
