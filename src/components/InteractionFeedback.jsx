import { useEffect } from 'react';
import './InteractionFeedback.css';

const InteractionFeedback = () => {
  useEffect(() => {
    // Ripple effect on click
    const createRipple = (event) => {
      const target = event.target.closest('button, a, [role="button"]');
      if (!target) return;

      const ripple = document.createElement('span');
      const rect = target.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = event.clientX - rect.left - size / 2;
      const y = event.clientY - rect.top - size / 2;

      ripple.style.width = ripple.style.height = `${size}px`;
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
      ripple.classList.add('ripple-effect');

      // Remove existing ripples
      const existingRipples = target.querySelectorAll('.ripple-effect');
      existingRipples.forEach(r => r.remove());

      target.appendChild(ripple);

      setTimeout(() => ripple.remove(), 600);
    };

    // Hover glow effect
    const addHoverGlow = (event) => {
      const target = event.target.closest('button, a, .interactive');
      if (!target) return;
      target.classList.add('hover-glow');
    };

    const removeHoverGlow = (event) => {
      const target = event.target.closest('button, a, .interactive');
      if (!target) return;
      target.classList.remove('hover-glow');
    };

    // Scale feedback on active
    const addActiveScale = (event) => {
      const target = event.target.closest('button, a, .interactive');
      if (!target) return;
      target.classList.add('active-scale');
    };

    const removeActiveScale = (event) => {
      const target = event.target.closest('button, a, .interactive');
      if (!target) return;
      setTimeout(() => target.classList.remove('active-scale'), 150);
    };

    // Add event listeners
    document.addEventListener('click', createRipple);
    document.addEventListener('mouseenter', addHoverGlow, true);
    document.addEventListener('mouseleave', removeHoverGlow, true);
    document.addEventListener('mousedown', addActiveScale);
    document.addEventListener('mouseup', removeActiveScale);
    document.addEventListener('touchstart', addActiveScale);
    document.addEventListener('touchend', removeActiveScale);

    return () => {
      document.removeEventListener('click', createRipple);
      document.removeEventListener('mouseenter', addHoverGlow, true);
      document.removeEventListener('mouseleave', removeHoverGlow, true);
      document.removeEventListener('mousedown', addActiveScale);
      document.removeEventListener('mouseup', removeActiveScale);
      document.removeEventListener('touchstart', addActiveScale);
      document.removeEventListener('touchend', removeActiveScale);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default InteractionFeedback;
