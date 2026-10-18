/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#17191c",
        muted: "#646b73",
        brand: { DEFAULT: "#536f80", dark: "#405968", pale: "#edf2f5" },
        line: "#e2e5e9",
        canvas: "#f7f8fa"
      },
      fontFamily: { sans: ["Arial", "Helvetica Neue", "sans-serif"] },
      boxShadow: { soft: "0 18px 50px rgba(23, 25, 28, .08)" },
      maxWidth: { content: "1240px" }
    }
  },
  plugins: []
};
