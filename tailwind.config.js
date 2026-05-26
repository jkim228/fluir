/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#F4F2ED',
        surface: '#FDFCF9',
        'surface-2': '#F0EDE6',
        moss: '#5A9458',
        'moss-light': '#7CB87A',
        'moss-dim': '#3D6E3C',
        'moss-pale': '#E8F4E8',
        amber: '#C9962B',
        'amber-pale': '#F5E8C4',
        sky: '#4A8FA8',
        'sky-pale': '#DFF0F6',
        rose: '#C45A5A',
        'rose-pale': '#FAE8E8',
        ink: '#1C1B17',
        'ink-80': 'rgba(28,27,23,0.75)',
        'ink-60': 'rgba(28,27,23,0.55)',
        'ink-30': 'rgba(28,27,23,0.30)',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        xs: '4px',
        sm: '8px',
        md: '12px',
        lg: '20px',
        xl: '28px',
      },
      boxShadow: {
        card: '0 1px 3px rgba(28,27,23,0.07), 0 4px 14px rgba(28,27,23,0.06)',
        elevated: '0 6px 28px rgba(28,27,23,0.10), 0 2px 6px rgba(28,27,23,0.07)',
        popover: '0 10px 40px rgba(28,27,23,0.16), 0 2px 8px rgba(28,27,23,0.10)',
      },
    },
  },
  plugins: [],
}
