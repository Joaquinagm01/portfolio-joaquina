# Joaquina Gomez Manna | Portfolio Profesional

> Portfolio web personal desarrollado con React + Vite para mostrar mi perfil, experiencia, proyectos, habilidades y contacto en una experiencia bilingue, rapida y moderna.

## Vista Rapida

| Tema | Detalle |
| --- | --- |
| Enfoque | Soporte, ciberseguridad, analisis y desarrollo |
| Idiomas | Espanol / Ingles |
| UI | Modular, accesible y responsive |
| Deploy | Vercel |
| Formulario | EmailJS |

## Lo Que Muestra

- Una presentacion clara de mi perfil profesional.
- Experiencia laboral y formacion academica con datos concretos.
- Proyectos destacados con stack, funcionalidades y enlaces.
- Skills organizadas por categoria para lectura rapida.
- Cursos y certificaciones descargables.
- Formulario de contacto y acceso directo al CV.

## Por Que Vale La Pena Verlo

- Porque resume en pocos minutos quien soy y que hago.
- Porque esta preparado para reclutadores, equipos tecnicos y personas que quieren evaluar mi trabajo.
- Porque combina contenido profesional con una interfaz pensada para navegar rapido.

## Stack Principal

- React 19
- Vite 7
- CSS Modules
- i18next / react-i18next
- React Icons
- react-intersection-observer
- EmailJS
- canvas-confetti
- Sharp

## Caracteristicas Clave

- Interfaz bilingue en espanol e ingles.
- Navegacion accesible con scroll suave y foco correcto.
- Componentes lazy para mejorar performance.
- Service Worker con cache y soporte offline basico.
- Imagenes optimizadas en JPG, WebP y AVIF.
- Diseno modular con secciones reutilizables.

## Estructura Del Proyecto

```text
.
├─ public/
│  ├─ manifest.json
│  ├─ sw.js
│  └─ profile-*.{jpg,webp,avif}
├─ scripts/
│  └─ generate-images.js
├─ src/
│  ├─ main.jsx
│  ├─ App.jsx
│  ├─ components/
│  ├─ hooks/
│  ├─ i18n/
│  ├─ styles/
│  └─ utils/
├─ index.html
├─ package.json
└─ vite.config.js
```

## Como Ejecutarlo

```bash
git clone <repo-url>
cd portfolio-joaquina
npm install
npm run dev
```

Luego abrilo en el puerto que te indique Vite, normalmente `http://localhost:5173`.

## Scripts Utiles

```bash
npm run dev      # Desarrollo
npm run build    # Build de produccion
npm run preview  # Vista previa del build
npm run lint     # Lint del proyecto
npm run images   # Imagenes optimizadas
```

## Variables De Entorno

Para habilitar el envio real del formulario de contacto, crea un archivo `.env` en la raiz:

```env
VITE_EMAILJS_SERVICE_ID=tu_service_id
VITE_EMAILJS_TEMPLATE_ID=tu_template_id
VITE_EMAILJS_PUBLIC_KEY=tu_public_key
```

Si no estan definidas, el formulario sigue funcionando en modo simulacion.

## Despliegue

El proyecto ya esta preparado para Vercel. Solo hace falta subir el repo, configurar las variables de entorno y activar el deploy automatico.

## Performance Y Accesibilidad

- Lazy loading en secciones no criticas.
- Error Boundary para evitar caidas completas.
- Imagenes optimizadas para carga rapida.
- Respeto por la preferencia de reduced motion.

## Licencia

Uso personal y profesional como portfolio. Si reutilizas este codigo, adapta el contenido y las credenciales antes de publicarlo.
