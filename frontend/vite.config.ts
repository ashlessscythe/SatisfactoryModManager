import path from 'path';

import { svelte } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vite';
import { skeleton } from '@skeletonlabs/tw-plugin';
import { myCustomTheme } from './smmTheme';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte({
      hot: true,
      onwarn: (warning, defaultHandler) => {
        if (warning.code === 'a11y-click-events-have-key-events') {
          return;
        }
        if (defaultHandler) {
          defaultHandler(warning);
        }
      },
    }),
    skeleton({
      themes: {
        preset: [
          { name: 'skeleton', enhancements: true }
        ],
        custom: [
          myCustomTheme
        ]
      }
    })
  ],
  optimizeDeps: {
    exclude: ['@urql/svelte'],
    include: [
      'lodash.get', 
      'lodash.isequal', 
      'lodash.clonedeep',
      '@skeletonlabs/skeleton'
    ],
  },
  publicDir: 'static',
  resolve: {
    alias: {
      $wailsjs: path.resolve('./src/lib/generated/wailsjs'),
      $lib: path.resolve('./src/lib'),
    },
  },
  build: {
    outDir: 'build',
    target: 'esnext',
  },
  server: {
    port: 3000,
    strictPort: true,
    watch: {
      ignored: [
        '**/generated/wailsjs/runtime/*',
      ],
    },
  },
});
