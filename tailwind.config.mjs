/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        greenBackground: "#07140B",
        greenMain: "#4AD66D",
        grayDisability: "#8C8C8C",
      },
      gridTemplateColumns: {
        CardProyectsResponsive: "repeat(auto-fit,minmax(min(100%,370px), 1fr))",
      },
      animation: {
        CardOpen: "CardOpen 1s ease alternative",
      },
      keyframe: {
        CardOpen: {
          "0%": { 
			transform: "scale(1)",
			opacity: "0", 
		},
          "100%": { 
			transform: "scale(0)", 
			opacity: "1",
		},
        },
      },
    },
  },
  plugins: [
	require('tailwindcss-animated')
  ],
};
