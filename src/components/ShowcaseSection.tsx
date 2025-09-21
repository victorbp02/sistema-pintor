import styles from '../styles/ShowcaseSection.module.css';
import processofoto from '../assets/processofoto.jpeg';
import { useState, useEffect, useRef } from 'react';
import { Modal, Box, Typography, Button } from '@mui/material';

export default function ShowcaseSection() {
  const [open, setOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90vw',
    maxWidth: 800,
    maxHeight: '90vh',
    bgcolor: 'background.paper',
    border: 'none',
    borderRadius: '16px',
    boxShadow: 24,
    p: 2,
    outline: 'none',
  };

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          console.log('ShowcaseSection slide-in ativado');
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, []);

  return (
    <section 
      data-aos="fade-up"
      data-aos-duration="1200"
      data-aos-delay="200"
      className={`${styles.showcase} showcaseSection`}
    >
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Textos em cima */}
          <div className={styles.textSection}>
            <h2 className={styles.title}>Our Process</h2>
            <p className={styles.description}>
              Excellence in painting requires more than skill—it demands a structured methodology. 
              Our refined process ensures every project meets the highest standards of quality and craftsmanship.
              We believe that exceptional results come from a systematic approach that combines expertise, 
              attention to detail, and unwavering commitment to customer satisfaction.
            </p>
            <p className={styles.subDescription}>
              From initial consultation to final inspection, every step is carefully planned and executed 
              with precision. Our team of certified professionals follows industry best practices while 
              incorporating innovative techniques that guarantee lasting beauty and protection for your property.
              We use only premium materials and state-of-the-art equipment to deliver results that exceed expectations.
            </p>
            <div className={styles.processSteps}>
              <div className={styles.step}>
                <span className={styles.stepNumber}>1</span>
                <div className={styles.stepContent}>
                  <h3>Strategic Assessment</h3>
                  <p>Comprehensive evaluation of your space, requirements, and vision to create a tailored solution. Our experts conduct thorough inspections, analyze surface conditions, and discuss your specific needs to develop a customized plan that perfectly matches your expectations and budget.</p>
                </div>
              </div>
              <div className={styles.step}>
                <span className={styles.stepNumber}>2</span>
                <div className={styles.stepContent}>
                  <h3>Precision Planning</h3>
                  <p>Meticulous project design with premium material selection and timeline optimization. We carefully choose the perfect paints, primers, and finishes for your specific surfaces and environmental conditions, ensuring optimal durability and aesthetic appeal.</p>
                </div>
              </div>
              <div className={styles.step}>
                <span className={styles.stepNumber}>3</span>
                <div className={styles.stepContent}>
                  <h3>Expert Execution</h3>
                  <p>Master craftsmen deliver superior results using advanced techniques and premium materials. Our skilled team applies professional-grade equipment and proven methodologies to achieve flawless finishes that enhance your space's beauty and value.</p>
                </div>
              </div>
              <div className={styles.step}>
                <span className={styles.stepNumber}>4</span>
                <div className={styles.stepContent}>
                  <h3>Quality Assurance</h3>
                  <p>Rigorous final inspection ensures perfection and your complete satisfaction. We conduct detailed quality checks, address any concerns, and provide comprehensive cleanup to leave your space immaculate and ready for enjoyment.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Imagem abaixo dos cards */}
          <div className={styles.imageSection}>
            <div className={styles.projectCard}>
              <div className={styles.imageContainer} onClick={handleOpen}>
                <img src={processofoto} alt="Our Painting Process" className={styles.projectImage} />
                <div className={styles.imageOverlay}>
                  <span className={styles.clickText}>click to enlarge</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <img 
            src={processofoto} 
            alt="Our Painting Process" 
            style={{
              width: '100%',
              height: 'auto',
              maxHeight: '80vh',
              objectFit: 'contain',
              borderRadius: '12px'
            }}
          />
        </Box>
      </Modal>
    </section>
  );
} 