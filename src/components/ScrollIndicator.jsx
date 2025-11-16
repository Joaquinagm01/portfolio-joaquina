import { useState, useEffect } from 'react';
import styles from './ScrollIndicator.module.css';

const ScrollIndicator = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (scrollTop / docHeight) * 100;
    setScrollPercentage(scrolled);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={styles.scrollContainer}>
      <div className={styles.scrollProgress} style={{ width: `${scrollPercentage}%` }}></div>
    </div>
  );
};

export default ScrollIndicator;