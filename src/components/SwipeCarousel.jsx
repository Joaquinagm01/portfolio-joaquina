import { useState, useRef, useEffect, useCallback, useMemo, memo } from 'react';
import styles from './SwipeCarousel.module.css';

const SwipeCarousel = ({ children, className = '', autoPlay = true, autoPlayInterval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState(0);
  const [startY, setStartY] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [progress, setProgress] = useState(0);
  const carouselRef = useRef(null);
  const autoPlayTimerRef = useRef(null);

  const items = Array.isArray(children) ? children : [children];
  const totalItems = items.length;

  // Detect touch device and disable mouse handlers on touch devices
  useEffect(() => {
    const checkTouchDevice = () => {
      const isTouch = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
      setIsTouchDevice(isTouch);
    };
    
    checkTouchDevice();
    
    // Performance measurement: measure carousel interaction
    try {
      performance.mark('SwipeCarousel:mount');
    } catch { /* perf API no disponible */ }
    
    return () => {
      try {
        performance.mark('SwipeCarousel:unmount');
        performance.measure('SwipeCarousel:lifecycle', 'SwipeCarousel:mount', 'SwipeCarousel:unmount');
      } catch { /* perf API no disponible */ }
    };
  }, []);

  // AutoPlay functionality with progress indicator
  const startAutoPlay = useCallback(() => {
    if (!autoPlay || totalItems <= 1) return;
    
    setProgress(0);
    autoPlayTimerRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
          return 0;
        }
        return prev + (100 / (autoPlayInterval / 100));
      });
    }, 100);
  }, [autoPlay, totalItems, autoPlayInterval]);

  const stopAutoPlay = useCallback(() => {
    if (autoPlayTimerRef.current) {
      clearInterval(autoPlayTimerRef.current);
      autoPlayTimerRef.current = null;
    }
  }, []);

  useEffect(() => {
    if (isDragging) {
      stopAutoPlay();
    } else {
      startAutoPlay();
    }

    return () => stopAutoPlay();
  }, [isDragging, startAutoPlay, stopAutoPlay]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalItems);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Throttle function using requestAnimationFrame
  const throttle = (func) => {
    let ticking = false;
    return (...args) => {
      if (!ticking) {
        requestAnimationFrame(() => {
          func(...args);
          ticking = false;
        });
        ticking = true;
      }
    };
  };

  // Touch handlers
  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartPos(e.touches[0].clientX);
    setStartY(e.touches[0].clientY);
    setScrollLeft(carouselRef.current.scrollLeft);
    stopAutoPlay();
    setProgress(0);
  };

  const doTouchMove = useCallback((e) => {
    if (!isDragging) return;
    const touch = e.touches[0];
    const x = touch.clientX;
    const y = touch.clientY;
    const dx = x - startPos;
    const dy = y - startY;
    // Solo prevenimos el scroll si el gesto es predominantemente horizontal
    if (Math.abs(dx) > Math.abs(dy)) {
      e.preventDefault();
    } else {
      return;
    }
    const walk = (x - startPos) * 2; // Scroll speed multiplier
    carouselRef.current.scrollLeft = scrollLeft - walk;
  }, [isDragging, startPos, startY, scrollLeft]);

  const handleTouchMove = useMemo(() => throttle(doTouchMove), [doTouchMove]);

  const handleTouchEnd = () => {
    setIsDragging(false);
    // Snap to nearest item
    const itemWidth = carouselRef.current.offsetWidth;
    const scrollPosition = carouselRef.current.scrollLeft;
    const nearestIndex = Math.round(scrollPosition / itemWidth);
    const clampedIndex = Math.max(0, Math.min(nearestIndex, totalItems - 1));
    setCurrentIndex(clampedIndex);
    carouselRef.current.scrollTo({
      left: clampedIndex * itemWidth,
      behavior: 'smooth'
    });
    startAutoPlay();
  };

  // Mouse handlers for desktop testing
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartPos(e.clientX);
    setScrollLeft(carouselRef.current.scrollLeft);
    stopAutoPlay();
  };

  const doMouseMove = useCallback((e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.clientX;
    const walk = (x - startPos) * 2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  }, [isDragging, startPos, scrollLeft]);

  const handleMouseMove = useMemo(() => throttle(doMouseMove), [doMouseMove]);

  const handleMouseUp = () => {
    setIsDragging(false);
    // Snap to nearest item
    const itemWidth = carouselRef.current.offsetWidth;
    const scrollPosition = carouselRef.current.scrollLeft;
    const nearestIndex = Math.round(scrollPosition / itemWidth);
    const clampedIndex = Math.max(0, Math.min(nearestIndex, totalItems - 1));
    setCurrentIndex(clampedIndex);
    carouselRef.current.scrollTo({
      left: clampedIndex * itemWidth,
      behavior: 'smooth'
    });
    startAutoPlay();
  };

  // Auto-scroll to current index
  useEffect(() => {
    if (carouselRef.current) {
      const itemWidth = carouselRef.current.offsetWidth;
      carouselRef.current.scrollTo({
        left: currentIndex * itemWidth,
        behavior: 'smooth'
      });
    }
  }, [currentIndex]);

  const onKeyDown = (e) => {
    if (e.key === 'ArrowRight') nextSlide();
    if (e.key === 'ArrowLeft') prevSlide();
  };

  return (
    <div className={`${styles.carouselContainer} ${className}`} role="region" aria-label="Carrusel de proyectos">
      {/* Progress Indicator */}
      {autoPlay && totalItems > 1 && (
        <div className={styles.progressContainer} aria-hidden="true">
          <div 
            className={styles.progressBar} 
            style={{ width: `${((currentIndex + 1) / totalItems) * 100}%` }}
          />
          <div className={styles.progressDots}>
            {items.map((_, index) => (
              <div
                key={index}
                className={`${styles.progressDot} ${index === currentIndex ? styles.activeDot : ''}`}
              />
            ))}
          </div>
        </div>
      )}
      
      <div
        ref={carouselRef}
        className={styles.carousel}
        role="group"
        aria-roledescription="carousel"
        aria-live="polite"
        tabIndex={0}
        onKeyDown={onKeyDown}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={isTouchDevice ? undefined : handleMouseDown}
        onMouseMove={isTouchDevice ? undefined : handleMouseMove}
        onMouseUp={isTouchDevice ? undefined : handleMouseUp}
        onMouseLeave={isTouchDevice ? undefined : handleMouseUp}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className={styles.carouselItem}
            role="group"
            aria-label={`Slide ${index + 1} de ${totalItems}`}
          >
            {item}
          </div>
        ))}
      </div>

      {/* Navigation dots */}
      <div className={styles.dots}>
        {items.map((_, index) => (
          <button
            key={index}
            className={`${styles.dot} ${index === currentIndex ? styles.active : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation arrows */}
      {totalItems > 1 && (
        <>
          <button
            className={`${styles.navButton} ${styles.prev}`}
            onClick={prevSlide}
            aria-label="Previous slide"
            title="Anterior"
          >
            ‹
          </button>
          <button
            className={`${styles.navButton} ${styles.next}`}
            onClick={nextSlide}
            aria-label="Next slide"
            title="Siguiente"
          >
            ›
          </button>
        </>
      )}
    </div>
  );
};

export default memo(SwipeCarousel);
