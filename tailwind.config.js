/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      transitionDuration: {
        '2000': '2000ms',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          'instagram-message-gradient': 'linear-gradient(to right, #a855f7, #d946ef)',
      },
      fontFamily: {
        sans: ['Open Sans', 'Helvetica', 'Arial', 'sans-serif']
      },
      
    },
  },
  plugins: [],
};
