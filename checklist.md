# ✅ Checklist de Mejoras para el Portafolio

Aquí tienes una lista de sugerencias para mejorar la interactividad, el diseño y la experiencia de usuario general de la página web.

---

### 🎨 Mejoras Visuales y de Interacción

- [ ] **Scroll-Spy Activo en el Navbar:** Hacer que el enlace de la sección visible actualmente en la pantalla se destaque de forma más evidente en la barra de navegación, no solo con un color, sino quizás con un ícono o un fondo diferente.
- [ ] **Animaciones de Entrada por Sección:** Implementar animaciones de "fade-in" o "slide-in" para los elementos de cada sección a medida que el usuario hace scroll, en lugar de animar solo el encabezado. Esto crea una experiencia de descubrimiento más fluida.
- [ ] **Efecto "Tilt" en Tarjetas:** Aplicar un efecto 3D "tilt" (inclinación) a las tarjetas de proyectos y habilidades al pasar el mouse, haciendo que reaccionen a la posición del cursor para una sensación más inmersiva.
- [ ] **Gamificación del Cursor:** Cambiar el cursor por defecto a un diseño personalizado que se relacione con la temática futurista. Podría cambiar de forma o color al pasar sobre elementos interactivos.
- [ ] **Transiciones de Tema (Light/Dark) más Suaves:** En lugar de un cambio instantáneo, hacer que la transición de colores entre modos sea más gradual y animada, afectando primero el fondo y luego los elementos.

---

### ⚙️ Mejoras Funcionales y de Movimiento

- [x] **Contador Animado para Estadísticas:** Hacer que los números de la sección de estadísticas (+2 años, +5 proyectos) cuenten desde cero hasta el valor final cuando la sección aparece en pantalla.
- [ ] **Filtrado Interactivo de Habilidades:** Añadir botones de categoría (Ej: "Lenguajes", "Frameworks") en la sección de habilidades que permitan al usuario filtrar y mostrar solo las tarjetas de esa categoría.
- [ ] **Modal para Detalles del Proyecto:** En lugar de mostrar toda la información en la tarjeta, hacer que al hacer clic en "Ver más" se abra una ventana modal con una descripción más detallada, galería de imágenes o incluso un video demo del proyecto.
- [ ] **Efecto "Máquina de Escribir" para el Subtítulo:** Animar el subtítulo del "Hero Section" ("Full Stack Developer...") para que aparezca como si se estuviera escribiendo en tiempo real.
- [ ] **Indicador de Scroll:** Añadir una barra de progreso en la parte superior de la página que indique cuánto ha avanzado el usuario en el scroll total de la web.

---

### ✨ Mejoras de "Calidad de Vida" (QoL) y Atractivo

- [ ] **Respetar `prefers-reduced-motion`:** Desactivar o reducir las animaciones más intensas si el usuario tiene activada la opción de "movimiento reducido" en su sistema operativo, mejorando la accesibilidad.
- [ ] **Lazy Loading para Imágenes y Secciones:** Implementar carga perezosa (lazy loading) para las imágenes y componentes que no están en la vista inicial. Esto mejorará drásticamente el tiempo de carga inicial de la página.
- [ ] **Tooltips en Iconos de Habilidades:** Al pasar el mouse sobre los íconos de las tecnologías (React, Docker, etc.), mostrar un pequeño `tooltip` con el nombre de la herramienta.
- [ ] **Fondo Animado Sutil:** Hacer que el fondo de estrellas o partículas se mueva lentamente en respuesta al movimiento del mouse (efecto parallax), añadiendo una capa de profundidad sin distraer.
- [ ] **Sonidos de Interfaz Opcionales:** Añadir sonidos sutiles y futuristas (opcionales y desactivados por defecto) para ciertas acciones como clics en botones o cambios de sección, para una experiencia multisensorial.

---

### 📱 Mejoras para Dispositivos Móviles

- [ ] **Menú de Navegación Hamburguesa:** En pantallas pequeñas, reemplazar la barra de navegación horizontal por un menú "hamburguesa" que se despliegue al tocarlo para una navegación más limpia.
- [ ] **Optimización de Interacciones Táctiles:** Reemplazar los efectos que dependen del `hover` por interacciones optimizadas para el tacto. Por ejemplo, un ligero "pulso" o cambio de estilo al tocar una tarjeta o botón.
- [ ] **Tamaño de los Elementos Táctiles:** Asegurarse de que todos los botones, enlaces e iconos sean lo suficientemente grandes para ser presionados fácilmente con el dedo, siguiendo las guías de accesibilidad.
- [ ] **Ajuste de Tipografía Responsiva:** Reducir el tamaño de las fuentes más grandes (como los títulos de sección) en móviles para evitar que ocupen demasiado espacio vertical y mejorar la legibilidad en pantallas pequeñas.
- [ ] **Rendimiento en Móviles:** Optimizar las imágenes (usando formatos como WebP) y reducir la complejidad de las animaciones para garantizar una carga rápida y una experiencia fluida, especialmente en conexiones de red más lentas.
- [ ] **Gestos Táctiles:** Considerar añadir gestos, como la posibilidad de deslizar (`swipe`) las tarjetas de proyectos o experiencia para navegar entre ellas en un carrusel.

