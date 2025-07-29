import styles from '../styles/ServicesSection.module.css';
import ServicesGridSec from './ServicesGridSec';

export default function ServicesSection() {
  return (
    <section className={styles.servicesBg}>
      <div className={styles.container}>
        <div className={styles.topArea}>
          <h2 className={styles.title}>
            Our Professional <span className={styles.highlight}>Painting Services</span>
          </h2>
          <p className={styles.subtitle}>
            Damaged drywall? Ugly-looking old kitchen cabinets? Moldy façade? Our expert Bay Area painters will take care of it all for you.
          </p>
          
        </div>
        <ServicesGridSec/>
      </div>
    </section>
  );
} 