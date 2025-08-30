import React, { useState, useEffect } from 'react';
import styles from '../styles/Commercial.module.css'; // Usando o mesmo CSS do Commercial
import { preloadImages, optimizeImageProps } from '../utils/imageOptimization';
import { useScrollToTop } from '../hooks/useScrollToTop';

// Importar imagens diretamente - usando imagens que representam projetos interiores
import interior1 from '../assets/interior1.jpeg';
import interior2 from '../assets/interior2.jpeg';
import interior3 from '../assets/interior3.jpeg';
import interior4 from '../assets/interior4.jpeg';
import interior5 from '../assets/interior5.jpeg';
import interior6 from '../assets/interior6.jpeg';

export default function InteriorPainting() {
  useScrollToTop();
  
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Array with 6 interior painting photos for the slider
  const interiorPhotos = [
    interior1,
    interior2,
    interior3,
    interior4,
    interior5,
    interior6
  ];

  // Preload images for better performance
  useEffect(() => {
    const loadImages = async () => {
      try {
        await preloadImages(interiorPhotos);
        setImagesLoaded(true);
      } catch (error) {
        console.error('Error preloading images:', error);
        setImagesLoaded(true); // Continue even if some images fail
      }
    };

    loadImages();
  }, [interiorPhotos]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    if (!imagesLoaded) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % interiorPhotos.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [interiorPhotos.length, imagesLoaded]);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Hero Section */}
          <section className={styles.heroSection}>
            <div className={styles.heroOverlay}>
              <h1 className={styles.mainTitle}>Interior Painting in the Bay Area</h1>
              <p className={styles.heroSubtitle}>
                Professional interior painting services that transform and revitalize your living spaces
              </p>
            </div>
          </section>

          {/* Main Content Section */}
          <section className={styles.mainSection}>
            <div className={styles.contentGrid}>
              <div className={styles.textContent}>
                <h2 className={styles.sectionTitle}>Professional Interior Painting & Refinishing</h2>
                <p className={styles.description}>
                  World Pro Painting has been transforming and revitalizing the interiors of homes and apartments throughout the Bay Area with fresh, high-quality paint finishes. From luxury residences to modern condos and everything in between, our experience covers a wide variety of styles and challenges.
                </p>
                <p className={styles.description}>
                  Our interior painting team can quickly assess and address the unique requirements of each space, using only premium paints and professional preparation techniques to ensure stunning, long-lasting results. Whether you need assistance painting intricate walls, vaulted ceilings, or detailed trim, our skilled painters are ready to make your home look its best.
                </p>
              </div>

              {/* Slider Container */}
              <div className={styles.sliderContainer} style={{
                position: 'relative',
                top: '190px',
                display: 'flex'}}>
                <div className={styles.slider}>
                  {interiorPhotos.map((photo, index) => (
                    <div
                      key={index}
                      className={`${styles.slide} ${currentSlide === index ? styles.active : ''}`}
                    >
                      <img
                        {...optimizeImageProps(photo, `Interior painting slide ${index + 1}`, index)}
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
                <h2 className={styles.interiorTitle}>Work with Experienced Interior Painters in the Bay Area</h2>
                <p className={styles.interiorDescription}>
                  If you're looking to refresh and modernize your home's interior, our licensed and trained professionals at World Pro Painting are here to help. We take care of the entire process — from protecting your floors and furniture to cleaning up daily — working efficiently to keep your project on time and on budget.
                </p>
                
                <div className={styles.complianceList}>
                  <div className={styles.complianceItem}>
                    <div className={styles.complianceIcon}>✓</div>
                    <span><strong>Expert Craftsmanship</strong> – Experienced painters with attention to detail on every project.</span>
                  </div>
                  <div className={styles.complianceItem}>
                    <div className={styles.complianceIcon}>✓</div>
                    <span><strong>Premium Products</strong> – We use top-grade paints and materials for lasting durability and rich color.</span>
                  </div>
                  <div className={styles.complianceItem}>
                    <div className={styles.complianceIcon}>✓</div>
                    <span><strong>Full-Service Approach</strong> – From prep work to the final walkthrough, we handle every stage of the project.</span>
                  </div>
                  <div className={styles.complianceItem}>
                    <div className={styles.complianceIcon}>✓</div>
                    <span><strong>Free Color Consultation</strong> – Guidance from our experts to help you choose colors that perfectly complement your style and architecture.</span>
                  </div>
                </div>
              </div>
              
              <div className={styles.interiorPhotos}>
                <div className={styles.interiorPhotoItem}>
                  <img
                    {...optimizeImageProps(interior1, 'Interior painting project 1', 0)}
                    className={styles.interiorPhotoImg}
                    alt="Interior painting project"
                  />
                </div>
                <div className={styles.interiorPhotoItem}>
                  <img
                    {...optimizeImageProps(interior2, 'Interior painting project 2', 1)}
                    className={styles.interiorPhotoImg}
                    alt="Interior painting solutions"
                  />
                </div>
                <div className={styles.interiorPhotoItem}>
                  <img
                    {...optimizeImageProps(interior3, 'Interior painting project 3', 2)}
                    className={styles.interiorPhotoImg}
                    alt="Professional interior painting"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section className={styles.exteriorSection}>
            <div className={styles.exteriorContent}>
              <div className={styles.exteriorText}>
                <h2 className={styles.exteriorTitle}>Our Interior Painting Services Include</h2>
                <p className={styles.exteriorDescription}>
                  We work closely with Bay Area suppliers to source high-quality materials and stay current with the latest painting innovations. These partnerships help us secure materials quickly, keeping your project moving forward. By sourcing locally, we also support the regional economy and reduce transportation-related environmental impact.
                </p>
                
                <div className={styles.complianceList}>
                  <div className={styles.complianceItem}>
                    <div className={styles.complianceIcon}>✓</div>
                    <span><strong>Walls & Ceilings</strong> – Professional painting for walls and ceilings of any height, ensuring flawless coverage and finish.</span>
                  </div>
                  <div className={styles.complianceItem}>
                    <div className={styles.complianceIcon}>✓</div>
                    <span><strong>Doors & Windows</strong> – Expert painting for all types of doors and windows, including French doors and specialty finishes.</span>
                  </div>
                  <div className={styles.complianceItem}>
                    <div className={styles.complianceIcon}>✓</div>
                    <span><strong>Trim & Molding</strong> – Precision painting for detailed trim work, crown molding, and architectural elements.</span>
                  </div>
                  <div className={styles.complianceItem}>
                    <div className={styles.complianceIcon}>✓</div>
                    <span><strong>Custom Finishes</strong> – Premium custom colors and specialty finishes to match your unique style and preferences.</span>
                  </div>
                </div>
              </div>
              
              <div className={styles.exteriorPhotos}>
                <div className={styles.exteriorPhotoItem}>
                  <img
                    {...optimizeImageProps(interior4, 'Interior services project 1', 0)}
                    className={styles.exteriorPhotoImg}
                    alt="Interior painting services"
                  />
                </div>
                <div className={styles.exteriorPhotoItem}>
                  <img
                    {...optimizeImageProps(interior5, 'Interior services project 2', 1)}
                    className={styles.exteriorPhotoImg}
                    alt="Interior maintenance services"
                  />
                </div>
                <div className={styles.exteriorPhotoItem}>
                  <img
                    {...optimizeImageProps(interior6, 'Interior services project 3', 2)}
                    className={styles.exteriorPhotoImg}
                    alt="Professional interior services"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Paint Longevity Section */}
          <section className={styles.qualitySection}>
            <div className={styles.qualityContent}>
              <h2 className={styles.qualityTitle}>Paint Longevity in the Bay Area Climate</h2>
              <p className={styles.qualityDescription}>
                The Bay Area's varied climate — from coastal humidity to intense sunlight — can impact the durability of interior paint. Choosing the right products is key. We recommend high UV-stability paints for sun-filled rooms to prevent fading and discoloration.
              </p>
            </div>
          </section>

          {/* Preparation Section */}
          <section className={styles.interiorSection}>
            <div className={styles.interiorContent}>
              <div className={styles.interiorText}>
                <h2 className={styles.interiorTitle}>How to Prepare for Interior Painting</h2>
                <p className={styles.interiorDescription}>
                  Before we begin, here are steps to help the process go smoothly. We also provide complimentary color consultations on select projects, helping you choose shades that perfectly complement your style and architecture.
                </p>
              </div>
              
              <div className={styles.interiorPhotos}>
                <div className={styles.interiorPhotoItem}>
                  <img
                    {...optimizeImageProps(interior1, 'Interior preparation project 1', 0)}
                    className={styles.interiorPhotoImg}
                    alt="Interior preparation"
                  />
                </div>
                <div className={styles.interiorPhotoItem}>
                  <img
                    {...optimizeImageProps(interior2, 'Interior preparation project 2', 1)}
                    className={styles.interiorPhotoImg}
                    alt="Interior preparation guide"
                  />
                </div>
                <div className={styles.interiorPhotoItem}>
                  <img
                    {...optimizeImageProps(interior3, 'Interior preparation project 3', 2)}
                    className={styles.interiorPhotoImg}
                    alt="Professional interior preparation"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* FAQs Section */}
          <section className={styles.qualitySection}>
            <div className={styles.qualityContent}>
              <h2 className={styles.qualityTitle}>Interior Painting FAQs</h2>
              
              <div className={styles.faqCardsGrid}>
                <div className={styles.faqCard}>
                  <h3>How long does an interior project take?</h3>
                  <p className={styles.faqAnswer}>
                    Most jobs take a few days to a week, depending on size and scope.
                  </p>
                </div>
                
                <div className={styles.faqCard}>
                  <h3>Do I have to leave my home?</h3>
                  <p className={styles.faqAnswer}>
                    Not necessarily, but we recommend avoiding work areas to allow for efficiency and safety.
                  </p>
                </div>
                
                <div className={styles.faqCard}>
                  <h3>What type of paint do you use?</h3>
                  <p className={styles.faqAnswer}>
                    We use high-quality, low-VOC paints to ensure durability and maintain healthy air quality.
                  </p>
                </div>
                
                <div className={styles.faqCard}>
                  <h3>Can you help choose colors?</h3>
                  <p className={styles.faqAnswer}>
                    Yes, we offer free color consultations on select projects.
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
              <h2 className={styles.qualityTitle}>Transform Your Interior with Professional Painting</h2>
              <p className={styles.qualityDescription}>
                At World Pro Painting, we understand that your home's interior is more than just walls — it's where you live, work, and create memories. Our comprehensive interior painting services combine eco-friendly solutions, expert craftsmanship, and premium materials to deliver results that enhance your living space and create a lasting positive impression.
              </p>
              <p className={styles.qualityDescription}>
                From initial consultation to final inspection, we work closely with you to ensure every aspect of your project meets your expectations and exceeds industry standards. Contact us today to discuss how we can help transform your interior with professional, sustainable painting solutions.
              </p>
            </div>
          </section>

          {/* Gallery Section */}
          <section className={styles.gallerySection}>
            <h2 className={styles.galleryTitle}>Our Interior Projects</h2>
            <div className={styles.galleryGrid}>
              <div className={styles.galleryImage}>
                <img
                  {...optimizeImageProps(interior3, 'Interior painting project 1', 0)}
                  className={styles.galleryImg}
                />
              </div>
              <div className={styles.galleryImage}>
                <img
                  {...optimizeImageProps(interior4, 'Interior painting project 2', 1)}
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