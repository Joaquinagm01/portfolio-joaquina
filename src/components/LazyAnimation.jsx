import { useState, useEffect } from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import useReducedMotion from '../hooks/useReducedMotion';
import '../styles/animations.css';

/**
 * LazyAnimation - Triggers animations when element enters viewport
 * @param {ReactNode} children - Content to animate
 * @param {string} animation - Animation type: 'fade', 'slide-left', 'slide-right', 'scale', 'stagger'
 * @param {number} delay - Animation delay in ms
 * @param {boolean} once - Animate only once
 */
const LazyAnimation = ({ 
  children, 
  animation = 'fade', 
  delay = 0,
  once = true,
  className = '' 
}) => {
  const { ref, hasIntersected, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '50px'
  });
  const prefersReducedMotion = useReducedMotion();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    if (once && hasIntersected) {
      const timer = setTimeout(() => setIsVisible(true), delay);
      return () => clearTimeout(timer);
    } else if (!once && isIntersecting) {
      const timer = setTimeout(() => setIsVisible(true), delay);
      return () => clearTimeout(timer);
    } else if (!once && !isIntersecting) {
      setIsVisible(false);
    }
  }, [hasIntersected, isIntersecting, once, delay, prefersReducedMotion]);

  const getAnimationClass = () => {
    if (prefersReducedMotion) return '';
    
    switch (animation) {
      case 'fade':
        return 'fade-transition';
      case 'slide-left':
        return 'slide-in-left';
      case 'slide-right':
        return 'slide-in-right';
      case 'scale':
        return 'scale-fade';
      case 'section':
        return `section-transition ${isVisible ? 'active' : ''}`;
      default:
        return 'animate-on-view';
    }
  };

  return (
    <div 
      ref={ref}
      className={`${getAnimationClass()} ${isVisible ? 'visible' : ''} ${className}`}
      style={{ 
        animationDelay: prefersReducedMotion ? '0ms' : `${delay}ms`
      }}
    >
      {children}
    </div>
  );
};

export default LazyAnimation;
