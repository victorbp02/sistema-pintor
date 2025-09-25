import React, { useState, useEffect } from 'react';
import styles from '../styles/Commercial.module.css'; // Usando o mesmo CSS do Commercial
import { preloadImages, optimizeImageProps } from '../utils/imageOptimization';
import { useScrollToTop } from '../hooks/useScrollToTop';

// Importar imagens diretamente - usando imagens que representam projetos exteriores
import exterior1 from '../assets/exterior1.jpeg';
import exterior2 from '../assets/exterior2.jpeg';
import exterior3 from '../assets/exterior3.jpeg';
import exterior4 from '../assets/exterior4.jpeg';
import exterior5 from '../assets/exterior5.jpeg';
import exterior6 from '../assets/exterior6.jpeg';
import exterior7 from '../assets/exterior7.jpeg';
import exterior8 from '../assets/exterior8.jpeg';
import exterior9 from '../assets/exterior9.jpeg';
import exterior10 from '../assets/exterior10.jpeg';
import exterior11 from '../assets/exterior11.jpeg';
import exterior12 from '../assets/exterior12.jpeg';
import exterior13 from '../assets/exterior13.jpeg';
import exterior14 from '../assets/exterior14.jpeg';
import exterior15 from '../assets/exterior15.jpeg';
import exterior16 from '../assets/exterior16.jpeg';
import exterior17 from '../assets/exterior17.jpeg';


