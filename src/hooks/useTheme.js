import { useState, useEffect } from 'react';

/**
 * useTheme - Hook personalizado para gestión simple de temas
 * 
 * Features:
 * - Toggle simple entre modo claro y oscuro
 * - Persistencia en localStorage
 * - Transiciones suaves entre temas
 */
const useTheme = () => {
  // Función para detectar preferencia del sistema
  const getSystemPreference = () => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  };

  // Estado del tema con inicialización inteligente
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    // Usar tema guardado o preferencia del sistema
    return savedTheme || getSystemPreference();
  });

  // Aplicar tema al documento
  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
    
    // Agregar clase para transición suave
    document.documentElement.classList.add('theme-transitioning');
    
    const timeout = setTimeout(() => {
      document.documentElement.classList.remove('theme-transitioning');
    }, 350);
    
    return () => clearTimeout(timeout);
  }, [theme]);

  // Sincronización entre pestañas
  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === 'theme' && e.newValue) {
        setTheme(e.newValue);
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  // Toggle simple entre dark y light
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
  };

  return {
    theme,
    toggleTheme
  };
};

export default useTheme;
