/** @type {import('tailwindcss').Config}*/
const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      gridTemplateColumns: {
        header: '1fr 3fr 1fr',
      },
    },
  },

  plugins: [],
};

module.exports = config;
