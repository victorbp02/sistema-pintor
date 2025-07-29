import styles from '../styles/PartnersSection.module.css';

export default function PartnersSection() {
  return (
    <div className={styles.partnersSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Nossos Parceiros</h2>
        <div className={styles.logosContainer}>
          <div className={styles.logo}>
            <div className={styles.logoPlaceholder}>
              <span>Logo 1</span>
            </div>
          </div>
          <div className={styles.logo}>
            <div className={styles.logoPlaceholder}>
              <span>Logo 2</span>
            </div>
          </div>
          <div className={styles.logo}>
            <div className={styles.logoPlaceholder}>
              <span>Logo 3</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 