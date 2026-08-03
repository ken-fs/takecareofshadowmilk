/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      // Sampled from the game's own sprites — rationale in globals.css.
      colors: {
        ink: {
          DEFAULT: '#0b1026',
          deep: '#060a18',
          raised: '#141b3a',
        },
        ice: '#8fe9ff',
        diamond: '#1e7fe0',
        bone: '#f4f1e4',
        blush: '#ff6e9c',
        meter: '#b6f34a',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        body: ['var(--font-body)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
} 