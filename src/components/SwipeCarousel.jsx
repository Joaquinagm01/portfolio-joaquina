import { useState, useRef, useEffect, useCallback, useMemo, memo } from 'react';
import styles from './SwipeCarousel.module.css';

const SwipeCarousel = ({ children, className = '' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState(0);
  const [startY, setStartY] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const carouselRef = useRef(null);

  const items = Array.isArray(children) ? children : [children];
  const totalItems = items.length;

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
  };

  // Mouse handlers for desktop testing
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartPos(e.clientX);
    setScrollLeft(carouselRef.current.scrollLeft);
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
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
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
