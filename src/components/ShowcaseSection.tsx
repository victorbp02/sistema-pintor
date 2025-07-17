import styles from '../styles/ShowcaseSection.module.css';
import { Link } from 'react-router-dom';
import beforeImg from '../../src/assets/bannerPrincipal.jpeg';
import afterImg from '../../src/assets/bannerPrincipal.jpeg';
import RequestQuoteBtn from './RequestQuoteBtn';

export default function ShowcaseSection() {
  return (
    <section className={styles.showcase}>
      <div className={styles.imagesCol}>
        <div className={styles.imgBox}>
          <img src={beforeImg} alt="Before" className={styles.img} />
          <span className={styles.label}>BEFORE</span>
        </div>
        <div className={styles.imgBox}>
          <img src={afterImg} alt="After" className={styles.img} />
          <span className={styles.label}>AFTER</span>
        </div>
      </div>
      <div className={styles.textCol}>
        <span className={styles.smallTitle}>Barbour Painting</span>
        <h2 className={styles.bigTitle}>The Go-to Bay Area Painters</h2>
        <p className={styles.text}>Painting projects can be daunting. You need to find the right team for the job, pick the paint color and texture, then supervise the work—to say nothing of cleaning up the mess after.</p>
        <p className={styles.text}>With Barbour Painting, your next painting job will be a breeze. We are a Bay Area painting company serving residential and commercial customers throughout the Greater Bay Area. Our team of Bay Area painters provides a wide range of interior and exterior painting services, and we take care of everything, from the initial call all the way through project completion and site clean-up.</p>
        <p className={styles.text}>We will work directly with you and only call the job "finished" once you are happy with the final result. If you want full transparency, zero micromanagement, and top-quality workmanship, we are the team for you.</p>
        <Link to="/contact">
          <RequestQuoteBtn />
        </Link>\  
      </div>
    </section>
  );
} 