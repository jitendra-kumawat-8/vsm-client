import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#45133C",
        secondaryLight: "#F2C78B",
        secondaryDark: "#A88652",
      },
      fontFamily: {
        vietnam: ["BeVietnamPro", "sans-serif"],
        dmSans: ["DMSans", "sans-serif"],
        geistMono: ["GeistMono", "monospace"],
        geist: ["Geist", "sans-serif"],
        gothicA1: ["GothicA1", "sans-serif"],
        lato: ["Lato", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
