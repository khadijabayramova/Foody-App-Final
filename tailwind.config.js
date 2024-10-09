/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bgColor: "#1e1e30",
        secMainColor: "#27283C",
        sidebarColor: "#C74FEB",
        textColor: "#F2F2F2DE",
        btnColor: "#c035a2",
        hoverColor: "#cc60ed",
        restautanColor: "#828282",
        bgcards: "#27283C",
        productstitle: "#00B2A9",
        productsdesc: "#8E8E93",
        bgoptions: "#5A5B70",
        bgadditional: "#38394E",
        bgwt: "#fff",
        bgdelete: "#D63626",
        textcancel: "#BDBDBD",
        inputbg: "#43445A",
      },
      dropShadow: {
        "3xl": " 0px 4px 4px 0px #27AE6033",
      },
    },
  },
  plugins: [require("daisyui")],
};
