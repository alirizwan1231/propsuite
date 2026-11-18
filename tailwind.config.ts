import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0B100E",
        pine: { 950: "#0E1712", 900: "#122019", 800: "#173527", 700: "#1E4634" },
        gold: { 300: "#EAD9AC", 400: "#DCC084", 500: "#C8A15C", 600: "#A9853F" },
        ivory: "#F5F0E6",
        sand: "#E9E1D0",
        mist: "#9DB0A4",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      letterSpacing: { widest2: "0.32em" },
    },
  },
  plugins: [],
};
export default config;
