# TODO - Mejoras en la Sección de Contacto ("Conectemos")

## Estado Actual
La sección de contacto usa amarillos/oro como color de acento (`--accent-contact: #eab308`).

## Checklist de Mejoras Visuales

### 🎨 Diseño y Layout
- [x] **Mejorar grid layout**: Usar grid con `minmax(200px, 1fr)` para más consistencia
- [x] **Unificar tamaños de tarjetas**: Todas las tarjetas con mismo padding y dimensiones
- [x] **Mejorar spacing**: Aumentar gap entre tarjetas a `1.5rem` o `2rem`
- [x] **Agregar efectos de fondo**: Radial gradient sutil detrás de las tarjetas

### ✨ Animaciones y Hover
- [x] **Efecto ripple en hover**: Onda de expansión al hacer hover
- [x] **Sombra dinámica**: Sombra que sigue el mouse en cada tarjeta
- [x] **Icono animado**: Los iconos pueden escalar + rotar suavemente
- [x] **Botones con glow**: Efecto neon glow en hover más pronunciado

### 📱 Responsive
- [x] **Mobile spacing**: Reducir padding en móviles (`1rem` en vez de `2.5rem`)
- [x] **Grid adaptativo**: 1 columna en móvil, 2 en tablet, 3-4 en desktop
- [x] **Tamaños de fuente**: Ajustar `clamp()` para mejor legibilidad en móvil

### 🔆 Efectos Visuales
- [x] **Fondo con partículas**: Pequeñas partículas flotando en la sección
- [x] **Gradient border**: Borde con gradiente animado en las tarjetas
- [x] **Glassmorphism**: Efecto vidrio esmerilado más pronunciado
- [x] **Glow pulse**: Ligera pulsación en los iconos

### 📋 Contenido
- [x] **Mejorar copy**: Texto más atractivo y claro
- [x] **CTA más claro**: Botones de acción más prominentes

### 🎯 Accesibilidad
- [x] **Mejorar contraste**: Asegurar WCAG AA/AAA
- [x] **Focus states**: Estados de foco claros para navegación por teclado
- [x] **Aria labels**: Labels descriptivos para lectores de pantalla

### 🚀 Ideas Avanzadas
- [x] **Integración con WhatsApp**: Botón de chat directo
- [x] **Mapa integrado**: Mostrar ubicación en mapa
- [x] **Animación de entrada**: Las tarjetas entran una por una

---

## Cambios Realizados (Fixes - Fecha: 2025)

### CSS Fixes:
1. **contactGrid**: Ajustado grid-template-columns a `minmax(220px, 1fr)` para mejor distribución
2. **contactCard**: Agregados estilos base (display flex, padding, min-height) para resolver conflictos
3. **contactIcon/Title/Detail/Action**: Estilos específicos para cada elemento
4. **Gradient Border**: Simplificado clip-path, eliminado para mejor compatibilidad
5. **Glassmorphism**: Optimizado backdrop-filter a `blur(8px)` base y `12px` en hover
6. **Icon Glow**: Simplificada animación `iconGlowPulse` para mejor rendimiento
7. **Hover Effects**: Agregados efectos de transformación en hover

### JSX Fixes:
1. **Particles Container**: Agregado div con 10 partículas animadas en el contactGrid

### Light Mode Improvements:
1. **contactGrid**: Fondo gradiente claro (`rgba(249, 250, 251, 0.95)`)
2. **contactCard::after**: Fondo blanco con gradiente sutil y sombras suaves
3. **contactParticles**: Color ámbar/naranja para mejor visibilidad
4. **Gradient Border**: Colores más vibrantes para modo claro
5. **contactMapContainer**: Fondo blanco con gradiente y sombra
6. **contactMapIframe**: Sin filtro en light mode, filtro oscuro en dark mode
7. **#contacto section**: Fondo degradado suave para transición

### Advanced Features:
1. **WhatsApp Card**: Botón verde con gradiente y mensaje prellenado
2. **Map Section**: OpenStreetMap embedido con marca de posición
3. **Entry Animations**: Animación escalonada `slideInUp` para cards (0.1s - 0.6s delay)


