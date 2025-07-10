import styles from '../styles/ContactIntro.module.css';
import { MdLocationOn, MdPhone, MdEmail } from 'react-icons/md';

export default function ContactIntro() {
  return (
    <div className={styles.introWrapper}>
      <div className={styles.infoRow}>
        <div className={styles.infoItem}>
          <MdLocationOn className={styles.icon} />
          <div>
            <strong>1001 Shary Circle Suite 13,<br />Concord, CA 94518</strong>
          </div>
        </div>
        <div className={styles.infoItem}>
          <MdPhone className={styles.icon} />
          <div>
            <strong>925-326-6064</strong>
          </div>
        </div>
        <div className={styles.infoItem}>
          <MdEmail className={styles.icon} />
          <div>
            <strong>aaron@barbourpainting.com</strong>
          </div>
        </div>
      </div>
      <p className={styles.introText}>
        Are you interested in getting an estimate for exterior or interior painting in The Bay Area, CA or the surrounding areas? Don't hesitate to give the <span className={styles.highlight}>Bay Area painting contractors</span> a call! We'll be happy to schedule your free consultation. For your convenience, we've also included an online form below you can fill out to get started.
      </p>
      <img src="/logo-barbour.png" alt="Barbour Painting" className={styles.logo} />
    </div>
  );
} 