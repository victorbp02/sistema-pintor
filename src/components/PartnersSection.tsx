import styles from '../styles/PartnersSection.module.css';

// Importar imagens diretamente
import pcaLogo from '../assets/PCA_logo_123.png';
import sherwinWilliams from '../assets/sherwin_williams_no_outer_bg.png';
import benjaminMoore from '../assets/Benjamin_Moore 123novaversao.png';
import dunnEdwards from '../assets/dunn_edwards_no_outer_bg.png';

export default function PartnersSection() {
  return (
    <div className={styles.partnersSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Our Partners</h2>
        <div className={styles.logosContainer}>
          <div className={styles.logo}>
            <img 
              src={pcaLogo} 
              alt="Benjamin Moore" 
              className={styles.logoImage}
            />
          </div>
          <div className={styles.logo}>
            <img 
              src={sherwinWilliams} 
              alt="Sherwin Williams" 
              className={styles.logoImage}
            />
          </div>
          <div className={styles.logo}>
            <img 
              src={benjaminMoore} 
              alt="PCA" 
              className={styles.logoImage}
            />
          </div>
          <div className={styles.logo}>
            <img 
              src={dunnEdwards} 
              alt="Dunn Edwards" 
              className={styles.logoImage}
            />
          </div>
        </div>
      </div>
    </div>
  );
} 