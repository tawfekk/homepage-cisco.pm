/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Manrope Variable", "Manrope", ...defaultTheme.fontFamily.sans],
			},
			colors: {
				'primary': '#8C7CF0',
				'bg-primary': '#101424',
				'primaryonhover': '#7063c0',
				'primary-onhover-outlinefill': '#191b38',
				'primary-onhover-outline': '#4c468a',
				'tahiti': '#3ab7bf',
				'silver': '#ecebff',
				'bubble-gum': '#ff77e9',
				'bermuda': '#78dcca',
			  },
		},
	},
	plugins: [require("@tailwindcss/typography"), require.resolve("prettier-plugin-astro")],
	darkMode: "class",
};
