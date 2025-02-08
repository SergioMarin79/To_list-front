/** @type {import('tailwindcss').Config} */
export default {
	content: [
	  './public/**/*.html',
	  './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
	],
    
	plugins: [
	  require('@tailwindcss/forms'),
	],
  }