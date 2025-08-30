import { ReactNode, useEffect, useState, useRef } from 'react';

interface FadeInWrapperProps {
  children: ReactNode;
  className?: string;
  duration?: 'fast' | 'normal' | 'slow';
  effect?: 'fade' | 'fade-up' | 'fade-down' | 'fade-scale';
  threshold?: number;
  rootMargin?: string;
}

export default function FadeInWrapper({ 
  children, 
  className = '', 
  duration = 'normal',
  effect = 'fade',
  threshold = 0.1,
  rootMargin = '0px 0px -100px 0px'
}: FadeInWrapperProps) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

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

  return (
    <div 
      ref={elementRef}
      className={`${getAnimationClass()} ${isVisible ? 'visible' : ''} ${className}`}
    >
      {children}
    </div>
  );
}
