/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        md: {
          background: '#FFFBFE',
          onBackground: '#1C1B1F',
          primary: '#6750A4',
          onPrimary: '#FFFFFF',
          secondary: '#E8DEF8',
          onSecondary: '#1D192B',
          tertiary: '#7D5260',
          surfaceContainer: '#F3EDF7',
          surfaceContainerLow: '#E7E0EC',
          outline: '#79747E',
          surfaceVariant: '#49454F'
        }
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      transitionTimingFunction: {
        'md-emphasized': 'cubic-bezier(0.2, 0, 0, 1)',
      }
    },
  },
  plugins: [],
}

