module.exports = {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      sm: "480px",
      md: "700px",
      lg: "1025px",
      xl: "1280px",
      xl2: "1360px",
    },
    extend: {
      maxHeight: {},
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    themes: ["emerald", "dark", "forest", "synthwave"],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
  },
};
