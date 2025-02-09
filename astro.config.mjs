// @ts-check
import { defineConfig } from 'astro/config';
import icon from "astro-icon";

import alpine from '@astrojs/alpinejs';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  integrations: [alpine({entrypoint: '/src/utils/entrypoint' }), icon()],

  vite: {
    plugins: [tailwindcss()]
  }
});