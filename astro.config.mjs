// @ts-check
import { defineConfig } from 'astro/config'
import vercel from '@astrojs/vercel'
import react from '@astrojs/react'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
import { visualizer } from 'rollup-plugin-visualizer'
import compression from 'vite-plugin-compression'
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
        includePublic: true,
        logStats: true,
        exclude: ['_astro/**'],
      }),
      
      // Bundle analysis
      visualizer({
        filename: 'dist/stats.html',
        open: false,
        gzipSize: true,
        brotliSize: true,
      }),
      
      // Asset compression
      compression({
        algorithm: 'brotliCompress',
        ext: '.br',
        threshold: 1024,
      }),
      compression({
        algorithm: 'gzip',
        ext: '.gz',
        threshold: 1024,
      }),
      
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