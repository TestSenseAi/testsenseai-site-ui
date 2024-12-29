import { sentryVitePlugin } from '@sentry/vite-plugin';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';
import tsconfigPaths from 'vite-tsconfig-paths';
dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), sentryVitePlugin({
      org: 'testsenseai',
      project: 'javascript-react',
      authToken: process.env.VITE_SENTRY_AUTH_TOKEN,
    }),
    tsconfigPaths(),
  ],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
