# Performance and UX Improvement Plan for Portfolio Website

## Instructions
- Before applying improvements, test each page/component thoroughly on both mobile and web versions.
- Use browser dev tools and device simulators to analyze performance and responsiveness.

---

## Mobile Version Improvement Checklist

- [x] Optimize scroll event listeners (ScrollIndicator, BackToTopButton) with throttling or requestAnimationFrame to reduce CPU usage.
- [x] Ensure animations (AnimatedStat, Typewriter) run smoothly without blocking the main thread; replace setInterval/setTimeout with requestAnimationFrame where applicable.
- [x] Minimize DOM updates by memoizing components to prevent unnecessary re-renders.
- [x] Verify touch responsiveness and swipe gestures in SwipeCarousel are smooth and intuitive.
- [x] Optimize image loading for mobile data performance (use appropriate formats, sizes, and lazy loading).
- [x] Ensure font sizes and tap targets meet mobile accessibility guidelines.
- [x] Test and optimize page load times by minimizing bundle size and lazy loading heavy components.
- [ ] Verify that all interactive elements work properly on smaller screens (buttons, links, modals).
	- [ ] Test tap targets (>=44px) en Header, Navbar, Cards, Project actions.
	- [x] Validar modals en pantallas < 360px (apertura/cierre, scroll locking, foco inicial).
	- [ ] Comprobar enlaces externos con `rel="noopener noreferrer"` y comportamiento en iOS/Android.
	- [x] Revisar swipe en `SwipeCarousel` y evitar conflictos con scroll vertical.

- [ ] Ensure back-to-top button visibility and functionality do not obstruct content.
	- [ ] Verificar z-index y opacidad en distintas secciones (cards, modals, footer).
	- [x] Añadir margen/offset dinámico para evitar solapado con CTA flotantes.
	- [ ] Probar aparición/desaparición con umbral de scroll (200–300px) sin jank.

- [ ] Verify efficient usage of intersection observer in AnimateOnScroll for mobile performance.
	- [x] Usar `rootMargin: '0px 0px -20% 0px'` para anticipar entrada sin disparos excesivos.
	- [ ] Desconectar el observer al montar/desmontar (cleanup) y cuando el elemento ya fue animado.
	- [ ] Limitar el número de observaciones simultáneas y reutilizar un único observer por sección.
	- [x] Medir `performance.mark` en entrada/salida para confirmar bajo costo.

---

## Web Version Improvement Checklist

- [x] Optimize scroll event listeners (ScrollIndicator, BackToTopButton) with throttling or requestAnimationFrame to reduce CPU usage.
- [x] Improve animations (AnimatedStat, Typewriter) to leverage requestAnimationFrame for smoother, non-blocking performance.
- [x] Use memoization (React.memo) for AnimatedStat, Typewriter, ScrollIndicator, BackToTopButton to reduce unnecessary renders.
- [x] Test SwipeCarousel interactions with mouse and keyboard on desktop.
- [ ] Implement keyboard and mouse accessibility for interactive components.
	- [x] Añadir `tabIndex` y `aria-label`/`role=button` en elementos clicables no nativos.
	- [x] Soportar `Enter` y `Space` para activar botones y tarjetas.
	- [x] Gestionar foco al abrir `ProjectModal` (focus trap, retorno de foco al cerrar).
	- [x] Asegurar contraste AA en estados `:focus-visible`.
	- [x] Los atajos de estadísticas redirigen y hacen foco en la sección.

- [ ] Optimize image assets for various screen sizes without sacrificing quality.
	- [x] Generar variantes responsive (`srcset`/`sizes`) para `profile.jpg` y assets de proyectos.
		- [x] Evaluar formatos WebP/AVIF en `public/` manteniendo fallback.
		- [x] Lazy-load con `loading="lazy"` y `decoding="async"` donde aplique.

	- [x] Revisar `max-width` y `grid` para ultra-wide (>=1440px) y 4K.
	- [x] Ajustar `clamp()` en tipografías de títulos y descripciones.
	- [x] Ajustar gaps en stats y cards/grid para >=1600px.
	- [ ] Validar que carousels y grids no queden con espacios excesivos.
	- [x] Carrusel muestra 2 ítems por vista en ultra‑wide.
- [ ] Monitor performance during heavy animations or interactions using browser dev tools.
		- [x] Navbar y botones del modal cumplen 44px mínimos.
	- [ ] Perfilado con Performance panel (marcas de frame, long tasks).
	- [ ] Medir FPS durante SwipeCarousel y AnimatedStat.
	- [ ] Detectar memory leaks en observers/listeners.

- [ ] Verify modals (ProjectModal) open and close smoothly without layout shifts.
	- [x] Comprobar que `body` se bloquea (`overflow: hidden`) y no hay CLS.
		- [x] Animaciones con `transform/opacity` en lugar de layout properties.
	- [x] Testear cierre con `Esc` y clic fuera accesible.

	- [x] Validar cálculo con `documentElement.scrollHeight` y altura de viewport.
	- [ ] Probar en rutas cortas/largas y con contenido dinámico.
	- [x] Evitar repaints costosos usando `requestAnimationFrame` y `will-change`.

		- [ ] Evaluar formatos WebP/AVIF en `public/` manteniendo fallback.
	- [ ] Reducir listeners a uno por documento y usar RAF/throttle.
	- [ ] Desactivar en móviles para evitar conflictos táctiles.
	- [ ] Medir coste en DevTools (Event Listeners, JS profiling).

---

## Follow-up Steps

- [ ] Perform comprehensive testing on multiple devices and browsers.
- [ ] Use performance profiling tools to identify bottlenecks.
- [ ] Adjust animation speeds or consider lazy loading non-critical components.
- [ ] Monitor for visual glitches or jank, particularly during scroll and animations.
- [ ] Iterate improvements based on user feedback and metrics.

