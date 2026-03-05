# 📸 Guía de Optimización de Imágenes

## Formatos Recomendados

### Orden de Preferencia
1. **AVIF** - Mejor compresión (~50% más pequeño que JPG)
2. **WebP** - Buena compresión (~30% más pequeño que JPG)
3. **JPG/PNG** - Fallback universal

## Tamaños Recomendados por Tipo de Imagen

### Imágenes de Perfil / Hero
```
Breakpoints: 300w, 600w, 1200w
Formatos: AVIF, WebP, JPG
```

### Logos de Empresa
```
Tamaño fijo: 80x80px o 160x160px (@2x)
Formato: WebP o PNG (si necesita transparencia)
```

### Imágenes de Proyectos
```
Breakpoints: 400w, 800w, 1200w
Formatos: AVIF, WebP, JPG
```

### Iconos / Assets Pequeños
```
Preferir SVG cuando sea possible
Si es raster: WebP o PNG optimizado
```

## Generación de Imágenes Responsive

### Script de Generación Automática
El proyecto incluye `scripts/generate-images.js` para generar múltiples tamaños:

```bash
npm run generate-images
```

### Generación Manual con Sharp

```javascript
const sharp = require('sharp');

async function generateResponsiveImages(inputPath, outputName) {
  const sizes = [300, 600, 900, 1200, 1800];
  
  for (const size of sizes) {
    // AVIF
    await sharp(inputPath)
      .resize(size, size, { fit: 'cover', position: 'center' })
      .avif({ quality: 80 })
      .toFile(`public/${outputName}-${size}.avif`);
    
    // WebP
    await sharp(inputPath)
      .resize(size, size, { fit: 'cover', position: 'center' })
      .webp({ quality: 85 })
      .toFile(`public/${outputName}-${size}.webp`);
    
    // JPG (fallback)
    await sharp(inputPath)
      .resize(size, size, { fit: 'cover', position: 'center' })
      .jpeg({ quality: 85, progressive: true })
      .toFile(`public/${outputName}-${size}.jpg`);
  }
}
```

## Uso del Componente ResponsiveImage

### Importar el componente
```jsx
import ResponsiveImage from './components/ResponsiveImage';
```

### Ejemplo Básico
```jsx
<ResponsiveImage
  src="/profile.jpg"
  alt="Joaquina Gómez Manna - Full Stack Developer"
  className={styles.profileImage}
  sizes="(max-width: 480px) 90vw, (max-width: 768px) 60vw, 300px"
  width={300}
  height={300}
/>
```

### Imagen Prioritaria (Hero / Above the Fold)
```jsx
<ResponsiveImage
  src="/hero-image.jpg"
  alt="Hero Image"
  priority={true}
  loading="eager"
  sizes="100vw"
  breakpoints={[600, 1200, 1920]}
/>
```

### Imagen con Formatos Personalizados
```jsx
<ResponsiveImage
  src="/logo.png"
  alt="Company Logo"
  formats={['webp', 'png']}
  breakpoints={[80, 160, 240]}
  sizes="80px"
/>
```

## Atributos HTML para Performance

### Loading Lazy
```html
<img loading="lazy" />
```
- Usar para imágenes below the fold
- No usar en hero images

### Decoding Async
```html
<img decoding="async" />
```
- Permite decodificación asíncrona
- Mejora el First Contentful Paint

### Width y Height
```html
<img width="300" height="300" />
```
- **MUY IMPORTANTE**: Previene Cumulative Layout Shift (CLS)
- Usar siempre que sea posible
- Puedes usar CSS para hacer la imagen responsive después

## Atributo Sizes

El atributo `sizes` le dice al navegador qué tamaño de imagen usar según el viewport:

```html
sizes="(max-width: 480px) 90vw, (max-width: 768px) 60vw, 300px"
```

**Traducción:**
- En móviles (<480px): usa 90% del ancho del viewport
- En tablets (<768px): usa 60% del ancho del viewport
- En desktop: usa 300px fijos

## Checklist de Optimización

- [ ] La imagen tiene múltiples formatos (AVIF, WebP, fallback)
- [ ] Tiene srcset con al menos 3 breakpoints
- [ ] Tiene atributo sizes apropiado
- [ ] Tiene width y height para evitar layout shift
- [ ] Usa loading="lazy" si está below the fold
- [ ] Usa decoding="async"
- [ ] La imagen está comprimida (<100KB para thumbnails, <300KB para imágenes completas)
- [ ] El alt text es descriptivo y significativo

## Herramientas Recomendadas

### Compresión
- **TinyPNG** - https://tinypng.com/
- **Squoosh** - https://squoosh.app/
- **ImageOptim** (Mac) - https://imageoptim.com/

### Conversión de Formatos
- **Sharp** (Node.js) - Automático con scripts
- **cwebp** (CLI) - Para WebP manual
- **avifenc** (CLI) - Para AVIF manual

### Análisis
- **Lighthouse** - Chrome DevTools
- **WebPageTest** - https://webpagetest.org/
- **ImageKit** - Análisis de imágenes

## Performance Metrics

### Objetivos
- **LCP (Largest Contentful Paint)**: < 2.5s
- **CLS (Cumulative Layout Shift)**: < 0.1
- **Tamaño total de imágenes**: < 1MB (primera carga)

### Monitoring
```bash
# Run Lighthouse
npm run lighthouse

# Analizar bundle
npm run build
npm run analyze
```

## Ejemplos de Uso en el Proyecto

### Hero Image (alta prioridad)
```jsx
<picture>
  <source
    type="image/avif"
    srcSet="/profile-300.avif 300w, /profile-600.avif 600w, /profile-1200.avif 1200w"
    sizes="(max-width: 480px) 90vw, (max-width: 768px) 60vw, 300px"
  />
  <source
    type="image/webp"
    srcSet="/profile-300.webp 300w, /profile-600.webp 600w, /profile-1200.webp 1200w"
    sizes="(max-width: 480px) 90vw, (max-width: 768px) 60vw, 300px"
  />
  <img
    src="/profile.jpg"
    alt="Joaquina Gómez Manna - Full Stack Developer"
    className={styles.heroImage}
    loading="eager"
    decoding="async"
    width="300"
    height="300"
  />
</picture>
```

### Logo (baja prioridad)
```jsx
<img 
  src="/ACA.webp" 
  alt="Asociación de Cooperativas Argentinas" 
  className={styles.companyLogo}
  loading="lazy"
  decoding="async"
  width="80"
  height="80"
/>
```

## Próximos Pasos

1. ✅ Implementar ResponsiveImage component
2. ⏳ Migrar todas las imágenes a usar el componente
3. ⏳ Generar versiones AVIF de logos de empresa
4. ⏳ Implementar Image CDN (Cloudinary / ImageKit)
5. ⏳ Setup automated image optimization en CI/CD

## Recursos Adicionales

- [Web.dev - Optimize Images](https://web.dev/fast/#optimize-your-images)
- [MDN - Responsive Images](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)
- [HTML Picture Element](https://html.spec.whatwg.org/multipage/embedded-content.html#the-picture-element)
- [AVIF Support](https://caniuse.com/avif)
- [WebP Support](https://caniuse.com/webp)
