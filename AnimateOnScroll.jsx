import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import styles from './AnimateOnScroll.module.css';

const AnimateOnScroll = ({ children, className = '', animation = 'fadeInUp', threshold = 0.1, triggerOnce = true, rootMargin = '0px 0px -20% 0px' }) => {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce,
    rootMargin,
  });

  useEffect(() => {
    try {
      if (inView) {
        performance.mark(`AOS:enter:${animation}`);
      } else {
        performance.mark(`AOS:exit:${animation}`);
      }
    } catch { /* perf API no disponible */ }
  }, [inView, animation]);

  return (
    <div
      ref={ref}
      className={`${styles.animate} ${inView ? styles.visible : ''} ${styles[animation]} ${className}`}
    >
      {children}
    </div>
  );
};

export default AnimateOnScroll;