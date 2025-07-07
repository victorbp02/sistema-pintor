import styles from '../styles/ContactIntro.module.css';

export default function ContactIntro() {
  return (
    <div className={styles.introWrapper}>
      <p className={styles.introText}>
        Are you interested in getting an estimate for exterior or interior painting in The Bay Area, CA or the surrounding areas? Don't hesitate to give the <span className={styles.highlight}>Bay Area painting contractors</span> a call! We'll be happy to schedule your free consultation. For your convenience, we've also included an online form below you can fill out to get started.
      </p>
      <img src="/logo-barbour.png" alt="Barbour Painting" className={styles.logo} />
    </div>
  );
} 