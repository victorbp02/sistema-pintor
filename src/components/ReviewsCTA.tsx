import styles from '../styles/ReviewsCTA.module.css';
import { Link } from 'react-router-dom';
import RequestQuoteBtn from './RequestQuoteBtn';
import { FiStar, FiMessageCircle } from 'react-icons/fi';

export default function ReviewsCTA() {
  return (
    <section className={styles.reviewsCTA}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textSection}>
            <h2 className={styles.title}>
              Join Our <span className={styles.highlight}>Happy Customers</span>
            </h2>
            <p className={styles.subtitle}>
              Ready to experience the same quality service that our customers rave about? 
              Get your free estimate today and see why we're the most trusted painting company in the Bay Area.
            </p>
            <div className={styles.features}>
              <div className={styles.feature}>
                <FiStar className={styles.featureIcon} />
                <span>Request Estimate</span>
              </div>
              <div className={styles.feature}>
                <FiMessageCircle className={styles.featureIcon} />
                <span>Professional Service</span>
              </div>
            </div>
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
              alt="Professional painting team"
              className={styles.ctaImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
} 