import { useEffect, useState, useRef } from 'react';

interface UseFadeInOptions {
  duration?: 'fast' | 'normal' | 'slow';
  delay?: number;
  effect?: 'fade' | 'fade-up' | 'fade-down' | 'fade-scale';
  threshold?: number;
  rootMargin?: string;
}

export function useFadeIn(options: UseFadeInOptions = {}) {
  const {
    duration = 'normal',
    delay = 0,
    effect = 'fade',
    threshold = 0.1,
    rootMargin = '0px 0px -100px 0px'
  } = options;

  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
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
  }, [delay, threshold, rootMargin]);

  const getAnimationClass = () => {
    const baseClass = 'fade-in';
    
    switch (duration) {
      case 'fast':
        return effect === 'fade' ? 'fade-in-fast' : `${baseClass}-${effect}`;
      case 'slow':
        return effect === 'fade' ? 'fade-in-slow' : `${baseClass}-${effect}`;
      default:
        return effect === 'fade' ? baseClass : `${baseClass}-${effect}`;
    }
  };

  return {
    ref: elementRef,
    className: `${getAnimationClass()} ${isVisible ? 'visible' : ''}`,
    style: { 
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'none' : undefined
    }
  };
}
