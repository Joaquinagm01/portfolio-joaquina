# Joaquina Gomez Manna - Portfolio Profesional

Portfolio web profesional desarrollado con React + Vite, enfocado en presentar perfil tecnico, experiencia, proyectos, habilidades y contacto en formato moderno, rapido y accesible.

## Resumen

- Aplicacion SPA construida con React 19 y Vite 7.
- Interfaz bilingue (es/en) con i18next.
- Diseño modular con CSS Modules.
- Formulario de contacto con validaciones y soporte EmailJS.
- Optimizada para performance (lazy loading, service worker, imagenes responsivas).
- Preparada para despliegue en Vercel.

## Demo y objetivo

Este proyecto funciona como identidad digital tecnica para reclutadores, equipos de desarrollo y clientes, mostrando:

- Experiencia profesional con resultados cuantificables.
- Proyectos destacados y stack por proyecto.
- Skills organizadas por categoria.
- Formas de contacto directas.

## Stack Tecnologico

### Frontend

- React 19
- Vite 7
- CSS Modules
- React Icons
- react-intersection-observer

### Internacionalizacion

- i18next
- react-i18next

### Contacto y feedback

- @emailjs/browser
- canvas-confetti

### Tooling

- ESLint 9
- PostCSS
- TailwindCSS (infra instalada)
- Sharp (pipeline de imagenes)

## Estructura del codigo

Estructura principal del proyecto:

```text
.
|- public/
|  |- manifest.json
|  |- sw.js
|  |- profile-*.{jpg,webp,avif}
|- scripts/
|  |- generate-images.js
|- src/
|  |- main.jsx
|  |- App.jsx
|  |- App.module.css
|  |- index.css
|  |- components/
|  |- hooks/
|  |- i18n/
|  |- styles/
|  |- utils/
|- index.html
|- package.json
|- vite.config.js
```

## Arquitectura funcional (detalle de codigo)

### Entrada y bootstrap

- `src/main.jsx`
  - Inicializa React con `createRoot`.
  - Carga i18n global.
  - Envuelve toda la app en `ErrorBoundary`.
  - Registra el Service Worker para cache offline y actualizaciones.

### Componente principal

- `src/App.jsx`
  - Orquesta todas las secciones del portfolio (hero, about, experiencia, cursos, proyectos, skills, contacto, footer).
  - Gestiona estado de UI:
    - proyecto seleccionado (modal)
    - expansion de cards
    - copiado al portapapeles
  - Implementa navegacion accesible con `scrollAndFocus` (offset de navbar + foco en heading).
  - Integra mejoras UX:
    - componentes lazy (`React.lazy` + `Suspense`)
    - feedback visual de interaccion
    - scroll indicator y back-to-top
    - selector de idioma

### Componentes clave

- `src/components/Navbar.jsx`
  - Navegacion principal + switch de tema/idioma.

- `src/components/Projects.jsx`
  - Listado de proyectos, tecnologias y enlaces.
  - Integracion con `ProjectModal`.

- `src/components/Skills.jsx`
  - Skills por categoria (frontend, backend, QA, etc.).

- `src/components/ContactForm.jsx`
  - Formulario con validacion por campo.
  - Manejo de estados `sending/success/error`.
  - Envio real via EmailJS si existen variables de entorno.

- `src/components/InteractionFeedback.jsx`
  - Feedback de hover/click/active global.
  - Incluye validaciones para evitar errores con targets no compatibles.

### Hooks personalizados

- `src/hooks/useTheme.js`
  - Gestion de tema claro/oscuro.

- `src/hooks/useReducedMotion.js`
  - Respeta preferencias de accesibilidad de movimiento.

- `src/hooks/useOptimizedParallax.js`
  - Efecto parallax optimizado para mejor performance.

- `src/hooks/useIntersectionObserver.js`
  - Activacion de animaciones y cargas por interseccion en viewport.

### Internacionalizacion

- `src/i18n/i18n.js`
  - Configuracion de i18next.

- `src/i18n/es.json` y `src/i18n/en.json`
  - Diccionarios completos de UI y contenido.

### Utilidades

- `src/utils/serviceWorkerRegistration.js`
  - Registro y ciclo de vida del Service Worker.

- `src/utils/performance.js`
  - Helpers de performance (segun implementacion actual).

## Imagenes y optimizacion

La imagen de perfil se sirve en multiples formatos/tamaños desde `public/` para mejorar LCP y ancho de banda.

Generacion automatica:

```bash
npm run images
```

Salida esperada:

- `profile-180/300/360/600/720/1200.jpg`
- `profile-180/300/360/600/720/1200.webp`
- `profile-180/300/360/600/720/1200.avif`

## Variables de entorno

Para habilitar envio real del formulario de contacto, crear un archivo `.env` en la raiz:

```env
VITE_EMAILJS_SERVICE_ID=tu_service_id
VITE_EMAILJS_TEMPLATE_ID=tu_template_id
VITE_EMAILJS_PUBLIC_KEY=tu_public_key
```

Si faltan estas variables, la app entra en modo de simulacion (dev fallback) para no romper UX.

## Scripts disponibles

```bash
npm run dev      # Servidor local de desarrollo
npm run build    # Build de produccion
npm run preview  # Previsualiza build localmente
npm run lint     # Analisis estatico con ESLint
npm run images   # Genera imagenes optimizadas desde profile.jpg
```

## Instalacion y ejecucion local

1. Clonar repositorio.
2. Instalar dependencias.
3. Ejecutar en desarrollo.

```bash
git clone <repo-url>
cd portfolio-joaquina
npm install
npm run dev
```

Aplicacion local por defecto:

- `http://localhost:5173` (o puerto asignado por Vite si 5173 esta ocupado)

## Build y despliegue

### Build de produccion

```bash
npm run build
```

Salida en carpeta `dist/`.

### Deploy en Vercel

El proyecto incluye configuracion para despliegue en Vercel (`vercel.json`).

Flujo recomendado:

1. Push a rama principal.
2. Importar repo en Vercel.
3. Configurar variables `VITE_EMAILJS_*` en dashboard.
4. Deploy automatico por commit.

## Calidad, accesibilidad y performance

- Error Boundary global para evitar caidas completas de UI.
- Foco accesible al navegar por secciones.
- Carga diferida de componentes no criticos.
- Service Worker para cache y soporte offline basico.
- Recursos visuales optimizados para mobile y desktop.

## Roadmap sugerido

- Agregar tests unitarios (Vitest + React Testing Library).
- Agregar e2e (Playwright).
- Incluir pipeline CI (lint + build + tests).
- Incluir analisis de bundles por PR.

## Licencia

Uso personal/profesional de portfolio. Si reutilizas codigo, adapta contenido y credenciales antes de publicar.
