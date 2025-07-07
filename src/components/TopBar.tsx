import { MdLocationOn, MdPhone, MdEmail } from 'react-icons/md';
import styles from '../styles/TopBar.module.css';

export default function TopBar() {
  return (
    <div className={styles.topbar}>
      <span className={styles.item}>
        <MdLocationOn size={20} />
        1001 Shary Cir suite 13, Concord, CA 94518, United States
      </span>
      <span className={styles.item}>
        <MdPhone size={20} />
        925-822-3003
      </span>
      <span className={styles.item}>
        <MdEmail size={20} />
        aaron@barbourpainting.com
      </span>
    </div>
  );
}
