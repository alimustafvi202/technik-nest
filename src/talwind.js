module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        keyframes: {
          moveUpDown: {
            '0%, 100%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-15px)' },
          },
        },
        animation: {
          moveUpDown: 'moveUpDown 3s infinite',
        },
      },
    },
    plugins: [],
  };
  