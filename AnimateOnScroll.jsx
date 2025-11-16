import { useInView } from 'react-intersection-observer';
import styles from './AnimateOnScroll.module.css';

const AnimateOnScroll = ({ children, className = '', animation = 'fadeInUp', threshold = 0.1, triggerOnce = true }) => {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce,
  });

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