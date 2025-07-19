import styles from '../styles/AboutHero.module.css';
import { FiAward, FiUsers, FiMapPin, FiShield } from 'react-icons/fi';

const stats = [
  { icon: <FiAward />, number: "15+", label: "Years of Experience" },
  { icon: <FiUsers />, number: "500+", label: "Happy Customers" },
  { icon: <FiMapPin />, number: "50+", label: "Cities Served" },
  { icon: <FiShield />, number: "100%", label: "Licensed & Insured" },
];

export default function AboutHero() {
  return (
    <section className={styles.aboutHero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textSection}>
            <span className={styles.badge}>About Barbour Painting</span>
            <h1 className={styles.title}>
              The Bay Area's Most Trusted <span className={styles.highlight}>Painting Company</span>
            </h1>
            <p className={styles.subtitle}>
              With over 15 years of experience serving the Greater Bay Area, we've built our reputation on quality workmanship, 
              exceptional customer service, and attention to detail. Our team of professional painters is committed to transforming 
              your vision into reality.
            </p>
            <p className={styles.description}>
              From residential homes to commercial properties, we handle every project with the same level of care and professionalism. 
              Our commitment to using only the highest-quality materials and paints ensures that your investment will last for years to come.
            </p>
          </div>
          <div className={styles.imageSection}>
            <div className={styles.imageWrapper}>
              <img 
                src="https://images.unsplash.com/photo-1560435650-7470e0f9e513?auto=format&fit=crop&w=800&q=80" 
                alt="Professional painting team at work"
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