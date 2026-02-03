/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#141414',
        'bg-secondary': '#2A2A2A',
        'accent': '#ff4606',
        'accent-dark': 'rgb(181, 50, 7)',
        'text': '#F5F5F5',
        'text-muted': 'var(--color-text-muted)',
        'grid': 'rgba(232, 93, 63, 0.1)',
      },
      fontFamily: {
        'display': ['Space Grotesk', 'Chakra Petch', 'Archivo', 'sans-serif'],
        'body': ['Inter', 'IBM Plex Sans', 'sans-serif'],
        'mono': ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      screens: {
        'xs': '320px',
        'sm': '768px',
        'md': '1024px',
        'lg': '1440px',
      },
    },
  },
  plugins: [],
}
