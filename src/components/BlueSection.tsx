import styles from '../styles/BlueSection.module.css';
import { useState, useEffect, useRef } from 'react';

export default function BlueSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          console.log('BlueSection slide-in ativado');
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className={`${styles.blueSection} blueSection slide-in-up ${isVisible ? 'visible' : ''}`}
    >
      <div className={styles.centerImg}></div>
    </section>
  );
} 