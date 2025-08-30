import React, { useState, useEffect } from 'react';
import styles from '../styles/Commercial.module.css'; // Usando o mesmo CSS do Commercial
import { preloadImages, optimizeImageProps } from '../utils/imageOptimization';
import { useScrollToTop } from '../hooks/useScrollToTop';

// Importar imagens diretamente - usando imagens que representam projetos de gabinetes
import gabinete10 from '../assets/gabinete10.jpeg';
import gabinetes2 from '../assets/gabinetes2.jpeg';
import gabinetes3 from '../assets/gabinetes3.jpeg';
import gabinetes6 from '../assets/gabinetes6.jpeg';
import gabinetes7 from '../assets/gabinetes7.png';
import fotobanheiro from '../assets/banheiro.jpeg';

export default function Cabinets() {
  useScrollToTop();
  
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Array with 6 cabinet painting photos for the slider
  const cabinetPhotos = [
    gabinete10,
    gabinetes2,
    gabinetes3,
    gabinetes6,
    gabinetes7,
    fotobanheiro
  ];

  // Preload images for better performance
  useEffect(() => {
    const loadImages = async () => {
      try {
        await preloadImages(cabinetPhotos);
        setImagesLoaded(true);
      } catch (error) {
        console.error('Error preloading images:', error);
        setImagesLoaded(true); // Continue even if some images fail
      }
    };

    loadImages();
  }, [cabinetPhotos]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

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
            <div className={styles.contentGrid}>
              <div className={styles.textContent}>
                <h2 className={styles.sectionTitle}>Professional Cabinet Painting & Refinishing</h2>
                <p className={styles.description}>
                  Is it time to give your cabinets a fresh, updated look? At World Pro Painting, we're a full-service cabinet painting and refinishing company serving the Bay Area, ready to help you transform your cabinetry into a feature you'll love for years to come.
                </p>
                <p className={styles.description}>
                  At World Pro Painting, we understand that cabinets are more than just storage — they are an essential part of your home's design and atmosphere. Whether you want a sleek, modern finish or a warm, classic stained look, our services are customized to match your vision.
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
                        {...optimizeImageProps(photo, `Cabinet painting slide ${index + 1}`, index)}
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
                <h2 className={styles.interiorTitle}>Our Cabinet Painting & Refinishing Services</h2>
                <p className={styles.interiorDescription}>
                  We take pride in our thorough preparation and precise application process, using premium paints and stains designed to withstand daily use, ensuring your cabinets remain beautiful and functional for years.
                </p>
                
                <div className={styles.complianceList}>
                  <div className={styles.complianceItem}>
                    <div className={styles.complianceIcon}>✓</div>
                    <span><strong>New Cabinets</strong> – Paint or Stain Grade with professional finishing.</span>
                  </div>
                  <div className={styles.complianceItem}>
                    <div className={styles.complianceIcon}>✓</div>
                    <span><strong>Repainting Existing</strong> – With a New Color and proper surface preparation.</span>
                  </div>
                  <div className={styles.complianceItem}>
                    <div className={styles.complianceIcon}>✓</div>
                    <span><strong>Converting Hardwood</strong> – To Smooth Painted Finish with expert techniques.</span>
                  </div>
                  <div className={styles.complianceItem}>
                    <div className={styles.complianceIcon}>✓</div>
                    <span><strong>Specialty Finishes</strong> – Distressed, Crackle, Glazing, or Old-World Effects.</span>
                  </div>
                </div>
              </div>
              
              <div className={styles.interiorPhotos}>
                <div className={styles.interiorPhotoItem}>
                  <img
                    {...optimizeImageProps(gabinete10, 'Cabinet painting project 1', 0)}
                    className={styles.interiorPhotoImg}
                    alt="Cabinet painting project"
                  />
                </div>
                <div className={styles.interiorPhotoItem}>
                  <img
                    {...optimizeImageProps(gabinetes2, 'Cabinet painting project 2', 1)}
                    className={styles.interiorPhotoImg}
                    alt="Cabinet refinishing solutions"
                  />
                </div>
                <div className={styles.interiorPhotoItem}>
                  <img
                    {...optimizeImageProps(gabinetes3, 'Cabinet painting project 3', 2)}
                    className={styles.interiorPhotoImg}
                    alt="Professional cabinet painting"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section className={styles.exteriorSection}>
            <div className={styles.exteriorContent}>
              <div className={styles.exteriorText}>
                <h2 className={styles.exteriorTitle}>Complete Woodwork Staining & Refinishing Services</h2>
                <p className={styles.exteriorDescription}>
                  Beyond standard painting, we offer specialized and artistic finishes to add character and uniqueness to your space. From mirror-smooth high-gloss lacquers to rustic antique glazes, our work ensures a flawless, professional result every time.
                </p>
                
                <div className={styles.complianceList}>
                  <div className={styles.complianceItem}>
                    <div className={styles.complianceIcon}>✓</div>
                    <span><strong>Kitchen Cabinet Refinishing</strong> – Complete transformation of your kitchen cabinets.</span>
                  </div>
                  <div className={styles.complianceItem}>
                    <div className={styles.complianceIcon}>✓</div>
                    <span><strong>Stripping & Refinishing</strong> – Professional removal of old finishes and application of new ones.</span>
                  </div>
                  <div className={styles.complianceItem}>
                    <div className={styles.complianceIcon}>✓</div>
                    <span><strong>Entertainment Centers</strong> – Custom staining and refinishing for entertainment units.</span>
                  </div>
                  <div className={styles.complianceItem}>
                    <div className={styles.complianceIcon}>✓</div>
                    <span><strong>Custom Antique Stains</strong> – Unique finishes that bring depth and personality to wood surfaces.</span>
                  </div>
                </div>
              </div>
              
              <div className={styles.exteriorPhotos}>
                <div className={styles.exteriorPhotoItem}>
                  <img
                    {...optimizeImageProps(gabinetes6, 'Woodwork services project 1', 0)}
                    className={styles.exteriorPhotoImg}
                    alt="Woodwork staining services"
                  />
                </div>
                <div className={styles.exteriorPhotoItem}>
                  <img
                    {...optimizeImageProps(gabinetes7, 'Woodwork services project 2', 1)}
                    className={styles.exteriorPhotoImg}
                    alt="Cabinet refinishing services"
                  />
                </div>
                <div className={styles.exteriorPhotoItem}>
                  <img
                    {...optimizeImageProps(fotobanheiro, 'Woodwork services project 3', 2)}
                    className={styles.exteriorPhotoImg}
                    alt="Professional woodwork services"
                  />
                </div>
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
            </div>
          </section>

          {/* Process Section */}
          <section className={styles.interiorSection}>
            <div className={styles.interiorContent}>
              <div className={styles.interiorText}>
                <h2 className={styles.interiorTitle}>Our Cabinet Refinishing Process</h2>
                <p className={styles.interiorDescription}>
                  Our process begins with a personalized consultation to understand your needs and style preferences. After selecting the ideal color, we meticulously prepare each surface for maximum adhesion and durability.
                </p>
              </div>
              
              <div className={styles.interiorPhotos}>
                <div className={styles.interiorPhotoItem}>
                  <img
                    {...optimizeImageProps(gabinete10, 'Cabinet process project 1', 0)}
                    className={styles.interiorPhotoImg}
                    alt="Cabinet refinishing process"
                  />
                </div>
                <div className={styles.interiorPhotoItem}>
                  <img
                    {...optimizeImageProps(gabinetes2, 'Cabinet process project 2', 1)}
                    className={styles.interiorPhotoImg}
                    alt="Cabinet preparation process"
                  />
                </div>
                <div className={styles.interiorPhotoItem}>
                  <img
                    {...optimizeImageProps(gabinetes3, 'Cabinet process project 3', 2)}
                    className={styles.interiorPhotoImg}
                    alt="Professional cabinet process"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* FAQs Section */}
          <section className={styles.qualitySection}>
            <div className={styles.qualityContent}>
              <h2 className={styles.qualityTitle}>Cabinet Refinishing FAQs</h2>
              
              <div className={styles.faqCardsGrid}>
                <div className={styles.faqCard}>
                  <h3>What's the difference between painting and staining cabinets?</h3>
                  <p className={styles.faqAnswer}>
                    Painting applies a solid color for a smooth, even finish, covering the wood grain. Staining enhances the natural grain, providing a more organic, transparent appearance.
                  </p>
                </div>
                
                <div className={styles.faqCard}>
                  <h3>How long does the refinishing process take?</h3>
                  <p className={styles.faqAnswer}>
                    Typically between a few days and one week, depending on the size, condition, and finish complexity. We'll provide a detailed timeline during your consultation.
                  </p>
                </div>
                
                <div className={styles.faqCard}>
                  <h3>Can you paint over stained cabinets?</h3>
                  <p className={styles.faqAnswer}>
                    Yes — with proper preparation. We clean, sand, and prime surfaces to ensure perfect paint adhesion and a lasting finish.
                  </p>
                </div>
                
                <div className={styles.faqCard}>
                  <h3>What finishes do you offer?</h3>
                  <p className={styles.faqAnswer}>
                    We offer high-gloss lacquers, matte finishes, distressed effects, antiqued looks, and custom faux finishes.
                  </p>
                </div>
                
                <div className={styles.faqCard}>
                  <h3>How does the Bay Area climate affect cabinet finishes?</h3>
                  <p className={styles.faqAnswer}>
                    With coastal humidity, salt air, and strong sunlight, we recommend finishes designed for UV resistance, moisture protection, and durability to keep your cabinets looking their best year-round.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Conclusion Section */}
          <section className={styles.qualitySection}>
            <div className={styles.qualityContent}>
              <h2 className={styles.qualityTitle}>Transform Your Cabinets with Professional Refinishing</h2>
              <p className={styles.qualityDescription}>
                At World Pro Painting, we understand that your cabinets are more than just storage — they're a central part of your home's design and functionality. Our comprehensive cabinet painting and refinishing services combine expert craftsmanship, premium materials, and innovative techniques to deliver results that enhance your space and create a lasting positive impression.
              </p>
              <p className={styles.qualityDescription}>
                From initial consultation to final inspection, we work closely with you to ensure every aspect of your project meets your expectations and exceeds industry standards. Contact us today to discuss how we can help transform your cabinets with professional, sustainable refinishing solutions.
              </p>
            </div>
          </section>

          {/* Gallery Section */}
          <section className={styles.gallerySection}>
            <h2 className={styles.galleryTitle}>Our Cabinet Projects</h2>
            <div className={styles.galleryGrid}>
              <div className={styles.galleryImage}>
                <img
                  {...optimizeImageProps(gabinetes7, 'Kitchen cabinet painting project', 0)}
                  className={styles.galleryImg}
                />
              </div>
              <div className={styles.galleryImage}>
                <img
                  {...optimizeImageProps(fotobanheiro, 'Bathroom cabinet painting project', 1)}
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