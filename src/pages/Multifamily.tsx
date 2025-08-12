import React, { useState, useEffect } from 'react';
import styles from '../styles/Multifamily.module.css';
import { preloadImages, optimizeImageProps } from '../utils/imageOptimization';
import { useScrollToTop } from '../hooks/useScrollToTop';

// Importar imagens diretamente
import multifamily1 from '../assets/multifamily1.jpeg';
import multifamily2 from '../assets/multifamily2.jpeg';
import multifamily3 from '../assets/multifamily3.jpeg';
import multifamily4 from '../assets/multifamily4.jpeg';
import multifamily5 from '../assets/multifamily5.jpeg';
import multifamily6 from '../assets/multifamily6.jpeg';

export default function Multifamily() {
  useScrollToTop();
  
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Array with 6 multifamily painting photos
  const multifamilyPhotos = [
    multifamily1,
    multifamily2,
    multifamily3,
    multifamily4,
    multifamily5,
  ];

  // Preload images for better performance
  useEffect(() => {
    const loadImages = async () => {
      try {
        await preloadImages(multifamilyPhotos);
        setImagesLoaded(true);
      } catch (error) {
        console.error('Error preloading images:', error);
        setImagesLoaded(true); // Continue even if some images fail
      }
    };

    loadImages();
  }, [multifamilyPhotos]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    if (!imagesLoaded) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % multifamilyPhotos.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [multifamilyPhotos.length, imagesLoaded]);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Hero Section */}
          <section className={styles.heroSection}>
            <div className={styles.heroOverlay}>
              <h1 className={styles.mainTitle}>HOA & Multi-Family Painting Services</h1>
              <p className={styles.heroSubtitle}>
                Professional painting solutions for apartment complexes, condominiums, and multi-unit properties
              </p>
            </div>
          </section>

          {/* Main Content Section */}
          <section className={styles.mainSection}>
            <div className={styles.contentGrid}>
              <div className={styles.textContent}>
                <h2 className={styles.sectionTitle}>Professional HOA & Multi-Family Painting & Refinishing</h2>
                <p className={styles.description}>
                At World Pro Painting, we specialize in professional painting solutions for Homeowners Associations (HOAs) and Multi-Family properties throughout the Bay Area. We understand the unique demands of working in occupied communities and the importance of clear communication, schedule coordination, and delivering consistent results with minimal disruption to residents.
                </p>
              </div>

              {/* Slider Container */}
              <div className={styles.sliderContainer}>
                <div className={styles.slider}>
                  {multifamilyPhotos.map((photo, index) => (
                    <div
                      key={index}
                      className={`${styles.slide} ${currentSlide === index ? styles.active : ''}`}
                    >
                      <img
                        {...optimizeImageProps(photo, `Multi-family painting slide ${index + 1}`, index)}
                        className={styles.galleryImg}
                        style={{ objectFit: 'cover', objectPosition: 'center' }}
                        onLoad={() => {
                          if (index === 0) setImagesLoaded(true);
                        }}
                        onError={(e) => {
                          console.error(`Failed to load image: ${photo}`);
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section className={styles.servicesSection}>
            <div className={styles.servicesContent}>
              <h2 className={styles.servicesTitle}>Our Services Include:</h2>
              <div className={styles.featuresList}>
                <div className={styles.feature}>
                  <div className={styles.featureIcon}>✓</div>
                  <span>Complete exterior and interior painting for condos, townhomes, apartment buildings, and Multi-Family communities</span>
                </div>
                <div className={styles.feature}>
                  <div className={styles.featureIcon}>✓</div>
                  <span>Common area refinishing, including hallways, stairwells, lobbies, garages, and mailrooms</span>
                </div>
                <div className={styles.feature}>
                  <div className={styles.featureIcon}>✓</div>
                  <span>Fast-turnover unit painting to prepare vacant apartments for new tenants</span>
                </div>
                <div className={styles.feature}>
                  <div className={styles.featureIcon}>✓</div>
                  <span>Professional color consultation and assistance with HOA board approvals</span>
                </div>
                <div className={styles.feature}>
                  <div className={styles.featureIcon}>✓</div>
                  <span>Surface preparation and repair, including stucco patching, light carpentry, and pressure washing</span>
                </div>
                <div className={styles.feature}>
                  <div className={styles.featureIcon}>✓</div>
                  <span>Flexible scheduling, including nights and weekends, to minimize disruption for residents</span>
                </div>
              </div>
            </div>
          </section>

          {/* Quality Section */}
          <section className={styles.qualitySection}>
            <div className={styles.qualityContent}>
              <h2 className={styles.qualityTitle}>Licensed, Bonded & Fully Insured</h2>
              <p className={styles.qualityDescription}>
                We are licensed, fully insured, and backed by high general liability coverage, meeting the strictest property management requirements. Our strong bonding capacity is ideal for large-scale HOA and Multi-Family projects, and we are fully compliant with OSHA and industry safety regulations.
              </p>
              <p className={styles.qualityDescription}>
                These coverages provide our clients with peace of mind, knowing their properties are protected and their vendors are fully qualified.
              </p>
            </div>
          </section>

          {/* Why Choose Us Section */}
          <section className={styles.gallerySection}>
            <h2 className={styles.galleryTitle}>Why Property Managers and HOA Boards Choose Us:</h2>
            <div className={styles.whyChooseUsContent}>
              <div className={styles.whyChooseUsGrid}>
                <div className={styles.whyChooseUsCard}>
                  <h3>Deep Understanding</h3>
                  <p>Deep understanding of HOA approval processes and Multi-Family workflows</p>
                </div>
                <div className={styles.whyChooseUsCard}>
                  <h3>Clear Proposals</h3>
                  <p>Clear proposals with defined scopes, timelines, and warranty options</p>
                </div>
                <div className={styles.whyChooseUsCard}>
                  <h3>Professional Crews</h3>
                  <p>Professional, clean, and respectful crews experienced in occupied settings</p>
                </div>
                <div className={styles.whyChooseUsCard}>
                  <h3>Flexible Scheduling</h3>
                  <p>Flexible scheduling and communication tailored to your residents' needs</p>
                </div>
                <div className={styles.whyChooseUsCard}>
                  <h3>On-Time Delivery</h3>
                  <p>On-time and on-budget execution — with no compromise on quality</p>
                </div>
              </div>
            </div>
          </section>

          {/* Gallery Section */}
          <section className={styles.gallerySection}>
            <h2 className={styles.galleryTitle}>Our Multi-Family Projects</h2>
            <div className={styles.galleryGrid}>
              <div className={styles.galleryImage}>
                <img 
                  src="/src/assets/multifamily1.jpeg" 
                  alt="Multi-Family Painting Project 1" 
                  className={styles.galleryImg}
                />
                <div className={styles.imageOverlay}>
                  <h3>Exterior Painting</h3>
                  <p>Professional exterior painting for apartment complexes</p>
                </div>
              </div>
              <div className={styles.galleryImage}>
                <img 
                  src="/src/assets/multifamily2.jpeg" 
                  alt="Multi-Family Painting Project 2" 
                  className={styles.galleryImg}
                />
                <div className={styles.imageOverlay}>
                  <h3>Interior Refinishing</h3>
                  <p>Complete interior painting and refinishing services</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
} 