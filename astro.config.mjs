import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://ai.habiibullahm.my.id',
  output: 'static',
  vite: { plugins: [tailwindcss()] },
});
