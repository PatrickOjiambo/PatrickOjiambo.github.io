/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        pPurple: "#1A0B2E",
        pBlue: "#7127BA",
        backGroundColor: "#741AAC",
        ButtonColor: "#693B93",
        aqua: "#8AFFFF",
        bottomColor: "#420075"
      },
      boxShadow: {
        cusomShadow: "0px 6px 22px -3px rgba(0, 0, 0, 0.1)",
      },
      fontFamily: {
 roboto: ["Roboto", "sans-serif"],
        "plus-jakarta-sans": ["Plus Jakarta Sans", "sans-serif"],
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        background:
          "radial-gradient(50% 50% at 50% 50%, #763CAC 0%, rgba(50, 15, 133, 0) 100%)",
        CardBackGround:
          "linear-gradient(110.49deg, #130428 19.95%, #251043 67.64%, #38126D 107.08%, #261045 156.61%, #190634 183.21%)",
      },
      backgroundSize: {
        16: "4rem",
      },
      boxShadow: {
        CardBoxShadow: "4px 7px 26px rgba(0, 0, 0, 0.12);",
      },
    },
  },
  plugins: [],
};
