module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        blink: "blink 2s infinite", // Nama animasi
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0 }, // Transparan di tengah
        },
      },
    },
  },
  plugins: [],
};

// tailwind.config.js
