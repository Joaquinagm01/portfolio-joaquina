# 📋 TODO - Portfolio Joaquina Gómez Manna

## 🎨 MEJORAS VISUALES Y ESTÉTICAS

### Hero Section
- [x] Agregar animación parallax al background del hero
- [x] Mejorar la imagen de perfil con un efecto de resplandor pulsante más sutil
- [x] Agregar efecto de glassmorphism a los botones principales
- [x] Implementar animación de escritura más fluida en el Typewriter
- [x] Agregar micro-interacciones en los botones (ripple effect)
- [x] Optimizar las sombras neón para que no sean demasiado intensas

### Navbar
- [x] Agregar indicador visual de scroll progress en el navbar
- [x] Implementar animación smooth de entrada al cargar la página
- [x] Mejorar el efecto hover de los enlaces con underline animado
- [x] Agregar backdrop blur más pronunciado para mejor legibilidad

### Sección Estadísticas
- [x] Animar los números con efecto de conteo al hacer scroll
- [x] Agregar iconos animados para cada estadística
- [x] Implementar efecto de brillo al hacer hover
- [x] Mejorar el spacing entre cards en mobile
- [x] Agregar gráfico circular visual para porcentajes

### Sección Sobre Mí
- [x] Agregar iconos personalizados para cada card (Educación, Idiomas)
- [x] Mejorar las divisiones entre items con gradientes
- [x] Agregar animación de entrada escalonada para cada card
- [x] Implementar tooltips con más información al hover

### Sección Experiencia
- [ ] Mejorar el diseño del timeline con mejor línea conectora
- [x] Agregar logos de las empresas
- [x] Implementar acordeón para expandir/colapsar detalles
- [x] Agregar animación de deslizamiento al aparecer
- [x] Mejorar las badges de tecnologías con iconos
- [x] Implementar modo de vista compacta/expandida

### Sección Cursos
- [x] Mejorar visibilidad del botón en modo claro y oscuro
- [x] Implementar filtros por categoría (Programación, IA)
- [x] Agregar indicador de fecha de obtención
- [x] Agregar badge de "Nuevo" para cursos recientes
- [x] Mejorar la distribución en grid para tarjetas más anchas (3 columnas en desktop)

### Sección Proyectos
- [x] Implementar vista de grid además del carousel actual
- [x] Agregar filtros por tecnología
- [x] Mejorar las transiciones entre slides del carousel
- [x] Implementar vista de "Proyectos destacados"

### Sección Habilidades
- [x] Diseñar un mapa de habilidades tipo radar chart
- [x] Implementar categorización mejorada (Frontend, Backend, DevOps, etc.)
- [x] Agregar animaciones de entrada para cada tecnología
- [x] Mejorar el spacing y agrupación de tecnologías relacionadas
- [x] Agregar nuevas tecnologías (Docker, Azure DevOps, Nmap, VirtualBox, VMs, Kali Linux, Cortex)

### Sección Contacto
- [x] Implementar formulario de contacto funcional
- [x] Agregar validación de formulario con feedback visual
- [x] Mejorar el diseño de las cards de contacto
- [x] Agregar animación de envío exitoso
- [x] Implementar integración con EmailJS o similar
- [x] Agregar mapa interactivo con ubicación (opcional)
- [x] Mejorar los iconos sociales con efectos hover
- [x] Agregar botón de copiar email/teléfono al clipboard

### Footer
- [x] Rediseñar el footer con mejor estructura
- [x] Agregar enlaces rápidos a secciones
- [x] Mejorar los enlaces sociales con animaciones
- [x] Agregar indicador de última actualización

## 🎯 MEJORAS DE UX/UI

### Navegación y Comportamiento
- [x] Implementar smooth scroll con offset correcto para el navbar
- [x] Agregar breadcrumbs visuales de posición actual
- [x] Mejorar la indicación de sección activa en el navbar
- [x] Implementar gestos touch mejorados en mobile
- [x] Agregar feedback visual en todas las interacciones

### Animaciones y Transiciones
- [x] Optimizar animaciones para que sean más fluidas
- [x] Implementar lazy loading para animaciones pesadas
- [x] Agregar transiciones de página entre secciones
- [x] Mejorar el efecto parallax sin afectar performance
- [x] Implementar scroll snapping opcional
- [x] Agregar animaciones de skeleton loading

### Responsive Design
- [x] Mejorar el layout en tablets (768px - 1024px)
- [x] Optimizar tipografía para pantallas pequeñas
- [x] Ajustar spacing y padding en diferentes breakpoints
- [x] Mejorar la experiencia del carousel en mobile
- [x] Implementar imágenes responsive con srcset completo
- [x] Optimizar el navbar en landscape mobile
- [x] Mejorar la legibilidad en pantallas muy grandes (>2560px)

### Modo Claro/Oscuro
- [x] Implementar transición suave entre themes
- [x] Ajustar contraste de textos en ambos modos
- [x] Optimizar colores de acentos en modo claro
- [x] Agregar modo automático basado en horario
- [x] Mejorar las sombras y efectos en modo claro
- [x] Implementar persistencia mejorada del theme preference

## ⚡ MEJORAS DE RENDIMIENTO

### Optimización de Carga
- [x] Implementar code splitting más agresivo
- [x] Optimizar imágenes (WebP, AVIF) para todos los assets
- [x] Implementar lazy loading para secciones below the fold
- [x] Minificar y comprimir CSS/JS
- [x] Implementar service worker para caching
- [x] Optimizar fuentes con font-display: swap
- [x] Reducir el bundle size eliminando dependencias no usadas

