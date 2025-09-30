import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    container: { center: true, padding: "1rem", screens: { lg: "1024px", xl: "1200px" } },
    extend: {
      colors: {
        brand: { 50:"#eef7ff",100:"#d9ecff",200:"#baddff",300:"#8dc7ff",400:"#59a8ff",500:"#2b89ff",600:"#0f6ce6",700:"#0857bf",800:"#0a4a9b",900:"#0d3f7f" }
      },
      borderRadius: { xl: "1rem", "2xl": "1.5rem", "3xl": "2rem" },
      boxShadow: {
        soft: "0 10px 30px rgba(16,24,40,0.08)",
        glow: "0 10px 40px rgba(43,137,255,0.25)"
      },
      backdropBlur: { xs: "2px" },
      keyframes: {
        float: { "0%,100%": { transform: "translateY(0px)" }, "50%": { transform: "translateY(-6px)" } }
      },
      animation: { float: "float 6s ease-in-out infinite" }
    }
  },
  plugins: []
} satisfies Config;
