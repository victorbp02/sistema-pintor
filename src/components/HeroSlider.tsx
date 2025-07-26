import React, { useState, useEffect } from 'react';
import styles from '../styles/HeroSlider.module.css';

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => 
        prevSlide === 2 ? 0 : prevSlide + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.slides}>
        <div 
          className={`${styles.slide} ${currentSlide === 0 ? styles.active : ''}`}
          style={{
            backgroundImage: 'url(/bannerPrincipal.jpeg)'
          }}
        />
        <div 
          className={`${styles.slide} ${currentSlide === 1 ? styles.active : ''}`}
          style={{
            backgroundImage: 'url(/bannerPrincipal.jpeg)'
          }}
        />
        <div 
          className={`${styles.slide} ${currentSlide === 2 ? styles.active : ''}`}
          style={{
            backgroundImage: 'url(/bannerPrincipal.jpeg)'
          }}
        />
      </div>
      
      <div className={styles.indicators}>
        <button
          className={`${styles.indicator} ${currentSlide === 0 ? styles.active : ''}`}
          onClick={() => goToSlide(0)}
        />
        <button
          className={`${styles.indicator} ${currentSlide === 1 ? styles.active : ''}`}
          onClick={() => goToSlide(1)}
        />
        <button
          className={`${styles.indicator} ${currentSlide === 2 ? styles.active : ''}`}
          onClick={() => goToSlide(2)}
        />
      </div>
    </div>
  );
} 