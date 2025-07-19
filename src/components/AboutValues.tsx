import styles from '../styles/AboutValues.module.css';
import { FiHeart, FiTarget, FiAward, FiUsers } from 'react-icons/fi';

const values = [
  {
    icon: <FiHeart />,
    title: "Passion for Quality",
    description: "We approach every project with genuine passion and commitment to delivering exceptional results that exceed expectations."
  },
  {
    icon: <FiTarget />,
    title: "Attention to Detail",
    description: "From surface preparation to final coat, we pay meticulous attention to every detail ensuring flawless finishes."
  },
  {
    icon: <FiAward />,
    title: "Professional Excellence",
    description: "Our team of certified professionals brings years of experience and expertise to every painting project."
  },
  {
    icon: <FiUsers />,
    title: "Customer Focus",
    description: "Your satisfaction is our priority. We work closely with you to understand your vision and bring it to life."
  }
];

export default function AboutValues() {
  return (
    <section className={styles.aboutValues}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.badge}>Our Values</span>
          <h2 className={styles.title}>
            What Makes Us <span className={styles.highlight}>Different</span>
          </h2>
          <p className={styles.subtitle}>
            We believe in building lasting relationships with our clients through transparency, 
            quality workmanship, and exceptional service. Our values guide everything we do.
          </p>
        </div>
        
        <div className={styles.valuesGrid}>
          {values.map((value, index) => (
            <div key={index} className={styles.valueCard}>
              <div className={styles.valueIcon}>{value.icon}</div>
              <h3 className={styles.valueTitle}>{value.title}</h3>
              <p className={styles.valueDescription}>{value.description}</p>
            </div>
          ))}
        </div>
        
        <div className={styles.missionSection}>
          <div className={styles.missionContent}>
            <div className={styles.missionText}>
              <h3 className={styles.missionTitle}>Our Mission</h3>
              <p className={styles.missionDescription}>
                To transform spaces and enhance lives through superior painting services, 
                while building trust and lasting relationships with our community. We strive 
                to be the most reliable and professional painting company in the Bay Area.
              </p>
            </div>
            <div className={styles.missionImage}>
              <img 
                src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=600&q=80" 
                alt="Team working together"
                className={styles.image}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 