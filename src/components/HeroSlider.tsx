import React, { useState, useEffect } from 'react';
import styles from '../styles/HeroSlider.module.css';

// Importar imagens diretamente
import foto1slide from '../assets/foto1slide.jpeg';
import foto2slide from '../assets/foto2slide.jpeg';
import foto3slide from '../assets/foto3slide.jpeg';
import foto4slide from '../assets/foto4slide.jpeg';
import foto5slide from '../assets/foto5slide.jpeg';
import foto6slide from '../assets/foto6slide.jpeg';
import foto7slide from '../assets/foto7slide.jpeg';
import foto8slide from '../assets/foto8slide.jpeg';
import foto9slide from '../assets/foto9slide.jpeg';
import foto10slide from '../assets/foto10slide.jpeg';

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
    foto1slide,
    foto2slide,
    foto3slide,
    foto4slide,
    foto5slide,
    foto6slide,
    foto7slide,
    foto8slide,
    foto9slide,
    foto10slide
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