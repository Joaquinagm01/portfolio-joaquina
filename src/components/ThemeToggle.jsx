import { useState, useEffect, useRef } from 'react';
import { FaSun, FaMoon, FaDesktop, FaClock } from 'react-icons/fa';
import styles from './ThemeToggle.module.css';

const ThemeToggle = ({ 
  theme,
  themeMode,
  onToggle,
  onSystemMode,
  onAutoMode,
  onManualMode
}) => {
  const [showModes, setShowModes] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowModes(false);
      }
    };

    if (showModes) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showModes]);

  // Close dropdown on escape key
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setShowModes(false);
      }
    };

    if (showModes) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [showModes]);

  const getModeIcon = () => {
    switch (themeMode) {
      case 'system':
        return <FaDesktop />;
      case 'auto':
        return <FaClock />;
      default:
        return theme === 'dark' ? <FaMoon /> : <FaSun />;
    }
  };

  const getModeLabel = () => {
    switch (themeMode) {
      case 'system':
        return 'System';
      case 'auto':
        return 'Auto';
      default:
        return 'Manual';
    }
  };

  return (
    <div className={styles.themeToggleContainer} ref={dropdownRef}>
      {/* Main toggle button */}
      <button 
        onClick={onToggle}
        className={styles.mainToggle}
        aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        title={`Current: ${theme} mode`}
      >
        {theme === 'dark' ? <FaSun /> : <FaMoon />}
      </button>
      
      {/* Mode selector button */}
      <button 
        onClick={() => setShowModes(!showModes)}
        className={`${styles.modeToggle} ${showModes ? styles.active : ''}`}
        aria-label="Theme mode options"
        aria-expanded={showModes}
        title={`Mode: ${getModeLabel()}`}
      >
        {getModeIcon()}
      </button>
      
      {/* Dropdown menu */}
      {showModes && (
        <div className={styles.modeDropdown} role="menu">
          <button
            onClick={() => { 
              onManualMode(); 
              setShowModes(false); 
            }}
            className={themeMode === 'manual' ? styles.active : ''}
            role="menuitem"
            aria-label="Manual theme mode"
          >
            <div className={styles.modeIcon}>
              {theme === 'dark' ? <FaMoon /> : <FaSun />}
            </div>
            <div className={styles.modeLabel}>
              <strong>Manual</strong>
              <span>Toggle manually</span>
            </div>
          </button>
          
          <button
            onClick={() => { 
              onSystemMode(); 
              setShowModes(false); 
            }}
            className={themeMode === 'system' ? styles.active : ''}
            role="menuitem"
            aria-label="System theme mode - follows OS preference"
          >
            <div className={styles.modeIcon}>
              <FaDesktop />
            </div>
            <div className={styles.modeLabel}>
              <strong>System</strong>
              <span>Follow OS preference</span>
            </div>
          </button>
          
          <button
            onClick={() => { 
              onAutoMode(); 
              setShowModes(false); 
            }}
            className={themeMode === 'auto' ? styles.active : ''}
            role="menuitem"
            aria-label="Auto theme mode - changes based on time of day"
          >
            <div className={styles.modeIcon}>
              <FaClock />
            </div>
            <div className={styles.modeLabel}>
              <strong>Auto</strong>
              <span>Dark 7pm-7am</span>
            </div>
          </button>
        </div>
      )}
    </div>
  );
};

export default ThemeToggle;