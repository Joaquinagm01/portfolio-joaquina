import { useState, useRef, useEffect } from 'react';
import styles from './SwipeCarousel.module.css';

const SwipeCarousel = ({ children, className = '' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState(0);
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

  // Touch handlers
  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartPos(e.touches[0].clientX);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.touches[0].clientX;
    const walk = (x - startPos) * 2; // Scroll speed multiplier
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

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

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.clientX;
    const walk = (x - startPos) * 2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

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

  return (
    <div className={`${styles.carouselContainer} ${className}`}>
      <div
        ref={carouselRef}
        className={styles.carousel}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        {items.map((item, index) => (
          <div key={index} className={styles.carouselItem}>
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
          >
            ‹
          </button>
          <button
            className={`${styles.navButton} ${styles.next}`}
            onClick={nextSlide}
            aria-label="Next slide"
          >
            ›
          </button>
        </>
      )}
    </div>
  );
};

export default SwipeCarousel;
