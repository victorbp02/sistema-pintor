import styles from '../styles/ShowcaseSection.module.css';
import processofoto from '../assets/processofoto.jpeg';

export default function ShowcaseSection() {
  return (
    <section className={styles.showcase}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textSection}>
            <h2 className={styles.title}>Our Process</h2>
            <p className={styles.description}>
              Excellence in painting requires more than skill—it demands a structured methodology. 
              Our refined process ensures every project meets the highest standards of quality and craftsmanship.
            </p>
            <div className={styles.processSteps}>
              <div className={styles.step}>
                <span className={styles.stepNumber}>1</span>
                <div className={styles.stepContent}>
                  <h3>Strategic Assessment</h3>
                  <p>Comprehensive evaluation of your space, requirements, and vision to create a tailored solution.</p>
                </div>
              </div>
              <div className={styles.step}>
                <span className={styles.stepNumber}>2</span>
                <div className={styles.stepContent}>
                  <h3>Precision Planning</h3>
                  <p>Meticulous project design with premium material selection and timeline optimization.</p>
                </div>
              </div>
              <div className={styles.step}>
                <span className={styles.stepNumber}>3</span>
                <div className={styles.stepContent}>
                  <h3>Expert Execution</h3>
                  <p>Master craftsmen deliver superior results using advanced techniques and premium materials.</p>
                </div>
              </div>
              <div className={styles.step}>
                <span className={styles.stepNumber}>4</span>
                <div className={styles.stepContent}>
                  <h3>Quality Assurance</h3>
                  <p>Rigorous final inspection ensures perfection and your complete satisfaction.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className={styles.projectShowcase}>
            <div className={styles.projectCard}>
              <div className={styles.imageContainer}>
                <img src={processofoto} alt="Processo" className={styles.projectImage} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 