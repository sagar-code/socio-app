module.exports = {
  content: ["./public/index.html", "./src/*.js", "./src/**/*.js"],
  theme: {
    extend: {
      colors: {
        primary: "#FF6D42",
        secondary: "#FF8833",
        tertiary: "FFF5F2",
        white: "#FFFFFF",
        black: "000000",
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