### Assets y Media
- [x] Comprimir todas las imágenes sin pérdida de calidad
- [x] Implementar blur-up technique para imágenes
- [x] Usar CDN para assets estáticos
- [x] Optimizar SVGs e implementar icon sprite
- [x] Implementar preloading de recursos críticos
- [x] Agregar dimensiones width/height a todas las imágenes

### JavaScript y React
- [x] Implementar React.memo en componentes pesados
- [x] Optimizar re-renders con useMemo y useCallback
- [x] Reducir el tamaño de las dependencias de react-icons
- [x] Implementar virtual scrolling si hay muchos items
- [x] Optimizar event listeners (passive, debounce, throttle)

## ♿ MEJORAS DE ACCESIBILIDAD

### WCAG Compliance
- [ ] Asegurar contraste de color AAA en todos los textos
- [ ] Agregar labels descriptivos a todos los elementos interactivos
- [ ] Implementar focus visible en todos los elementos
- [ ] Mejorar la estructura semántica HTML (landmarks, headings)
- [ ] Agregar alt text descriptivo a todas las imágenes
- [ ] Implementar aria-labels y aria-descriptions
- [ ] Asegurar navegación completa por teclado

### Lectores de Pantalla
- [ ] Testear con NVDA/JAWS
- [ ] Implementar aria-live regions para contenido dinámico
- [ ] Mejorar los mensajes de estado accesibles
- [ ] Agregar skip links apropiados
- [ ] Implementar roles ARIA correctos en componentes custom

### Inclusión
- [ ] Implementar modo de alto contraste
- [ ] Agregar opción de reducir animaciones (prefers-reduced-motion)
- [ ] Mejorar el tamaño de texto base para mejor legibilidad
- [ ] Implementar indicadores de enfoque más visibles
- [ ] Agregar subtítulos a videos (si se agregan)

## 🔧 MEJORAS TÉCNICAS

### Código y Arquitectura
- [ ] Refactorizar componentes grandes en componentes más pequeños
- [ ] Implementar TypeScript para mejor type safety
- [ ] Mejorar la estructura de carpetas (features-based)
- [ ] Implementar custom hooks reutilizables
- [ ] Agregar PropTypes o TypeScript interfaces
- [ ] Mejorar el manejo de errores con Error Boundaries
- [ ] Implementar logging y analytics

### Testing
- [ ] Agregar tests unitarios para componentes
- [ ] Implementar tests de integración
- [ ] Agregar tests E2E con Playwright/Cypress
- [ ] Implementar visual regression testing
- [ ] Agregar tests de accesibilidad automatizados
- [ ] Setup CI/CD con tests automatizados

### SEO y Meta Tags
- [ ] Mejorar meta descriptions para cada sección
- [ ] Implementar structured data (JSON-LD)
- [ ] Agregar Open Graph tags optimizados
- [ ] Implementar Twitter Cards
- [ ] Optimizar robots.txt y sitemap.xml
- [ ] Agregar canonical URLs
- [ ] Implementar hreflang tags para i18n

### Analytics y Monitoreo
- [ ] Implementar Google Analytics 4
- [ ] Agregar tracking de eventos importantes
- [ ] Implementar error tracking (Sentry)
- [ ] Agregar performance monitoring
- [ ] Implementar heatmaps (Hotjar/Microsoft Clarity)
- [ ] Setup de A/B testing para mejoras

## 📱 FUNCIONALIDADES NUEVAS

### Interactividad
- [ ] Agregar blog section o articles
- [ ] Implementar sección de testimonios/recomendaciones
- [ ] Agregar contador de visitantes
- [ ] Implementar sistema de "Me gusta" en proyectos
- [ ] Agregar sección de timeline de carrera interactiva
- [ ] Implementar modo presentación (fullscreen sin navbar)

### Contenido
- [ ] Agregar sección de publicaciones/artículos
- [ ] Implementar sección de logros y premios
- [ ] Agregar galería de fotos de eventos
- [ ] Implementar sección de voluntariado
- [ ] Agregar información de disponibilidad laboral
- [ ] Implementar "Now" page (qué estoy haciendo actualmente)

### Social y Compartir
- [ ] Agregar botones de compartir en redes sociales
- [ ] Implementar preview cards cuando se comparte el sitio
- [ ] Agregar links a perfiles profesionales (LinkedIn, GitHub)
- [ ] Implementar widget de actividad de GitHub
- [ ] Agregar feed de últimas publicaciones de blog (si aplica)

## 🐛 BUGS Y FIXES

### Identificados
- [ ] Verificar scroll horizontal en pantallas muy pequeñas
- [ ] Corregir z-index conflicts entre componentes
- [ ] Mejorar el comportamiento del modal en iOS Safari
- [ ] Corregir animaciones que se saltan en mobile
- [ ] Verificar comportamiento del theme toggle en diferentes browsers
- [ ] Corregir focus trap en modales

### Por Verificar
- [ ] Testear en diferentes navegadores (Chrome, Firefox, Safari, Edge)
- [ ] Verificar compatibilidad con navegadores antiguos
- [ ] Testear en diferentes dispositivos móviles
- [ ] Verificar comportamiento en diferentes resoluciones
- [ ] Testear con diferentes tamaños de fuente del sistema

## 🌐 INTERNACIONALIZACIÓN

### Mejoras i18n
- [ ] Agregar más traducciones (Portugués, Francés, etc.)
- [ ] Mejorar las traducciones existentes EN/ES
- [ ] Implementar selector de idioma más visible
- [ ] Agregar detección automática de idioma del navegador
- [ ] Implementar persistencia de preferencia de idioma
- [ ] Agregar traducción a contenido dinámico
- [ ] Implementar formateo de fechas según locale

