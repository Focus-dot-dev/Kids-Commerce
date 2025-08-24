module.exports = {
    theme: {
      extend: {
        animation: {
          scroll: 'scroll 15s linear infinite',
        },
        keyframes: {
          scroll: {
            '0%': { transform: 'translateX(100%)' },
            '100%': { transform: 'translateX(-100%)' },
          },
        },
      },
    },
    plugins: [],
  };