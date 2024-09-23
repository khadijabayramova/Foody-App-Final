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
        secMainColor: "#38394e",
        sidebarColor: "#C74FEB",
        textColor: "#F2F2F2DE",
        btnColor: "#c035a2",
        hoverColor: "#cc60ed",
      },
    },
  },
  plugins: [],
};
