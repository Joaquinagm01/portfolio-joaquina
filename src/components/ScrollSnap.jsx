import { useState, useEffect } from 'react';
import '../styles/animations.css';

/**
 * ScrollSnap - Optional scroll snapping component
 * Can be toggled on/off by user
 */
const ScrollSnap = ({ enabled = false, children }) => {
  const [isEnabled, setIsEnabled] = useState(enabled);

  useEffect(() => {
    const handleKeyPress = (e) => {
      // Toggle with Ctrl/Cmd + Shift + S
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'S') {
        e.preventDefault();
        setIsEnabled(prev => !prev);
        
        // Show notification
        const notification = document.createElement('div');
        notification.textContent = `Scroll Snap ${!isEnabled ? 'Enabled' : 'Disabled'}`;
        notification.style.cssText = `
          position: fixed;
          top: 100px;
          right: 30px;
          background: var(--neon-cyan);
          color: #000;
          padding: 1rem 1.5rem;
          border-radius: 8px;
          font-family: 'Rajdhani', sans-serif;
          font-weight: 600;
          z-index: 10000;
          animation: fadeInOut 2s ease-in-out;
        `;
        document.body.appendChild(notification);
        setTimeout(() => notification.remove(), 2000);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isEnabled]);

  // Add inline style for fade animation
  useEffect(() => {
    if (!document.getElementById('scroll-snap-animation')) {
      const style = document.createElement('style');
      style.id = 'scroll-snap-animation';
      style.textContent = `
        @keyframes fadeInOut {
          0%, 100% { opacity: 0; transform: translateX(20px); }
          10%, 90% { opacity: 1; transform: translateX(0); }
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  return (
    <div className={isEnabled ? 'scroll-snap-container' : ''}>
      {children}
    </div>
  );
};

export default ScrollSnap;
