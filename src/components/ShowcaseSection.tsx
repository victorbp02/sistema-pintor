import styles from '../styles/ShowcaseSection.module.css';
import { Link } from 'react-router-dom';
import { FiStar, FiArrowRight, FiCheckCircle } from 'react-icons/fi';
import beforeImg from '../../src/assets/bannerPrincipal.jpeg';
import afterImg from '../../src/assets/bannerPrincipal.jpeg';

export default function ShowcaseSection() {
  return (
    <section className={styles.showcase}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.badge}>
            <FiStar className={styles.badgeIcon} />
            <span>15+ Anos de Excelência</span>
          </div>
          <h2 className={styles.title}>
            <span className={styles.highlight}>Confiança</span> e <span className={styles.highlight}>Qualidade</span> em Cada Projeto
          </h2>
          <p className={styles.subtitle}>
            Especialistas em pintura residencial, comercial e industrial na Bay Area
          </p>
        </div>

        <div className={styles.companyInfo}>
          <div className={styles.infoCard}>
            <h3>Sobre a Sistema Pintor</h3>
            <p>
              Com mais de 15 anos de experiência no mercado, somos referência em pintura profissional 
              na Bay Area. Nossa missão é entregar resultados excepcionais através de trabalho 
              meticuloso, materiais premium e atendimento personalizado. Cada projeto é tratado 
              com a mesma dedicação, garantindo satisfação total e durabilidade superior.
            </p>
            <div className={styles.statsRow}>
              <div className={styles.stat}>
                <span className={styles.statNumber}>500+</span>
                <span className={styles.statLabel}>Projetos Concluídos</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>98%</span>
                <span className={styles.statLabel}>Clientes Satisfeitos</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>100%</span>
                <span className={styles.statLabel}>Garantia</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.content}>
          <div className={styles.projectShowcase}>
            <div className={styles.projectCard}>
              <div className={styles.imageContainer}>
                <img src={beforeImg} alt="Antes" className={styles.projectImage} />
                <div className={styles.imageOverlay}>
                  <span className={styles.imageLabel}>ANTES</span>
                </div>
              </div>
              <div className={styles.projectInfo}>
                <h3>Projeto Residencial Premium</h3>
                <p>Casa de luxo em São Francisco - Transformação completa</p>
                <div className={styles.projectDetails}>
                  <span className={styles.detail}>Interior & Exterior</span>
                  <span className={styles.detail}>Técnicas Profissionais</span>
                  <span className={styles.detail}>Materiais Premium</span>
                </div>
              </div>
            </div>

            <div className={styles.projectCard}>
              <div className={styles.imageContainer}>
                <img src={afterImg} alt="Depois" className={styles.projectImage} />
                <div className={styles.imageOverlay}>
                  <span className={styles.imageLabel}>DEPOIS</span>
                </div>
              </div>
              <div className={styles.projectInfo}>
                <h3>Resultado Excepcional</h3>
                <p>Acabamento perfeito com durabilidade garantida</p>
                <div className={styles.projectDetails}>
                  <span className={styles.detail}>Garantia 3 Anos</span>
                  <span className={styles.detail}>Cliente 100% Satisfeito</span>
                  <span className={styles.detail}>Certificado de Qualidade</span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.features}>
            <div className={styles.feature}>
              <FiCheckCircle className={styles.featureIcon} />
              <div className={styles.featureContent}>
                <h4>Garantia de Qualidade</h4>
                <p>Materiais premium e técnicas profissionais certificadas</p>
              </div>
            </div>
            
            <div className={styles.feature}>
              <FiCheckCircle className={styles.featureIcon} />
              <div className={styles.featureContent}>
                <h4>Compromisso com Prazos</h4>
                <p>Projetos entregues no prazo com comunicação transparente</p>
              </div>
            </div>
            
            <div className={styles.feature}>
              <FiCheckCircle className={styles.featureIcon} />
              <div className={styles.featureContent}>
                <h4>Limpeza Profissional</h4>
                <p>Ambiente entregue impecável e pronto para uso</p>
              </div>
            </div>
          </div>

          <div className={styles.ctaSection}>
            <div className={styles.ctaContent}>
              <h3>Confie seu projeto aos especialistas</h3>
              <p>Orçamento gratuito e sem compromisso - Garantia de satisfação</p>
            </div>
            <Link to="/contact" className={styles.ctaButton}>
              <span>Solicitar Orçamento Gratuito</span>
              <FiArrowRight className={styles.ctaIcon} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
} 