import styles from '../styles/TeamSection.module.css';
import { FiDroplet, FiEdit, FiEye, FiHeart, FiStar, FiCheckCircle, FiMail } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import RequestQuoteBtn from './RequestQuoteBtn';
import paletadecores from '../assets/paletadecores.jpeg';

const colorServices = [
  { icon: <FiDroplet />, text: 'Professional color consultation' },
  { icon: <FiEdit />, text: 'Sample testing in your space' },
  { icon: <FiEye />, text: 'Lighting analysis and color theory' },
  { icon: <FiHeart />, text: 'Personalized color solutions' },
  { icon: <FiStar />, text: 'Trend awareness and timeless classics' },
  { icon: <FiCheckCircle />, text: 'Premium quality paints and materials' },
  { icon: <FiMail />, text: 'Free color consultation available' },
];

export default function TeamSection() {
  return (
    <section className={styles.teamSection}>
      <div className={styles.container}>
        {/* Coluna Esquerda */}
        <div className={styles.left}>
          <h2 className={styles.title}>
            <span>Transform Your Space with</span><br />
            <span className={styles.titleBlue}>Perfect Colors</span>
          </h2>
          <img
            src={paletadecores}
            alt="Professional Color Palette"
            className={styles.teamImg}
          />
          <Link to="/contact">
            <RequestQuoteBtn />
          </Link>
        </div>
        {/* Coluna Direita */}
        <div className={styles.right}>
          <ul className={styles.benefitsList}>
            {colorServices.map((service, i) => (
              <li className={styles.benefitItem} key={i}>
                <span className={styles.benefitIcon}>{service.icon}</span>
                <span className={styles.benefitText}>{service.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
} 