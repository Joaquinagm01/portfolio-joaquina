import { useState, useEffect } from 'react';
import styles from './Typewriter.module.css';

const Typewriter = ({ texts, speed = 150, delay = 2000, className = '' }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const currentText = texts[textIndex];
      if (isDeleting) {
        setDisplayedText(currentText.substring(0, displayedText.length - 1));
      } else {
        setDisplayedText(currentText.substring(0, displayedText.length + 1));
      }

      if (!isDeleting && displayedText === currentText) {
        setTimeout(() => setIsDeleting(true), delay);
      } else if (isDeleting && displayedText === '') {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }
    };

    const typingSpeed = isDeleting ? speed / 2 : speed;
    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, textIndex, texts, speed, delay]);

  return (
    <span className={`${styles.typewriter} ${className}`}>
      {displayedText}
      <span className={styles.cursor}>|</span>
    </span>
  );
};

export default Typewriter;