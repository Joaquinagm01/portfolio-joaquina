import { useState, useEffect, useCallback, memo } from 'react';
import styles from './ScrollIndicator.module.css';

const ScrollIndicator = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (scrollTop / docHeight) * 100;
    setScrollPercentage(scrolled);
  }, []);

  const throttledHandleScroll = useCallback(() => {
    let ticking = false;
    return () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };
  }, [handleScroll]);

  useEffect(() => {
    const throttled = throttledHandleScroll();
    window.addEventListener('scroll', throttled);
    return () => window.removeEventListener('scroll', throttled);
  }, [throttledHandleScroll]);

  return (
    <div className={styles.scrollContainer}>
      <div className={styles.scrollProgress} style={{ width: `${scrollPercentage}%` }}></div>
    </div>
  );
};

export default memo(ScrollIndicator);
