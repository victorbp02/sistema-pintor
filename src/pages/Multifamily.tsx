import React, { useState, useEffect } from 'react';
import styles from '../styles/Commercial.module.css'; 
import { preloadImages, optimizeImageProps } from '../utils/imageOptimization';
import { useScrollToTop } from '../hooks/useScrollToTop';

// Importar imagens diretamente - usando imagens que representam projetos multifamily
import multifamily1 from '../assets/multifamily1.jpeg';
import multifamily2 from '../assets/multifamily2.jpeg';
import multifamily3 from '../assets/multifamily3.jpeg';
import multifamily4 from '../assets/multifamily4.jpeg';
import multifamily5 from '../assets/multifamily5.jpeg';
import multifamily6 from '../assets/multifamily6.jpeg';
import multifamily7 from '../assets/multifamily7.jpeg';
import multifamily8 from '../assets/multifamily8.jpeg';
import multifamily9 from '../assets/multifamily9.jpeg';
import multifamily10 from '../assets/multifamily10.jpeg';
import multifamily11 from '../assets/multifamily11.jpeg';
import multifamily12 from '../assets/multifamily12.jpeg';
import multifamily13 from '../assets/multifamily13.jpeg';
import multifamily14 from '../assets/multifamily14.jpeg';
import multifamily15 from '../assets/multifamily15.jpeg';
import multifamily16 from '../assets/multifamily16.jpeg';
import multifamily17 from '../assets/multifamily17.jpeg';


