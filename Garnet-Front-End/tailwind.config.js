/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        body: ['Manrope', 'system-ui', 'sans-serif'],
      },
      colors: {
        garnet: {
          ink: 'var(--garnet-ink)',
          muted: 'var(--garnet-muted)',
          cream: 'var(--garnet-cream)',
          warm: 'var(--garnet-warm)',
          line: 'var(--garnet-line)',
          accent: 'var(--garnet-accent)',
          accentSoft: 'var(--garnet-accent-soft)',
        },
      },
      boxShadow: {
        garnet: 'var(--garnet-shadow)',
      },
    },
  },
  plugins: [],
}
