/**
 * Performance Utility Functions
 * Debounce, throttle, and optimization helpers
 */

/**
 * Debounce function - Delays execution until after wait time has elapsed since last call
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @param {boolean} immediate - Trigger on leading edge instead of trailing
 * @returns {Function} Debounced function
 */
export function debounce(func, wait = 300, immediate = false) {
  let timeout;
  
  return function executedFunction(...args) {
    const context = this;
    
    const later = () => {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    
    if (callNow) func.apply(context, args);
  };
}

/**
 * Throttle function - Ensures function is called at most once per specified time period
 * @param {Function} func - Function to throttle
 * @param {number} limit - Time limit in milliseconds
 * @returns {Function} Throttled function
 */
export function throttle(func, limit = 300) {
  let inThrottle;
  let lastFunc;
  let lastRan;
  
  return function(...args) {
   const context = this;
    
    if (!inThrottle) {
      func.apply(context, args);
      lastRan = Date.now();
      inThrottle = true;
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(() => {
        if (Date.now() - lastRan >= limit) {
          func.apply(context, args);
          lastRan = Date.now();
        }
      }, Math.max(limit - (Date.now() - lastRan), 0));
    }
  };
}

/**
 * Request Animation Frame throttle - Throttles to animation frame rate (~60fps)
 * @param {Function} func - Function to throttle
 * @returns {Function} RAF-throttled function
 */
export function rafThrottle(func) {
  let rafId = null;
  let lastArgs = null;
  
  return function(...args) {
    lastArgs = args;
    
    if (rafId === null) {
      rafId = requestAnimationFrame(() => {
        func.apply(this, lastArgs);
        rafId = null;
      });
    }
  };
}

/**
 * Passive event listener helper
 * @param {HTMLElement} element - Element to attach listener to
 * @param {string} event - Event name
 * @param {Function} handler - Event handler
 * @param {Object} options - Additional options
 * @returns {Function} Cleanup function
 */
export function addPassiveEventListener(element, event, handler, options = {}) {
  const passiveOptions = { passive: true, ...options };
  element.addEventListener(event, handler, passiveOptions);
  
  return () => element.removeEventListener(event, handler, passiveOptions);
}

/**
 * Lazy load images with Intersection Observer
 * @param {HTMLImageElement} img - Image element
 * @param {Object} options - IntersectionObserver options
 */
export function lazyLoadImage(img, options = {}) {
  const defaultOptions = {
    root: null,
    rootMargin: '50px',
    threshold: 0.01,
    ...options
  };
  
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const lazyImage = entry.target;
        if (lazyImage.dataset.src) {
          lazyImage.src = lazyImage.dataset.src;
        }
        if (lazyImage.dataset.srcset) {
          lazyImage.srcset = lazyImage.dataset.srcset;
        }
        lazyImage.classList.remove('lazy');
        observer.unobserve(lazyImage);
      }
    });
  }, defaultOptions);
  
  imageObserver.observe(img);
  
  return () => imageObserver.disconnect();
}

/**
 * Check if value is equal for memoization (shallow comparison)
 * @param {*} prev - Previous value
 * @param {*} next - Next value
 * @returns {boolean} Whether values are equal
 */
export function shallowEqual(prev, next) {
  if (prev === next) return true;
  
  if (typeof prev !== 'object' || typeof next !== 'object') return false;
  if (prev === null || next === null) return false;
  
  const prevKeys = Object.keys(prev);
  const nextKeys = Object.keys(next);
  
  if (prevKeys.length !== nextKeys.length) return false;
  
  return prevKeys.every(key => prev[key] === next[key]);
}

/**
 * Create a memoized selector
 * @param {Function} fn - Function to memoize
 * @param {Function} equalityFn - Custom equality function
 * @returns {Function} Memoized function
 */
export function createMemoizedSelector(fn, equalityFn = shallowEqual) {
  let lastArgs = null;
  let lastResult = null;
  
  return (...args) => {
    if (lastArgs && equalityFn(lastArgs, args)) {
      return lastResult;
    }
    
    lastArgs = args;
    lastResult = fn(...args);
    return lastResult;
  };
}

/**
 * Measure component render performance (dev only)
 * @param {string} componentName - Name of component
 * @param {Function} callback - Function to measure
 */
export function measurePerformance(componentName, callback) {
  if (import.meta.env.DEV) {
    const start = performance.now();
    const result = callback();
    const end = performance.now();
    const duration = end - start;
    
    if (duration > 16.67) { // Longer than one frame at 60fps
      console.warn(`[Performance] ${componentName} took ${duration.toFixed(2)}ms to render`);
    }
    
    return result;
  }
  
  return callback();
}

/**
 * Create a stable callback that doesn't change between renders
 * Similar to useCallback but for non-React contexts
 * @param {Function} fn - Function to stabilize
 * @returns {Function} Stable function reference
 */
export function createStableCallback(fn) {
  let stableFn = fn;
  
  return (...args) => {
    return stableFn(...args);
  };
}

/**
 * Batch multiple state updates to avoid multiple re-renders
 * @param {Function} updates - Function containing state updates
 */
export function batchUpdates(updates) {
  // In React 18+, updates are automatically batched
  // This is a no-op but kept for backwards compatibility
  return updates();
}

/**
 * Check if browser supports a feature
 * @param {string} feature - Feature to check
 * @returns {boolean} Whether feature is supported
 */
export function supportsFeature(feature) {
  const features = {
    webp: () => {
      const canvas = document.createElement('canvas');
      return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
    },
    avif: () => {
      const  canvas = document.createElement('canvas');
      return canvas.toDataURL('image/avif').indexOf('data:image/avif') === 0;
    },
    intersectionObserver: () => 'IntersectionObserver' in window,
    serviceWorker: () => 'serviceWorker' in navigator,
    webGL: () => {
      try {
        const canvas = document.createElement('canvas');
        return !!(canvas.getContext('webgl') || canvas.getContext('experimental-webgl'));
      } catch (e) {
        return false;
      }
    },
    requestIdleCallback: () => 'requestIdleCallback' in window,
  };
  
  return features[feature] ? features[feature]() : false;
}

/**
 * Execute callback when browser is idle
 * @param {Function} callback - Callback to execute
 * @param {Object} options - IdleDeadline options
 * @returns {number} Idle callback ID
 */
export function runWhenIdle(callback, options = {}) {
  if ('requestIdleCallback' in window) {
    return requestIdleCallback(callback, options);
  }
  
  // Fallback to setTimeout
  return setTimeout(callback, 1);
}

/**
 * Cancel idle callback
 * @param {number} id - Idle callback ID
 */
export function cancelIdle(id) {
  if ('cancelIdleCallback' in window) {
    cancelIdleCallback(id);
  } else {
    clearTimeout(id);
  }
}

/**
 * Preload resource
 * @param {string} href - Resource URL
 * @param {string} as - Resource type (image, script, style, font, etc.)
 * @param {Object} attributes - Additional attributes
 */
export function preloadResource(href, as, attributes = {}) {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.href = href;
  link.as = as;
  
  Object.entries(attributes).forEach(([key, value]) => {
    link.setAttribute(key, value);
  });
  
  document.head.appendChild(link);
  
  return () => document.head.removeChild(link);
}

export default {
  debounce,
  throttle,
  rafThrottle,
  addPassiveEventListener,
  lazyLoadImage,
  shallowEqual,
  createMemoizedSelector,
  measurePerformance,
  createStableCallback,
  batchUpdates,
  supportsFeature,
  runWhenIdle,
  cancelIdle,
  preloadResource,
};
