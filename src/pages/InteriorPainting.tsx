import React, { useState, useEffect } from 'react';
import styles from '../styles/InteriorPainting.module.css';
import { useScrollToTop } from '../hooks/useScrollToTop';

// Importar imagens diretamente
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

  // Array with 6 interior painting photos
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
    const preloadImages = () => {
      const imagePromises = interiorPhotos.map((src) => {
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
          <h2 className={styles.sectionTitle}>Professional Interior Painting & Refinishing</h2>
            <div className={styles.contentGrid}>
              <div className={styles.textContent}>
                <p className={styles.description}>
                  World Pro Painting has been transforming and revitalizing the interiors of homes and apartments throughout the Bay Area with fresh, high-quality paint finishes. From luxury residences to modern condos and everything in between, our experience covers a wide variety of styles and challenges.
                </p>
                
                <p className={styles.description}>
                  Our interior painting team can quickly assess and address the unique requirements of each space, using only premium paints and professional preparation techniques to ensure stunning, long-lasting results. Whether you need assistance painting intricate walls, vaulted ceilings, or detailed trim, our skilled painters are ready to make your home look its best.
                </p>
              </div>

              {/* Slider Container */}
              <div className={styles.sliderContainer}>
                <div className={styles.slider}>
                  {interiorPhotos.map((photo, index) => (
                    <div
                      key={index}
                      className={`${styles.slide} ${currentSlide === index ? styles.active : ''}`}
                    >
                      <img
                        src={photo}
                        alt={`Interior painting slide ${index + 1}`}
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

          {/* Why Choose Us Section */}
          <section className={styles.qualitySection}>
            <div className={styles.qualityContent}>
              <h2 className={styles.qualityTitle}>Work with Experienced Interior Painters in the Bay Area</h2>
              <p className={styles.qualityDescription}>
                If you're looking to refresh and modernize your home's interior, our licensed and trained professionals at World Pro Painting are here to help. We take care of the entire process — from protecting your floors and furniture to cleaning up daily — working efficiently to keep your project on time and on budget.
              </p>
              <p className={styles.qualityDescription}>
                We also provide complimentary color consultations on select projects, helping you choose shades that perfectly complement your style and architecture.
              </p>
              <p className={styles.qualityDescription}>
                In addition to our painting expertise, our team brings an eye for interior design, recommending color palettes and finishes that match your taste and enhance the flow of your living space. Our mission is to bring your vision to life, improving both beauty and function.
              </p>
              <p className={styles.qualityDescription}>
                Painting is more than an aesthetic upgrade — it adds value to your home. With advanced techniques and low-VOC products, we can improve indoor air quality while delivering a durable, stain-resistant finish tailored to your lifestyle.
              </p>
            </div>
          </section>

          {/* Paint Longevity Section */}
          <section className={styles.qualitySection}>
            <div className={styles.qualityContent}>
              <h2 className={styles.qualityTitle}>Paint Longevity in the Bay Area Climate</h2>
              <p className={styles.qualityDescription}>
                The Bay Area's varied climate — from coastal humidity to intense sunlight — can impact the durability of interior paint. Choosing the right products is key. We recommend high UV-stability paints for sun-filled rooms to prevent fading and discoloration.
              </p>
              
              <div className={styles.finishGuide}>
                <h3>The finish you select matters as well:</h3>
                <div className={styles.finishGrid}>
                  <div className={styles.finishItem}>
                    <h4>Matte Finishes</h4>
                    <p>Offer a smooth, elegant look but are less resistant to wear in high-traffic spaces.</p>
                  </div>
                  <div className={styles.finishItem}>
                    <h4>Eggshell & Semi-Gloss</h4>
                    <p>Provide better durability and easier cleaning, making them ideal for kitchens, hallways, and family rooms.</p>
                  </div>
                </div>
              </div>

              <p className={styles.qualityDescription}>
                Whether updating your living room or creating a relaxing bedroom retreat, we'll guide you to the best finishes for your needs.
              </p>
            </div>
          </section>

          {/* Local Partnerships Section */}
          <section className={styles.qualitySection}>
            <div className={styles.qualityContent}>
              <h2 className={styles.qualityTitle}>Local Partnerships & Resources</h2>
              <p className={styles.qualityDescription}>
                We work closely with Bay Area suppliers to source high-quality materials and stay current with the latest painting innovations. These partnerships help us secure materials quickly, keeping your project moving forward. By sourcing locally, we also support the regional economy and reduce transportation-related environmental impact.
              </p>
              <p className={styles.qualityDescription}>
                Our familiarity with local design preferences and neighborhood guidelines means we deliver painting solutions that respect each property's architectural integrity — from contemporary lofts in San Francisco to classic homes in Alameda County.
              </p>
            </div>
          </section>

          {/* Services Section */}
          <section className={styles.gallerySection}>
            <h2 className={styles.galleryTitle}>Our Interior Painting Services Include:</h2>
            <div className={styles.servicesGrid}>
              <div className={styles.serviceCategory}>
                <ul>
                  <li>Walls (any height)</li>
                  <li>Ceilings (any height)</li>
                  <li>Doors & Windows</li>
                  <li>French Doors & Windows</li>
                  <li>Mantels & Built-ins</li>
                  <li>Paneling & Wainscoting</li>
                  <li>Baseboards & Crown Molding</li>
                  <li>Chair Rails</li>
                  <li>Cabinets & Shelving</li>
                  <li>Custom Colors & Finishes</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Preparation Section */}
          <section className={styles.qualitySection}>
            <div className={styles.qualityContent}>
              <h2 className={styles.qualityTitle}>How to Prepare for Interior Painting</h2>
              <p className={styles.qualityDescription}>
                Before we begin, here are steps to help the process go smoothly:
              </p>
              <ul className={styles.featuresList}>
                <li>Move or cover furniture – Shift small pieces out of the room; move large items to the center and cover them.</li>
                <li>Remove electronics – Protect appliances and devices; we can provide coverings if needed.</li>
                <li>Take down wall decor – Remove photos, mirrors, and art pieces.</li>
                <li>Store rugs and curtains – Roll up rugs, remove drapes, blinds, and valances.</li>
                <li>Clear small items – Even minor objects should be stored safely.</li>
                <li>Clean walls – Dust and dirt can affect paint adhesion.</li>
                <li>Plan ahead – Avoid entering painted areas until work is complete.</li>
              </ul>
            </div>
          </section>

          {/* FAQ Section */}
          <section className={styles.gallerySection}>
            <h2 className={styles.galleryTitle}>Interior Painting FAQs</h2>
            <div className={styles.faqGrid}>
              <div className={styles.faqItem}>
                <h3>How long does an interior project take?</h3>
                <p>Most jobs take a few days to a week, depending on size and scope.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>Do I have to leave my home?</h3>
                <p>Not necessarily, but we recommend avoiding work areas to allow for efficiency and safety.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>What type of paint do you use?</h3>
                <p>We use high-quality, low-VOC paints to ensure durability and maintain healthy air quality.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>Can you help choose colors?</h3>
                <p>Yes, we offer free color consultations on select projects.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>Do I need to move furniture before you arrive?</h3>
                <p>Small items should be moved ahead of time; we'll help cover and protect larger pieces.</p>
              </div>
            </div>
          </section>

          {/* Gallery Section */}
          <section className={styles.gallerySection}>
            <h2 className={styles.galleryTitle}>Our Interior Projects</h2>
            <div className={styles.galleryGrid}>
              <div className={styles.galleryImage}>
                <img
                  src={interior3}
                  alt="Interior painting project 1"
                  className={styles.galleryImg}
                  loading="lazy"
                />
                <div className={styles.imageOverlay}>
                  <h3>Living Room Transformation</h3>
                  <p>Complete interior painting with modern color scheme</p>
                </div>
              </div>
              <div className={styles.galleryImage}>
                <img
                  src={interior4}
                  alt="Interior painting project 2"
                  className={styles.galleryImg}
                  loading="lazy"
                />
                <div className={styles.imageOverlay}>
                  <h3>Bedroom Renovation</h3>
                  <p>Professional interior painting for peaceful spaces</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
} 