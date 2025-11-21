# Performance Optimization Plan for Portfolio Website

## Information Gathered
- The website has multiple interactive components: Typewriter, AnimatedStat, AnimateOnScroll, SwipeCarousel, ScrollIndicator, BackToTopButton.
- Scroll listeners in ScrollIndicator and BackToTopButton trigger on every scroll event without throttling, causing excessive re-renders.
- AnimatedStat uses setInterval for counting animation, which can block the main thread.
- Typewriter uses setTimeout for typing effect, potentially causing lag with multiple instances.
- Many AnimateOnScroll components wrap sections, but they use efficient intersection observer.
- No unnecessary heavy computations, but animations could be smoother.

## Plan
- Optimize AnimatedStat: Replace setInterval with requestAnimationFrame for smoother, non-blocking animation.
- Optimize Typewriter: Improve setTimeout usage with proper cleanup and memoization.
- Throttle scroll handlers: Add throttling using requestAnimationFrame to ScrollIndicator's handleScroll and BackToTopButton's toggleVisibility to reduce update frequency.
- Memoize components: Wrap AnimatedStat, Typewriter, ScrollIndicator, BackToTopButton with React.memo to prevent unnecessary re-renders.
- Keep all features intact, only optimize execution.

## Dependent Files to Edit
- [x] src/components/AnimatedStat.jsx - Replaced setInterval with requestAnimationFrame, added memo.
- [x] src/components/Typewriter.jsx - Improved setTimeout with useRef for cleanup, added memo.
- [x] src/components/ScrollIndicator.jsx - Added throttling with requestAnimationFrame, added memo.
- [x] src/components/BackToTopButton.jsx - Added throttling with requestAnimationFrame, added memo.

## Followup Steps
- [ ] Test the website performance after changes (e.g., using browser dev tools performance tab).
- [ ] Monitor for any visual glitches in animations.
- [ ] If still lagging, consider reducing animation speeds or adding lazy loading to sections.
