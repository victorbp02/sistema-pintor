import React, { useState, useEffect } from 'react';
import styles from '../styles/ExteriorPainting.module.css';
import { preloadImages, optimizeImageProps } from '../utils/imageOptimization';
import { useScrollToTop } from '../hooks/useScrollToTop';

// Importar imagens diretamente
import exterior1 from '../assets/exterior1.jpeg';
import exterior2 from '../assets/exterior2.jpeg';
import exterior3 from '../assets/exterior3.jpeg';
import exterior4 from '../assets/exterior4.jpeg';
import exterior5 from '../assets/exterior5.jpeg';
import exterior6 from '../assets/exterior6.jpeg';
import exterior7 from '../assets/exterior7.jpeg';

export default function ExteriorPainting() {
  useScrollToTop();
  
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Array with 6 exterior painting photos
  const exteriorPhotos = [
    exterior1,
    exterior2,
    exterior3,
    exterior4,
    exterior5,
    exterior6
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

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

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
              <h1 className={styles.mainTitle}>Exterior Painting in the Bay Area</h1>
              <p className={styles.heroSubtitle}>
                Professional exterior painting services that protect and beautify your property
              </p>
            </div>
          </section>

          {/* Main Content Section */}
          <section className={styles.mainSection}>
          <h2 className={styles.sectionTitle}>Professional Exterior Painting & Protection</h2>
            <div className={styles.contentGrid}>
              <div className={styles.textContent}>
                <p className={styles.description}>
                  On the exterior of your property, a professional paint job brings not only beauty and elegance but also critical protection — serving as a barrier against the harsh elements that can damage your home over time. Since our founding, World Pro Painting has been restoring, enhancing, and protecting homes and commercial properties throughout the Bay Area, including San Francisco, San Mateo, Santa Clara, Alameda, and surrounding counties.
                </p>
                
                <p className={styles.description}>
                  When it comes to transforming curb appeal, nothing creates a faster and more dramatic change than a fresh coat of exterior paint. At World Pro Painting, we deliver premium exterior painting services across the Bay Area, combining skilled craftsmanship, top-quality products, and exceptional customer care to ensure your home is both stunning and safeguarded for years to come. Our services go far beyond simply applying paint. We follow a meticulous preparation process that may include power washing, surface repairs, scraping, and priming to guarantee strong adhesion, vibrant color, and long-lasting results. We respect your time and property, working efficiently and cleanly to provide a stress-free painting experience.
                </p>
              </div>

              {/* Slider Container */}
              <div className={styles.sliderContainer}>
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
          <section className={styles.qualitySection}>
            <div className={styles.qualityContent}>
              <h2 className={styles.qualityTitle}>Why Choose World Pro Painting?</h2>
              <div className={styles.featuresList}>
                <div className={styles.feature}>
                  <div className={styles.featureIcon}>✓</div>
                  <span><strong>Expert Craftsmanship</strong> – Experienced painters with attention to detail on every project.</span>
                </div>
                <div className={styles.feature}>
                  <div className={styles.featureIcon}>✓</div>
                  <span><strong>Premium Products</strong> – We use top-grade paints and materials for lasting durability and rich color.</span>
                </div>
                <div className={styles.feature}>
                  <div className={styles.featureIcon}>✓</div>
                  <span><strong>Full-Service Approach</strong> – From prep work to the final walkthrough, we handle every stage of the project.</span>
                </div>
                <div className={styles.feature}>
                  <div className={styles.featureIcon}>✓</div>
                  <span><strong>Free Color Consultation</strong> – Guidance from our experts to help you choose colors that maximize curb appeal and fit your vision.</span>
                </div>
                <div className={styles.feature}>
                  <div className={styles.featureIcon}>✓</div>
                  <span><strong>Eco-Friendly Options</strong> – Low-VOC and sustainable paint choices available for a healthier environment.</span>
                </div>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section className={styles.gallerySection}>
            <h2 className={styles.galleryTitle}>Our Complete Exterior Painting Services</h2>
            <div className={styles.servicesGrid}>
              <div className={styles.serviceCategory}>
                <h3>Core Services</h3>
                <ul>
                  <li>Stucco & Concrete</li>
                  <li>Brick & Stone</li>
                  <li>Wood, Composite & Vinyl Siding</li>
                  <li>Doors & Windows</li>
                  <li>Fascia & Eaves</li>
                  <li>Rain Gutters & Metal Flashing</li>
                  <li>Garage & Entry Doors</li>
                  <li>Wood & Vinyl Shutters</li>
                  <li>Architectural Woodwork</li>
                  <li>Decks, Railings & Patio Covers</li>
                  <li>Wrought Iron Fences & Railings</li>
                  <li>Perimeter Walls</li>
                </ul>
                <p>We treat each element of your home's exterior with precision. For example, fascia and eaves are sealed and finished to prevent water intrusion, while garage doors and entryways receive extra attention to enhance both style and protection.</p>
              </div>

              <div className={styles.serviceCategory}>
                <h3>Staining & Finishing for Natural Wood Surfaces</h3>
                <ul>
                  <li>Siding</li>
                  <li>Decks & Rails</li>
                  <li>Doors & Windows</li>
                  <li>Thresholds</li>
                  <li>Complete Stripping</li>
                  <li>Staining & Refinishing</li>
                  <li>Solid Body & Semi-Transparent Stains</li>
                  <li>Custom Stains & Antique Finishes</li>
                  <li>Hardwood & Softwoods</li>
                </ul>
                <p>Our wood staining services enhance the natural grain and beauty of your wood surfaces while protecting them from sun, moisture, and wear. We offer custom stain colors and antique-style finishes, as well as full stripping for aged or damaged wood.</p>
              </div>

              <div className={styles.serviceCategory}>
                <h3>Metal Finishes</h3>
                <ul>
                  <li>Rust Control Treatments</li>
                  <li>Patina & Faux Rust Finishes</li>
                  <li>Epoxy & Urethane Coatings</li>
                  <li>Industrial Enamels</li>
                  <li>Security Doors/Bars</li>
                  <li>Metal Windows & Doors</li>
                  <li>Metal Gates</li>
                  <li>Wrought Iron Fences</li>
                </ul>
                <p>Our metal finishes combine style with protection. From rust control that stops corrosion to epoxy coatings that seal and protect, we keep your metal features strong, resilient, and visually appealing.</p>
              </div>

              <div className={styles.serviceCategory}>
                <h3>Washing & Maintenance Services</h3>
                <ul>
                  <li>Dirt & Pollution Removal</li>
                  <li>Stain & Old Paint Removal</li>
                  <li>Routine Cleaning Maintenance</li>
                  <li>Graffiti Removal</li>
                  <li>Power Washing</li>
                </ul>
              </div>

              <div className={styles.serviceCategory}>
                <h3>Repair & Replacement Services</h3>
                <ul>
                  <li>Wood Repairs & Replacement</li>
                  <li>Light Carpentry</li>
                  <li>Molding Installation</li>
                  <li>Complete Stucco Repairs</li>
                  <li>Wood Rot Removal</li>
                  <li>Deck & Patio Cover Repairs</li>
                </ul>
                <p>We ensure surfaces are in prime condition before painting begins, so your project lasts longer and looks better.</p>
              </div>
            </div>
          </section>

          {/* Final Section */}
          <section className={styles.qualitySection}>
            <div className={styles.qualityContent}>
              <h2 className={styles.qualityTitle}>Trusted Exterior Painting in the Bay Area</h2>
              <p className={styles.qualityDescription}>
                Our experience, skill, and commitment to excellence make World Pro Painting one of the most trusted choices for exterior painting in the Bay Area. We deliver results that are beautiful, durable, and cost-effective — earning the trust of homeowners and businesses alike.
              </p>
            </div>
          </section>

          {/* FAQ Section */}
          <section className={styles.gallerySection}>
            <h2 className={styles.galleryTitle}>Exterior Painting FAQ</h2>
            <div className={styles.faqGrid}>
              <div className={styles.faqItem}>
                <h3>How long does exterior paint last?</h3>
                <p>Typically 5–10 years, depending on surface type, product quality, and exposure to weather.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>Do you offer eco-friendly exterior paints?</h3>
                <p>Yes. We provide low-VOC and zero-VOC options for a safer, greener choice.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>What affects the cost of exterior painting?</h3>
                <p>Property size, surface condition, paint type, prep work required, and project complexity. We provide detailed, transparent estimates so you know exactly what to expect.</p>
              </div>
            </div>
          </section>

          {/* Gallery Section */}
          <section className={styles.gallerySection}>
            <h2 className={styles.galleryTitle}>Our Exterior Projects</h2>
            <div className={styles.galleryGrid}>
              <div className={styles.galleryImage}>
                <img
                  {...optimizeImageProps(exterior5, 'Exterior painting project 1', 0)}
                  className={styles.galleryImg}
                />
                <div className={styles.imageOverlay}>
                  <h3>House Exterior Transformation</h3>
                  <p>Complete exterior painting with modern color scheme</p>
                </div>
              </div>
              <div className={styles.galleryImage}>
                <img
                  {...optimizeImageProps(exterior7, 'Exterior painting project 2', 1)}
                  className={styles.galleryImg}
                />
                <div className={styles.imageOverlay}>
                  <h3>Commercial Building Renovation</h3>
                  <p>Professional exterior painting for commercial properties</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
} 