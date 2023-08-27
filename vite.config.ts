import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/frontend-mentor.results-summary-component/', // for Github Pages deployment
  plugins: [react()],
});
