import { useState, useEffect, useCallback, memo } from 'react';
import styles from './BackToTopButton.module.css';

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = useCallback(() => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, []);

  const throttledToggleVisibility = useCallback(() => {
    let ticking = false;
    return () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          toggleVisibility();
          ticking = false;
        });
        ticking = true;
      }
    };
  }, [toggleVisibility]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const throttled = throttledToggleVisibility();
    window.addEventListener('scroll', throttled);
    return () => window.removeEventListener('scroll', throttled);
  }, [throttledToggleVisibility]);

  return (
    <button className={`${styles.backToTop} ${isVisible ? styles.visible : ''}`} onClick={scrollToTop}>
      ↑
    </button>
  );
};

export default memo(BackToTopButton);
