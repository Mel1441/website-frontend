// vite.config.js
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
});

// vite.config.js
//import { defineConfig } from 'vite';
//import react from '@vitejs/plugin-react';
//import tailwindcss from '@tailwindcss/vite';

//export default defineConfig({
  //plugins: [react()],
  //root: '.', // your project root
  //tailwindcss()
//});