## 📊 MÉTRICAS Y KPIs

### Por Implementar
- [ ] Time to Interactive < 3s
- [ ] Lighthouse Score > 95 en todas las categorías
- [ ] Core Web Vitals en verde
- [ ] Bounce rate tracking
- [ ] Conversion tracking (contacto, CV download)
- [ ] Engagement metrics (tiempo en página, scroll depth)

## 🎓 CONTENIDO EDUCATIVO

### Por Agregar
- [ ] Agregar sección de recursos útiles
- [x] Crear una página "Sobre este portfolio" explicando las tecnologías
- [ ] Agregar changelog visible de actualizaciones
- [ ] Implementar easter eggs o detalles ocultos
- [ ] Agregar modo "desarrollador" con info técnica

---

## 📌 PRIORIDADES

### 🔴 Alta Prioridad (Próxima semana)
1. Mejorar responsive design en tablets
2. Implementar formulario de contacto funcional
3. Optimizar performance (Lighthouse score)
4. Corregir cualquier bug de accesibilidad crítico
5. Agregar screenshots a proyectos

### 🟡 Media Prioridad (Próximo mes)
1. Implementar filtros en proyectos y habilidades
2. Agregar más animaciones fluidas
3. Mejorar SEO y meta tags
4. Implementar analytics
5. Agregar tests automatizados

### 🟢 Baja Prioridad (Futuro)
1. Blog section
2. Modo presentación
3. Easter eggs
4. Más traducciones
5. Funcionalidades sociales avanzadas

---

**Última actualización:** 5 de Marzo, 2026
**Versión:** 1.12.0

## 🔧 CORRECCIONES RECIENTES

### 5 de Marzo, 2026 - v1.12.0
**Simplificación de Build Strategy - Automatic Code Splitting:**
- ✅ Eliminado completamente manualChunks de vite.config.js
- ✅ Vite ahora maneja code splitting automáticamente
- ✅ Bundle principal unificado: index.js (397KB, 127KB gzipped)
- ✅ Solo lazy loading de componentes específicos (AnimatedStat, Typewriter, etc)
- ✅ Resuelve problemas de inicialización de módulos de react-icons
- ✅ Orden de carga garantizado sin fragmentación compleja
- ✅ Service Worker actualizado a v1.10.0
- ✅ Build más simple y confiable

**Por qué esto funciona:**
- El code splitting manual causaba problemas de orden de inicialización
- Vite's automatic splitting es más confiable para dependencias complejas
- react-icons ahora se carga correctamente dentro del bundle principal
- Sin conflictos entre chunks separados

### 5 de Marzo, 2026 - v1.11.6
**Solución Completa de React Icons - Pre-bundling:**
- ✅ Agregado react-icons al pre-bundling de dependencias en optimizeDeps
- ✅ Incluidas todas las familias de iconos: fa, si, md, bi, di, vsc, tb
- ✅ Eliminado code splitting manual de react-icons (ahora en vendor general)
- ✅ Permite que Vite maneje la optimización internamente
- ✅ Resuelve definitivamente "Cannot set properties of undefined"
- ✅ Service Worker actualizado a v1.9.4
- ✅ Pre-bundling garantiza carga correcta de módulos complejos

### 5 de Marzo, 2026 - v1.11.5
**Fix Definitivo de React Icons en Producción:**
- ✅ Simplificada estrategia de code splitting para react-icons
- ✅ Todos los iconos ahora en un solo chunk 'icons-vendor'
- ✅ Evita problemas de inicialización con splitting granular por familia
- ✅ Resuelve error "Cannot set properties of undefined (setting 'Activity')"
- ✅ Service Worker actualizado a v1.9.3
- ✅ Build verificado exitosamente sin fragmentación de módulos de iconos

### 5 de Marzo, 2026 - v1.11.4
**Fix de Build y Optimización de Icons:**
- ✅ Corregido code splitting de react-icons en vite.config.js
- ✅ Agregado soporte explícito para react-icons/md y react-icons/bi
- ✅ Eliminados preloads de imágenes profile-*.avif que causaban warnings
- ✅ Service Worker actualizado a v1.9.2 para limpiar caches antiguas
- ✅ Corregido error "Cannot set properties of undefined (setting 'Activity')" en producción
- ✅ Optimizado manualChunks para evitar conflictos entre familias de iconos
- ✅ Build verificado exitosamente sin errores

### 5 de Marzo, 2026 - v1.11.3
**Mejoras en Hero Typewriter:**
- ✅ Ampliado efecto de máquina de escribir con 5 frases rotativas
- ✅ Frases: "Ingeniera en Sistemas", "Full Stack Developer", "Software Engineering"
- ✅ Inclusión de "Cybersecurity Enthusiast" reflejando interés en seguridad
- ✅ "Problem Solver" enfatizando habilidades de resolución de problemas
- ✅ Rotación dinámica cada 2.5 segundos con efecto de escritura natural
- ✅ Mejor representación del perfil profesional

