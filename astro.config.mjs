// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    // @ts-expect-error conflicto temporal de tipos entre versiones de Vite usadas por herramientas de check
    plugins: [tailwindcss()]
  }
});