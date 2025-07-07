import styles from '../styles/Navbar.module.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.logoArea}>
        <img src="/logo-barbour.png" alt="Barbour Painting" className={styles.logo} />
      </div>
      <nav className={styles.menuArea}>
        <ul className={styles.menu}>
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/about-us">ABOUT US</Link></li>
          <li><Link to="/services">SERVICES</Link></li>
          <li><Link to="/locations">LOCATIONS</Link></li>
          <li><Link to="/portfolio">PORTFOLIO</Link></li>
          <li><Link to="/reviews">REVIEWS</Link></li>
          <li><Link to="/blog">BLOG</Link></li>
          <li><Link to="/contact">CONTACT US</Link></li>
        </ul>
      </nav>
      <div className={styles.buttonArea}>
        <Link to="/contact" className={styles.quoteBtn}>
          Request A Quote <span className={styles.iconMail}>✉️</span>
        </Link>
      </div>
    </header>
  );
} 