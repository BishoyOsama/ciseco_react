/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,jsx,js}"],
  theme: {
    extend: {
      colors: {
        veryLightBlue: "rgba(59,130,246,.08)",
        hero: "#E3FFE6",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      backgroundImage: {
        circles:
          'url("https://ciseco-reactjs.vercel.app/static/media/BackgroundLine.2aa0910fef98274b2f4855249cd61c4c.svg")',
      },
      keyframes: {
        heroImage: {
          "0%": { opacity: 0, transform: "scale(1.05) translateY(20px)" },
          "100%": { opacity: 1, transform: "scale(1) translateY(0)" },
        },
      },
      animation: {
        heroImage: "heroImage 250ms linear forwards",
      },
      screens:{
        "1400": "1400px",
      }
    },
  },
  plugins: [],
};
