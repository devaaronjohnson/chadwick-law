/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: 'jit',
	content: ['./src/**/*.svelte'],
	theme: {
		extend: {
			fontFamily: {
				montserrat: ['Montserrat', 'sans-serif'],
				oregon: ['Oregon', 'sans-serif'],
			},
			colors: {
				bgDarkLight: '#1c1c1c',
				bgDark: '#121212',
				brandGreen: '#A0FF27',
			},
		},
	},
	plugins: [],
};
