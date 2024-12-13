/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: 'rgb(var(--primary-50) / <alpha-value>)',
          500: 'rgb(var(--primary-500) / <alpha-value>)',
          700: 'rgb(var(--primary-700) / <alpha-value>)',
        },
      },
    },
  },
  plugins: [],
};
