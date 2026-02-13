/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'kshanika-navy': '#1e3a8a',
        'kshanika-gold': '#d4af37',
        'wedding-gold': '#C5A059',
        'wedding-bronze': '#9D7E44',
        'wedding-cream': '#F9F5F0',
        'background': 'var(--background)',
        'foreground': 'var(--foreground)',
        'slate-400': '#94a3b8',
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.10)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};
