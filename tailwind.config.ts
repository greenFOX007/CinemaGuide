import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/shared/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      backgroundImage: {},
      colors: {
        "main-black": "#0A0B0B",
        ["secondary"]: "#393B3C",
        ["secondary-hover"]: "#FFFFFF",
        ["secondary-disabled"]: "#747474",
        modal: "rgba(0, 0, 0, 0.5)",
        ["white-opacity"]: "rgba(255, 255, 255, 0.5)",
        ["black-40"]: "rgba(0, 0, 0, 0.4)",
        activeBtn: "#B4A9FF",
        ["primery"]: "#6A5DC2",
        ["primery-hover"]: "#8577E1",
        ["primery-disabled"]: "#D6D2F1",
      },
      maxWidth: { "1440": "1440px" },
      // gridTemplateColumns: { header: "1fr 100% 1fr" },
    },
  },

  plugins: [],
};
export default config;
