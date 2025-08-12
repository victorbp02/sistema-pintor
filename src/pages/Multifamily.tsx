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
                <h2 className={styles.sectionTitle}>HOA & Multi-Family Painting in the Bay Area</h2>
                <p className={styles.description}>
                  At World Pro Painting, we understand that HOAs and Multi-Family communities require more than just a fresh coat of paint — they need a partner who can manage complex projects, maintain open communication, and deliver exceptional results that last.
                </p>
                <p className={styles.description}>
                  With extensive experience in exterior and interior painting for HOAs, apartment complexes, and community associations, our team combines craftsmanship, efficiency, and proactive planning to keep your properties looking their best year-round.
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

          {/* Why Choose Us Section */}
          <section className={styles.servicesSection}>
            <div className={styles.servicesContent}>
              <h2 className={styles.servicesTitle}>Why HOAs & Property Managers Choose Us</h2>
              <div className={styles.featuresList}>
                <div className={styles.feature}>
                  <div className={styles.featureIcon}>✓</div>
                  <span>Licensed, Insured & Bonded – Full compliance for peace of mind.</span>
                </div>
                <div className={styles.feature}>
                  <div className={styles.featureIcon}>✓</div>
                  <span>Specialized in HOA & Multi-Family Projects – From small work orders to large-scale repainting.</span>
                </div>
                <div className={styles.feature}>
                  <div className={styles.featureIcon}>✓</div>
                  <span>Minimized Disruption – We coordinate schedules to reduce impact on residents.</span>
                </div>
                <div className={styles.feature}>
                  <div className={styles.featureIcon}>✓</div>
                  <span>Durable, Long-Lasting Finishes – Premium paints and proven surface preparation methods.</span>
                </div>
                <div className={styles.feature}>
                  <div className={styles.featureIcon}>✓</div>
                  <span>Transparent Communication – Regular updates for HOA boards, managers, and residents.</span>
                </div>
              </div>
            </div>
          </section>

          {/* Process Section */}
          <section className={styles.qualitySection}>
            <div className={styles.qualityContent}>
              <h2 className={styles.qualityTitle}>Our HOA Painting Process</h2>
              <div className={styles.processList}>
                <div className={styles.processItem}>
                  <div className={styles.processNumber}>1</div>
                  <div className={styles.processContent}>
                    <h3>Detailed Site Evaluation</h3>
                    <p>Identify repairs, surface preparation needs, and color compliance.</p>
                  </div>
                </div>
                <div className={styles.processItem}>
                  <div className={styles.processNumber}>2</div>
                  <div className={styles.processContent}>
                    <h3>HOA Board Consultation</h3>
                    <p>Present clear proposals, color samples, and maintenance options.</p>
                  </div>
                </div>
                <div className={styles.processItem}>
                  <div className={styles.processNumber}>3</div>
                  <div className={styles.processContent}>
                    <h3>Professional Execution</h3>
                    <p>Skilled crews, safe work practices, and on-time delivery.</p>
                  </div>
                </div>
                <div className={styles.processItem}>
                  <div className={styles.processNumber}>4</div>
                  <div className={styles.processContent}>
                    <h3>Final Walkthrough</h3>
                    <p>Ensure quality standards and HOA approval.</p>
                  </div>
                </div>
                <div className={styles.processItem}>
                  <div className={styles.processNumber}>5</div>
                  <div className={styles.processContent}>
                    <h3>Ongoing Maintenance Plans</h3>
                    <p>Keep the property looking its best year after year.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Compliance Section */}
          <section className={styles.gallerySection}>
            <h2 className={styles.galleryTitle}>Staying Compliant with Bay Area Painting Regulations</h2>
            <div className={styles.complianceContent}>
              <p className={styles.complianceDescription}>
                In the Bay Area, property maintenance often comes with local and regional compliance requirements, especially for HOAs, historical buildings, and commercial properties. At World Pro Painting, we help you navigate:
              </p>
              <div className={styles.complianceList}>
                <div className={styles.complianceItem}>
                  <div className={styles.complianceIcon}>✓</div>
                  <span>HOA Guidelines – Ensuring color choices and finishes meet community standards.</span>
                </div>
                <div className={styles.complianceItem}>
                  <div className={styles.complianceIcon}>✓</div>
                  <span>Historical & Architectural Preservation Rules – Maintaining approved aesthetics in designated districts.</span>
                </div>
                <div className={styles.complianceItem}>
                  <div className={styles.complianceIcon}>✓</div>
                  <span>Safety Standards (OSHA) – Protecting residents, tenants, and workers throughout the project.</span>
                </div>
                <div className={styles.complianceItem}>
                  <div className={styles.complianceIcon}>✓</div>
                  <span>EPA Lead-Safe Practices – Following strict regulations when working on older buildings that may contain lead-based paint.</span>
                </div>
              </div>
              <p className={styles.complianceConclusion}>
                By staying compliant, we protect your property, your investment, and your community's reputation.
              </p>
            </div>
          </section>

          {/* Projects Section */}
          <section className={styles.gallerySection}>
            <h2 className={styles.galleryTitle}>Recent HOA & Multi-Family Projects</h2>
            <div className={styles.projectsContent}>
              <p className={styles.projectsDescription}>
                From coastal properties needing weather-resistant coatings to large-scale apartment complexes requiring strict timelines, we've successfully completed projects across the Bay Area, always exceeding expectations in quality, safety, and communication.
              </p>
            </div>
          </section>

          {/* Mission Section */}
          <section className={styles.missionSection}>
            <div className={styles.missionContent}>
              <p className={styles.missionText}>
                Our mission is to provide long-lasting painting solutions, competitive value, and transparent communication, building trust at every stage of the project.
              </p>
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