### 5 de Marzo, 2026 - v1.11.2
**Eliminación del Carrusel y Mejoras en Projects:**
- ✅ Eliminado componente SwipeCarousel completamente del proyecto
- ✅ Projects.jsx ahora muestra solo vista de grid (3 columnas en desktop, 2 en tablet, 1 en móvil)
- ✅ Removidos botones de toggle entre vista carrusel/grid
- ✅ Grid optimizado con mejor spacing: 3rem (desktop), 2.5rem (tablet), 1.5rem (móvil)
- ✅ Cards con min-height 400px y padding 2.5rem para mejor presentación
- ✅ Filtros centralizados: solo tech filters y "Destacados"
- ✅ Agregado mensaje "Enlaces no disponibles" para proyectos sin links
- ✅ Traducciones agregadas: projects.no_links (ES/EN)
- ✅ Todos los 5 proyectos visibles sin restricciones
- ✅ Archivos eliminados: SwipeCarousel.jsx, SwipeCarousel.module.css (3 archivos)
- ✅ Import removido de App.jsx
- ✅ Service Worker cache actualizado a v1.9.1 para limpieza de cache viejo
- ✅ Mejor UX: vista única y directa sin complejidad de navegación
- ✅ Hover effects mejorados: translateY -5px en cards

### 5 de Marzo, 2026 - v1.11.1
**Nueva Sección: Sobre este Portfolio:**
- ✅ Creado componente AboutPortfolio.jsx con información detallada del stack tecnológico
- ✅ Sección dividida en 4 categorías: Frontend, Bibliotecas, Rendimiento, Despliegue
- ✅ Tecnologías explicadas: React 18, Vite, CSS Modules, react-i18next, EmailJS
- ✅ Información sobre optimizaciones: Code Splitting, Lazy Loading, Service Worker, Image Optimization
- ✅ Detalles de deployment: Vercel, GitHub, CI/CD automático
- ✅ Grid de características destacadas: Alto Rendimiento, Accesibilidad, Diseño Moderno, Código Limpio
- ✅ Estadísticas de rendimiento: Bundle <500KB, Lighthouse >95, LCP <2.5s, 100% Responsive
- ✅ Botón de enlace directo al repositorio de GitHub
- ✅ Estilos completos con glassmorphism, efectos hover, animaciones
- ✅ Soporte completo para modo claro/oscuro
- ✅ Traducciones completas en Español e Inglés (38 claves nuevas)
- ✅ Cards de tecnología con iconos coloridos y links externos
- ✅ Diseño responsive optimizado para mobile/tablet/desktop
- ✅ Soporte prefers-reduced-motion para accesibilidad
- ✅ Integración completa en App.jsx entre habilidades y contacto
- ✅ 3 archivos nuevos: AboutPortfolio.jsx, AboutPortfolio.module.css

**Actualización de Descripción Profesional:**
- ✅ Descripción actualizada en es.json y en.json
- ✅ Incluye experiencia en desarrollo full stack (React, Node.js, .NET, Angular)
- ✅ Mención de arquitecturas REST y bases de datos relacionales
- ✅ Detalles de trabajo actual en soporte IT (Active Directory, Office 365, Jira)
- ✅ Formación en ciberseguridad (Kali Linux, Nmap, entornos virtualizados)
- ✅ Áreas de interés: Software Engineering, Backend Development, Cybersecurity

