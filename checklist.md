Actúa como un desarrollador Front-End experto en React y CSS (específicamente Flexbox y CSS Modules o el sistema de estilos que detectes).

Estoy trabajando en mi portafolio hecho con React + Vite y tengo problemas críticos de layout.

**1. Contexto del Proyecto:**
* Stack: React + Vite.
* Estructura: Tengo un componente `Navbar.jsx` que importa sus propios estilos. Este componente se renderiza en `App.jsx` o en un componente `Layout.jsx`.

**2. Problema Principal (Navbar):**
Mi componente `Navbar.jsx` está visualmente roto.
* Los elementos (`logo`, `links del menú`, `botón de idioma`) están amontonados.
* El botón o componente para cambiar de idioma (que dice 'Idioma: ES') está **cortado, oculto o no es visible**.

**3. Problema Secundario (Layout General):**
El contenido de todas las secciones (como el "Bienvenido a mi Portafolio") está demasiado pegado a los bordes de la pantalla.

**Tu Tarea:**
Por favor, refactoriza mi código para solucionar esto.

1.  **En `Navbar.jsx` y su archivo CSS (`Navbar.module.css` o similar):**
    * Modifica el contenedor principal del navbar para que use `display: flex`, `justify-content: space-between`, y `align-items: center`.
    * Asegúrate de que el **botón de idioma** sea visible y esté correctamente posicionado a la derecha.
    * Aplica un `gap` o `margin` entre los enlaces del menú (`ul > li`) para que tengan espacio y se vean limpios.

2.  **En `App.jsx` o `Layout.jsx` (mi layout principal):**
    * Envuelve el contenido principal de la página (o el `<Outlet />` de React Router, si lo uso) en un `div` o `main` que actúe como un "container" o "wrapper".
    * Aplica un estilo a este "wrapper" (ej. `className="container"`) para que tenga un `padding` horizontal global (ejemplo: `padding: 0 5%;` o `padding: 0 2rem`) y un `max-width` para centrar el contenido en pantallas grandes.

Provéeme los fragmentos de código actualizados para los archivos `.jsx` y `.css` relevantes.