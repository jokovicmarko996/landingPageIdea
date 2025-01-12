/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: "15px",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    backgroundImage: {
      hero: "url(/hero/bg.jpg)",
      grid: "url(/grid.png)",
    },
    extend: {
      fontFamily: {
        primary: ["var(--font-dm-serif)"],
        secondary: ["var(--font-jost)"],
        jost: ["var(--font-jost)"], // Use the custom CSS variable
        dmserif: ["var(--font-dm-serif)"], // Use the custom CSS variable
      },
      // colors: {
      //   background: "var(--background)",
      //   foreground: "var(--foreground)",
      // },
      colors: {
        primary: {
          DEFAULT: "#292F36",
          hover: "#343e4a",
        },
        secondary: "4d5053",
        accent: {
          DEFAULT: "#cda274",
          secondary: "#f4f0ec",
          hover: "#b88c5d",
        },
      },
    },
  },
  plugins: [],
};
