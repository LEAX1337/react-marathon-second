/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				colorGolden: "#dcca87",
				colorBlack: "#0c0c0c",
				colorGray: "#545454",
				colorCrimson: "#f5efdb",
				colorGrey: "#aaaaaa",
			},
			fontFamily: {
				fontBase: "Cormorant Upright, serif",
				fontAlt: "Open Sans, sans-serif",
			},
			screens: {
				sm: "480px",
				md: "768px",
				lg: "1150px",
				xl: "1540px",
			},
		},
	},
	plugins: [],
}
