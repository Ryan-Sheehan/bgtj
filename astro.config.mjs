// @ts-check
import { defineConfig } from 'astro/config'
import vercel from '@astrojs/vercel'
import react from '@astrojs/react'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
import { visualizer } from 'rollup-plugin-visualizer'
import { checker } from 'vite-plugin-checker'
import eslint from '@nabla/vite-plugin-eslint'

export default defineConfig({
  output: 'server',
  integrations: [react()],
  adapter: vercel(),
  vite: {
    plugins: [
      // Image optimization
      ViteImageOptimizer({
        png: { quality: 85 },
        jpeg: { quality: 85 },
        jpg: { quality: 85 },
        webp: { quality: 85 },
        cache: true,
        includePublic: false, // Don't process public files to avoid deployment timeouts
        logStats: true,
        exclude: ['_astro/**', 'letters/**'],
      }),
      
      // Bundle analysis (optional)
      ...(process.env.ANALYZE ? [visualizer({
        filename: 'dist/stats.html',
        open: false,
        gzipSize: true,
        brotliSize: true,
      })] : []),
      
      // Development tools
      checker({
        typescript: true,
        overlay: {
          initialIsOpen: false,
        },
      }),
      
      // ESLint (development only)
      ...(process.env.NODE_ENV === 'development' ? [
        eslint({
          eslintOptions: { cache: true },
          shouldLint: (path) => !!path.match(/\/src\/.*\.(ts|tsx)$/),
        })
      ] : []),
    ],
  },
})