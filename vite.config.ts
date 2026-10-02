import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'serve-hero-section',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          const decoded = decodeURI(req.url?.split('?')[0] || '');
          if (decoded.startsWith('/hero section/')) {
            const filePath = path.join(import.meta.dirname, decoded);
            if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
              res.setHeader('Content-Type', 'image/jpeg');
              res.setHeader('Cache-Control', 'public, max-age=86400');
              fs.createReadStream(filePath).pipe(res);
              return;
            }
          }
          next();
        });
      },
      closeBundle() {
        // Copy hero section to dist when building
        const srcDir = path.join(import.meta.dirname, 'hero section');
        const destDir = path.join(import.meta.dirname, 'dist', 'hero section');
        if (fs.existsSync(srcDir)) {
          if (!fs.existsSync(destDir)) {
            fs.mkdirSync(destDir, { recursive: true });
          }
          const files = fs.readdirSync(srcDir);
          for (const file of files) {
            fs.copyFileSync(path.join(srcDir, file), path.join(destDir, file));
          }
        }
      }
    }
  ],
  server: {
    port: 3000,
    open: false,
    host: true
  }
});
