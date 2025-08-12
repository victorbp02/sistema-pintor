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
                  At World Pro Painting, we understand that your commercial property is more than just a building — it's a reflection of your brand and business values. Our comprehensive commercial painting services combine eco-friendly solutions, regulatory compliance, and expert craftsmanship to deliver results that enhance your property's value and create a positive impression for everyone who visits your business.
                </p>
                <p className={styles.description}>
                  From initial consultation to final inspection, we work closely with you to ensure every aspect of your project meets your expectations and exceeds industry standards. We use premium paints and materials that are durable and suitable for commercial environments, ensuring your investment lasts for years to come.
                </p>
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

          {/* Why Choose Us Section */}
          <section className={styles.interiorSection}>
            <div className={styles.interiorContent}>
              <div className={styles.interiorText}>
                <h2 className={styles.interiorTitle}>Why Eco-Friendly Paints Matter for Your Commercial Property</h2>
                <p className={styles.interiorDescription}>
                  Sustainability is no longer just a trend — it's a smart business decision. At World Pro Painting, we offer a range of eco-friendly paint options that not only protect and enhance your property but also contribute to a healthier environment for your employees, customers, and the community.
                </p>
                
                <div className={styles.complianceList}>
                  <div className={styles.complianceItem}>
                    <div className={styles.complianceIcon}>✓</div>
                    <span>Durability – Longer-lasting finishes mean fewer repaints, less waste, and reduced maintenance costs.</span>
                  </div>
                  <div className={styles.complianceItem}>
                    <div className={styles.complianceIcon}>✓</div>
                    <span>Healthier Environment – Low-toxicity formulas create safer indoor and outdoor spaces for staff and visitors.</span>
                  </div>
                  <div className={styles.complianceItem}>
                    <div className={styles.complianceIcon}>✓</div>
                    <span>Boost Your Brand Image – Show your commitment to sustainability and attract eco-conscious clients and partners.</span>
                  </div>
                  <div className={styles.complianceItem}>
                    <div className={styles.complianceIcon}>✓</div>
                    <span>Low & Zero VOC Options – Our paints have low or zero volatile organic compounds (VOCs), reducing harmful emissions and improving air quality inside your building.</span>
                  </div>
                </div>
              </div>
              
              <div className={styles.interiorPhotos}>
                <div className={styles.interiorPhotoItem}>
                  <img
                    {...optimizeImageProps(interior1, 'Eco-friendly commercial painting 1', 0)}
                    className={styles.interiorPhotoImg}
                    alt="Eco-friendly commercial painting"
                  />
                </div>
                <div className={styles.interiorPhotoItem}>
                  <img
                    {...optimizeImageProps(interior3, 'Eco-friendly commercial painting 2', 1)}
                    className={styles.interiorPhotoImg}
                    alt="Sustainable painting solutions"
                  />
                </div>
                <div className={styles.interiorPhotoItem}>
                  <img
                    {...optimizeImageProps(exterior1, 'Eco-friendly commercial painting 3', 2)}
                    className={styles.interiorPhotoImg}
                    alt="Green commercial painting"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Compliance Section */}
          <section className={styles.exteriorSection}>
            <div className={styles.exteriorContent}>
              <div className={styles.exteriorText}>
                <h2 className={styles.exteriorTitle}>Staying Compliant with Bay Area Commercial Painting Regulations</h2>
                <p className={styles.exteriorDescription}>
                  In the Bay Area, commercial properties often need to comply with local building and maintenance regulations. At World Pro Painting, we help ensure your project meets all necessary requirements to avoid delays, fines, and unnecessary risks.
                </p>
                
                <div className={styles.complianceList}>
                  <div className={styles.complianceItem}>
                    <div className={styles.complianceIcon}>✓</div>
                    <span>City and County Guidelines – Including color restrictions for specific districts or building types.</span>
                  </div>
                  <div className={styles.complianceItem}>
                    <div className={styles.complianceIcon}>✓</div>
                    <span>Historical & Architectural Preservation Rules – Maintaining approved aesthetics in protected zones.</span>
                  </div>
                  <div className={styles.complianceItem}>
                    <div className={styles.complianceIcon}>✓</div>
                    <span>OSHA Safety Standards – Protecting workers and building occupants during the project.</span>
                  </div>
                  <div className={styles.complianceItem}>
                    <div className={styles.complianceIcon}>✓</div>
                    <span>EPA Lead-Safe Practices – Following regulations when working on older buildings that may contain lead-based paint.</span>
                  </div>
                </div>
              </div>
              
              <div className={styles.exteriorPhotos}>
                <div className={styles.exteriorPhotoItem}>
                  <img
                    {...optimizeImageProps(exterior3, 'Commercial compliance project 1', 0)}
                    className={styles.exteriorPhotoImg}
                    alt="Commercial compliance painting"
                  />
                </div>
                <div className={styles.exteriorPhotoItem}>
                  <img
                    {...optimizeImageProps(exterior5, 'Commercial compliance project 2', 1)}
                    className={styles.exteriorPhotoImg}
                    alt="Commercial safety standards"
                  />
                </div>
                <div className={styles.exteriorPhotoItem}>
                  <img
                    {...optimizeImageProps(exterior7, 'Commercial compliance project 3', 2)}
                    className={styles.exteriorPhotoImg}
                    alt="Commercial regulations compliance"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Color Consultation Section */}
          <section className={styles.qualitySection}>
            <div className={styles.qualityContent}>
              <h2 className={styles.qualityTitle}>Color Consultation for Commercial Spaces</h2>
              <p className={styles.qualityDescription}>
                Choosing the right colors for your commercial space is crucial for creating the right atmosphere and brand impression. Our color consultation services help you select colors that align with your brand identity, enhance productivity, and create a welcoming environment for customers and employees.
              </p>
            </div>
          </section>

          {/* Bay Area Climate Section */}
          <section className={styles.interiorSection}>
            <div className={styles.interiorContent}>
              <div className={styles.interiorText}>
                <h2 className={styles.interiorTitle}>Bay Area Climate Considerations</h2>
                <p className={styles.interiorDescription}>
                  The Bay Area's unique climate — from coastal humidity to intense sunlight — requires special consideration when choosing commercial paint. We recommend paints designed for UV resistance, moisture protection, and mildew prevention to ensure your property maintains its professional appearance year-round.
                </p>
              </div>
              
              <div className={styles.interiorPhotos}>
                <div className={styles.interiorPhotoItem}>
                  <img
                    {...optimizeImageProps(interior1, 'Bay Area climate project 1', 0)}
                    className={styles.interiorPhotoImg}
                    alt="Bay Area climate considerations"
                  />
                </div>
                <div className={styles.interiorPhotoItem}>
                  <img
                    {...optimizeImageProps(interior3, 'Bay Area climate project 2', 1)}
                    className={styles.interiorPhotoImg}
                    alt="Climate-resistant painting"
                  />
                </div>
                <div className={styles.interiorPhotoItem}>
                  <img
                    {...optimizeImageProps(exterior1, 'Bay Area climate project 3', 2)}
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
              <h2 className={styles.qualityTitle}>Commercial Painting FAQs</h2>
              
              <div className={styles.faqCardsGrid}>
                <div className={styles.faqCard}>
                  <h3>When is it time to repaint your commercial building?</h3>
                  <ul className={styles.faqList}>
                    <li>Fading or discoloration</li>
                    <li>Peeling or cracking paint</li>
                    <li>Bubbling or blistering surfaces</li>
                    <li>Visible wear in high-traffic or weather-exposed areas</li>
                  </ul>
                </div>
                
                <div className={styles.faqCard}>
                  <h3>Why is color choice so important in commercial spaces?</h3>
                  <p className={styles.faqAnswer}>
                    Colors influence customer perception, employee productivity, and overall brand image. The right palette can make your business more inviting and professional.
                  </p>
                </div>
                
                <div className={styles.faqCard}>
                  <h3>What is a color consultation?</h3>
                  <p className={styles.faqAnswer}>
                    Our experts help you select colors that match your brand identity, align with your building's style, and create the desired atmosphere for your space.
                  </p>
                </div>
                
                <div className={styles.faqCard}>
                  <h3>Are eco-friendly paints really worth it?</h3>
                  <p className={styles.faqAnswer}>
                    Yes. They are long-lasting, safer for people and the environment, and can improve your brand's public perception.
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
              <h2 className={styles.qualityTitle}>Transform Your Commercial Space</h2>
              <p className={styles.qualityDescription}>
                At World Pro Painting, we understand that your commercial property is more than just a building — it's a reflection of your brand and business values. Our comprehensive commercial painting services combine eco-friendly solutions, regulatory compliance, and expert craftsmanship to deliver results that enhance your property's value and create a positive impression for everyone who visits your business.
              </p>
              <p className={styles.qualityDescription}>
                From initial consultation to final inspection, we work closely with you to ensure every aspect of your project meets your expectations and exceeds industry standards. Contact us today to discuss how we can help transform your commercial space with professional, sustainable painting solutions.
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