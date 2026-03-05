import { useEffect, useRef } from 'react';

/**
 * OptimizedParallax - High-performance parallax effect using requestAnimationFrame
 * @param {number} speed - Parallax speed multiplier (0.1 - 1.0)
 * @param {boolean} enabled - Enable/disable parallax
 */
const useOptimizedParallax = (speed = 0.5, enabled = true) => {
  const ref = useRef(null);
  const ticking = useRef(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    if (!enabled) return;

    const element = ref.current;
    if (!element) return;

    const updateParallax = () => {
      const scrollY = window.pageYOffset;
      const elementTop = element.offsetTop;
      const elementHeight = element.offsetHeight;
      const windowHeight = window.innerHeight;

      // Only apply parallax if element is in viewport
      if (scrollY + windowHeight > elementTop && scrollY < elementTop + elementHeight) {
        const yPos = -(scrollY - elementTop) * speed;
        
        // Use transform for better performance (GPU accelerated)
        element.style.transform = `translate3d(0, ${yPos}px, 0)`;
      }

      ticking.current = false;
    };

    const handleScroll = () => {
      lastScrollY.current = window.pageYOffset;

      if (!ticking.current) {
        window.requestAnimationFrame(updateParallax);
        ticking.current = true;
      }
    };

    // Passive listener for better scroll performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial position
    updateParallax();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [speed, enabled]);

  return ref;
};

export default useOptimizedParallax;
