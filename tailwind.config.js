/* eslint-disable @typescript-eslint/no-require-imports */
/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
  /* tslint:disable no-var-requires */
	plugins: [require('@tailwindcss/typography')]
};

