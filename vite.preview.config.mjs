import { transformWithEsbuild } from 'vite';
import react from '@vitejs/plugin-react';

// App build config (for Netlify preview) — no library mode, produces HTML output
export default {
  build: {
    outDir: 'dist-preview',
  },
  plugins: [
    {
      name: 'treat-js-as-jsx',
      async transform(code, id) {
        if (!id.match(/src\/.*\.js$/)) return null;
        return transformWithEsbuild(code, id, {
          loader: 'jsx',
          jsx: 'automatic',
        });
      },
    },
    react({ include: /\.(jsx|js)$/ }),
  ],
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
      },
    },
  },
};