---

### ✅ Mejoras Post-Testeo Móvil (Nuevas Sugerencias)

- [x] **Desactivar Efectos `hover` en Táctil:** Aunque el layout es correcto, muchos efectos de `hover` (como el crecimiento de las tarjetas) no se traducen bien a una experiencia táctil. Deberíamos desactivarlos en dispositivos sin puntero y reemplazarlos por una respuesta visual al *tocar* (ej. un sutil `transform: scale(0.98)` en el estado `:active`).
- [x] **Optimizar el Rendimiento de Animaciones:** Las animaciones de fondo (estrellas, gradientes) y las sombras complejas pueden consumir mucha batería y afectar el rendimiento en móviles de gama media. Considerar reducir su complejidad o desactivarlas en pantallas pequeñas usando `@media (prefers-reduced-motion)` y `@media (max-width)`.
- [x] **Aumentar el Tamaño de los "Touch Targets":** Algunos elementos interactivos, como los íconos de redes sociales en el footer o las insignias de tecnologías, son pequeños y difíciles de presionar con el dedo. Debemos asegurar que todos los elementos clicables tengan un tamaño mínimo de 44x44 píxeles para cumplir con las guías de accesibilidad.
- [x] **Scroll-Snap para el Carrusel de Proyectos:** Para mejorar la experiencia de deslizar en la sección de proyectos, podemos implementar `scroll-snap` en CSS. Esto hará que el carrusel se "enganche" magnéticamente a cada tarjeta de proyecto a medida que el usuario desliza, sintiéndose mucho más natural y pulido.
- [x] **Mejorar Contraste en Modo Claro:** Se ha mejorado el contraste en el modo claro añadiendo una sombra de texto (`text-shadow`) sutil a los elementos con colores neón, mejorando significativamente su legibilidad.

---


---

### ✅ Checklist para Coherencia Visual Escritorio-Móvil (Enfoque Adaptativo)

Esta es la guía profesional para lograr que la versión móvil mantenga la **misma identidad visual y calidad** que la de escritorio, pero optimizada para una pantalla vertical con solo scroll hacia abajo.

- [x] **Consistencia de Marca y Estilo:**
    - **Fuentes:** Se ha asegurado que las tipografías clave (`Orbitron`, `Rajdhani`) se usen consistentemente en ambas versiones.
    - **Paleta de Colores:** Se ha refactorizado el uso de colores para usar variables CSS, garantizando la consistencia en los esquemas de modo claro/oscuro.

- [x] **Adaptación de Layouts a Columna Única:**
    - **Grids y Flexbox:** Se han convertido todos los diseños de múltiples columnas (ej. "Sobre Mí", "Habilidades", "Footer") en una sola columna vertical en móviles para eliminar el scroll horizontal.

- [x] **Jerarquía Visual con Tipografía Responsiva:**
    - **Títulos y Textos:** Se ha reducido el tamaño de los títulos y textos en móviles para mantener una jerarquía visual clara y mejorar la legibilidad.

- [x] **Componentes a Ancho Completo (Full-Width):**
    - **Tarjetas y Botones:** Se ha asegurado que las tarjetas y botones principales ocupen el ancho completo en la vista móvil para mejorar la legibilidad y la interacción.

- [x] **Reestructuración de la Sección "Hero":**
    - **Imagen y Texto:** Se ha reestructurado la sección para que la imagen y el texto se apilen verticalmente en móviles, priorizando el texto.

---

### ✅ Checklist de Refinamiento Visual para Móviles (Post-Testeo 2)

El layout general es funcional, pero podemos mejorar la estética para que la versión móvil se sienta tan "premium" como la de escritorio.

- [x] **Restaurar la Identidad Visual de las Tarjetas:** Se ha reintroducido una versión simplificada del `clip-path` para que las tarjetas mantengan su carácter único en móviles.

- [x] **Rediseñar las Tarjetas de "Experiencia Profesional":** Se ha mejorado el layout móvil para alinear el título y la fecha en la misma línea usando `space-between`, mejorando la jerarquía visual.

- [x] **Mejorar la Jerarquía y el Diseño del Footer:**
    - **Problema:** El footer en móviles se sentía desorganizado y el texto era pequeño.
    - **Solución:** Se ha reorganizado el orden de las columnas para dar prioridad a la marca y se ha aumentado el tamaño de la fuente para mejorar la legibilidad.

- [ ] **Optimizar el Carrusel de Proyectos:**
    - **Problema:** El carrusel actual es funcional pero básico.
    - **Solución:** Implementar un carrusel más avanzado con indicadores de puntos (`dots`) para mostrar en qué proyecto se encuentra el usuario y flechas de navegación en pantallas más grandes (tablets). Esto mejora enormemente la usabilidad.

---
---