import styles from '../styles/ServicesSection.module.css';
import { MdFormatPaint } from 'react-icons/md';
import { Link } from 'react-router-dom';
import ServicesGridSec from './ServicesGridSec';



export default function ServicesSection() {
  return (
    <section className={styles.servicesBg}>
      <div className={styles.topDecor}>
        <MdFormatPaint size={50} className={styles.bgIcon} />
      </div>
      <div className={styles.container}>
        <div className={styles.topArea}>
          <h2 className={styles.title}>
            Our Professional <span className={styles.highlight}>Painting Services</span>
          </h2>
          <p className={styles.subtitle}>
            Damaged drywall? Ugly-looking old kitchen cabinets? Moldy façade? Our expert Bay Area painters will take care of it all for you.
          </p>
          <Link to="/contact" className={styles.ctaBtnOutline}>
            <span>
              <MdFormatPaint size={18} style={{marginRight: 8}} /> Request A Quote
            </span>
          </Link>
        </div>
        <ServicesGridSec/>
      </div>
    </section>
  );
} 