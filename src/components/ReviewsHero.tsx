import styles from '../styles/ReviewsHero.module.css';
import { FiStar, FiUsers, FiAward } from 'react-icons/fi';

const stats = [
  { icon: <FiStar />, number: "4.9", label: "Average Rating" },
  { icon: <FiUsers />, number: "500+", label: "Happy Customers" },
  { icon: <FiAward />, number: "15+", label: "Years of Excellence" },
];

export default function ReviewsHero() {
  return (
    <section className={styles.reviewsHero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textSection}>
            <span className={styles.badge}>Customer Reviews</span>
            <h1 className={styles.title}>
              What Our <span className={styles.highlight}>Customers Say</span>
            </h1>
            <p className={styles.subtitle}>
              Don't just take our word for it. Read what our satisfied customers have to say about 
              their experience with Barbour Painting. We're proud of our reputation for quality work 
              and exceptional service.
            </p>
            <div className={styles.ratingSection}>
              <div className={styles.stars}>
                {[...Array(5)].map((_, i) => (
                  <FiStar key={i} className={styles.star} />
                ))}
              </div>
              <span className={styles.ratingText}>4.9 out of 5 stars</span>
              <span className={styles.reviewCount}>Based on 500+ reviews</span>
            </div>
          </div>
          <div className={styles.imageSection}>
            <div className={styles.imageWrapper}>
              <img 
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=800&q=80" 
                alt="Happy customer with painted home"
                className={styles.heroImage}
              />
            </div>
          </div>
        </div>
        
        <div className={styles.statsGrid}>
          {stats.map((stat, index) => (
            <div key={index} className={styles.statCard}>
              <div className={styles.statIcon}>{stat.icon}</div>
              <div className={styles.statNumber}>{stat.number}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 