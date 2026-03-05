import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer'
import viteCompression from 'vite-plugin-compression'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // Gzip compression
    viteCompression({
      verbose: true,
      disable: false,
      threshold: 10240, // Only compress files larger than 10KB
      algorithm: 'gzip',
      ext: '.gz',
    }),
    // Brotli compression (better compression than gzip)
    viteCompression({
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: 'brotliCompress',
      ext: '.br',
    }),
    // Bundle analyzer - generates stats.html
    visualizer({
      filename: './dist/stats.html',
      open: false, // Set to true to auto-open after build
      gzipSize: true,
      brotliSize: true,
      template: 'treemap', // 'sunburst', 'treemap', 'network'
    }),
  ],
  base: '/',
  build: {
    outDir: 'dist',
    // Enable minification
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.logs in production
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug'],
      },
    },
    // Optimize chunk sizes
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        // Aggressive code splitting for better caching
        manualChunks: (id) => {
          // Vendor chunks for large libraries
          if (id.includes('node_modules')) {
            // React and related libraries
            if (id.includes('react') || id.includes('react-dom') || id.includes('scheduler')) {
              return 'react-vendor';
            }
            // i18next bundle
            if (id.includes('i18next') || id.includes('react-i18next')) {
              return 'i18n-vendor';
            }
            // EmailJS
            if (id.includes('@emailjs')) {
              return 'emailjs-vendor';
            }
            // Other vendor dependencies
            return 'vendor';
          }
          
          // Application chunks
          // Separate components by feature
          if (id.includes('/components/')) {
            if (id.includes('Modal') || id.includes('Carousel')) {
              return 'components-interactive';
            }
            if (id.includes('AnimatedStat') || id.includes('Typewriter') || id.includes('ScrollIndicator')) {
              return 'components-animated';
            }
            if (id.includes('Courses') || id.includes('Projects') || id.includes('Skills')) {
              return 'components-sections';
            }
            if (id.includes('ContactForm') || id.includes('Navbar') || id.includes('Footer')) {
              return 'components-core';
            }
            return 'components';
          }
          
          // Hooks separation
          if (id.includes('/hooks/')) {
            return 'hooks';
          }
          
          // i18n translations
          if (id.includes('/i18n/')) {
            return 'translations';
          }
        },
        // Optimize asset file names
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.');
          const ext = info[info.length - 1];
          if (/\.(png|jpe?g|svg|gif|tiff|bmp|ico|webp|avif)$/i.test(assetInfo.name)) {
            return `assets/images/[name]-[hash][extname]`;
          }
          if (/\.(woff|woff2|eot|ttf|otf)$/i.test(assetInfo.name)) {
            return `assets/fonts/[name]-[hash][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
      },
    },
    // Enable CSS code splitting
    cssCodeSplit: true,
    // Source maps for production debugging (optional, disable for smaller builds)
    sourcemap: false,
    // Optimize dependencies
    reportCompressedSize: true,
    // Target modern browsers for smaller builds
    target: 'es2015',
  },
  publicDir: 'public',
  // Optimize dependency pre-bundling
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-i18next',
      'i18next',
      'react-icons/fa',
      'react-icons/si',
      'react-icons/md',
      'react-icons/bi',
      'react-icons/di',
      'react-icons/vsc',
      'react-icons/tb',
    ],
    exclude: ['@emailjs/browser'],
  },
  // Server configuration for development
  server: {
    open: true,
    port: 3000,
  },
  // Preview configuration
  preview: {
    port: 3000,
  },
})

