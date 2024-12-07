/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Noto Sans"', "sans-serif"], // Set Noto Sans globally as the default sans font
      },
    },
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
          fontFamily: {
            sans: '"Noto Sans", sans-serif', // Apply Noto Sans to all DaisyUI components
          },
        },
      },
    ],
  },
  plugins: [daisyui],
};
