# ✅ Checklist de Mejoras Funcionales para Móvil

La estructura visual del sitio es robusta. Esta lista se enfoca en mejoras de funcionalidad y "Calidad de Vida" (QoL) para perfeccionar la experiencia del usuario en dispositivos móviles.

---

### ⚡️ Mejoras de Rendimiento y Carga

- [x] **Lazy Loading (Carga Perezosa) para Imágenes y Secciones:**
    - **Problema:** El contenido se cargaba de golpe.
    - **Solución:** Se ha implementado "lazy loading" en las secciones, de modo que solo se cargan y renderizan cuando son visibles para el usuario.

---

### ♿️ Mejoras de Accesibilidad y Usabilidad (QoL)

- [x] **Botón "Volver Arriba" (Back to Top):**
    - **Problema:** El scroll para volver al inicio era muy largo.
    - **Solución:** Se ha añadido un botón flotante "Back to Top" que aparece al hacer scroll, permitiendo al usuario volver al inicio con un solo toque.

- [x] **Cerrar Menú Lateral al Tocar Fuera:**
    - **Problema:** El menú lateral solo se cerraba con acciones directas.
    - **Solución:** Se ha implementado la funcionalidad para que el menú se cierre automáticamente al tocar el área sombreada fuera de él.

- [x] **Gestión del Foco (Focus Management) en Modales:**
    - **Problema:** El foco del teclado se "escapaba" de los modales.
    - **Solución:** Se ha implementado un "focus trap" en el modal de proyectos, asegurando que la navegación por teclado quede contenida dentro del modal cuando está abierto.

---