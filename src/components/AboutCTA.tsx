import styles from '../styles/AboutCTA.module.css';
import { Link } from 'react-router-dom';
import RequestQuoteBtn from './RequestQuoteBtn';

export default function AboutCTA() {
  return (
    <section className={styles.aboutCTA}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>
            Ready to Transform Your <span className={styles.highlight}>Space?</span>
          </h2>
          <p className={styles.subtitle}>
            Let's discuss your painting project and get you a free, no-obligation estimate. 
            Our team is ready to bring your vision to life with quality workmanship and exceptional service.
          </p>
          <div className={styles.buttonGroup}>
            <Link to="/contact" className={styles.primaryBtn}>
              <RequestQuoteBtn />
            </Link>
            <Link to="/services" className={styles.secondaryBtn}>
              View Our Services
            </Link>
          </div>
        </div>
        <div className={styles.imageSection}>
          <img 
            src="https://images.unsplash.com/photo-1560435650-7470e0f9e513?auto=format&fit=crop&w=600&q=80" 
            alt="Professional painting service"
            className={styles.ctaImage}
          />
        </div>
      </div>
    </section>
  );
} 