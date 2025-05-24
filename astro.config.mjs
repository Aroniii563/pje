import { defineConfig } from 'astro/config';
import react from '@astrojs/react'; // 👈 Agrega esta línea

export default defineConfig({
  integrations: [react()], // 👈 Y esta configuración
});
