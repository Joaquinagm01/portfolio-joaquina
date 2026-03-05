import { useEffect } from 'react';

const useTouchGestures = (scrollToSection) => {
  useEffect(() => {
    let touchStartY = 0;
    let touchStartX = 0;
    let touchEndY = 0;
    let touchEndX = 0;

    const sections = ['inicio', 'sobre-mi', 'experiencia', 'cursos', 'proyectos', 'habilidades', 'contacto'];

    const getCurrentSectionIndex = () => {
      const scrollPosition = window.scrollY + 150;
      
      for (let i = 0; i < sections.length; i++) {
        const section = document.getElementById(sections[i]);
        if (section && 
            scrollPosition >= section.offsetTop && 
            scrollPosition < section.offsetTop + section.offsetHeight) {
          return i;
        }
      }
      return 0;
    };

    const handleTouchStart = (e) => {
      touchStartY = e.touches[0].clientY;
      touchStartX = e.touches[0].clientX;
    };

    const handleTouchEnd = (e) => {
      touchEndY = e.changedTouches[0].clientY;
      touchEndX = e.changedTouches[0].clientX;
      handleSwipe();
    };

    const handleSwipe = () => {
      const swipeThreshold = 50; // Minimum distance for swipe
      const verticalDiff = touchStartY - touchEndY;
      const horizontalDiff = Math.abs(touchStartX - touchEndX);

      // Only register vertical swipes (not horizontal)
      if (horizontalDiff > 30) return;

      // Swipe up - go to next section
      if (verticalDiff > swipeThreshold) {
        const currentIndex = getCurrentSectionIndex();
        if (currentIndex < sections.length - 1) {
          scrollToSection(sections[currentIndex + 1]);
        }
      }

      // Swipe down - go to previous section
      if (verticalDiff < -swipeThreshold) {
        const currentIndex = getCurrentSectionIndex();
        if (currentIndex > 0) {
          scrollToSection(sections[currentIndex - 1]);
        }
      }
    };

    // Only add touch listeners on mobile devices
    if ('ontouchstart' in window) {
      document.addEventListener('touchstart', handleTouchStart, { passive: true });
      document.addEventListener('touchend', handleTouchEnd, { passive: true });
    }

    return () => {
      if ('ontouchstart' in window) {
        document.removeEventListener('touchstart', handleTouchStart);
        document.removeEventListener('touchend', handleTouchEnd);
      }
    };
  }, [scrollToSection]);
};

export default useTouchGestures;