export default function Multifamily() {
  useScrollToTop();
  
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Array with 6 multifamily painting photos for the slider
  const multifamilyPhotos = [
    multifamily1,
    multifamily2,
    multifamily3,
    multifamily4,
    multifamily5,
    multifamily6,
    multifamily7,
    multifamily8,
    multifamily9,
    multifamily10,
    multifamily11,
    multifamily12,
    multifamily13,
    multifamily14,
    multifamily15,
    multifamily16,
    multifamily17
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
              <h1 className={styles.mainTitle}>HOA & Multi-Family<br /><span className={styles.mobileInline}>Painting Services</span></h1>
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
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Why Choose Us Section */}
          <section className={styles.interiorSection}>
            <div className={styles.interiorContent}>
              <div className={styles.interiorText}>
                <h2 className={styles.interiorTitle}>Why HOAs & Property Managers Choose Us</h2>
                <p className={styles.interiorDescription}>
                  At World Pro Painting, we understand that HOAs and Multi-Family communities require more than just a fresh coat of paint — they need a partner who can manage complex projects, maintain open communication, and deliver exceptional results that last.
                </p>
                
                <div className={styles.complianceList}>
                  <div className={styles.complianceItem}>
                    <div className={styles.complianceIcon}>✓</div>
                    <span>Licensed, Insured & Bonded – Full compliance for peace of mind.</span>
                  </div>
                  <div className={styles.complianceItem}>
                    <div className={styles.complianceIcon}>✓</div>
                    <span>Specialized in HOA & Multi-Family Projects – From small work orders to large-scale repainting.</span>
                  </div>
                  <div className={styles.complianceItem}>
                    <div className={styles.complianceIcon}>✓</div>
                    <span>Minimized Disruption – We coordinate schedules to reduce impact on residents.</span>
                  </div>
                  <div className={styles.complianceItem}>
                    <div className={styles.complianceIcon}>✓</div>
                    <span>Durable, Long-Lasting Finishes – Premium paints and proven surface preparation methods.</span>
                  </div>
                </div>
              </div>
              
              <div className={styles.interiorPhotos}>
                <div className={styles.interiorPhotoItem}>
                  <img
                    {...optimizeImageProps(multifamily7, 'HOA painting project 1', 0)}
                    className={styles.interiorPhotoImg}
                    alt="HOA painting project"
                  />
                </div>
                <div className={styles.interiorPhotoItem}>
                  <img
                    {...optimizeImageProps(multifamily8, 'HOA painting project 2', 1)}
                    className={styles.interiorPhotoImg}
                    alt="Multi-family painting solutions"
                  />
                </div>
                <div className={styles.interiorPhotoItem}>
                  <img
                    {...optimizeImageProps(multifamily9, 'HOA painting project 3', 2)}
                    className={styles.interiorPhotoImg}
                    alt="Community painting project"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Compliance Section */}
          <section className={styles.exteriorSection}>
            <div className={styles.exteriorContent}>
              <div className={styles.exteriorText}>
                <h2 className={styles.exteriorTitle}>Staying Compliant with Bay Area HOA Painting Regulations</h2>
                <p className={styles.exteriorDescription}>
                  In the Bay Area, property maintenance often comes with local and regional compliance requirements, especially for HOAs, historical buildings, and commercial properties. At World Pro Painting, we help ensure your project meets all necessary requirements to avoid delays, fines, and unnecessary risks.
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
              </div>
              
              <div className={styles.exteriorPhotos}>
                <div className={styles.exteriorPhotoItem}>
                  <img
                    {...optimizeImageProps(multifamily10, 'HOA compliance project 1', 0)}
                    className={styles.exteriorPhotoImg}
                    alt="HOA compliance painting"
                  />
                </div>
                <div className={styles.exteriorPhotoItem}>
                  <img
                    {...optimizeImageProps(multifamily11, 'HOA compliance project 2', 1)}
                    className={styles.exteriorPhotoImg}
                    alt="Multi-family safety standards"
                  />
                </div>
                <div className={styles.exteriorPhotoItem}>
                  <img
                    {...optimizeImageProps(multifamily12, 'HOA compliance project 3', 2)}
                    className={styles.exteriorPhotoImg}
                    alt="Community regulations compliance"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Process Section */}
          <section className={styles.qualitySection}>
            <div className={styles.qualityContent}>
              <h2 className={styles.qualityTitle}>Our HOA Painting Process</h2>
              <p className={styles.qualityDescription}>
                From initial consultation to final inspection, we work closely with you to ensure every aspect of your project meets your expectations and exceeds industry standards. We use premium paints and materials that are durable and suitable for multi-family environments, ensuring your investment lasts for years to come.
              </p>
            </div>
          </section>

          {/* Bay Area Climate Section */}
          <section className={styles.interiorSection}>
            <div className={styles.interiorContent}>
              <div className={styles.interiorText}>
                <h2 className={styles.interiorTitle}>Bay Area Climate Considerations for Multi-Family Properties</h2>
                <p className={styles.interiorDescription}>
                  The Bay Area's unique climate — from coastal humidity to intense sunlight — requires special consideration when choosing paint for multi-family properties. We recommend paints designed for UV resistance, moisture protection, and mildew prevention to ensure your property maintains its professional appearance year-round.
                </p>
              </div>
              
              <div className={styles.interiorPhotos}>
                <div className={styles.interiorPhotoItem}>
                  <img
                    {...optimizeImageProps(multifamily13, 'Bay Area climate project 1', 0)}
                    className={styles.interiorPhotoImg}
                    alt="Bay Area climate considerations"
                  />
                </div>
                <div className={styles.interiorPhotoItem}>
                  <img
                    {...optimizeImageProps(multifamily14, 'Bay Area climate project 2', 1)}
                    className={styles.interiorPhotoImg}
                    alt="Climate-resistant painting"
                  />
                </div>
                <div className={styles.interiorPhotoItem}>
                  <img
                    {...optimizeImageProps(multifamily15, 'Bay Area climate project 3', 2)}
                    className={styles.interiorPhotoImg}
                    alt="Weather-resistant finishes"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* FAQs Section */}
          <section className={styles.qualitySection}>
            <div className={styles.qualityContent}>
              <h2 className={styles.qualityTitle}>HOA & Multi-Family Painting FAQs</h2>
              
              <div className={styles.faqCardsGrid}>
                <div className={styles.faqCard}>
                  <h3>When is it time to repaint your multi-family building?</h3>
                  <ul className={styles.faqList}>
                    <li>Fading or discoloration</li>
                    <li>Peeling or cracking paint</li>
                    <li>Bubbling or blistering surfaces</li>
                    <li>Visible wear in high-traffic or weather-exposed areas</li>
                  </ul>
                </div>
                
                <div className={styles.faqCard}>
                  <h3>Why is color choice so important in HOA communities?</h3>
                  <p className={styles.faqAnswer}>
                    Colors influence property values, community perception, and overall brand image. The right palette can make your community more inviting and professional.
                  </p>
                </div>
                
                <div className={styles.faqCard}>
                  <h3>What is the HOA painting process?</h3>
                  <p className={styles.faqAnswer}>
                    Our experts help you select colors that match your community identity, align with your building's style, and create the desired atmosphere for your residents.
                  </p>
                </div>
                
                <div className={styles.faqCard}>
                  <h3>How do you minimize disruption to residents?</h3>
                  <p className={styles.faqAnswer}>
                    We coordinate schedules, provide advance notice, and work efficiently to reduce impact on daily life while maintaining quality standards.
                  </p>
                </div>
                
                <div className={styles.faqCard}>
                  <h3>How does the Bay Area climate affect paint choices?</h3>
                  <p className={styles.faqAnswer}>
                    With coastal humidity, salt air, and strong sunlight, we recommend paints designed for UV resistance, moisture protection, and mildew prevention to keep your property looking its best year-round.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Conclusion Section */}
          <section className={styles.qualitySection}>
            <div className={styles.qualityContent}>
              <h2 className={styles.qualityTitle}>Transform Your Multi-Family Community</h2>
              <p className={styles.qualityDescription}>
                At World Pro Painting, we understand that your multi-family property is more than just a building — it's a community where people live, work, and thrive. Our comprehensive HOA and multi-family painting services combine eco-friendly solutions, regulatory compliance, and expert craftsmanship to deliver results that enhance your property's value and create a positive impression for everyone who visits your community.
              </p>
              <p className={styles.qualityDescription}>
                From initial consultation to final inspection, we work closely with you to ensure every aspect of your project meets your expectations and exceeds industry standards. Contact us today to discuss how we can help transform your multi-family community with professional, sustainable painting solutions.
              </p>
            </div>
          </section>

          {/* Gallery Section */}
          <section className={styles.gallerySection}>
            <h2 className={styles.galleryTitle}>Our Multi-Family Projects</h2>
            <div className={styles.galleryGrid}>
              <div className={styles.galleryImage}>
                <img
                  {...optimizeImageProps(multifamily16, 'Multi-family painting project 1', 0)}
                  className={styles.galleryImg}
                />
              </div>
              <div className={styles.galleryImage}>
                <img
                  {...optimizeImageProps(multifamily17, 'Multi-family painting project 2', 1)}
                  className={styles.galleryImg}
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}