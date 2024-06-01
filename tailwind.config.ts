import type { Config } from 'tailwindcss';

export default {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],

	darkMode: 'class',

	theme: {
		extend: {
			colors: {
				// flowbite-svelte
				primary: {
					700: '#0f8592',
					DEFAULT: '#0f8592'
				},
				success: {
					700: '#52d300',
					DEFAULT: '#52d300'
				},
				danger: {
					700: '#fa7736',
					DEFAULT: '#fa7736'
				},
				warning: {
					700: '#ffcb63',
					DEFAULT: '#ffcb63'
				},
				subtle: {
					700: '#707070',
					DEFAULT: '#707070'
				},
				black: {
					DEFAULT: '#121212'
				}
			}
		}
	},

	plugins: [
		require('@tailwindcss/typography'), 
		require('flowbite/plugin')
	]
} as Config;
