import { useEffect, useState } from 'react';
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
      // Evitar la división por cero si la duración es 0
      if (start === endValue) return;

      // Calcular el incremento por paso para que la animación dure `duration` segundos.
      let incrementTime = (duration * 1000) / endValue;

      let timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === endValue) clearInterval(timer);
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [inView, end, duration]);

  return <div ref={ref}>{`${prefix}${count}${suffix}`}</div>;
};

export default AnimatedStat;