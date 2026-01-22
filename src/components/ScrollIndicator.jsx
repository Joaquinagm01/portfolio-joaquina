import { useState, useEffect, useCallback, memo } from 'react';
import styles from './ScrollIndicator.module.css';

const ScrollIndicator = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop || 0;
    const doc = document.documentElement;
    const docHeight = Math.max(1, doc.scrollHeight - doc.clientHeight);
    let scrolled = (scrollTop / docHeight) * 100;
    if (!Number.isFinite(scrolled)) scrolled = 0;
    scrolled = Math.max(0, Math.min(100, scrolled));
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
    window.addEventListener('scroll', throttled, { passive: true });
    window.addEventListener('resize', throttled, { passive: true });
    window.addEventListener('orientationchange', throttled);
    return () => {
      window.removeEventListener('scroll', throttled);
      window.removeEventListener('resize', throttled);
      window.removeEventListener('orientationchange', throttled);
    };
  }, [throttledHandleScroll]);

  return (
    <div className={styles.scrollContainer} aria-hidden="true">
      <div className={styles.scrollProgress} style={{ width: `${scrollPercentage}%` }} />
    </div>
  );
};

export default memo(ScrollIndicator);
