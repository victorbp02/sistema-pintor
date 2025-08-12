import React, { useState, useEffect } from 'react';
import styles from '../styles/Commercial.module.css';
import { preloadImages, optimizeImageProps } from '../utils/imageOptimization';
import { useScrollToTop } from '../hooks/useScrollToTop';

// Importar imagens diretamente - usando imagens que representam projetos comerciais
import exterior1 from '../assets/exterior1.jpeg';
import exterior3 from '../assets/exterior3.jpeg';
import exterior5 from '../assets/exterior5.jpeg';
import exterior7 from '../assets/exterior7.jpeg';
import interior1 from '../assets/interior1.jpeg';
import interior3 from '../assets/interior3.jpeg';

export default function Commercial() {
  useScrollToTop();
  
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Array with 6 commercial painting photos for the slider
  const commercialPhotos = [
    interior1,
    interior3,
    exterior1,
    exterior3,
    exterior5,
    exterior7
  ];

  // Preload images for better performance
  useEffect(() => {
    const loadImages = async () => {
      try {
        await preloadImages(commercialPhotos);
        setImagesLoaded(true);
      } catch (error) {
        console.error('Error preloading images:', error);
        setImagesLoaded(true); // Continue even if some images fail
      }
    };

    loadImages();
  }, [commercialPhotos]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    if (!imagesLoaded) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % commercialPhotos.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [commercialPhotos.length, imagesLoaded]);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Hero Section */}
          <section className={styles.heroSection}>
            <div className={styles.heroOverlay}>
              <h1 className={styles.mainTitle}>Commercial Painting Services</h1>
              <p className={styles.heroSubtitle}>
                Professional painting solutions for commercial buildings, offices, and business facilities
              </p>
            </div>
          </section>

          {/* Main Content Section */}
          <section className={styles.mainSection}>
            <div className={styles.contentGrid}>
              <div className={styles.textContent}>
                <h2 className={styles.sectionTitle}>Professional Commercial Painting & Refinishing</h2>
                <p className={styles.description}>
                  Our commercial painting services are designed to enhance the appearance and value of your business property. 
                  We specialize in painting commercial buildings, office spaces, retail stores, warehouses, and other business facilities. 
                  Our experienced team ensures minimal disruption to your operations while delivering exceptional results.
                </p>
                
                <div className={styles.featuresList}>
                  <div className={styles.feature}>
                    <div className={styles.featureIcon}>✓</div>
                    <span>Office Building Painting</span>
                  </div>
                  <div className={styles.feature}>
                    <div className={styles.featureIcon}>✓</div>
                    <span>Retail Store Painting</span>
                  </div>
                  <div className={styles.feature}>
                    <div className={styles.featureIcon}>✓</div>
                    <span>Warehouse Painting</span>
                  </div>
                  <div className={styles.feature}>
                    <div className={styles.featureIcon}>✓</div>
                    <span>Industrial Facility Painting</span>
                  </div>
                </div>
              </div>

              {/* Slider Container */}
              <div className={styles.sliderContainer}>
                <div className={styles.slider}>
                  {commercialPhotos.map((photo, index) => (
                    <div
                      key={index}
                      className={`${styles.slide} ${currentSlide === index ? styles.active : ''}`}
                    >
                      <img
                        {...optimizeImageProps(photo, `Commercial painting slide ${index + 1}`, index)}
                        className={styles.galleryImg}
                        style={{ objectFit: 'cover', objectPosition: 'center' }}
                        onLoad={() => {
                          if (index === 0) setImagesLoaded(true);
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

                     {/* Commercial Interior Section */}
           <section className={styles.interiorSection}>
             <div className={styles.interiorContent}>
               <div className={styles.interiorText}>
                 <h2 className={styles.interiorTitle}>Commercial Interior Painting</h2>
                              <p className={styles.interiorDescription}>
                Our commercial interior painting services are specifically designed to enhance the productivity and
                professional appearance of your business spaces. We understand that the interior environment directly
                impacts employee morale, customer perception, and overall business success. Our team specializes in
                painting office buildings, retail stores, restaurants, healthcare facilities, and other commercial
                interiors with minimal disruption to your daily operations. We use premium paints and materials that
                are durable, easy to maintain, and suitable for high-traffic commercial environments. From thorough
                surface preparation to expert application techniques, we ensure a flawless finish that creates a
                welcoming and professional atmosphere for your employees and customers.
              </p>
              <p className={styles.interiorDescription}>
                Our comprehensive interior painting solutions include detailed color consultation to match your brand
                identity, specialized coatings for different surfaces (drywall, concrete, metal, wood), and advanced
                techniques for textured finishes and decorative elements. We offer flexible scheduling options including
                after-hours and weekend work to minimize business disruption. Our certified painters are trained in
                safety protocols and use eco-friendly, low-VOC paints that promote better indoor air quality. We also
                provide maintenance programs and touch-up services to keep your commercial interiors looking fresh and
                professional year-round. Whether you need a complete office renovation or just a refresh of high-traffic
                areas, our team delivers exceptional results that enhance your business environment and reflect your
                company's commitment to quality and professionalism.
              </p>
               </div>
               
               <div className={styles.interiorPhotos}>
                 <div className={styles.interiorPhotoItem}>
                   <img
                     {...optimizeImageProps(interior1, 'Commercial interior painting project 1', 0)}
                     className={styles.interiorPhotoImg}
                     alt="Office interior painting"
                   />
                 </div>
                 <div className={styles.interiorPhotoItem}>
                   <img
                     {...optimizeImageProps(interior3, 'Commercial interior painting project 2', 1)}
                     className={styles.interiorPhotoImg}
                     alt="Retail interior painting"
                   />
                 </div>
                 <div className={styles.interiorPhotoItem}>
                   <img
                     {...optimizeImageProps(exterior1, 'Commercial interior painting project 3', 2)}
                     className={styles.interiorPhotoImg}
                     alt="Commercial space painting"
                   />
                 </div>
               </div>
             </div>
           </section>

           {/* Commercial Exterior Section */}
           <section className={styles.exteriorSection}>
             <div className={styles.exteriorContent}>
               <div className={styles.exteriorText}>
                 <h2 className={styles.exteriorTitle}>Commercial Exterior Painting</h2>
                 <p className={styles.exteriorDescription}>
                   Our commercial exterior painting services are designed to protect and enhance the curb appeal of your
                   business property while ensuring long-lasting durability against harsh weather conditions. We understand
                   that the exterior appearance of your commercial building is the first impression customers and clients
                   have of your business. Our experienced team specializes in painting commercial buildings, storefronts,
                   warehouses, industrial facilities, and other commercial exteriors with minimal disruption to your
                   operations. We use premium exterior paints and coatings that are specifically formulated to withstand
                   UV rays, moisture, temperature fluctuations, and other environmental factors.
                 </p>
                 <p className={styles.exteriorDescription}>
                   Our comprehensive exterior painting solutions include thorough surface preparation, power washing,
                   caulking and sealing, and application of high-quality exterior coatings designed for commercial use.
                   We offer flexible scheduling including after-hours and weekend work to minimize business disruption.
                   Our certified painters are trained in safety protocols and use eco-friendly, weather-resistant paints
                   that provide excellent protection and color retention. We also provide maintenance programs and
                   touch-up services to keep your commercial exteriors looking professional and well-maintained year-round.
                   Whether you need a complete building renovation or just a refresh of high-visibility areas, our team
                   delivers exceptional results that enhance your property value and reflect your company's commitment to
                   quality and professionalism.
                 </p>
               </div>
               
               <div className={styles.exteriorPhotos}>
                 <div className={styles.exteriorPhotoItem}>
                   <img
                     {...optimizeImageProps(exterior3, 'Commercial exterior painting project 1', 0)}
                     className={styles.exteriorPhotoImg}
                     alt="Commercial building exterior painting"
                   />
                 </div>
                 <div className={styles.exteriorPhotoItem}>
                   <img
                     {...optimizeImageProps(exterior5, 'Commercial exterior painting project 2', 1)}
                     className={styles.exteriorPhotoImg}
                     alt="Storefront exterior painting"
                   />
                 </div>
                 <div className={styles.exteriorPhotoItem}>
                   <img
                     {...optimizeImageProps(exterior7, 'Commercial exterior painting project 3', 2)}
                     className={styles.exteriorPhotoImg}
                     alt="Industrial facility exterior painting"
                   />
                 </div>
               </div>
             </div>
           </section>

          {/* Quality Section */}
          <section className={styles.qualitySection}>
            <div className={styles.qualityContent}>
              <h2 className={styles.qualityTitle}>Quality Commercial Painting Services</h2>
              <p className={styles.qualityDescription}>
                We understand the unique challenges of commercial painting projects. Our team is equipped to handle large-scale projects, 
                work around business hours, and ensure minimal disruption to your operations. We use high-quality paints and materials 
                that are durable and suitable for commercial environments, ensuring your investment lasts for years to come.
              </p>
            </div>
          </section>

          {/* Gallery Section */}
          <section className={styles.gallerySection}>
            <h2 className={styles.galleryTitle}>Our Commercial Projects</h2>
            <div className={styles.galleryGrid}>
              <div className={styles.galleryImage}>
                <img
                  {...optimizeImageProps(exterior7, 'Commercial painting project 1', 0)}
                  className={styles.galleryImg}
                />
                <div className={styles.imageOverlay}>
                  <h3>Office Building Transformation</h3>
                  <p>Complete interior and exterior painting of a modern office complex</p>
                </div>
              </div>
              <div className={styles.galleryImage}>
                <img
                  {...optimizeImageProps(interior3, 'Commercial painting project 2', 1)}
                  className={styles.galleryImg}
                />
                <div className={styles.imageOverlay}>
                  <h3>Retail Store Renovation</h3>
                  <p>Professional painting services for retail spaces and shopping centers</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
} 