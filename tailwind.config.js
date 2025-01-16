/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js}'],
	plugins: [],
	theme: {
		screens: {
			sm: '480px',
			md: '768px',
			lg: '976px',
		},

		colors: {
			red: {
				100: '#efed40',
				200: '#223123',
			},
		},
		fontFamily: {
			sans: ['Graphik', 'sans-serif'],
			serif: ['Merriweather', 'serif'],
		},
		extend: {
			spacing: {
				a: '40px',
				b: '20px',
			},
			borderRadius: {
				'4xl': '2rem',
			},
		},
	},
};
