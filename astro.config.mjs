// @ts-check
import { defineConfig } from 'astro/config';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  adapter: vercel({
    webAnalytics: {
      enabled: true, // set to false when using @vercel/analytics@1.4.0
    },
  }),
  vite: {
    worker: {
      format: 'es',
    },
    optimizeDeps: {
      exclude: ['@imgly/background-removal'],
    },
  },
}); 