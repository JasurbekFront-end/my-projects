/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js}'],
	theme: {
		extend: {
			colors: {
				body: '#020100',
				button: {
					nav: '#FA9020',
				},
			},

			fontFamily: {
				poppins: 'Poppins',
			},
			fontSize: {
				logo: [
					'29px', // 52px
					{
						lineHeight: '153.5%', // 58px
						fontWeight: 800,
					},
				],
			},
		},
	},
	plugins: [],
};
