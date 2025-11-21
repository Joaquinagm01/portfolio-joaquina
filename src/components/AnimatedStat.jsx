import { useEffect, useState, memo } from 'react';
import { useInView } from 'react-intersection-observer';

const AnimatedStat = ({ end, duration = 2, prefix = '', suffix = '' }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true, // La animación se dispara solo una vez
    threshold: 0.5,    // Se dispara cuando el 50% del elemento es visible
  });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const endValue = parseInt(end);
      if (start === endValue) return;

      const startTime = performance.now();
      const animate = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / (duration * 1000), 1);
        const currentCount = Math.floor(progress * endValue);
        setCount(currentCount);

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(endValue);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [inView, end, duration]);

  return <div ref={ref}>{`${prefix}${count}${suffix}`}</div>;
};

export default memo(AnimatedStat);
