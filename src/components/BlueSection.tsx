import styles from '../styles/BlueSection.module.css';

export default function BlueSection() {
  return (
    <section 
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay="100"
      className={`${styles.blueSection} blueSection`}
    >
      <div className={styles.centerImg}></div>
    </section>
  );
} 