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
- [ ] Mejorar el layout en tablets (768px - 1024px)
- [ ] Optimizar tipografía para pantallas pequeñas
- [ ] Ajustar spacing y padding en diferentes breakpoints
- [ ] Mejorar la experiencia del carousel en mobile
- [ ] Implementar imágenes responsive con srcset completo
- [ ] Optimizar el navbar en landscape mobile
- [ ] Mejorar la legibilidad en pantallas muy grandes (>2560px)

### Modo Claro/Oscuro
- [ ] Implementar transición suave entre themes
- [ ] Ajustar contraste de textos en ambos modos
- [ ] Optimizar colores de acentos en modo claro
- [ ] Agregar modo automático basado en horario
- [ ] Mejorar las sombras y efectos en modo claro
- [ ] Implementar persistencia mejorada del theme preference

## ⚡ MEJORAS DE RENDIMIENTO

### Optimización de Carga
- [ ] Implementar code splitting más agresivo
- [ ] Optimizar imágenes (WebP, AVIF) para todos los assets
- [ ] Implementar lazy loading para secciones below the fold
- [ ] Minificar y comprimir CSS/JS
- [ ] Implementar service worker para caching
- [ ] Optimizar fuentes con font-display: swap
- [ ] Reducir el bundle size eliminando dependencias no usadas

### Assets y Media
- [ ] Comprimir todas las imágenes sin pérdida de calidad
- [ ] Implementar blur-up technique para imágenes
- [ ] Usar CDN para assets estáticos
- [ ] Optimizar SVGs e implementar icon sprite
- [ ] Implementar preloading de recursos críticos
- [ ] Agregar dimensiones width/height a todas las imágenes

### JavaScript y React
- [ ] Implementar React.memo en componentes pesados
- [ ] Optimizar re-renders con useMemo y useCallback
- [ ] Reducir el tamaño de las dependencias de react-icons
- [ ] Implementar virtual scrolling si hay muchos items
- [ ] Optimizar event listeners (passive, debounce, throttle)

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
- [ ] Crear una página "Sobre este portfolio" explicando las tecnologías
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
**Versión:** 1.3.1

## 🔧 CORRECCIONES RECIENTES

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
