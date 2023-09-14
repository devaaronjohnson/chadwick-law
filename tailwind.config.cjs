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
				brandOrange: '#E07A5F',
				brandDarkBlue: '#3D405B',
				brandGreen: '#81B29A',
			},
		},
	},
	plugins: [],
};
