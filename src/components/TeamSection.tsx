import styles from '../styles/TeamSection.module.css';
import { FiShield, FiMapPin, FiAward, FiUsers, FiSearch, FiCheckCircle, FiStar, FiMail } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const benefits = [
  { icon: <FiShield />, text: 'We are licensed and insured' },
  { icon: <FiMapPin />, text: 'We are locally owned and operated' },
  { icon: <FiAward />, text: 'We work with the highest-quality materials and paints' },
  { icon: <FiUsers />, text: 'We value trust and relationships above all' },
  { icon: <FiSearch />, text: 'We are extremely detail-oriented' },
  { icon: <FiCheckCircle />, text: 'We take pride in our work' },
  { icon: <FiStar />, text: 'We deliver exceptional customer service' },
];

export default function TeamSection() {
  return (
    <section className={styles.teamSection}>
      <div className={styles.container}>
        {/* Coluna Esquerda */}
        <div className={styles.left}>
          <h2 className={styles.title}>
            <span>Team Up with the Best</span><br />
            <span className={styles.titleBlue}>Bay Area Painters</span>
          </h2>
          <img
            src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80"
            alt="Team of painters"
            className={styles.teamImg}
          />
          <Link to="/contact" className={styles.ctaBtn}>
            Request A Quote <FiMail className={styles.mailIcon} />
          </Link>
        </div>
        {/* Coluna Direita */}
        <div className={styles.right}>
          <ul className={styles.benefitsList}>
            {benefits.map((b, i) => (
              <li className={styles.benefitItem} key={i}>
                <span className={styles.benefitIcon}>{b.icon}</span>
                <span className={styles.benefitText}>{b.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
} 