export default function ExteriorPainting() {
  useScrollToTop();
  
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Array with 6 exterior painting photos for the slider
  const exteriorPhotos = [
    exterior1,
    exterior2,
    exterior3,
    exterior4,
    exterior5,
    exterior6,
    exterior7,
    exterior8,
    exterior9,
    exterior10,
    exterior11,
    exterior12,
    exterior13,
    exterior14,
    exterior15,
    exterior16,
    exterior17
  ];

  // Preload images for better performance
  useEffect(() => {
    const loadImages = async () => {
      try {
        await preloadImages(exteriorPhotos);
        setImagesLoaded(true);
      } catch (error) {
        console.error('Error preloading images:', error);
        setImagesLoaded(true); // Continue even if some images fail
      }
    };

    loadImages();
  }, [exteriorPhotos]);


  useEffect(() => {
    if (!imagesLoaded) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % exteriorPhotos.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [exteriorPhotos.length, imagesLoaded]);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Hero Section */}
          <section className={styles.heroSection}>
            <div className={styles.heroOverlay}>
              <h1 className={styles.mainTitle}>Exterior Painting<br /><span className={styles.mobileInline}>in the Bay Area</span></h1>
              <p className={styles.heroSubtitle}>
                Professional exterior painting services that protect and beautify your property
              </p>
            </div>
          </section>

          {/* Main Content Section */}
          <section className={styles.mainSection}>
            <div className={styles.contentGrid}>
              <div className={styles.textContent}>
                <h2 className={styles.sectionTitle}>Professional Exterior Painting & Protection</h2>
                <p className={styles.description}>
                  On the exterior of your property, a professional paint job brings not only beauty and elegance but also critical protection — serving as a barrier against the harsh elements that can damage your home over time. Since our founding, World Pro Painting has been restoring, enhancing, and protecting homes and commercial properties throughout the Bay Area, including San Francisco, San Mateo, Santa Clara, Alameda, and surrounding counties.
                </p>
                <p className={styles.description}>
                  When it comes to transforming curb appeal, nothing creates a faster and more dramatic change than a fresh coat of exterior paint. At World Pro Painting, we deliver premium exterior painting services across the Bay Area, combining skilled craftsmanship, top-quality products, and exceptional customer care to ensure your home is both stunning and safeguarded for years to come. Our services go far beyond simply applying paint. We follow a meticulous preparation process that may include power washing, surface repairs, scraping, and priming to guarantee strong adhesion, vibrant color, and long-lasting results. We respect your time and property, working efficiently and cleanly to provide a stress-free painting experience.
                </p>
              </div>

              {/* Slider Container */}
              <div className={styles.sliderContainer} style={{
                position: 'relative',
                top: '190px',
                display: 'flex'}}>
                <div className={styles.slider}>
                  {exteriorPhotos.map((photo, index) => (
                    <div
                      key={index}
                      className={`${styles.slide} ${currentSlide === index ? styles.active : ''}`}
                    >
                      <img
                        {...optimizeImageProps(photo, `Exterior painting slide ${index + 1}`, index)}
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
                <h2 className={styles.interiorTitle}>Why Choose World Pro Painting?</h2>
                <p className={styles.interiorDescription}>
                  Our experience, skill, and commitment to excellence make World Pro Painting one of the most trusted choices for exterior painting in the Bay Area. We deliver results that are beautiful, durable, and cost-effective — earning the trust of homeowners and businesses alike.
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
                    <span><strong>Free Color Consultation</strong> – Guidance from our experts to help you choose colors that maximize curb appeal and fit your vision.</span>
                  </div>
                </div>
              </div>
              
              <div className={styles.interiorPhotos}>
                <div className={styles.interiorPhotoItem}>
                  <img
                    {...optimizeImageProps(exterior7, 'Exterior painting project 1', 0)}
                    className={styles.interiorPhotoImg}
                    alt="Exterior painting project"
                  />
                </div>
                <div className={styles.interiorPhotoItem}>
                  <img
                    {...optimizeImageProps(exterior8, 'Exterior painting project 2', 1)}
                    className={styles.interiorPhotoImg}
                    alt="Exterior painting solutions"
                  />
                </div>
                <div className={styles.interiorPhotoItem}>
                  <img
                    {...optimizeImageProps(exterior9, 'Exterior painting project 3', 2)}
                    className={styles.interiorPhotoImg}
                    alt="Professional exterior painting"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section className={styles.exteriorSection}>
            <div className={styles.exteriorContent}>
              <div className={styles.exteriorText}>
                <h2 className={styles.exteriorTitle}>Our Complete Exterior Painting Services</h2>
                <p className={styles.exteriorDescription}>
                  We treat each element of your home's exterior with precision. For example, fascia and eaves are sealed and finished to prevent water intrusion, while garage doors and entryways receive extra attention to enhance both style and protection.
                </p>
                
                <div className={styles.complianceList}>
                  <div className={styles.complianceItem}>
                    <div className={styles.complianceIcon}>✓</div>
                    <span><strong>Core Services</strong> – Stucco & Concrete, Brick & Stone, Wood, Composite & Vinyl Siding, Doors & Windows, Fascia & Eaves, Rain Gutters & Metal Flashing.</span>
                  </div>
                  <div className={styles.complianceItem}>
                    <div className={styles.complianceIcon}>✓</div>
                    <span><strong>Staining & Finishing</strong> – Natural wood surfaces, decks & rails, custom stains & antique finishes, hardwood & softwoods.</span>
                  </div>
                  <div className={styles.complianceItem}>
                    <div className={styles.complianceIcon}>✓</div>
                    <span><strong>Metal Finishes</strong> – Rust control treatments, epoxy & urethane coatings, industrial enamels, wrought iron fences.</span>
                  </div>
                  <div className={styles.complianceItem}>
                    <div className={styles.complianceIcon}>✓</div>
                    <span><strong>Washing & Maintenance</strong> – Dirt & pollution removal, stain & old paint removal, power washing, graffiti removal.</span>
                  </div>
                </div>
              </div>
              
              <div className={styles.exteriorPhotos}>
                <div className={styles.exteriorPhotoItem}>
                  <img
                    {...optimizeImageProps(exterior10, 'Exterior services project 1', 0)}
                    className={styles.exteriorPhotoImg}
                    alt="Exterior painting services"
                  />
                </div>
                <div className={styles.exteriorPhotoItem}>
                  <img
                    {...optimizeImageProps(exterior11, 'Exterior services project 2', 1)}
                    className={styles.exteriorPhotoImg}
                    alt="Exterior maintenance services"
                  />
                </div>
                <div className={styles.exteriorPhotoItem}>
                  <img
                    {...optimizeImageProps(exterior12, 'Exterior services project 3', 2)}
                    className={styles.exteriorPhotoImg}
                    alt="Professional exterior services"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Bay Area Climate Section */}
          <section className={styles.qualitySection}>
            <div className={styles.qualityContent}>
              <h2 className={styles.qualityTitle}>Bay Area Climate Considerations for Exterior Painting</h2>
              <p className={styles.qualityDescription}>
                The Bay Area's unique climate — from coastal humidity to intense sunlight — requires special consideration when choosing exterior paint. We recommend paints designed for UV resistance, moisture protection, and mildew prevention to ensure your property maintains its professional appearance year-round.
              </p>
            </div>
          </section>

          {/* FAQs Section */}
          <section className={styles.interiorSection}>
            <div className={styles.interiorContent}>
              <div className={styles.interiorText}>
                <h2 className={styles.interiorTitle}>Exterior Painting FAQs</h2>
                <p className={styles.interiorDescription}>
                  Understanding the exterior painting process helps you make informed decisions about your property's protection and appearance. Here are answers to common questions about exterior painting services.
                </p>
              </div>
              
              <div className={styles.interiorPhotos}>
                <div className={styles.interiorPhotoItem}>
                  <img
                    {...optimizeImageProps(exterior13, 'Exterior FAQ project 1', 0)}
                    className={styles.interiorPhotoImg}
                    alt="Exterior painting FAQ"
                  />
                </div>
                <div className={styles.interiorPhotoItem}>
                  <img
                    {...optimizeImageProps(exterior14, 'Exterior FAQ project 2', 1)}
                    className={styles.interiorPhotoImg}
                    alt="Exterior painting questions"
                  />
                </div>
                <div className={styles.interiorPhotoItem}>
                  <img
                    {...optimizeImageProps(exterior15, 'Exterior FAQ project 3', 2)}
                    className={styles.interiorPhotoImg}
                    alt="Exterior painting information"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Cards Section */}
          <section className={styles.qualitySection}>
            <div className={styles.qualityContent}>
              <h2 className={styles.qualityTitle}>Common Exterior Painting Questions</h2>
              
              <div className={styles.faqCardsGrid}>
                <div className={styles.faqCard}>
                  <h3>How long does exterior paint last?</h3>
                  <p className={styles.faqAnswer}>
                    Typically 5–10 years, depending on surface type, product quality, and exposure to weather.
                  </p>
                </div>
                
                <div className={styles.faqCard}>
                  <h3>Do you offer eco-friendly exterior paints?</h3>
                  <p className={styles.faqAnswer}>
                    Yes. We provide low-VOC and zero-VOC options for a safer, greener choice.
                  </p>
                </div>
                
                <div className={styles.faqCard}>
                  <h3>What affects the cost of exterior painting?</h3>
                  <p className={styles.faqAnswer}>
                    Property size, surface condition, paint type, prep work required, and project complexity. We provide detailed, transparent estimates so you know exactly what to expect.
                  </p>
                </div>
                
                <div className={styles.faqCard}>
                  <h3>How do you prepare surfaces before painting?</h3>
                  <p className={styles.faqAnswer}>
                    We follow a meticulous preparation process that may include power washing, surface repairs, scraping, and priming to guarantee strong adhesion, vibrant color, and long-lasting results.
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
              <h2 className={styles.qualityTitle}>Transform Your Exterior with Professional Painting</h2>
              <p className={styles.qualityDescription}>
                At World Pro Painting, we understand that your property's exterior is more than just a surface — it's the first impression visitors have of your home or business. Our comprehensive exterior painting services combine eco-friendly solutions, expert craftsmanship, and premium materials to deliver results that enhance your property's value and create a lasting positive impression.
              </p>
              <p className={styles.qualityDescription}>
                From initial consultation to final inspection, we work closely with you to ensure every aspect of your project meets your expectations and exceeds industry standards. Contact us today to discuss how we can help transform your exterior with professional, sustainable painting solutions.
              </p>
            </div>
          </section>

          {/* Gallery Section */}
          <section className={styles.gallerySection}>
            <h2 className={styles.galleryTitle}>Our Exterior Projects</h2>
            <div className={styles.galleryGrid}>
              <div className={styles.galleryImage}>
                <img
                  {...optimizeImageProps(exterior16, 'Exterior painting project 1', 0)}
                  className={styles.galleryImg}
                />
              </div>
              <div className={styles.galleryImage}>
                <img
                  {...optimizeImageProps(exterior17, 'Exterior painting project 2', 1)}
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