module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#41b362",
          secondary: "#ffb400",
          accent: "#41B362",
          neutral: "#fff",
          "base-100": "#212529",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
