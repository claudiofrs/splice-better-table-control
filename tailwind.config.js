/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#0a2240",
          secondary: "#f7fafc",
          accent: "#11b5e4",
          neutral: "#FFFFFF",
          "base-100": "#FFFFFF",
          info: "#60a5fa",
          success: "#84cc16",
          warning: "#f59e0b",
          error: "#fb7185",
        },
      },
    ],
  },
  plugins: [daisyui],
};
