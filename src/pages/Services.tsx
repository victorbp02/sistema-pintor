import React, { useState, useEffect } from 'react';
import styles from '../styles/Services.module.css';
import { useScrollToTop } from '../hooks/useScrollToTop';

// Import images
import interior1 from '../assets/interior1.jpeg';
import interior2 from '../assets/interior2.jpeg';
import interior3 from '../assets/interior3.jpeg';
import interior4 from '../assets/interior4.jpeg';
import interior5 from '../assets/interior5.jpeg';
import interior6 from '../assets/interior6.jpeg';
import exterior1 from '../assets/exterior1.jpeg';
import exterior2 from '../assets/exterior2.jpeg';
import exterior3 from '../assets/exterior3.jpeg';
import exterior4 from '../assets/exterior4.jpeg';
import exterior5 from '../assets/exterior5.jpeg';
import exterior6 from '../assets/exterior6.jpeg';
import exterior7 from '../assets/exterior7.jpeg';

const Services: React.FC = () => {
  useScrollToTop();
  
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const servicesPhotos = [
    interior1, interior2, interior3, interior4, interior5, interior6,
    exterior1, exterior2, exterior3, exterior4, exterior5, exterior6, exterior7
  ];

  useEffect(() => {
    const preloadImages = () => {
      const imagePromises = servicesPhotos.map((src) => {
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
            <h2 className={styles.sectionTitle}>Professional Specialized Services</h2>
            <div className={styles.contentGrid}>
              <div className={styles.textContent}>
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
                        src={photo}
                        alt={`Service slide ${index + 1}`}
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

          {/* Wood Staining & Refinishing Section */}
          <section className={styles.gallerySection}>
            <h2 className={styles.galleryTitle}>Professional Wood Staining & Refinishing Services in the Bay Area</h2>
            <p className={styles.qualityDescription}>
              At World Pro Painting, we are proud to be recognized as a certified wood staining and refinishing company. With years of experience handling projects of all sizes — both residential and commercial — we work efficiently and with precision to protect and enhance your wood surfaces while minimizing any disruption to your home or business.
            </p>
            <p className={styles.qualityDescription}>
              We use only premium-quality stains that provide long-lasting protection and highlight the natural beauty and character of the wood. Our team is also highly skilled at color matching, ensuring new stain applications blend seamlessly with existing finishes. With our expertise, maintaining and protecting stained wood becomes a simple and stress-free process.
            </p>
            <p className={styles.qualityDescription}>
              Serving the entire Bay Area, we bring exceptional craftsmanship to every project.
            </p>

            <div className={styles.servicesGrid}>
              <div className={styles.serviceCard}>
                <h3>Our Wood Staining & Refinishing Services Include:</h3>
                <ul>
                  <li>Stripping Old Finishes</li>
                  <li>Staining & Refinishing</li>
                  <li>Solid Body & Semi-Transparent Stains</li>
                  <li>Custom Stains & Antique Finishes</li>
                  <li>Protective Coatings & Sealants</li>
                  <li>Wood Bleaching & Brightening Treatments</li>
                </ul>
              </div>

              <div className={styles.serviceCard}>
                <h3>We Specialize in These Wood Surfaces:</h3>
                <ul>
                  <li>Wood Siding</li>
                  <li>Decks & Rails</li>
                  <li>Doors & Windows</li>
                  <li>Gates & Fences</li>
                  <li>Fascia & Eaves</li>
                  <li>Thresholds</li>
                </ul>
              </div>
            </div>

            <div className={styles.qualityDescription} style={{ marginTop: '50px' }}>
              Whether you want to restore the rich warmth of hardwood, protect outdoor decks from weather damage, or give architectural woodwork a fresh, updated finish, World Pro Painting delivers results that combine durability, beauty, and expert craftsmanship.
            </div>
          </section>

          {/* Wood Repair & Restoration Section */}
          <section className={styles.qualitySection}>
            <div className={styles.qualityContent}>
              <h2 className={styles.qualityTitle}>Professional Wood Repair & Restoration in the Bay Area</h2>
              <p className={styles.qualityDescription}>
                Unless your home is ultra-modern, chances are it features some wood elements — whether inside or outside. From rich hardwood doors to exterior trim, wood brings warmth, texture, and timeless beauty to any property. However, over time, exposure to the elements or natural aging can cause issues such as dry rot, cracks, and general wear.
              </p>
              <p className={styles.qualityDescription}>
                That's why World Pro Painting is proud to offer comprehensive wood repair services throughout the Bay Area. Our trained technicians have the skills and tools to restore wooden features to their original beauty while also ensuring they remain strong, functional, and visually appealing for years to come.
              </p>
            </div>
          </section>

          <section className={styles.gallerySection}>
            <h2 className={styles.galleryTitle}>EPA Certified Technicians</h2>
            <p className={styles.qualityDescription}>
              With EPA Lead-Safe certification, you can trust us to work safely and professionally, using only premium-grade materials and industry-approved techniques. We offer free in-person or virtual estimates, so you can make confident decisions before starting your project.
            </p>

            <h2 className={styles.galleryTitle}>Our Wood Repair & Replacement Services</h2>
            <p className={styles.qualityDescription}>
              Too often, property owners postpone wood repairs until the damage becomes severe — and more costly. At World Pro Painting, our wood restoration experts are here to help you avoid that problem. We work on projects of all sizes, for both homes and commercial properties, and can even caulk, prime, and paint repaired areas for a complete, finished look.
            </p>

            <div className={styles.servicesGrid}>
              <div className={styles.serviceCard}>
                <h3>Our services include:</h3>
                <ul>
                  <li>Rafter Repair</li>
                  <li>Soffit & Fascia Repair</li>
                  <li>Scratch & Dent Repairs</li>
                  <li>Door & Wall Panel Repairs</li>
                  <li>Door Frame Repairs</li>
                  <li>Window Sill Repairs</li>
                </ul>
              </div>

              <div className={styles.serviceCard}>
                <h3>Additional Services:</h3>
                <ul>
                  <li>Window Trim Repairs</li>
                  <li>Wood Staining & Refinishing</li>
                  <li>Retouching & Color Matching</li>
                  <li>Stain Removal</li>
                  <li>Complete Restoration</li>
                  <li>Preventive Maintenance</li>
                </ul>
              </div>
            </div>

            <p className={styles.qualityDescription}>
              If replacement is necessary, we'll ensure your new wood features are not only installed perfectly but also treated for long-term protection against weather and wear.
            </p>

            <h2 className={styles.galleryTitle}>Wood Deck Repairs in the Bay Area</h2>
            <p className={styles.qualityDescription}>
              There's nothing better than enjoying time outside on a beautiful deck — but over time, weather and foot traffic can cause boards to warp, crack, or rot, turning a relaxing space into a safety hazard. Our deck repair specialists restore structural integrity and appearance, making your deck safe, attractive, and ready for entertaining again.
            </p>
            <p className={styles.qualityDescription}>
              Whether you have a small patio deck or an expansive multi-level space, we can repair and refinish it to look and perform like new.
            </p>
            <p className={styles.qualityDescription}>
              World Pro Painting proudly serves homeowners and businesses across the Bay Area, delivering craftsmanship that blends durability with beauty. Contact us today to learn more about our wood repair and refinishing services, and let us help you protect and restore one of your property's most valuable features.
            </p>
          </section>

          {/* Pressure Washing Section */}
          <section className={styles.qualitySection}>
            <div className={styles.qualityContent}>
              <h2 className={styles.qualityTitle}>Professional Pressure Washing Services in the Bay Area</h2>
              <p className={styles.qualityDescription}>
                Pressure washing uses a high-powered stream of water to remove everything from loose paint and built-up dirt to mold, mildew, graffiti, and even stubborn stains from both residential and commercial surfaces. It's one of the most effective ways to clean areas that endure heavy wear and tear over the years — like concrete driveways, sidewalks, decks, and building exteriors.
              </p>
              <p className={styles.qualityDescription}>
                Think about that hardened gum stuck on your driveway for ages, or a large graffiti tag on your storefront — pressure washing can take care of it quickly and efficiently.
              </p>
              <p className={styles.qualityDescription}>
                At World Pro Painting, we're proud to offer Bay Area pressure washing services backed by years of experience in the painting and property maintenance industry. Whether you're preparing a surface for a fresh coat of paint or simply want to restore your property's curb appeal, our licensed and insured technicians have the tools and expertise to get it done right.
              </p>
            </div>
          </section>

          <section className={styles.gallerySection}>
            <h2 className={styles.galleryTitle}>Benefits of Our Pressure Washing Services</h2>
            <p className={styles.qualityDescription}>
              Pressure washing is the fastest and most effective way to eliminate dirt, grime, and surface damage that regular cleaning methods just can't handle. As an EPA Lead-Safe Certified company, we ensure our process is safe for your property and the environment, using no toxic chemicals — just water pressure.
            </p>

            <div className={styles.servicesGrid}>
              <div className={styles.serviceCard}>
                <h3>Top advantages of our Bay Area pressure washing services include:</h3>
                <ul>
                  <li>Increases curb appeal and boosts property value</li>
                  <li>Reduces the need for costly repairs down the line</li>
                  <li>Eco-friendly cleaning method</li>
                  <li>Much faster than traditional cleaning approaches</li>
                  <li>Safe, reliable, and handled by trained professionals</li>
                </ul>
              </div>

              <div className={styles.serviceCard}>
                <h3>Pressure Washing vs. Power Washing</h3>
                <p>Many people assume the two are the same, but there's a slight difference:</p>
                <ul>
                  <li>Pressure washing uses high-pressure water at normal temperature</li>
                  <li>Power washing uses heated water to help break down stubborn grime and grease</li>
                </ul>
              </div>
            </div>

            <p className={styles.qualityDescription}>
              While high-pressure cleaning might sound risky, our team uses controlled, professional techniques to ensure safe, damage-free results with minimal disruption to your property.
            </p>

            <h2 className={styles.galleryTitle}>Our Guarantee</h2>
            <p className={styles.qualityDescription}>
              We stand behind our work with solid warranties, ensuring results that last. Known for reliable service across the Bay Area, World Pro Painting is a trusted choice for pressure washing and exterior surface preparation.
            </p>
          </section>

          {/* Color Consulting Section */}
          <section className={styles.qualitySection}>
            <div className={styles.qualityContent}>
              <h2 className={styles.qualityTitle}>World Pro Painting Will Help You Color Your World</h2>
              <p className={styles.qualityDescription}>
                Choosing the right color scheme is one of the most powerful ways to add elegance, personality, and character to your home or business, ensuring it reflects your style and lifestyle. Yet, with so many colors and combinations available, the process can feel overwhelming. You don't need to set aside your vision — World Pro Painting is here to guide you.
              </p>
              <p className={styles.qualityDescription}>
                As a full-service Bay Area painting company, we proudly offer professional color consulting for homes, offices, and commercial spaces. Our experienced consultants can help you create the perfect palette for a single feature wall, an entire home, or a full-scale office renovation. This service ensures your painting project achieves the exact look and feel you desire — bringing energy, harmony, and sophistication to any space.
              </p>
            </div>
          </section>

          <section className={styles.gallerySection}>
            <h2 className={styles.galleryTitle}>Exclusive Color Solutions from World Pro Painting</h2>
            <p className={styles.qualityDescription}>
              In addition to our expertise with premium paint brands, World Pro Painting has developed exclusive curated color collections designed to simplify the selection process. Even clients who feel unsure about choosing colors find confidence in our approach. Our Custom ColorMatch™ program streamlines the process, helping you quickly narrow down options to your absolute favorites.
            </p>
            <p className={styles.qualityDescription}>
              Our color solutions are inspired by design trends from across California and have been recognized by local designers for their versatility, vibrancy, and ability to adapt to a wide variety of styles. Whether you're looking for bold, contemporary tones or timeless, classic hues, we'll help you select the perfect shades to transform your property and match your vision.
            </p>
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
                  src={interior3}
                  alt="Professional painting service 1"
                  className={styles.galleryImg}
                  loading="lazy"
                />
              </div>
              <div className={styles.galleryImage}>
                <img
                  src={exterior2}
                  alt="Professional painting service 2"
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
};

export default Services; 

