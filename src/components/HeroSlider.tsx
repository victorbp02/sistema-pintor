import React, { useState, useEffect } from 'react';
import styles from '../styles/HeroSlider.module.css';

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => {
        // Passa para a próxima imagem na ordem sequencial
        const nextSlide = prevSlide + 1;
        // Se chegou ao final, volta para a primeira (foto1slide)
        return nextSlide >= 10 ? 0 : nextSlide;
      });
    }, 2500); // 4 segundos

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Array com as 10 imagens numeradas em ordem
  const slides = [
    '/src/assets/foto1slide.jpeg',
    '/src/assets/foto2slide.jpeg',
    '/src/assets/foto3slide.jpeg',
    '/src/assets/foto4slide.jpeg',
    '/src/assets/foto5slide.jpeg',
    '/src/assets/foto6slide.jpeg',
    '/src/assets/foto7slide.jpeg',
    '/src/assets/foto8slide.jpeg',
    '/src/assets/foto9slide.jpeg',
    '/src/assets/foto10slide.jpeg'
  ];

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.slides}>
        {slides.map((slide, index) => (
          <div 
            key={index}
            className={`${styles.slide} ${currentSlide === index ? styles.active : ''}`}
            style={{
              backgroundImage: `url(${slide})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundColor: '#f0f0f0' // Fallback
            }}
          />
        ))}
      </div>
    </div>
  );
} 