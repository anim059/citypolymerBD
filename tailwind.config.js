/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,ts}", "./projects/**/*.{html,ts}"],
  theme: {
    extend: {
      animation: {
        'infinite-scroll': 'infinite-scroll 50s linear infinite',
        'partner-infinite-scroll': 'infinite-scroll 40s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      }                    
    },
  },
  plugins: [],
};
