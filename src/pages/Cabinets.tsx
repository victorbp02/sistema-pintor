import React, { useState, useEffect } from 'react';
import styles from '../styles/Cabinets.module.css';
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

  // Array with cabinet painting photos
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
      setCurrentSlide((prev) => (prev + 1) % cabinetPhotos.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [cabinetPhotos.length, imagesLoaded]);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Hero Section */}
          <section className={styles.heroSection}>
            <div className={styles.heroOverlay}>
              <h1 className={styles.mainTitle}>Cabinet Painting in the Bay Area</h1>
              <p className={styles.heroSubtitle}>
                High-Quality Cabinet Painting & Refinishing – New or Existing!
              </p>
            </div>
          </section>

          {/* Main Content Section */}
          <section className={styles.mainSection}>
            <h2 className={styles.sectionTitle}>Professional Cabinet Painting & Refinishing</h2>
            <div className={styles.contentGrid}>
              <div className={styles.textContent}>
                <p className={styles.description}>
                  Is it time to give your cabinets a fresh, updated look? At World Pro Painting, we're a full-service cabinet painting and refinishing company serving the Bay Area, ready to help you transform your cabinetry into a feature you'll love for years to come.
                </p>
              </div>

              {/* Slider Container */}
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
          </section>

          {/* Services Section */}
          <section className={styles.servicesSection}>
            <div className={styles.servicesContainer}>
              <h2 className={styles.servicesMainTitle}>Our Cabinet Painting & Refinishing Services</h2>
              
              <div className={styles.servicesIntro}>
                <p className={styles.servicesIntroText}>
                  At World Pro Painting, we understand that cabinets are more than just storage — they are an essential part of your home's design and atmosphere. Whether you want a sleek, modern finish or a warm, classic stained look, our services are customized to match your vision.
                </p>
                <p className={styles.servicesIntroText}>
                  We take pride in our thorough preparation and precise application process, using premium paints and stains designed to withstand daily use, ensuring your cabinets remain beautiful and functional for years.
                </p>
              </div>
            
              <div className={styles.servicesOptionsBox}>
                <h3 className={styles.optionsTitle}>Comprehensive Cabinet Painting & Refinishing Options:</h3>
                <div className={styles.optionsCardsGrid}>
                  <div className={styles.optionCard}>
                    <div className={styles.cardIcon}>✓</div>
                    <h4>New Cabinets</h4>
                    <p>Paint or Stain Grade</p>
                  </div>
                  
                  <div className={styles.optionCard}>
                    <div className={styles.cardIcon}>✓</div>
                    <h4>Repainting Existing</h4>
                    <p>With a New Color</p>
                  </div>
                  
                  <div className={styles.optionCard}>
                    <div className={styles.cardIcon}>✓</div>
                    <h4>Converting Hardwood</h4>
                    <p>To Smooth Painted Finish</p>
                  </div>
                  
                  <div className={styles.optionCard}>
                    <div className={styles.cardIcon}>✓</div>
                    <h4>Specialty Finishes</h4>
                    <p>Distressed, Crackle, Glazing, or Old-World Effects</p>
                  </div>
                  
                  <div className={styles.optionCard}>
                    <div className={styles.cardIcon}>✓</div>
                    <h4>Hardware Services</h4>
                    <p>Removal & Reinstallation</p>
                  </div>
                  
                  <div className={styles.optionCard}>
                    <div className={styles.cardIcon}>✓</div>
                    <h4>Application Options</h4>
                    <p>Spray or Hand-Brushed</p>
                  </div>
                  
                  <div className={styles.optionCard}>
                    <div className={styles.cardIcon}>✓</div>
                    <h4>Color Options</h4>
                    <p>Solid Colors or Light Antique Finishes</p>
                  </div>
                  
                  <div className={styles.optionCard}>
                    <div className={styles.cardIcon}>✓</div>
                    <h4>Staining & Lacquering</h4>
                    <p>Existing Wood Cabinets</p>
                  </div>
                  
                  <div className={styles.optionCard}>
                    <div className={styles.cardIcon}>✓</div>
                    <h4>Stripping & Restaining</h4>
                    <p>Old Finishes Removal</p>
                  </div>
                </div>
              </div>
              
              <div className={styles.servicesConclusion}>
                <p className={styles.servicesConclusionText}>
                  Beyond standard painting, we offer specialized and artistic finishes to add character and uniqueness to your space. From mirror-smooth high-gloss lacquers to rustic antique glazes, our work ensures a flawless, professional result every time.
                </p>
              </div>
            </div>
          </section>

          {/* Staining & Colors Section */}
          <section className={styles.qualitySection}>
            <div className={styles.qualityContent}>
              <h2 className={styles.qualityTitle}>Staining & Refinishing with Unique Cabinet Colors</h2>
              <p className={styles.qualityDescription}>
                An increasingly popular trend in Bay Area homes is refreshing kitchen cabinetry with bold, custom paint colors. At World Pro Painting, we help you choose the perfect shade — whether you want a vibrant, eye-catching color or a subtle, sophisticated tone — ensuring it complements your countertops, backsplash, flooring, and appliances.
              </p>
              <p className={styles.qualityDescription}>
                Our process begins with a personalized consultation to understand your needs and style preferences. After selecting the ideal color, we meticulously prepare each surface for maximum adhesion and durability.
              </p>
            </div>
          </section>

          {/* Complete Woodwork Services Section */}
          <section className={styles.gallerySection}>
            <h2 className={styles.galleryTitle}>Complete Woodwork Staining & Refinishing Services</h2>
            
            <div className={styles.modernServices}>
              <div className={styles.servicesHeader}>
                <div className={styles.servicesBadge}>Services</div>
                <h3>Professional Woodwork Solutions</h3>
                <p>Comprehensive staining and refinishing for all types of wood surfaces in the Bay Area</p>
              </div>
              
              <div className={styles.servicesList}>
                <div className={styles.serviceItem}>
                  <span className={styles.serviceNumber}>01</span>
                  <h4>Kitchen Cabinet Refinishing</h4>
                </div>
                
                <div className={styles.serviceItem}>
                  <span className={styles.serviceNumber}>02</span>
                  <h4>Stripping & Refinishing</h4>
                </div>
                
                <div className={styles.serviceItem}>
                  <span className={styles.serviceNumber}>03</span>
                  <h4>Entertainment Centers</h4>
                </div>
                
                <div className={styles.serviceItem}>
                  <span className={styles.serviceNumber}>04</span>
                  <h4>Custom Antique Stains</h4>
                </div>
                
                <div className={styles.serviceItem}>
                  <span className={styles.serviceNumber}>05</span>
                  <h4>Wood Handrails & Spindles</h4>
                </div>
                
                <div className={styles.serviceItem}>
                  <span className={styles.serviceNumber}>06</span>
                  <h4>Front Entry Doors</h4>
                </div>
                
                <div className={styles.serviceItemLarge}>
                  <span className={styles.serviceNumber}>07</span>
                  <h4>Unique Cabinet Colors</h4>
                  <p>Specialized finishes and textured applications that bring depth and personality to wood surfaces</p>
                </div>
              </div>
              
              <div className={styles.servicesFooter}>
                <div className={styles.footerContent}>
                  <h4>Specialized Finishes</h4>
                  <p>We also specialize in faux finishes and textured applications that bring depth and personality to wood surfaces. Whether you want a light, elegant glaze or a bold, dramatic effect, we have the techniques and creativity to bring your ideas to life.</p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className={styles.gallerySection}>
            <h2 className={styles.galleryTitle}>Cabinet Refinishing FAQs</h2>
            <div className={styles.faqGrid}>
              <div className={styles.faqItem}>
                <h3>What's the difference between painting and staining cabinets?</h3>
                <ul>
                  <li>Painting applies a solid color for a smooth, even finish, covering the wood grain.</li>
                  <li>Staining enhances the natural grain, providing a more organic, transparent appearance.</li>
                </ul>
                <p>Your choice depends on whether you prefer a modern, uniform style or a natural, wood-rich look.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>How long does the refinishing process take?</h3>
                <p>Typically between a few days and one week, depending on the size, condition, and finish complexity. We'll provide a detailed timeline during your consultation.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>Can you paint over stained cabinets?</h3>
                <p>Yes — with proper preparation. We clean, sand, and prime surfaces to ensure perfect paint adhesion and a lasting finish.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>What finishes do you offer?</h3>
                <p>We offer high-gloss lacquers, matte finishes, distressed effects, antiqued looks, and custom faux finishes.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>How do I choose the right color?</h3>
                <p>Our color consultants work with you to match your kitchen's design and keep your cabinets timeless or trend-forward, depending on your style.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>Do I need to empty my cabinets?</h3>
                <p>Yes. Clearing the cabinets allows us full access to every surface and keeps your items safe from dust and debris.</p>
              </div>
            </div>
          </section>

          {/* Gallery Section */}
          <section className={styles.gallerySection}>
            <h2 className={styles.galleryTitle}>Our Cabinet Projects</h2>
            <div className={styles.galleryGrid}>
              <div className={styles.galleryImage}>
                <img
                  src={gabinetes7}
                  alt="Kitchen cabinet painting project"
                  className={styles.galleryImg}
                  loading="lazy"
                />
              </div>
              <div className={styles.galleryImage}>
                <img
                  src={fotobanheiro}
                  alt="Bathroom cabinet painting project"
                  className={styles.galleryImg}
                  loading="lazy"
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
} 