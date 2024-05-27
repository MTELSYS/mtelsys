import type { Config } from 'tailwindcss';

export default {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],

	theme: {
		extend: {
			colors: {
				// flowbite-svelte
				primary: {
					700: '#0f8592'
				},
				success: {
					700: '#52d300'
				},
				danger: {
					700: '#fa7736'
				},
				warning: {
					700: '#ffcb63'
				},
				subtle: {
					700: '#e5e9e2'
				}
			}
		}
	},

	plugins: [require('@tailwindcss/typography')]
} as Config;
