// @ts-check
import { defineConfig } from 'astro/config'
import vercel from '@astrojs/vercel'
import react from '@astrojs/react';


export default defineConfig({
  output: 'server',
  integrations: [react()],
  adapter: vercel(),
})