import { useState, useEffect } from 'react';

/**
 * useTheme - Hook personalizado para gestión avanzada de temas
 * 
 * Features:
 * - Persistencia mejorada en localStorage
 * - Detección de preferencias del sistema (prefers-color-scheme)
 * - Modo automático basado en horario
 * - Sincronización entre pestañas
 */
const useTheme = () => {
  // Función para detectar preferencia del sistema
  const getSystemPreference = () => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  };

  // Función para determinar tema basado en hora del día
  const getTimeBasedTheme = () => {
    const hour = new Date().getHours();
    // Modo oscuro entre 19:00 (7 PM) y 7:00 (7 AM)
    return (hour >= 19 || hour < 7) ? 'dark' : 'light';
  };

  // Estado del tema con inicialización inteligente
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    const savedMode = localStorage.getItem('themeMode'); // 'manual', 'auto', o 'system'
    
    // Si hay un tema guardado manualmente, usarlo
    if (savedMode === 'manual' && savedTheme) {
      return savedTheme;
    }
    
    // Si el modo es 'system', usar preferencia del sistema
    if (savedMode === 'system') {
      return getSystemPreference();
    }
    
    // Si el modo es 'auto', usar horario
    if (savedMode === 'auto') {
      return getTimeBasedTheme();
    }
    
    // Default: usar theme guardado o preferencia del sistema
    return savedTheme || getSystemPreference();
  });

  const [themeMode, setThemeMode] = useState(() => {
    return localStorage.getItem('themeMode') || 'manual';
  });

  // Aplicar tema al documento
  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
    
    // Agregar clase para transición suave
    document.documentElement.classList.add('theme-transitioning');
    
    const timeout = setTimeout(() => {
      document.documentElement.classList.remove('theme-transitioning');
    }, 300);
    
    return () => clearTimeout(timeout);
  }, [theme]);

  // Guardar modo de tema
  useEffect(() => {
    localStorage.setItem('themeMode', themeMode);
  }, [themeMode]);

  // Escuchar cambios en preferencias del sistema
  useEffect(() => {
    if (themeMode !== 'system') return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = (e) => {
      setTheme(e.matches ? 'dark' : 'light');
    };

    // Usar addEventListener si está disponible, sino usar deprecated addListener
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    } else {
      // Fallback para navegadores antiguos
      mediaQuery.addListener(handleChange);
      return () => mediaQuery.removeListener(handleChange);
    }
  }, [themeMode]);

  // Modo automático basado en horario
  useEffect(() => {
    if (themeMode !== 'auto') return;

    // Actualizar tema cada hora
    const interval = setInterval(() => {
      setTheme(getTimeBasedTheme());
    }, 60 * 60 * 1000); // Cada hora

    return () => clearInterval(interval);
  }, [themeMode]);

  // Sincronización entre pestañas
  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === 'theme' && e.newValue) {
        setTheme(e.newValue);
      }
      if (e.key === 'themeMode' && e.newValue) {
        setThemeMode(e.newValue);
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  // Toggle simple entre dark/light (modo manual)
  const toggleTheme = () => {
    setThemeMode('manual');
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  // Establecer tema específico (modo manual)
  const setSpecificTheme = (newTheme) => {
    setThemeMode('manual');
    setTheme(newTheme);
  };

  // Activar modo system
  const enableSystemTheme = () => {
    setThemeMode('system');
    setTheme(getSystemPreference());
  };

  // Activar modo auto (basado en horario)
  const enableAutoTheme = () => {
    setThemeMode('auto');
    setTheme(getTimeBasedTheme());
  };

  // Volver a modo manual
  const enableManualTheme = () => {
    setThemeMode('manual');
  };

  return {
    theme,
    themeMode,
    toggleTheme,
    setTheme: setSpecificTheme,
    enableSystemTheme,
    enableAutoTheme,
    enableManualTheme,
    isSystemPreference: themeMode === 'system',
    isAutoMode: themeMode === 'auto',
    isManualMode: themeMode === 'manual',
  };
};

export default useTheme;
