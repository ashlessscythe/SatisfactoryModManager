import type { Config } from 'tailwindcss';
import { skeleton } from '@skeletonlabs/tw-plugin';
import { myCustomTheme } from './smmTheme';
import containerQueries from '@tailwindcss/container-queries';

/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: 'class',
  content: [
    './src/**/*.{html,js,svelte,ts}',
    './node_modules/@skeletonlabs/skeleton/**/*.{html,js,svelte,ts}'
  ],
  theme: {
    extend: {
      screens: {
        'h-md': { raw: '(min-height: 875px)' },
        'h-lg': { raw: '(min-height: 950px)' },
      },
    },
  },
  plugins: [
    containerQueries,
    skeleton({
      themes: {
        preset: [
          {
            name: 'skeleton',
            enhancements: true,
          },
        ],
        custom: [
          myCustomTheme,
        ],
      },
    }),
  ],
} satisfies Config;

export default config;
