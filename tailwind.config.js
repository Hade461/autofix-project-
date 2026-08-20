/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        asphalt: '#17181A',
        steel: '#232426',
        chrome: '#9A9DA3',
        bone: '#F2EEE6',
        torque: '#FF5A1F',
        gauge: '#3CCB7F',
      },
      fontFamily: {
        display: ['"Tajawal"', '"Oswald"', 'sans-serif'],
        body: ['"Tajawal"', '"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
