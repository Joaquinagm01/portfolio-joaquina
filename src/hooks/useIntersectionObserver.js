import { useState, useEffect, useRef } from 'react';

/**
 * Hook for lazy loading and animation triggers
 * @param {Object} options - IntersectionObserver options
 * @returns {Object} - ref and isIntersecting state
 */
const useIntersectionObserver = (options = {}) => {
  const ref = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
        
        // Once intersected, stay true (for one-time animations)
        if (entry.isIntersecting && !hasIntersected) {
          setHasIntersected(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
        ...options,
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [hasIntersected, options]);

  return { ref, isIntersecting, hasIntersected };
};

export default useIntersectionObserver;
