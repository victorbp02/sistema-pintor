import styles from '../styles/BlogCTA.module.css';
import { Link } from 'react-router-dom';
import RequestQuoteBtn from './RequestQuoteBtn';
import { FiBookOpen, FiMessageCircle, FiUsers } from 'react-icons/fi';

export default function BlogCTA() {
  return (
    <section className={styles.blogCTA}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textSection}>
            <h2 className={styles.title}>
              Ready to Put These <span className={styles.highlight}>Tips</span> Into Action?
            </h2>
            <p className={styles.subtitle}>
              Now that you've learned the latest painting techniques and trends, 
              let's bring your vision to life. Our expert team is ready to help you 
              create the perfect space with professional painting services.
            </p>
            
            <div className={styles.features}>
              <div className={styles.feature}>
                <FiBookOpen className={styles.featureIcon} />
                <div className={styles.featureText}>
                  <h4>Expert Knowledge</h4>
                  <p>15+ years of painting expertise</p>
                </div>
              </div>
              <div className={styles.feature}>
                <FiMessageCircle className={styles.featureIcon} />
                <div className={styles.featureText}>
                  <h4>Free Consultation</h4>
                  <p>Get personalized advice for your project</p>
                </div>
              </div>
              <div className={styles.feature}>
                <FiUsers className={styles.featureIcon} />
                <div className={styles.featureText}>
                  <h4>Professional Team</h4>
                  <p>Licensed and insured painters</p>
                </div>
              </div>
            </div>
            
            <div className={styles.buttonGroup}>
              <Link to="/contact" className={styles.primaryBtn}>
                <RequestQuoteBtn />
              </Link>
              <Link to="/services" className={styles.secondaryBtn}>
                Explore Our Services
              </Link>
            </div>
          </div>
          
          <div className={styles.imageSection}>
            <div className={styles.imageWrapper}>
              <img 
                src="https://images.unsplash.com/photo-1560435650-7470e0f9e513?auto=format&fit=crop&w=600&q=80" 
                alt="Professional painting consultation"
                className={styles.ctaImage}
              />
              <div className={styles.imageOverlay}>
                <div className={styles.overlayContent}>
                  <span className={styles.overlayText}>Request Estimate</span>
                  <span className={styles.overlaySubtext}>No Obligation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 