# 🚀 Performance Optimization Guide

This document outlines all performance optimizations implemented in the portfolio and provides guidelines for maintaining optimal performance.

## 📊 Current Optimizations (v1.10.0)

### 1. Code Splitting & Bundle Optimization

#### Aggressive Code Splitting
- **React vendor bundle**: Separated React, ReactDOM, and Scheduler into dedicated chunk
- **Icon bundles**: Split react-icons by family (fa, si, di/vsc/tb) to load only needed icons
- **Component chunks**: Organized by feature:
  - `components-interactive`: Modal, Carousel (lazy-loaded on demand)
  - `components-animated`: AnimatedStat, Typewriter, ScrollIndicator
  - `components-sections`: Courses, Projects, Skills
  - `components-core`: ContactForm, Navbar, Footer
- **Supporting chunks**: Separate bundles for hooks, translations, and i18n

#### Build Configuration
```javascript
// vite.config.js features:
- Terser minification with console.log removal
- CSS code splitting enabled
- Target: ES2015 for modern browsers
- Tree shaking enabled
- Optimized asset file naming by type
```

#### Bundle Analysis
Run `npm run build` to generate:
- `dist/stats.html`: Interactive treemap of bundle composition
- Gzip and Brotli size analysis
- Chunk size warnings (threshold: 1000KB)

### 2. Caching Strategy

#### Service Worker (Advanced)
Five specialized cache strategies:

1. **Cache-First** (Images, Fonts)
   - Assets: AVIF, WebP, JPG, PNG, SVG
   - Fonts: WOFF2, WOFF, TTF
   - Duration: 1 week (images), 4 weeks (fonts)
   - Fallback: Network → Cache → Offline message

2. **Network-First** (HTML, API)
   - Routes: Document requests, API calls, EmailJS
   - Duration: 5 minutes cache
   - Fallback: Network → Cache → Offline page

3. **Stale-While-Revalidate** (JS, CSS)
   - Assets: JavaScript, CSS files
   - Duration: 1 day cache
   - Behavior: Return cache immediately, update in background

#### Cache Namespaces
```javascript
portfolio-joaquina-v1.10.0           // Static assets
portfolio-joaquina-runtime-v1.10.0   // JS/CSS
portfolio-joaquina-images-v1.10.0    // Images
portfolio-joaquina-fonts-v1.10.0     // Fonts
portfolio-joaquina-api-v1.10.0       // API responses
```

#### Service Worker Registration
```javascript
// In main.jsx
- Auto-registration on page load
- Update notifications
- Offline message handling
- Cache version management
```

### 3. Image Optimization

#### Format Support
- **AVIF**: Best compression, modern browsers (90%+ support)
- **WebP**: Good compression, wide support (95%+ support)
- **JPG**: Fallback for legacy browsers

#### Responsive Images
```jsx
<ResponsiveImage
  src="/profile.jpg"
  alt="Profile"
  formats={['avif', 'webp', 'jpg']}
  breakpoints={[300, 600, 1200]}
  sizes="(max-width: 480px) 90vw, 300px"
  loading="lazy"
  decoding="async"
/>
```

#### Optimization Guidelines
- Profile images: 300px, 600px, 1200px breakpoints
- Logo images: 80x80px with loading="lazy", decoding="async"
- Width/height attributes specified to prevent CLS
- Compression: 80-85% quality for JPG/WebP, 75-80% for AVIF

#### Generation Script
```bash
# Generate all image formats from source
npm run generate-images
# Uses Sharp library for optimal compression
```

### 4. Font Optimization

#### Google Fonts
```css
/* Optimized font loading */
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&family=Rajdhani:wght@300;400;500;600;700&display=swap');
```
- `display=swap`: Shows fallback font immediately, swaps when ready
- Only 2 font families loaded
- Selected weights only (not all variants)
- Preconnect to fonts.googleapis.com and fonts.gstatic.com (optional)

#### Local Fallback
```css
@font-face {
  font-family: 'System';
  font-display: swap;
  src: local('system-ui'), local('-apple-system'), local('BlinkMacSystemFont');
}
```

### 5. Compression

#### Gzip Compression
- Threshold: 10KB minimum file size
- Extension: `.gz`
- Compression ratio: ~70%
- Supported: All modern browsers

#### Brotli Compression
- Threshold: 10KB minimum file size
- Extension: `.br`
- Compression ratio: ~80% (better than gzip)
- Supported: 95%+ of modern browsers

#### Automatic Compression
```bash
npm run build
# Generates:
# - file.js (original)
# - file.js.gz (gzip)
# - file.js.br (brotli)
```

Server serves compressed version if browser supports it.

### 6. Lazy Loading

#### Components
Already lazy-loaded:
- AnimatedStat
- ProjectModal
- ScrollIndicator
- BackToTopButton
- Typewriter

#### Sections
Below-the-fold content wrapped in Suspense:
```jsx
<Suspense fallback={<SkeletonLoader type="section" count={3} />}>
  <AnimatedStat end={500} suffix="+" />
</Suspense>
```

