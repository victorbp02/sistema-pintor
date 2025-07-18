import styles from '../styles/Navbar.module.css';
import { Link } from 'react-router-dom';
import RequestQuoteBtn from './RequestQuoteBtn';

export default function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.logoArea}>
        <div className={styles.logo} ></div>
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
        <Link to="/contact">
          <RequestQuoteBtn/>
        </Link>
      </div>
    </header>
  );
} 