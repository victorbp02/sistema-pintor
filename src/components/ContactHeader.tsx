import styles from '../styles/ContactHeader.module.css';
import { MdLocationOn, MdPhone, MdEmail } from 'react-icons/md';

export default function ContactHeader() {
  return (
    <section className={styles.contactHeader}>
      <div className={styles.heroBg}>
        <h1 className={styles.title}>CONTACT US</h1>
      </div>
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
    </section>
  );
} 