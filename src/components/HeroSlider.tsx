import React, { useState, useEffect } from 'react';
import styles from '../styles/HeroSlider.module.css';

// Importar imagens diretamente
import interior18 from '../assets/interior18.jpeg';
import interior19 from '../assets/interior19.jpeg';
import exterior4 from '../assets/exterior4.jpeg';
import exterior5 from '../assets/exterior5.jpeg';
import multifamily1 from '../assets/multifamily1.jpeg';
import multifamily2 from '../assets/multifamily2.jpeg';
import gabinetes16 from '../assets/gabinetes16.jpeg';
import services3 from '../assets/services3.jpeg';
import commercial10 from '../assets/commercial10.jpeg';
import commercial11 from '../assets/commercial11.jpeg';

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
    }, 4500); // 4.5 segundos

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Array com as 10 imagens numeradas em ordem
  const slides = [
    interior19,
    interior18,
    exterior4, 
    exterior5,
    multifamily1,
    multifamily2,
    gabinetes16,
    services3,
    commercial10,
    commercial11
  ];

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.slides}>
        {slides.map((slide, index) => (
          <div 
            key={index}
            className={`${styles.slide} ${currentSlide === index ? styles.active : ''}`}
          >
            <img
              src={slide}
              alt={`Project slide ${index + 1}`}
              className={styles.slideImg}
            />
          </div>
        ))}
      </div>
    </div>
  );
} 