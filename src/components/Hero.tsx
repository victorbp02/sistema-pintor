import styles from '../styles/Hero.module.css';
import RequestQuoteBtn from './RequestQuoteBtn';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <h1>
        TOP-RATED PROFESSIONAL<br />BAY AREA PAINTERS
      </h1>
      <p>
        Ready to give your home or business a makeover with a fresh coat of paint?
      </p>
      <Link to="/contact" className={styles.heroBtn}>
        <RequestQuoteBtn/>
      </Link>
    </section>
  );
} 