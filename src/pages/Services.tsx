import { useState, useEffect } from 'react';
import styles from '../styles/Commercial.module.css';
import { preloadImages, optimizeImageProps } from '../utils/imageOptimization';
import { useScrollToTop } from '../hooks/useScrollToTop';

// Import images
import services1 from '../assets/services1.jpeg';
import services2 from '../assets/services2.jpeg';
import services3 from '../assets/services3.jpeg';
import services4 from '../assets/services4.jpeg';
import services5 from '../assets/services5.jpeg';
import services6 from '../assets/services6.jpeg';
import services7 from '../assets/services7.jpeg';
import services8 from '../assets/services8.jpeg';
import services9 from '../assets/services9.jpeg';
import services10 from '../assets/services10.jpeg';
import services11 from '../assets/services11.jpeg';
import services12 from '../assets/services12.jpeg';
import services13 from '../assets/services13.jpeg';
import services14 from '../assets/services14.jpeg';
import services15 from '../assets/services15.jpeg';
import services16 from '../assets/services16.jpeg';
import services17 from '../assets/services17.jpeg';



export default function Services() {
  useScrollToTop();
  
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Array with services photos for the slider
  const servicesPhotos = [
    services1, services2, services3, services4, services5, services6,
    services7, services8, services9, services10, services11, services12, services13, services14, services15, services16, services17
  ];

  // Preload images for better performance
  useEffect(() => {
    const loadImages = async () => {
      try {
        await preloadImages(servicesPhotos);
        setImagesLoaded(true);
      } catch (error) {
        console.error('Error preloading images:', error);
        setImagesLoaded(true); // Continue even if some images fail
      }
    };

    loadImages();
  }, [servicesPhotos]);


  useEffect(() => {
    if (!imagesLoaded) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % servicesPhotos.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [servicesPhotos.length, imagesLoaded]);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Hero Section */}
          <section className={styles.heroSection}>
            <div className={styles.heroOverlay}>
              <h1 className={styles.mainTitle}>Professional Services</h1>
              <p className={styles.heroSubtitle}>
                Discover our comprehensive range of professional painting and maintenance services designed to transform and protect your property
              </p>
            </div>
          </section>

          {/* Main Content Section */}
          <section className={styles.mainSection}>
            <div className={styles.contentGrid}>
              <div className={styles.textContent}>
                <h2 className={styles.sectionTitle}>Professional Specialized Services</h2>
                <p className={styles.description}>
                At World Pro Painting, we offer a comprehensive range of professional services to enhance, protect, and maintain your property for years to come. From wood staining and refinishing to pressure washing and color consulting, our certified technicians deliver exceptional results with every project. We specialize in interior and exterior painting, deck restoration, drywall repair, and surface preparation for a flawless, long-lasting finish. Using premium materials and proven techniques, we take pride in transforming spaces while protecting them from weather, wear, and time. Whether refreshing a single room or revitalizing an entire property, we bring precision, care, and unmatched craftsmanship to every job.
                </p>
              </div>

              {/* Slider Container */}
              <div className={styles.sliderContainer}>
                <div className={styles.slider}>
                  {servicesPhotos.map((photo, index) => (
                    <div
                      key={index}
                      className={`${styles.slide} ${currentSlide === index ? styles.active : ''}`}
                    >
                      <img
                        {...optimizeImageProps(photo, `Service slide ${index + 1}`, index)}
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

          {/* Wood Staining & Refinishing Section */}
          <section className={styles.interiorSection}>
            <div className={styles.interiorContent}>
              <div className={styles.interiorText}>
                <h2 className={styles.interiorTitle}>Professional Wood Staining & Refinishing Services in the Bay Area</h2>
                <p className={styles.interiorDescription}>
                  At World Pro Painting, we are proud to be recognized as a certified wood staining and refinishing company. With years of experience handling projects of all sizes — both residential and commercial — we work efficiently and with precision to protect and enhance your wood surfaces while minimizing any disruption to your home or business.
                </p>
                <p className={styles.interiorDescription}>
                  We use only premium-quality stains that provide long-lasting protection and highlight the natural beauty and character of the wood. Our team is also highly skilled at color matching, ensuring new stain applications blend seamlessly with existing finishes. With our expertise, maintaining and protecting stained wood becomes a simple and stress-free process.
                </p>
                <p className={styles.interiorDescription}>
                  Serving the entire Bay Area, we bring exceptional craftsmanship to every project.
                </p>

                <div className={styles.complianceList}>
                  <div className={styles.complianceItem}>
                    <div className={styles.complianceIcon}>✓</div>
                    <span>Our Wood Staining & Refinishing Services Include: Stripping Old Finishes, Staining & Refinishing, Solid Body & Semi-Transparent Stains</span>
                  </div>
                  <div className={styles.complianceItem}>
                    <div className={styles.complianceIcon}>✓</div>
                    <span>Custom Stains & Antique Finishes, Protective Coatings & Sealants, Wood Bleaching & Brightening Treatments</span>
                  </div>
                  <div className={styles.complianceItem}>
                    <div className={styles.complianceIcon}>✓</div>
                    <span>We Specialize in These Wood Surfaces: Wood Siding, Decks & Rails, Doors & Windows</span>
                  </div>
                  <div className={styles.complianceItem}>
                    <div className={styles.complianceIcon}>✓</div>
                    <span>Gates & Fences, Fascia & Eaves, Thresholds</span>
                  </div>
                </div>
              </div>
              
              <div className={styles.interiorPhotos}>
                <div className={styles.interiorPhotoItem}>
                  <img
                    {...optimizeImageProps(services7, 'Wood staining project 1', 0)}
                    className={styles.interiorPhotoImg}
                    alt="Wood staining and refinishing"
                  />
                </div>
                <div className={styles.interiorPhotoItem}>
                  <img
                    {...optimizeImageProps(services8, 'Wood staining project 2', 1)}
                    className={styles.interiorPhotoImg}
                    alt="Wood refinishing services"
                  />
                </div>
                <div className={styles.interiorPhotoItem}>
                  <img
                    {...optimizeImageProps(services9, 'Wood staining project 3', 2)}
                    className={styles.interiorPhotoImg}
                    alt="Professional wood staining"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Wood Repair & Restoration Section */}
          <section className={styles.exteriorSection}>
            <div className={styles.exteriorContent}>
              <div className={styles.exteriorText}>
                <h2 className={styles.exteriorTitle}>Professional Wood Repair & Restoration in the Bay Area</h2>
                <p className={styles.exteriorDescription}>
                  Unless your home is ultra-modern, chances are it features some wood elements — whether inside or outside. From rich hardwood doors to exterior trim, wood brings warmth, texture, and timeless beauty to any property. However, over time, exposure to the elements or natural aging can cause issues such as dry rot, cracks, and general wear.
                </p>
                <p className={styles.exteriorDescription}>
                  That's why World Pro Painting is proud to offer comprehensive wood repair services throughout the Bay Area. Our trained technicians have the skills and tools to restore wooden features to their original beauty while also ensuring they remain strong, functional, and visually appealing for years to come.
                </p>

                <div className={styles.complianceList}>
                  <div className={styles.complianceItem}>
                    <div className={styles.complianceIcon}>✓</div>
                    <span>EPA Certified Technicians – Lead-Safe certification for safe and professional work</span>
                  </div>
                  <div className={styles.complianceItem}>
                    <div className={styles.complianceIcon}>✓</div>
                    <span>Our services include: Rafter Repair, Soffit & Fascia Repair, Scratch & Dent Repairs</span>
                  </div>
                  <div className={styles.complianceItem}>
                    <div className={styles.complianceIcon}>✓</div>
                    <span>Door & Wall Panel Repairs, Door Frame Repairs, Window Sill Repairs</span>
                  </div>
                  <div className={styles.complianceItem}>
                    <div className={styles.complianceIcon}>✓</div>
                    <span>Additional Services: Window Trim Repairs, Wood Staining & Refinishing, Retouching & Color Matching</span>
                  </div>
                </div>
              </div>
              
              <div className={styles.exteriorPhotos}>
                <div className={styles.exteriorPhotoItem}>
                  <img
                    {...optimizeImageProps(services10, 'Wood repair project 1', 0)}
                    className={styles.exteriorPhotoImg}
                    alt="Wood repair and restoration"
                  />
                </div>
                <div className={styles.exteriorPhotoItem}>
                  <img
                    {...optimizeImageProps(services11, 'Wood repair project 2', 1)}
                    className={styles.exteriorPhotoImg}
                    alt="Wood restoration services"
                  />
                </div>
                <div className={styles.exteriorPhotoItem}>
                  <img
                    {...optimizeImageProps(services12, 'Wood repair project 3', 2)}
                    className={styles.exteriorPhotoImg}
                    alt="Professional wood repair"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Pressure Washing Section */}
          <section className={styles.interiorSection}>
            <div className={styles.interiorContent}>
              <div className={styles.interiorText}>
                <h2 className={styles.interiorTitle}>Professional Pressure Washing Services in the Bay Area</h2>
                <p className={styles.interiorDescription}>
                  Pressure washing uses a high-powered stream of water to remove everything from loose paint and built-up dirt to mold, mildew, graffiti, and even stubborn stains from both residential and commercial surfaces. It's one of the most effective ways to clean areas that endure heavy wear and tear over the years — like concrete driveways, sidewalks, decks, and building exteriors.
                </p>
                <p className={styles.interiorDescription}>
                  At World Pro Painting, we're proud to offer Bay Area pressure washing services backed by years of experience in the painting and property maintenance industry. Whether you're preparing a surface for a fresh coat of paint or simply want to restore your property's curb appeal, our licensed and insured technicians have the tools and expertise to get it done right.
                </p>

                <div className={styles.complianceList}>
                  <div className={styles.complianceItem}>
                    <div className={styles.complianceIcon}>✓</div>
                    <span>Increases curb appeal and boosts property value</span>
                  </div>
                  <div className={styles.complianceItem}>
                    <div className={styles.complianceIcon}>✓</div>
                    <span>Reduces the need for costly repairs down the line</span>
                  </div>
                  <div className={styles.complianceItem}>
                    <div className={styles.complianceIcon}>✓</div>
                    <span>Eco-friendly cleaning method with no toxic chemicals</span>
                  </div>
                  <div className={styles.complianceItem}>
                    <div className={styles.complianceIcon}>✓</div>
                    <span>Safe, reliable, and handled by trained professionals</span>
                  </div>
                </div>
              </div>
              
              <div className={styles.interiorPhotos}>
                <div className={styles.interiorPhotoItem}>
                  <img
                    {...optimizeImageProps(services13, 'Pressure washing project 1', 0)}
                    className={styles.interiorPhotoImg}
                    alt="Pressure washing services"
                  />
                </div>
                <div className={styles.interiorPhotoItem}>
                  <img
                    {...optimizeImageProps(services14, 'Pressure washing project 2', 1)}
                    className={styles.interiorPhotoImg}
                    alt="Professional pressure washing"
                  />
                </div>
                <div className={styles.interiorPhotoItem}>
                  <img
                    {...optimizeImageProps(services15, 'Pressure washing project 3', 2)}
                    className={styles.interiorPhotoImg}
                    alt="Pressure washing Bay Area"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Color Consulting Section */}
          <section className={styles.exteriorSection}>
            <div className={styles.exteriorContent}>
              <div className={styles.exteriorText}>
                <h2 className={styles.exteriorTitle}>World Pro Painting Will Help You Color Your World</h2>
                <p className={styles.exteriorDescription}>
                  Choosing the right color scheme is one of the most powerful ways to add elegance, personality, and character to your home or business, ensuring it reflects your style and lifestyle. Yet, with so many colors and combinations available, the process can feel overwhelming. You don't need to set aside your vision — World Pro Painting is here to guide you.
                </p>
                <p className={styles.exteriorDescription}>
                  As a full-service Bay Area painting company, we proudly offer professional color consulting for homes, offices, and commercial spaces. Our experienced consultants can help you create the perfect palette for a single feature wall, an entire home, or a full-scale office renovation. This service ensures your painting project achieves the exact look and feel you desire — bringing energy, harmony, and sophistication to any space.
                </p>

                <div className={styles.complianceList}>
                  <div className={styles.complianceItem}>
                    <div className={styles.complianceIcon}>✓</div>
                    <span>Custom ColorMatch™ program streamlines the selection process</span>
                  </div>
                  <div className={styles.complianceItem}>
                    <div className={styles.complianceIcon}>✓</div>
                    <span>Exclusive curated color collections inspired by California design trends</span>
                  </div>
                  <div className={styles.complianceItem}>
                    <div className={styles.complianceIcon}>✓</div>
                    <span>Versatile, vibrant colors that adapt to a wide variety of styles</span>
                  </div>
                  <div className={styles.complianceItem}>
                    <div className={styles.complianceIcon}>✓</div>
                    <span>Professional guidance for bold contemporary or timeless classic tones</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Quality Section */}
          <section className={styles.qualitySection}>
            <div className={styles.qualityContent}>
              <h2 className={styles.qualityTitle}>Why Choose World Pro Painting</h2>
              <p className={styles.qualityDescription}>
                With years of experience serving the Bay Area, we've built our reputation on quality craftsmanship, attention to detail, and exceptional customer service. Our team of certified professionals uses only premium materials and industry-leading techniques to ensure your project exceeds expectations. From initial consultation to final inspection, we're committed to delivering results that not only meet but exceed your vision.
              </p>
            </div>
          </section>

          {/* Gallery Section */}
          <section className={styles.gallerySection}>
            <h2 className={styles.galleryTitle}>Our Professional Services</h2>
            <div className={styles.galleryGrid}>
              <div className={styles.galleryImage}>
                <img
                  {...optimizeImageProps(services16, 'Professional service project 1', 0)}
                  className={styles.galleryImg}
                />
              </div>
              <div className={styles.galleryImage}>
                <img
                  {...optimizeImageProps(services17, 'Professional service project 2', 1)}
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

