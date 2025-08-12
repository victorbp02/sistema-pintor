import React, { useState, useEffect } from 'react';
import styles from '../styles/Services.module.css';
import { preloadImages, optimizeImageProps } from '../utils/imageOptimization';
import { useScrollToTop } from '../hooks/useScrollToTop';

// Importar imagens para os serviços
import deckexterior from '../assets/deckexterior.jpeg';
import exterior1 from '../assets/exterior1.jpeg';
import exterior5 from '../assets/exterior5.jpeg';
import interior1 from '../assets/interior1.jpeg';
import interior3 from '../assets/interior3.jpeg';
import processofoto from '../assets/processofoto.jpeg';

export default function Services() {
  useScrollToTop();

  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Hero Section */}
          <section className={styles.heroSection}>
            <div className={styles.heroOverlay}>
                             <h1 className={styles.mainTitle}>Specialized Services</h1>
               <p className={styles.heroSubtitle}>
                 Professional painting, restoration and maintenance services for all types of projects
               </p>
            </div>
          </section>

          {/* Main Content Section */}
          <section className={styles.mainSection}>
            <div className={styles.contentFull}>
              <div className={styles.textContent}>
                                 <h2 className={styles.sectionTitle}>Specialized Painting Services</h2>
                 <p className={styles.description}>
                   We offer a wide range of specialized painting and restoration services to meet the specific 
                   needs of each project. Our experienced team uses advanced techniques and high-quality materials 
                   to ensure exceptional and long-lasting results.
                 </p>
                
                <div className={styles.servicesGrid}>
                  <div className={styles.serviceCard}>
                    <div className={styles.cardIcon}>
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="#03C4D9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M9 22V12H15V22" stroke="#03C4D9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                                         <h3>Deck and Fence Painting & Restoration</h3>
                     <p>We restore and protect your exterior structures with professional deck and fence painting services.</p>
                  </div>
                  <div className={styles.serviceCard}>
                    <div className={styles.cardIcon}>
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 7H5C3.89543 7 3 7.89543 3 9V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V9C21 7.89543 20.1046 7 19 7Z" stroke="#03C4D9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M16 21V5C16 4.46957 15.7893 3.96086 15.4142 3.58579C15.0391 3.21071 14.5304 3 14 3H10C9.46957 3 8.96086 3.21071 8.58579 3.58579C8.21071 3.96086 8 4.46957 8 5V21" stroke="#03C4D9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                                         <h3>Parking Lot Striping & Line Painting</h3>
                     <p>Professional striping and line painting services for commercial parking lots.</p>
                  </div>
                  <div className={styles.serviceCard}>
                    <div className={styles.cardIcon}>
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 9H21V21H3V9Z" stroke="#03C4D9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M3 3H21V9H3V3Z" stroke="#03C4D9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M9 15H15" stroke="#03C4D9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                                         <h3>Epoxy Floor Coating</h3>
                     <p>Durable and attractive epoxy floor coatings for commercial and residential spaces.</p>
                  </div>
                  <div className={styles.serviceCard}>
                    <div className={styles.cardIcon}>
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#03C4D9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M2 17L12 22L22 17" stroke="#03C4D9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M2 12L12 17L22 12" stroke="#03C4D9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                                         <h3>Power Washer Services</h3>
                     <p>Professional pressure washing services for exterior surfaces and facades.</p>
                  </div>
                  <div className={styles.serviceCard}>
                    <div className={styles.cardIcon}>
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" stroke="#03C4D9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                                         <h3>Texture Application</h3>
                     <p>Specialized texture application services for walls and ceilings.</p>
                  </div>
                  <div className={styles.serviceCard}>
                    <div className={styles.cardIcon}>
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.7 6.3L3 18L6 21L17.7 9.3L14.7 6.3Z" stroke="#03C4D9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M19 4L20 5L19 6L18 5L19 4Z" stroke="#03C4D9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 12L13 13L12 14L11 13L12 12Z" stroke="#03C4D9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                                         <h3>Carpenter Services</h3>
                     <p>Professional carpentry services including repairs and woodwork.</p>
                  </div>
                  <div className={styles.serviceCard}>
                    <div className={styles.cardIcon}>
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 3H21V21H3V3Z" stroke="#03C4D9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M3 9H21" stroke="#03C4D9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M9 21V9" stroke="#03C4D9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                                         <h3>Drywall Services</h3>
                     <p>Complete drywall services including installation, repair and finishing.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Deck and Fence Section */}
          <section className={styles.deckSection}>
            <div className={styles.deckContent}>
              <div className={styles.deckText}>
                                 <h2 className={styles.deckTitle}>Deck and Fence Painting & Restoration</h2>
                 <p className={styles.deckDescription}>
                   We restore and protect your exterior structures with professional deck and fence painting services. 
                   We use high-quality materials and specialized techniques to ensure long-lasting protection against 
                   weather elements while improving the appearance of your property.
                 </p>
                 <p className={styles.deckDescription}>
                   Our services include deep cleaning, damaged wood repairs, sealant application and 
                   special exterior paints. We work with different types of wood and offer finishing 
                   options that combine durability and aesthetics.
                 </p>
              </div>
              
              <div className={styles.deckPhotos}>
                <div className={styles.deckPhotoItem}>
                  <img
                    {...optimizeImageProps(deckexterior, 'Deck painting project 1', 0)}
                    className={styles.deckPhotoImg}
                    alt="Deck painting and restoration"
                  />
                </div>
                <div className={styles.deckPhotoItem}>
                  <img
                    {...optimizeImageProps(exterior1, 'Fence painting project 1', 1)}
                    className={styles.deckPhotoImg}
                    alt="Fence painting and restoration"
                  />
                </div>

              </div>
            </div>
          </section>

          {/* Parking Lot Section */}
          <section className={styles.parkingSection}>
            <div className={styles.parkingContent}>
              <div className={styles.parkingText}>
                                 <h2 className={styles.parkingTitle}>Parking Lot Striping & Line Painting</h2>
                 <p className={styles.parkingDescription}>
                   Professional striping and line painting services for commercial parking lots. We ensure 
                   clear and durable markings that improve traffic flow, safety and compliance with local regulations.
                 </p>
                 <p className={styles.parkingDescription}>
                   We use special paints for asphalt and concrete that resist traffic wear and weather conditions. 
                   Our services include parking space marking, directional lines, accessibility symbols and other necessary signage.
                 </p>
              </div>
              
              <div className={styles.parkingPhotos}>
                <div className={styles.parkingPhotoItem}>
                  <img
                    {...optimizeImageProps(processofoto, 'Parking lot striping project 1', 0)}
                    className={styles.parkingPhotoImg}
                    alt="Parking lot striping and line painting"
                  />
                </div>
                <div className={styles.parkingPhotoItem}>
                  <img
                    {...optimizeImageProps(exterior5, 'Parking lot painting project 2', 1)}
                    className={styles.parkingPhotoImg}
                    alt="Commercial parking lot painting"
                  />
                </div>

              </div>
            </div>
          </section>

          {/* Epoxy Floor Section */}
          <section className={styles.epoxySection}>
            <div className={styles.epoxyContent}>
              <div className={styles.epoxyText}>
                                 <h2 className={styles.epoxyTitle}>Epoxy Floor Coating</h2>
                 <p className={styles.epoxyDescription}>
                   Durable and attractive epoxy floor coatings for commercial and residential spaces. 
                   Our epoxy solutions provide excellent protection, easy maintenance and professional finish 
                   that enhances any environment.
                 </p>
                 <p className={styles.epoxyDescription}>
                   We offer different types of epoxy systems including base epoxy, decorative epoxy, 
                   non-slip epoxy and metallic epoxy. Our coatings are ideal for garages, industrial areas, 
                   medical clinics and commercial spaces that need durability and resistance.
                 </p>
              </div>
              
              <div className={styles.epoxyPhotos}>
                <div className={styles.epoxyPhotoItem}>
                  <img
                    {...optimizeImageProps(interior1, 'Epoxy floor coating project 1', 0)}
                    className={styles.epoxyPhotoImg}
                    alt="Epoxy floor coating installation"
                  />
                </div>
                <div className={styles.epoxyPhotoItem}>
                  <img
                    {...optimizeImageProps(interior3, 'Epoxy floor project 2', 1)}
                    className={styles.epoxyPhotoImg}
                    alt="Commercial epoxy floor coating"
                  />
                </div>

              </div>
            </div>
          </section>

          {/* Additional Services Section */}
          <section className={styles.additionalSection}>
            <div className={styles.additionalContent}>
                             <h2 className={styles.additionalTitle}>Additional Services</h2>
              <div className={styles.additionalServicesGrid}>
                <div className={styles.additionalServiceCard}>
                                     <h3>Power Washer</h3>
                   <p>Professional pressure washing services for exterior surfaces, sidewalks, 
                      walkways and building facades. We use high-quality equipment and environmentally 
                      friendly solutions to restore the original beauty of your surfaces.</p>
                </div>
                <div className={styles.additionalServiceCard}>
                                     <h3>Texture</h3>
                   <p>Specialized texture application services for walls and ceilings. We offer 
                      various texture options including popcorn, knockdown, orange peel and custom 
                      textures to create unique and visually appealing surfaces.</p>
                </div>
                <div className={styles.additionalServiceCard}>
                                     <h3>Carpenter</h3>
                   <p>Professional carpentry services including repairs, installations and custom 
                      woodwork. Our skilled carpenters handle everything from minor repairs to major 
                      renovations with precision and craftsmanship.</p>
                </div>
                <div className={styles.additionalServiceCard}>
                                     <h3>Drywall</h3>
                   <p>Complete drywall services including installation, repair, finishing and texturing. 
                      We handle everything from new construction to repairs with professional quality and 
                      attention to detail.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Quality Section */}
          <section className={styles.qualitySection}>
            <div className={styles.qualityContent}>
                             <h2 className={styles.qualityTitle}>Quality and Professionalism</h2>
               <p className={styles.qualityDescription}>
                 We understand the unique challenges of each specialized project. Our team is equipped 
                 to handle large-scale projects, work flexible hours and ensure exceptional results. 
                 We use high-quality materials that are durable and suitable for different environments, 
                 ensuring your investment lasts for years.
               </p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
} 