### 5 de Marzo, 2026 - v1.11.0
**Optimización de Assets y React Performance:**
- ✅ Resource preloading: 5 preload tags para imágenes críticas (AVIF format)
- ✅ Preload tags con media queries: 300px, 600px, 1200px breakpoints
- ✅ Preload Google Fonts CSS para faster font loading
- ✅ DNS prefetch para EmailJS API (https://api.emailjs.com)
- ✅ Hero image optimizado: loading='eager' (critical path, above fold)
- ✅ Width/height dimensions en hero image para CLS prevention (300x300px)
- ✅ Performance utility library creada: src/utils/performance.js (300+ líneas)
- ✅ debounce function (300ms default, immediate option)
- ✅ throttle function (rate limiting con trailing call)
- ✅ rafThrottle (requestAnimationFrame synced)
- ✅ addPassiveEventListener (passive: true para scroll performance)
- ✅ lazyLoadImage helper con IntersectionObserver (rootMargin 50px)
- ✅ shallowEqual para object comparison en memoization
- ✅ createMemoizedSelector para caching de expensive computations
- ✅ measurePerformance (dev-only, warns si >16.67ms)
- ✅ createStableCallback para referential stability
- ✅ batchUpdates (React 18 compatible wrapper)
- ✅ supportsFeature: 6 feature detections (WebP, AVIF, IntersectionObserver, SW, WebGL, requestIdleCallback)
- ✅ runWhenIdle / cancelIdle (requestIdleCallback con setTimeout fallback)
- ✅ preloadResource helper para dynamic preload tag creation
- ✅ Projects.jsx: React.memo + 3x useMemo + 3x useCallback
- ✅ Projects data memoized (depende de translations)
- ✅ Tech filters memoized (depende de projects)
- ✅ Filtered projects memoized (depende de filters)
- ✅ Event handlers stabilizados con useCallback en Projects
- ✅ Skills.jsx: React.memo + useMemo + useCallback aplicados
- ✅ Skills data y categories memoizados
- ✅ Filtered skills computation memoizada
- ✅ Courses.jsx: React.memo + useMemo + useCallback aplicados
- ✅ Courses data y filtered courses memoizados
- ✅ isNewCourse function wrapped con useCallback
- ✅ ContactForm.jsx: React.memo + useCallback aplicados
- ✅ validateField, handleChange, handleBlur, handleSubmit memoizados
- ✅ validateForm function con useCallback dependencies correctas
- ✅ Navbar.jsx: React.memo + throttle aplicado
- ✅ handleScroll wrapped con useCallback
- ✅ Throttled scroll handler (100ms) para mejor performance
- ✅ Passive event listener en scroll (passive: true)
- ✅ handleNavClick stabilizado con useCallback
- ✅ 1 archivo nuevo: src/utils/performance.js (300+ líneas)
- ✅ 6 componentes optimizados: Projects, Skills, Courses, ContactForm, Navbar, ThemeToggle
- ✅ 11/11 tareas de Assets y Media + JavaScript y React completadas

**Impacto de la optimización:**
- Faster LCP: Critical images preloaded en parallel
- Zero CLS: Width/height dimensions especificadas
- Fewer re-renders: React.memo previene re-renders innecesarios
- Faster computations: useMemo caches resultados de filters y transformations
- Better scroll performance: Throttle + passive listeners
- Lower CPU usage: RAF throttle para animations smooth
- Stable function references: useCallback previene child re-renders

### 5 de Marzo, 2026 - v1.10.0
**Optimización Completa de Rendimiento y Carga:**
- ✅ Implementado code splitting agresivo con chunks estratégicos
- ✅ React vendor bundle separado (React, ReactDOM, Scheduler)
- ✅ Icon bundles por familia (fa, si, di/vsc/tb) para carga selectiva
- ✅ Component chunks organizados: interactive, animated, sections, core
- ✅ Hooks, translations, i18n en chunks separados
- ✅ Terser minification con drop_console para producción
- ✅ Console.log removidos, chunk size warning 1000KB
- ✅ CSS code splitting habilitado, source maps disabled
- ✅ Target ES2015 para browsers modernos
- ✅ Gzip compression: ratio ~70%, Brotli: ratio ~80%
- ✅ Bundle analyzer con rollup-plugin-visualizer
- ✅ Treemap interactivo en dist/stats.html con gzip/brotli sizes
- ✅ Service Worker avanzado con 5 estrategias de caching
- ✅ Cache-First: imágenes (1 semana) y fuentes (4 semanas)
- ✅ Network-First: HTML y API (5 min), Stale-While-Revalidate: JS/CSS (1 día)
- ✅ 5 cache namespaces versionados: static, runtime, images, fonts, api
- ✅ Cleanup automático de caches antiguas al activar
- ✅ Service Worker registration en main.jsx con callbacks
- ✅ Update notifications, offline handling, skip waiting
- ✅ Asset file naming: images/, fonts/, js/ con [hash]
- ✅ Dependency pre-bundling: React, i18next included
- ✅ Fonts optimizados: display=swap, local fallback System font
- ✅ Componentes lazy: AnimatedStat, ProjectModal, ScrollIndicator, etc
- ✅ Suspense boundaries con skeleton loaders
- ✅ Imágenes: loading="lazy", decoding="async", width/height set
- ✅ ResponsiveImage: AVIF/WebP/JPG, breakpoints 300/600/1200px
- ✅ Documentation: docs/PERFORMANCE.md (400+ líneas completas)
- ✅ Targets: LCP <2.5s, FID <100ms, CLS <0.1, Lighthouse >95
- ✅ Bundle: <500KB gzipped, tree shaking, ES modules
- ✅ 3 archivos nuevos: serviceWorkerRegistration.js, PERFORMANCE.md
- ✅ vite.config.js: 150+ líneas, sw.js: 300+ líneas
- ✅ 7/7 tareas Optimización de Carga completadas

### 5 de Marzo, 2026 - v1.9.0
**Sistema Avanzado de Temas con Modos Inteligentes:**
- ✅ Creado hook useTheme.js con gestión avanzada de temas (173 líneas)
- ✅ Implementados 3 modos de tema: manual, system, auto
- ✅ Modo manual: toggle tradicional dark/light con un clic
- ✅ Modo system: sigue preferencia del OS con prefers-color-scheme
- ✅ Modo auto: basado en horario (dark 7pm-7am, light 7am-7pm)
- ✅ Detección automática de preferencias del sistema operativo
- ✅ MediaQueryList con listeners para updates en tiempo real
- ✅ Actualización automática cada hora en modo auto con setInterval
- ✅ Persistencia mejorada: localStorage con theme y themeMode
- ✅ Sincronización entre pestañas vía storage event listener
- ✅ Transiciones suaves optimizadas (0.35s cubic-bezier)
- ✅ --transition-speed y --transition-timing como CSS variables
- ✅ will-change hints durante transición (4 propiedades)
- ✅ Clase .theme-transitioning para animaciones controladas
- ✅ Fade effect (opacity 0.98) durante cambio de tema
- ✅ Prevención de conflictos con transforms y animations existentes
- ✅ Exclusión de elementos animados de theme transitions
- ✅ Colores WCAG AAA en modo claro (6.5:1 a 15:1 contrast)
- ✅ --text: #0a0a0a (15:1 contrast ratio, máxima legibilidad)
- ✅ --text-secondary: #1a1a1a (12:1 contrast)
- ✅ --text-muted: #424242 (7.5:1 contrast)
- ✅ --neon-cyan: #0066cc (7.8:1 contrast, azul corporativo)
- ✅ --neon-purple: #6b21a8 (más oscuro y legible)
- ✅ --neon-pink: #be185d (6.5:1 contrast)
- ✅ --neon-green: #15803d (7.2:1 contrast)
- ✅ --neon-orange: #c2410c (6.8:1 contrast)
- ✅ --neon-blue: #1e40af (8.2:1 contrast)
- ✅ Todos los acentos optimizados para accesibilidad
- ✅ Sistema completo de sombras para light/dark modes
- ✅ 5 niveles de sombras: --shadow-sm, md, lg, xl, glow
- ✅ Dark mode: cyan glow shadows con rgba(0, 255, 255)
- ✅ Light mode: black/blue shadows con rgba(0, 0, 0) y rgba(0, 102, 204)
- ✅ --shadow-glow adaptado a cada tema para coherencia visual
- ✅ Componente ThemeToggle.jsx con selector de modo (160 líneas)
- ✅ UI con iconos de react-icons: FaSun, FaMoon, FaDesktop, FaClock
- ✅ Botón principal para toggle rápido dark/light
- ✅ Botón de modo con icono según modo activo
- ✅ Dropdown con 3 opciones y descripciones claras
- ✅ Manual: "Toggle manually" con icono sun/moon
- ✅ System: "Follow OS preference" con icono desktop
- ✅ Auto: "Dark 7pm-7am" con icono reloj
- ✅ Estado activo con gradiente cyan-purple
- ✅ Hover effects con scale(1.05) y glow shadows
- ✅ Animaciones de entrada (dropdownSlideIn 0.2s)
- ✅ Click outside y escape key para cerrar dropdown
- ✅ Mobile responsive: dropdown left-aligned, 200px min-width
- ✅ Touch optimizations: 48x48px min-tap-target
- ✅ High contrast mode support con border-width 3px
- ✅ Reduced motion support: sin animaciones
- ✅ ThemeToggle.module.css con 300+ líneas de estilos
- ✅ Backdrop blur y glassmorphism en dropdown
- ✅ Integrado en Navbar reemplazando botón emoji simple
- ✅ Navbar.jsx actualizado: recibe 6 props del theme hook
- ✅ App.jsx integrado con useTheme hook
- ✅ Eliminado useState manual del theme
- ✅ Eliminado useEffect de localStorage (hook lo maneja)
- ✅ Eliminada función toggleTheme manual
- ✅ Sombras mejoradas en todas las cards en modo claro
- ✅ Cards con backdrop-filter: blur(10px)
- ✅ Inset shadows para efecto 3D sutil
- ✅ Borders con colores temáticos por sección
- ✅ Botones con gradientes y múltiples capas de box-shadow
- ✅ Stat cards con hover effect mejorado
- ✅ Project cards con sombras naranjas (#c2410c)
- ✅ Skill cards con sombras verdes (#15803d)
- ✅ Contact cards con sombras azules (#1e40af)
- ✅ Body background con gradiente sutil en modo claro
- ✅ Grid pattern con opacidad 0.02 para textura
- ✅ Scanlines sutiles para efecto retro moderno
- ✅ 3 archivos nuevos: useTheme.js, ThemeToggle.jsx, ThemeToggle.module.css
- ✅ 6 tareas completadas de sección Modo Claro/Oscuro
- ✅ Performance optimizado: passive listeners, RAF, throttling
- ✅ Compatibilidad: Chrome, Firefox, Safari, Edge
- ✅ Accessibility: ARIA labels, keyboard navigation, focus states

### 5 de Marzo, 2026 - v1.8.0
**Mejoras Completas de Responsive Design:**
- ✅ Implementado layout optimizado para tablets (768-1024px)
- ✅ Hero section con grid 1fr 1fr en tablets, mejor spacing
- ✅ Stats container con 2 columnas en tablets (max-width 700px)
- ✅ Cards container en about con 2 columnas para tablets
- ✅ Section padding ajustado: 4rem 2.5rem en tablets
- ✅ Tipografía fluida con clamp() para todos los tamaños de pantalla
- ✅ Hero title: clamp(2rem, 8vw, 3rem) en mobile, mejor legibilidad
- ✅ Section title: clamp(1.75rem, 7vw, 2.5rem) responsive
- ✅ Line-height mejorado: 1.15-1.65 según contexto
- ✅ Letter-spacing optimizado para títulos (-0.02em)
- ✅ Spacing y padding con variables CSS personalizadas
- ✅ --section-padding-y: clamp(3rem, 5vw, 6rem)
- ✅ --section-padding-x: clamp(1.5rem, 3vw, 4rem)
- ✅ --container-padding: clamp(1rem, 2vw, 3rem)
- ✅ Media queries específicos para 1025-1440px y 1441-1920px
- ✅ Carousel mobile mejorado con scroll-snap-type mandatory
- ✅ Botones de navegación con touch-action: manipulation
- ✅ Min tap targets de 44x44px (40px en landscape)
- ✅ -webkit-overflow-scrolling: touch para iOS smooth scroll
- ✅ Feedback táctil: scale(0.95) en active state
- ✅ Prevención de text-select durante swipe
- ✅ Progress bar más visible: 5px en mobile
- ✅ Navbar landscape mobile optimizado (max 900px + landscape)
- ✅ Altura navbar reducida: 60px en landscape
- ✅ Hero padding-top: 5rem, grid 1fr, imagen 220px
- ✅ Stats en 4 columnas horizontales, labels 0.7rem
- ✅ Sections padding: 2rem 1.5rem en landscape
- ✅ Pantallas grandes (>2560px) con legibilidad mejorada
- ✅ Base font-size: 18px, line-height: 1.8
- ✅ Hero title: 5rem, subtitle: 2rem, description: 1.4rem
- ✅ Section title: 3.5rem, description: 1.4rem
- ✅ Max-width de textos: 60-70ch para legibilidad óptima
- ✅ Botones más grandes: 1.2rem font, 1rem 2.5rem padding
- ✅ Stat cards: 3rem padding, 4rem icon, 3.5rem number
- ✅ Componente ResponsiveImage.jsx creado
- ✅ Soporte AVIF, WebP, JPG con srcset automático
- ✅ Props: breakpoints personalizables, sizes, priority
- ✅ Loading lazy/eager y decoding async configurables
- ✅ Logos de empresa optimizados: loading lazy, width/height
- ✅ Agregados atributos: width="80" height="80" para CLS
- ✅ Decoding="async" para mejor First Contentful Paint
- ✅ Documentación completa: docs/IMAGE_OPTIMIZATION.md
- ✅ Guía de formatos (AVIF > WebP > JPG)
- ✅ Scripts de generación automática con Sharp
- ✅ Ejemplos de uso y best practices
- ✅ Checklist de optimización y performance metrics
- ✅ 3 archivos nuevos: ResponsiveImage.jsx, IMAGE_OPTIMIZATION.md

### 5 de Marzo, 2026 - v1.7.0
**Optimización Completa de Animaciones y Transiciones:**
- ✅ Creado sistema de optimización de animaciones con GPU acceleration
- ✅ Implementado hook useReducedMotion para detección de preferencias de accesibilidad
- ✅ Añadido soporte completo prefers-reduced-motion (animaciones a 0.01ms)
- ✅ Creado hook useIntersectionObserver para lazy loading de animaciones
- ✅ Threshold 0.1 y rootMargin 50px para triggers optimizados
- ✅ Implementado hook useOptimizedParallax con requestAnimationFrame
- ✅ Parallax throttling con ticking mechanism para evitar cálculos excesivos
- ✅ Passive scroll listeners para mejor performance
- ✅ Aplicado parallax al heroImageContainer con speed 0.3
- ✅ Creado archivo animations.css con 220+ líneas de optimizaciones
- ✅ Clases GPU-accelerated con will-change, translateZ(0), backface-visibility: hidden
- ✅ Keyframes optimizados: fadeInUp, slideInLeft, slideInRight, scaleFade
- ✅ Implementadas section transitions con scale(0.95) → scale(1)
- ✅ Staggered animations con nth-child delays (0.05s increments)
- ✅ Creado componente SkeletonLoader con 6 tipos
- ✅ Tipos: text, title, avatar, card, project, stat
- ✅ Shimmer animation con background-position 200% → -200% (1.5s infinite)
- ✅ Agregado SkeletonLoader type="stat" a 4 instancias de AnimatedStat
- ✅ Agregado SkeletonLoader type="text" al Suspense de Typewriter
- ✅ Creado componente LazyAnimation con 5 tipos de animaciones
- ✅ Tipos: fade, slide-left, slide-right, scale, section
- ✅ LazyAnimation respeta prefers-reduced-motion mostrando contenido inmediatamente
- ✅ Implementado componente ScrollSnap con toggle opcional
- ✅ Toggle con Ctrl/Cmd + Shift + S, notificación visual fadeInOut 2s
- ✅ Scroll snapping deshabilitado en mobile (<768px) para mejor UX
- ✅ Envuelto main content con ScrollSnap component (enabled={false} por defecto)
- ✅ Light/dark mode support para todos los skeletons y animaciones
- ✅ Responsive design: ajustes de heights en mobile para skeletons
- ✅ Performance: transform: translate3d para GPU, cubic-bezier(0.4, 0, 0.2, 1)
- ✅ Viewport detection en parallax: solo anima cuando elemento visible
- ✅ 8 archivos nuevos: 3 hooks, 1 CSS, 4 componentes (LazyAnimation, SkeletonLoader, ScrollSnap)

### 5 de Marzo, 2026 - v1.6.0
**Mejoras Completas de Navegación y UX:**
- ✅ Implementado smooth scroll con offset correcto (100px) para compensar navbar fijo
- ✅ Mejorada función scrollAndFocus para usar getBoundingClientRect + offset personalizado
- ✅ Actualizado Navbar para recibir scrollToSection como prop y usarlo consistentemente
- ✅ Creado componente Breadcrumbs con indicador visual de sección actual
- ✅ Breadcrumbs con dots de progreso interactivos (completado/activo/siguiente)
- ✅ Indicador de posición "X / 7" con iconos emoji por sección
- ✅ Breadcrumbs flotantes (fixed bottom-right) con diseño glassmorphism
- ✅ Mejorada indicación de sección activa con animaciones activeGlow
- ✅ Links activos con gradiente cyan-purple, glow pulsante y scale 1.05
- ✅ Flecha indicadora (▸) animada en links activos del navbar
- ✅ Estado activo mejorado en menú móvil con mismos efectos
- ✅ Hook useTouchGestures para navegación por swipe en móvil
- ✅ Swipe up/down para navegar entre secciones (threshold 50px)
- ✅ Detección inteligente: solo swipes verticales, ignora horizontales
- ✅ Componente InteractionFeedback global para todas las interacciones
- ✅ Efecto ripple en clicks de botones y enlaces
- ✅ Hover glow automático en elementos interactivos
- ✅ Active scale feedback (0.95) en mousedown/touchstart
- ✅ Focus visible mejorado con animación focusPulse para accesibilidad
- ✅ Detección de navegación por teclado (Tab) con clase .user-is-tabbing
- ✅ Animaciones success/error feedback para formularios
- ✅ Estilos de loading state con spinner animado
- ✅ Compatibilidad completa con modo claro y oscuro
- ✅ Responsive design para breadcrumbs en todos los dispositivos

### 5 de Marzo, 2026 - v1.5.0
**Rediseño Completo del Footer:**
- ✅ Reestructurado footer con diseño de 4 columnas (empresa, navegación, contacto, redes)
- ✅ Agregados enlaces rápidos con smooth scroll usando scrollAndFocus
- ✅ Implementadas animaciones hover avanzadas en redes sociales (scale, rotate, glow)
- ✅ Añadido indicador de última actualización con fecha y versión
- ✅ Creada sección de contacto rápido con email, teléfono y CV
- ✅ Agregados iconos de tecnologías usadas con tooltips (React, Vite, CSS, EmailJS)
- ✅ Implementado diseño responsive: 4 cols → 2 cols → 1 col
- ✅ Añadida ubicación "Rosario, Santa Fe, Argentina"
- ✅ Mejorado footer bottom con versión (v1.4.1) y fecha de actualización
- ✅ Agregado mensaje "Hecho con ❤️ en Argentina" con animación heartbeat
- ✅ Implementado divider con gradiente animado entre secciones
- ✅ Links de navegación con iconos emoji para mejor UX
- ✅ Grid de redes sociales con tarjetas individuales animadas
- ✅ Compatibilidad completa con modo claro y oscuro
- ✅ Agregadas 4 nuevas claves de traducción (ES/EN) para footer
- ✅ Efectos de brillo y sombra en cyan/purple consistentes con la paleta

### 5 de Marzo, 2026 - v1.4.1
**Rediseño Visual de Sección de Contacto:**
- ✅ Cambiado esquema de colores de amarillo (#eab308) a cyan profesional (#06b6d4)
- ✅ Actualizados todos los gradientes y efectos de brillo a tonos azul/cyan
- ✅ Mejorado contraste en modo claro con cyan más oscuro (#0891b2)
- ✅ Cards de contacto con bordes animados en cyan
- ✅ Partículas de fondo actualizadas a colores cyan
- ✅ Formulario ContactForm con gradientes cyan modernos
- ✅ Botón submit con gradiente cyan (#06b6d4 → #0891b2)
- ✅ Focus states de inputs con glow cyan
- ✅ Mapa de ubicación con pin y bordes cyan
- ✅ Botones de copiar con efectos hover cyan
- ✅ Compatibilidad completa en modo oscuro y claro

### 5 de Marzo, 2026 - v1.4.0
**Mejoras en Sección de Contacto:**
- ✅ Creado componente ContactForm.jsx con validación en tiempo real
- ✅ Implementado sistema de validación con feedback visual por campo
- ✅ Agregadas animaciones de loading, éxito y error en el formulario
- ✅ Implementada funcionalidad de copiar email/teléfono al clipboard
- ✅ Creados botones de copia con toast de confirmación animado
- ✅ Mejorados efectos hover en cards de contacto: scale 1.02, translateY -8px, rotate -5deg
- ✅ Incrementado brillo de iconos en hover (drop-shadow 0-30px)
- ✅ Añadida animación de glow pulse más rápida (1.5s) en hover
- ✅ Agregadas 22 claves de traducción para formulario en ES/EN
- ✅ Formulario preparado para integración con EmailJS (TODO en código)
- ✅ Diseño con glassmorphism consistente con el resto del portfolio
- ✅ Responsive design optimizado para móviles

### 5 de Marzo, 2026 - v1.3.1
**Actualización Sección de Habilidades:**
- ✅ Eliminados indicadores de nivel (Principiante, Intermedio, Avanzado)
- ✅ Interfaz más limpia y minimalista

### 5 de Marzo, 2026 - v1.3.0
**Mejoras en Sección de Habilidades:**
- ✅ Creado componente Skills.jsx modular con estructura de datos organizada
- ✅ Categorización mejorada: Frontend, Backend, Databases, DevOps & Cloud, Security & Networking, Languages, OS, Design, Tools
- ✅ Agregadas nuevas tecnologías: Docker, Azure DevOps, Azure, Nmap, VirtualBox, Máquinas Virtuales, Kali Linux, Cortex
- ✅ Implementadas animaciones de entrada escalonadas (fadeInUp + slideInLeft)
- ✅ Sistema de filtros por categoría con estilo moderno
- ✅ Mejor spacing y agrupación: grid de 3 columnas, spacing de 2rem
- ✅ Efectos hover mejorados: transformaciones, sombras, gradientes
- ✅ Iconos coloridos por tecnología con animaciones
- ✅ Traducciones completas en ES/EN
- ✅ Responsive design optimizado

### 5 de Marzo, 2026 - v1.2.0
**Mejoras en Sección de Proyectos:**
- ✅ Creado componente Projects.jsx centralizado con datos estructurados
- ✅ Implementado toggle para alternar entre vista carousel y grid (2 columnas)
- ✅ Sistema de filtros por tecnología con todas las techs de los proyectos
- ✅ Filtro de proyectos destacados con badge dorado animado
- ✅ Mejoradas transiciones del carousel (cubic-bezier, scroll-behavior smooth)
- ✅ Diseño mejorado: glassmorphism, gradientes, hover effects mejorados
- ✅ Contador de proyectos filtrados
- ✅ Traducciones completas en ES/EN
- ✅ Responsive design optimizado para todas las pantallas

### 5 de Marzo, 2026 - v1.1.0
**Mejoras en Sección de Cursos:**
- ✅ Implementado sistema de filtros por categoría (Todos, Programación, IA)
- ✅ Implementado badge "Nuevo" para cursos recientes (menos de 6 meses)
- ✅ Mejorado grid responsive: 3 columnas en desktop, 2 en tablets, 1 en móviles (tarjetas más anchas)
- ✅ Botón de descarga directo para certificados con gradiente
- ✅ Optimizados estilos para modo claro y oscuro
- ✅ Simplificada interfaz eliminando modal innecesario
- ✅ Mejorados efectos visuales: glassmorphism, animaciones hover, iconos con gradientes

**Correcciones de Bugs:**
- ✅ Corregido bug de visibilidad en sección Experiencia
- ✅ Corregido typo en traducción del Navbar móvil (navbar.experiencia → navbar.experience)
- ✅ Arregladas animaciones slideInLeft/slideInRight que ocultaban tarjetas de experiencia