#### Images
- All non-critical images use `loading="lazy"`
- Hero image uses `loading="eager"` (above-the-fold)
- Decoding set to "async" for non-blocking render

### 7. Dependency Optimization

#### Tree Shaking
- ES modules for all dependencies
- Import specific icons: `import { FaReact } from 'react-icons/fa'`
- Avoid default imports from react-icons

#### Pre-bundling
```javascript
// vite.config.js
optimizeDeps: {
  include: ['react', 'react-dom', 'react-i18next', 'i18next'],
  exclude: ['@emailjs/browser'], // External API, don't bundle
}
```

#### Bundle Size Monitoring
Current bundle sizes (gzipped):
- Main: ~150KB
- React vendor: ~140KB
- Icons (combined): ~50KB
- **Total**: ~340KB initial load

## 📈 Performance Metrics (Target)

### Core Web Vitals
- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1

### Lighthouse Scores (Target)
- Performance: > 95
- Accessibility: > 95
- Best Practices: > 95
- SEO: > 95

### Bundle Size
- Main bundle: < 200KB (gzipped)
- Vendor bundles: < 300KB (gzipped)
- **Total initial load**: < 500KB (gzipped)

### Load Times
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s
- Total Blocking Time: < 200ms

## 🔧 Optimization Commands

### Build & Analyze
```bash
# Build with optimization
npm run build

# Preview production build
npm run preview

# Analyze bundle (opens stats.html)
open dist/stats.html
```

### Lighthouse Audit
```bash
# Install Lighthouse CLI
npm install -g @lhci/cli

# Run audit
npm run build
npm run preview
lhci autorun --collect.url=http://localhost:3000
```

### Bundle Size Analysis
```bash
# Build and check sizes
npm run build

# Check gzipped sizes
du -sh dist/*.gz dist/assets/*.gz

# Compare before/after
npm run build -- --mode=production
```

## 🎯 Future Optimizations

### High Priority
- [ ] Implement resource hints (preload, prefetch, preconnect)
- [ ] Set up CDN for static assets
- [ ] Enable HTTP/2 server push
- [ ] Implement critical CSS extraction

### Medium Priority
- [ ] Add image blur-up placeholders (LQIP)
- [ ] Implement virtual scrolling for long lists
- [ ] Optimize animations with will-change
- [ ] Add render-on-demand for heavy components

### Low Priority
- [ ] Implement IndexedDB for client-side storage
- [ ] Add background sync for offline form submissions
- [ ] Implement push notifications
- [ ] Add network information API awareness

## 💡 Best Practices

### When Adding New Features

#### Images
1. Generate AVIF, WebP, and JPG formats
2. Create multiple sizes (300px, 600px, 1200px)
3. Use ResponsiveImage component
4. Add width/height attributes
5. Use lazy loading for below-the-fold images

#### Components
1. Consider lazy loading if > 20KB
2. Use React.memo for expensive components
3. Implement Suspense boundaries
4. Add skeleton loaders for async content

#### Dependencies
1. Check bundle size impact before installing
2. Use tree-shakeable imports
3. Prefer smaller alternatives when possible
4. Check bundle analyzer after adding deps

#### CSS
1. Use CSS modules for component styles
2. Minimize use of global styles
3. Leverage CSS variables for theming
4. Remove unused CSS

#### JavaScript
1. Avoid large libraries when possible
2. Use native APIs when available
3. Defer non-critical scripts
4. Minimize use of polyfills

### Monitoring Performance

#### Development
```javascript
// Check render performance
if (import.meta.env.DEV) {
  const whyDidYouRender = require('@welldone-software/why-did-you-render');
  whyDidYouRender(React, {
    trackAllPureComponents: true,
  });
}
```

#### Production
```javascript
// Web Vitals monitoring
import {getCLS, getFID, getFCP, getLCP, getTTFB} from 'web-vitals';

function sendToAnalytics(metric) {
  // Send to your analytics endpoint
  console.log(metric);
}

getCLS(sendToAnalytics);
getFID(sendToAnalytics);
getFCP(sendToAnalytics);
getLCP(sendToAnalytics);
getTTFB(sendToAnalytics);
```

## 📚 Resources

### Tools
- [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci)
- [Bundlephobia](https://bundlephobia.com/) - Check npm package sizes
- [Can I Use](https://caniuse.com/) - Browser support tables
- [WebPageTest](https://www.webpagetest.org/) - Performance testing
- [PageSpeed Insights](https://pagespeed.web.dev/) - Google performance audit

### Documentation
- [Vite Optimization](https://vitejs.dev/guide/build.html)
- [React Performance](https://react.dev/learn/render-and-commit)
- [Web Vitals](https://web.dev/vitals/)
- [Service Workers](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API)
- [Image Optimization](https://web.dev/fast/#optimize-your-images)

### Learning
- [Web.dev Performance](https://web.dev/learn-web-vitals/)
- [MDN Performance](https://developer.mozilla.org/en-US/docs/Learn/Performance)
- [Patterns.dev](https://www.patterns.dev/posts/performance-patterns/)

---

**Last Updated:** March 5, 2026
**Version:** 1.10.0
**Optimizations Status:** ✅ Complete
