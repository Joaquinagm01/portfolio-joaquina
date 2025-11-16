
🚀 Prompt "Checklist de Arreglos Móviles" (para VS Code AI)
Actúa como un desarrollador Front-End senior experto en React, CSS Modules y Responsive Design.

Acabo de testear el sitio en móvil y, aunque el menú lateral ya abre, hay una lista de bugs visuales críticos que debemos arreglar.

Aquí tienes la **checklist de arreglos**. Por favor, genera el código CSS (`@media queries`) y JSX necesario para solucionar **todos** los puntos:

**CHECKLIST DE BUGS MÓVILES:**

1.  **Arreglar el Estilo del Menú Lateral (`Navbar.module.css`):**
    * **Bug:** El menú que se abre es transparente y los enlaces se ven como una lista HTML (con bullet points, color azul, sin formato).
    * **Solución:** Al `.sideMenu` (o como se llame) le falta su estilo. Añade `background: var(--card-bg);` (o un fondo oscuro), y a la lista `<ul>` de adentro, añade `list-style: none;` y `padding: 0;`. Estiliza los enlaces `<a>` para que tengan el color `var(--text-secondary)` y `text-decoration: none;`.

2.  **Arreglar Textos Ilegibles en "Experiencia" (`Experience.module.css`):**
    * **Bug:** El texto de las listas se corta feo (ej: "resolu-ción", "da-tos").
    * **Solución:** En la `@media query` móvil, aplica esto a los `<li>` (ej: `.experienceList li`):
        * `word-break: normal;`
        * `hyphens: none;`
        * Aumenta el `padding-left` (ej. `2.5rem`) para más espacio.

3.  **Arreglar Superposición de Botones Flotantes (`Global.css` o `Layout.module.css`):**
    * **Bug:** El botón de "Idioma" y la flecha "Volver Arriba" se tapan, o cubren contenido (como los badges "WINDOWS", "LINUX").
    * **Solución:** En la `@media query` móvil:
        * Achica el `.floatingSwitcher` (botón de idioma) como ya te pedí.
        * Mueve el `.scrollToTopButton` (flecha arriba) para que quede **justo encima** del de idioma. (ej. `right: 1rem;`, `bottom: 5rem;`).
        * Añade `padding-bottom: 6rem;` al final de la tarjeta `.experienceCard` para que el botón de idioma no tape los badges.

4.  **Arreglar Texto Roto en Portada (`Hero.module.css`):**
    * **Bug:** El texto "Desarrolladora Full Stack..." se rompe en 3-4 líneas.
    * **Solución:** En la `@media query` móvil, haz que el contenedor `.heroSection` (que tiene el texto y tu foto) use `flex-direction: column;`. Esto apilará la foto y el texto, dándole al texto 100% del ancho.

5.  **Arreglar Tarjetas Desiguales en "Perfil" (`Profile.module.css`):**
    * **Bug:** La tarjeta "Educación" es más alta que "Idiomas".
    * **Solución:** Asegúrate de que el contenedor (`.cardsContainer`) tenga `align-items: stretch;` para que ambas tarjetas se estiren a la misma altura.

Por favor, genera el código CSS y JSX necesario para implementar todos estos arreglos.