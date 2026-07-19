// useScrollAnimation hook
// Adds .visible class to elements when they enter the viewport
import { useEffect, useRef } from 'react';

const useScrollAnimation = (selector = '.fade-up, .slide-left, .slide-right, .zoom-in') => {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [selector]);
};

export default useScrollAnimation;
