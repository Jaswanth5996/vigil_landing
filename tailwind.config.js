/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Include all your project files here, e.g.,
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // THIS LINE IS MANDATORY FOR THE BACKGROUND TO WORK
        'primary-dark': '#1B243B', 
      },
      // ... (Your custom keyframes and animation definitions go here)
      keyframes: {
        fadeIn: {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        },
        fadeInUp: {
          'from': { opacity: '0', transform: 'translateY(20px)' },
          'to': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
      },
    },
  },
  plugins: [],
}
