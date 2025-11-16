# ✅ Checklist de Mejoras para el Portafolio

Aquí tienes una lista de sugerencias para mejorar la interactividad, el diseño y la experiencia de usuario general de la página web.

---

### 🎨 Mejoras Visuales y de Interacción

- [x] **Scroll-Spy Activo en el Navbar:** Se ha mejorado el enlace activo en la barra de navegación con un fondo, borde y un ícono pulsante para mayor visibilidad.
- [x] **Animaciones de Entrada por Sección:** Se han implementado animaciones de "fade-in" para el contenido de cada sección a medida que el usuario hace scroll.
- [x] **Transiciones de Tema (Light/Dark) más Suaves:** Se ha implementado una transición gradual para los colores al cambiar entre modo claro y oscuro.
- [ ] **Gamificación del Cursor:** Cambiar el cursor por defecto a un diseño personalizado que se relacione con la temática futurista. Podría cambiar de forma o color al pasar sobre elementos interactivos.

---

### ⚙️ Mejoras Funcionales y de Movimiento

- [x] **Contador Animado para Estadísticas:** Hacer que los números de la sección de estadísticas (+2 años, +5 proyectos) cuenten desde cero hasta el valor final cuando la sección aparece en pantalla.
- [x] **Modal para Detalles del Proyecto:** Se ha implementado un modal para mostrar información detallada de los proyectos al hacer clic en "Ver Más".
- [x] **Efecto "Máquina de Escribir" para el Subtítulo:** Se ha animado el subtítulo del "Hero Section" para que aparezca con un efecto de máquina de escribir.
- [x] **Indicador de Scroll:** Se ha añadido una barra de progreso en la parte superior de la página que indica el avance del scroll.

---

### ✨ Mejoras de "Calidad de Vida" (QoL) y Atractivo

- [ ] **Respetar `prefers-reduced-motion`:** Desactivar o reducir las animaciones más intensas si el usuario tiene activada la opción de "movimiento reducido" en su sistema operativo, mejorando la accesibilidad.
- [ ] **Lazy Loading para Imágenes y Secciones:** Implementar carga perezosa (lazy loading) para las imágenes y componentes que no están en la vista inicial. Esto mejorará drásticamente el tiempo de carga inicial de la página.
- [x] **Tooltips en Iconos de Habilidades:** Se ha añadido un tooltip que aparece al pasar el mouse sobre los íconos de las tecnologías.
- [x] **Fondo Animado Sutil:** Se ha implementado un efecto parallax en el fondo que responde al movimiento del mouse.
- [x] **Sonidos de Interfaz Opcionales:** Se ha añadido un botón para activar/desactivar sonidos de interfaz en acciones clave.

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

- [x] **Optimizar el Carrusel de Proyectos:**
    - **Problema:** El carrusel actual es funcional pero básico.
    - **Solución:** Implementar un carrusel más avanzado con indicadores de puntos (`dots`) para mostrar en qué proyecto se encuentra el usuario y flechas de navegación en pantallas más grandes (tablets). Esto mejora enormemente la usabilidad.

---
---

### ✅ Checklist de Refinamiento Visual Final (Móvil)

La estructura es sólida. Ahora nos enfocaremos en los detalles finos que crean una experiencia de usuario excepcional y memorable.

- [ ] **Unificar y Pulir el Diseño de Tarjetas en el Carrusel de Proyectos:**
    - **Problema:** Las tarjetas dentro del carrusel de proyectos tienen estilos inconsistentes (algunas usan `experienceCard` y otras `projectCard`).
    - **Solución:** Crear un estilo unificado y específico para las tarjetas del carrusel (`carouselCard`) que combine lo mejor de ambos diseños, asegurando una apariencia coherente y pulida al deslizar.

- [ ] **Mejorar la Jerarquía Visual en la Sección "Habilidades":**
    - **Problema:** La cuadrícula de tecnologías, aunque funcional, puede sentirse un poco densa y monótona.
    - **Solución:** Aumentar ligeramente el espacio entre las tarjetas de categorías (`techCard`) y darles un título más prominente. Dentro de cada tarjeta, mejorar el espaciado de los íconos (`techItem`) para que "respiren" mejor.

- [ ] **Añadir Micro-interacciones en los Botones Principales:**
    - **Problema:** Los botones principales (`Contáctame`, `Descargar CV`) son funcionales pero carecen de un "feedback" satisfactorio al ser presionados.
    - **Solución:** Implementar una animación sutil en el estado `:active` de los botones. Un ligero encogimiento y un cambio de brillo al momento de tocar darán una respuesta táctil más gratificante.

- [ ] **Refinar la Animación de Entrada de la Sección "Hero":**
    - **Problema:** Las animaciones de entrada laterales (`slideInLeft`, `slideInRight`) pueden sentirse un poco abruptas en una pantalla vertical.
    - **Solución:** Cambiar la animación a un `fadeInUp` más sutil y cohesivo para todos los elementos de la sección "Hero", creando una aparición más elegante y unificada.

---