/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        ApercuMonoProLight: "ApercuMonoProLight, sans-serif",
        ApercuMonoProMedium: "ApercuMonoProMedium, sans-serif",
        ApercuMonoProRegular: "ApercuMonoProRegular, sans-serif",
        ApercuMonoProBold: "ApercuMonoProBold, sans-serif",
      },
    },
    keyframes: {
      animateLink: {
        "0%": {
          backgroundPositionX: "0, 2px",
        },

        "100%": {
          backgroundPositionX: "17px, 19px",
        },
      },
      slideBar: {
        "0%": {
          transform: "translateY(-100%)",
        },
        "100%": {
          transform: "translateY(0)",
        },
      },
    },
    animation: {
      animateLink: "animateLink 1s linear infinite",
      animateSlide: "slideBar 1s linear",
    },
  },
  plugins: [],
};
