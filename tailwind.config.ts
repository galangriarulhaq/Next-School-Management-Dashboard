import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        sSky: "#C3EBFA",
        sSkyLight: "#EDF9FD",
        sPurple: "#CFCEFF",
        sPurpleLight: "#F1F0FF",
        sYellow: "#FAE27C",
        sYellowLight: "#FEFCE8",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
export default config;
