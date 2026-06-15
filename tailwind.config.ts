import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-plus-jakarta-sans)"],
      },
      colors: {
        primary: "#1D4A52",
        accent: "#2EB8A6",
        "text-primary": "#0D1F22",
        "text-secondary": "#4A6670",
        "section-alt": "#F4F8F8",
        border: "#E0EEEE",
      },
      borderRadius: {
        card: "10px",
        btn: "6px",
      },
      boxShadow: {
        card: "0 4px 16px rgba(0,0,0,0.07)",
        contact: "0 8px 32px rgba(0,0,0,0.12)",
        operations: "0 4px 16px rgba(0,0,0,0.06)",
      },
      padding: {
        section: "80px",
      },
    },
  },
  plugins: [],
};
export default config;
