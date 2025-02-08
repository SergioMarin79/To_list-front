// @ts-check
import { defineConfig } from 'astro/config';
import icon from "astro-icon";

import alpinejs from '@astrojs/alpinejs';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  integrations: [alpinejs(), icon()],

  vite: {
    plugins: [tailwindcss()]
  }
});