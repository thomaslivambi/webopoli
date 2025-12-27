/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1200px",
      },
    },
    extend: {
      colors: {
        // Palette Organic Minimal - Art / Nature / Bien-être
        sand: {
          50: '#FDFCFA',
          100: '#F9F6F1',
          200: '#F3EDE3',
          300: '#E8DFD0',
          400: '#D4C4AD',
          500: '#BDA88A',
          600: '#9A8567',
          700: '#746348',
          800: '#4D412F',
          900: '#272117',
        },
        sage: {
          50: '#F6F8F6',
          100: '#E8EEE8',
          200: '#D1DED1',
          300: '#B3C7B3',
          400: '#8FAD8F',
          500: '#6B936B',
          600: '#547454',
          700: '#3F573F',
          800: '#2A3A2A',
          900: '#151D15',
        },
        terracotta: {
          50: '#FDF8F6',
          100: '#FAEDE8',
          200: '#F4D8CD',
          300: '#EBBDA8',
          400: '#E09B7D',
          500: '#D47952',
          600: '#B85E38',
          700: '#8C472A',
          800: '#5F301C',
          900: '#32190E',
        },
        clay: {
          50: '#FAF9F7',
          100: '#F2F0EB',
          200: '#E3DED5',
          300: '#D0C8BA',
          400: '#B8AC99',
          500: '#9F8F78',
          600: '#7F725F',
          700: '#5F5547',
          800: '#3F382F',
          900: '#201C17',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'breathe': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.02)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.8s ease-out forwards',
        'fade-in': 'fade-in 0.6s ease-out forwards',
        'breathe': 'breathe 6s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
