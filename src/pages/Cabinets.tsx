import React, { useState, useEffect } from 'react';
import styles from '../styles/Cabinets.module.css';
import MenuTop from '../components/MenuTop';
import Footer from '../components/Footer';
import { useScrollToTop } from '../hooks/useScrollToTop';

// Importar imagens diretamente
import gabinete10 from '../assets/gabinete10.jpeg';
import gabinetes2 from '../assets/gabinetes2.jpeg';
import gabinetes3 from '../assets/gabinetes3.jpeg';
import gabinetes6 from '../assets/gabinetes6.jpeg';
import gabinetes7 from '../assets/gabinetes7.png';
import gabinetes1new from '../assets/gabinetes1new.jpeg';
import fotobanheiro from '../assets/banheiro.jpeg';

export default function Cabinets() {
  useScrollToTop();
  
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Array with 6 cabinet painting photos
  const cabinetPhotos = [
    gabinete10,
    gabinetes2, 
    gabinetes3,
    gabinetes6
  ];

  // Preload images for better performance
  useEffect(() => {
    const preloadImages = () => {
      const imagePromises = cabinetPhotos.map((src) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = resolve;
          img.onerror = reject;
          img.src = src;
        });
      });

      Promise.all(imagePromises)
        .then(() => setImagesLoaded(true))
        .catch((error) => console.error('Error preloading images:', error));
    };

    preloadImages();
  }, [cabinetPhotos]);

  useEffect(() => {
    if (!imagesLoaded) return;

    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => {
        const nextSlide = prevSlide + 1;
        return nextSlide >= cabinetPhotos.length ? 0 : nextSlide;
      });
    }, 3000); // 3 seconds

    return () => clearInterval(interval);
  }, [cabinetPhotos.length, imagesLoaded]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <>
      <MenuTop />
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Hero Section with Background */}
          <div className={styles.heroSection}>
            <div className={styles.heroOverlay}>
              <h1 className={styles.mainTitle}>
                Cabinet Painting
              </h1>
              <p className={styles.heroSubtitle}>
                Transform your kitchen and bathroom cabinets with our professional refinishing services
              </p>
            </div>
          </div>

          {/* Main Content Section */}
          <div className={styles.mainSection}>
            <div className={styles.contentGrid}>
              <div className={styles.textContent}>
                <h2 className={styles.sectionTitle}>
                  Professional Cabinet Painting & Refinishing
                </h2>
                <p className={styles.description}>
                  Our expert team specializes in transforming outdated cabinets into modern, 
                  beautiful focal points. We combine traditional craftsmanship with modern 
                  technology to deliver factory-quality finishes that last. From meticulous 
                  preparation to flawless application, every detail is executed with precision.
                </p>
                
                <div className={styles.featuresList}>
                  <div className={styles.feature}>
                    <div className={styles.featureIcon}>✓</div>
                    <span>Kitchen Cabinet Painting</span>
                  </div>
                  <div className={styles.feature}>
                    <div className={styles.featureIcon}>✓</div>
                    <span>Bathroom Cabinet Refinishing</span>
                  </div>
                  <div className={styles.feature}>
                    <div className={styles.featureIcon}>✓</div>
                    <span>Hardware Replacement</span>
                  </div>
                  <div className={styles.feature}>
                    <div className={styles.featureIcon}>✓</div>
                    <span>Color Consultation</span>
                  </div>
                </div>
              </div>

              <div className={styles.sliderContainer}>
                <div className={styles.slider}>
                  {cabinetPhotos.map((photo, index) => (
                    <div 
                      key={index}
                      className={`${styles.slide} ${currentSlide === index ? styles.active : ''}`}
                    >
                      <img 
                        src={photo}
                        alt={`Cabinet painting slide ${index + 1}`}
                        className={styles.galleryImg}
                        style={{ objectFit: 'cover', objectPosition: 'center' }}
                        loading={index === 0 ? 'eager' : 'lazy'}
                        onLoad={() => {
                          if (index === 0) setImagesLoaded(true);
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Quality Section */}
          <div className={styles.qualitySection}>
            <div className={styles.qualityContent}>
              <h2 className={styles.qualityTitle}>Quality Cabinet Refinishing</h2>
              <p className={styles.qualityDescription}>
                We use premium materials and advanced techniques to ensure your cabinets look 
                like new for years to come. Our process includes thorough cleaning, proper 
                sanding, and multiple coats of high-quality paint or stain. We also offer 
                color matching services to perfectly complement your existing décor.
              </p>
            </div>
          </div>

          {/* Gallery Section */}
          <div className={styles.gallerySection}>
            <h2 className={styles.galleryTitle}>Our Cabinet Projects</h2>
            <div className={styles.galleryGrid}>
              <div className={styles.galleryImage}>
                <img
                  src={gabinetes7}
                  alt="Kitchen cabinet painting project"
                  className={styles.galleryImg}
                  loading="lazy"
                />
                <div className={styles.imageOverlay}>
                  <h3>Kitchen Cabinet Transformation</h3>
                  <p>Complete kitchen cabinet refinishing with modern color scheme</p>
                </div>
              </div>
              <div className={styles.galleryImage}>
                <img
                  src={fotobanheiro}
                  alt="Bathroom cabinet painting project"
                  className={styles.galleryImg}
                  loading="lazy"
                />
                <div className={styles.imageOverlay}>
                  <h3>Bathroom Cabinet Refinishing</h3>
                  <p>Professional bathroom cabinet painting and hardware upgrade</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 