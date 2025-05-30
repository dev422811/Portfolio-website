/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        primary: '#0f172a',       // Deep navy
        secondary: '#64748b',     // Muted gray-blue
        accent: '#38bdf8',        // Sky blue for buttons/hover
        background: '#f8fafc',    // Light background
        highlight: '#e2e8f0',     // Light hover background
        textMain: '#1e293b',      // Main text
        textMuted: '#94a3b8',     // Subtle text
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 30px rgba(0,0,0,0.1)',
        glow: '0 0 12px rgba(56,189,248,0.4)',
      },
      borderRadius: {
        xl: '1.25rem',
        '2xl': '1.5rem',
      },
      screens: {
        xs: '480px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      backgroundImage: {
        'hero-pattern': 'url(/herobg.png)',
        'dots': "radial-gradient(#cbd5e1 1px, transparent 1px)",
      },
      transitionTimingFunction: {
        'in-out-expo': 'cubic-bezier(0.86, 0, 0.07, 1)',
      },
    },
  },
  plugins: [],
};
