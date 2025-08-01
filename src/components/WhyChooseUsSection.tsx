import React, { useState, useEffect } from 'react';
import styles from '../styles/WhyChooseUsSection.module.css';
import { FiAward, FiUsers, FiClock, FiShield, FiCheckCircle, FiStar, FiArrowRight } from 'react-icons/fi';

export default function WhyChooseUsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => {
        const nextSlide = prevSlide + 1;
        return nextSlide >= 10 ? 0 : nextSlide;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const slides = [
    '/src/assets/foto1slide.jpeg',
    '/src/assets/foto2slide.jpeg',
    '/src/assets/foto3slide.jpeg',
    '/src/assets/foto4slide.jpeg',
    '/src/assets/foto5slide.jpeg',
    '/src/assets/foto6slide.jpeg',
    '/src/assets/foto7slide.jpeg',
    '/src/assets/foto8slide.jpeg',
    '/src/assets/foto9slide.jpeg',
    '/src/assets/foto10slide.jpeg'
  ];

  return (
    <section className={styles.whyChooseUs}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.badge}>
            <FiStar className={styles.badgeIcon} />
            <span>Why choose World Pro Painting?</span>
          </div>
          <h2 className={styles.title}>
            <span className={styles.highlight}>Excellence</span> in Every <span className={styles.highlight}>Detail</span>
          </h2>
          <p className={styles.subtitle}>
            We combine experience, quality materials, and dedicated service to deliver exceptional results
          </p>
        </div>

        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <h3>15+ Years of Excellence</h3>
              <p>
                With over a decade of experience in the Bay Area, we've perfected our craft 
                to deliver painting services that exceed expectations. Our commitment to quality 
                and attention to detail sets us apart in every project.
              </p>
              <div className={styles.statsRow}>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>500+</span>
                  <span className={styles.statLabel}>Projects Completed</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>98%</span>
                  <span className={styles.statLabel}>Client Satisfaction</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>24/7</span>
                  <span className={styles.statLabel}>Support Available</span>
                </div>
              </div>
            </div>
            <div className={styles.heroSlider}>
              <div className={styles.sliderContainer}>
                <div className={styles.slides}>
                  {slides.map((slide, index) => (
                    <div 
                      key={index}
                      className={`${styles.slide} ${currentSlide === index ? styles.active : ''}`}
                      style={{
                        backgroundImage: `url(${slide})`
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.middleSection}>
          <div className={styles.middleContent}>
            <div className={styles.middleText}>
              <h3>Our Commitment to Excellence</h3>
              <p>
                At World Pro Painting, we understand that every project is unique and deserves 
                our full attention. Our team of skilled professionals combines traditional 
                craftsmanship with modern techniques to deliver results that not only meet 
                but exceed your expectations.
              </p>
              <p>
                We take pride in our attention to detail, from the initial consultation 
                through the final inspection. Our comprehensive approach includes thorough 
                surface preparation, premium quality materials, and meticulous application 
                techniques that ensure lasting beauty and protection for your property.
              </p>
              <div className={styles.commitmentPoints}>
                <div className={styles.commitmentPoint}>
                  <FiCheckCircle className={styles.checkIcon} />
                  <span>Comprehensive surface preparation and priming</span>
                </div>
                <div className={styles.commitmentPoint}>
                  <FiCheckCircle className={styles.checkIcon} />
                  <span>Premium paints and materials from trusted brands</span>
                </div>
                <div className={styles.commitmentPoint}>
                  <FiCheckCircle className={styles.checkIcon} />
                  <span>Professional application techniques and quality control</span>
                </div>
                <div className={styles.commitmentPoint}>
                  <FiCheckCircle className={styles.checkIcon} />
                  <span>Thorough cleanup and final inspection process</span>
                </div>
              </div>
            </div>
            <div className={styles.middleStats}>
              <div className={styles.statCard}>
                <div className={styles.statIcon}>
                  <FiAward />
                </div>
                <h4>Quality Guaranteed</h4>
                <p>Every project is backed by our comprehensive quality guarantee</p>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statIcon}>
                  <FiClock />
                </div>
                <h4>Fast & Efficient</h4>
                <p>We complete projects on time without compromising quality</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.featuresSection}>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <FiAward />
              </div>
              <div className={styles.featureContent}>
                <h4>Premium Quality</h4>
                <p>We use only the finest materials and professional techniques to ensure lasting results.</p>
              </div>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <FiUsers />
              </div>
              <div className={styles.featureContent}>
                <h4>Expert Team</h4>
                <p>Our certified professionals bring years of experience and specialized training.</p>
              </div>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <FiShield />
              </div>
              <div className={styles.featureContent}>
                <h4>Full Warranty</h4>
                <p>Complete peace of mind with our comprehensive warranty on all services.</p>
              </div>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <FiClock />
              </div>
              <div className={styles.featureContent}>
                <h4>On-Time Delivery</h4>
                <p>We respect your schedule and complete projects within agreed timelines.</p>
              </div>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <FiCheckCircle />
              </div>
              <div className={styles.featureContent}>
                <h4>Clean Process</h4>
                <p>From preparation to final cleanup, we maintain a clean and organized workspace.</p>
              </div>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <FiStar />
              </div>
              <div className={styles.featureContent}>
                <h4>Personalized Service</h4>
                <p>Every project receives individual attention and customized solutions.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 