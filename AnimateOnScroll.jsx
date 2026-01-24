import { useEffect, useCallback, useRef, memo } from 'react';
import { useInView } from 'react-intersection-observer';
import styles from './AnimateOnScroll.module.css';

// Shared observer to limit the number of simultaneous observations
let sharedObserver = null;
let observedCount = 0;
const MAX_OBSERVATIONS = 10;

const getSharedObserver = () => {
  if (!sharedObserver) {
    sharedObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Dispatch custom event for the specific element
          if (entry.isIntersecting) {
            entry.target.dispatchEvent(new CustomEvent('aos-enter', { bubbles: true }));
          } else {
            entry.target.dispatchEvent(new CustomEvent('aos-exit', { bubbles: true }));
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -20% 0px',
      }
    );
  }
  return sharedObserver;
};

const AnimateOnScroll = memo(function AnimateOnScroll({ 
  children, 
  className = '', 
  animation = 'fadeInUp', 
  threshold = 0.1, 
  triggerOnce = true, 
  rootMargin = '0px 0px -20% 0px' 
}) {
  const elementRef = useRef(null);
  const hasAnimated = useRef(false);
  const { ref, inView } = useInView({
    threshold,
    triggerOnce,
    rootMargin,
  });

  // Combine refs
  const setRefs = useCallback((node) => {
    elementRef.current = node;
    ref(node);
  }, [ref]);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Cleanup function
    const cleanup = () => {
      if (hasAnimated.current && triggerOnce) {
        // Disconnect from shared observer after animation completes
        const observer = getSharedObserver();
        observer.unobserve(element);
        observedCount = Math.max(0, observedCount - 1);
        hasAnimated.current = false;
      }
    };

    // Performance measurement
    const measurePerformance = (type) => {
      try {
        performance.mark(`AOS:${type}:${animation}:start`);
        requestAnimationFrame(() => {
          performance.mark(`AOS:${type}:${animation}:end`);
          performance.measure(`AOS:${type}:${animation}`, `AOS:${type}:${animation}:start`, `AOS:${type}:${animation}:end`);
        });
      } catch { /* perf API no disponible */ }
    };

    if (inView && !hasAnimated.current) {
      hasAnimated.current = true;
      measurePerformance('enter');
    } else if (!inView && hasAnimated.current && !triggerOnce) {
      measurePerformance('exit');
    }

    return cleanup;
  }, [inView, animation, triggerOnce]);

  return (
    <div
      ref={setRefs}
      className={`${styles.animate} ${inView ? styles.visible : ''} ${styles[animation]} ${className}`}
    >
      {children}
    </div>
  );
});

export default AnimateOnScroll;
