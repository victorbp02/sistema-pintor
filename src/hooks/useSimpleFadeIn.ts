import { useEffect, useState, useRef } from 'react';

interface UseSimpleFadeInOptions {
  threshold?: number;
  rootMargin?: string;
  effect?: 'fade-up' | 'fade-down' | 'fade-scale';
  duration?: 'fast' | 'normal' | 'slow';
}

export function useSimpleFadeIn(options: UseSimpleFadeInOptions = {}) {
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -100px 0px',
    effect = 'fade-up',
    duration = 'normal'
  } = options;

  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
        rootMargin
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, rootMargin]);

  // Simplificar para usar apenas slide-in-up como o ServicesGridSec
  return {
    ref: elementRef,
    className: `slide-in-up ${isVisible ? 'visible' : ''}`
  };
}
