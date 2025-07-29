import React from 'react';
import styles from '../styles/WhyChooseUsSection.module.css';
import { FiAward, FiUsers, FiClock, FiShield, FiCheckCircle, FiStar } from 'react-icons/fi';

export default function WhyChooseUsSection() {
  return (
    <section className={styles.whyChooseUs}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.badge}>
            <FiStar className={styles.badgeIcon} />
            <span>Por que escolher a Sistema Pintor?</span>
          </div>
          <h2 className={styles.title}>
            <span className={styles.highlight}>Experiência</span> e <span className={styles.highlight}>Compromisso</span> em Cada Projeto
          </h2>
          <p className={styles.subtitle}>
            Descubra os diferenciais que nos tornam a escolha certa para seu projeto
          </p>
        </div>

        <div className={styles.reasonsGrid}>
          <div className={styles.reasonCard}>
            <div className={styles.reasonIcon}>
              <FiAward />
            </div>
            <h3>15+ Anos de Experiência</h3>
            <p>
              Mais de uma década de expertise em pintura profissional, 
              com centenas de projetos concluídos com sucesso na Bay Area.
            </p>
            <div className={styles.reasonStats}>
              <span>500+ Projetos</span>
              <span>98% Satisfação</span>
            </div>
          </div>

          <div className={styles.reasonCard}>
            <div className={styles.reasonIcon}>
              <FiUsers />
            </div>
            <h3>Equipe Qualificada</h3>
            <p>
              Profissionais certificados e treinados nas melhores técnicas, 
              garantindo qualidade superior em cada detalhe do projeto.
            </p>
            <div className={styles.reasonStats}>
              <span>Especialistas</span>
              <span>Certificados</span>
            </div>
          </div>

          <div className={styles.reasonCard}>
            <div className={styles.reasonIcon}>
              <FiShield />
            </div>
            <h3>Garantia Total</h3>
            <p>
              Oferecemos garantia completa em todos os nossos serviços, 
              proporcionando tranquilidade e confiança total aos nossos clientes.
            </p>
            <div className={styles.reasonStats}>
              <span>100% Garantia</span>
              <span>Suporte 24/7</span>
            </div>
          </div>

          <div className={styles.reasonCard}>
            <div className={styles.reasonIcon}>
              <FiClock />
            </div>
            <h3>Prazos Cumpridos</h3>
            <p>
              Compromisso com cronogramas e comunicação transparente, 
              mantendo você informado em cada etapa do projeto.
            </p>
            <div className={styles.reasonStats}>
              <span>Pontualidade</span>
              <span>Transparência</span>
            </div>
          </div>

          <div className={styles.reasonCard}>
            <div className={styles.reasonIcon}>
              <FiCheckCircle />
            </div>
            <h3>Materiais Premium</h3>
            <p>
              Utilizamos apenas materiais de primeira linha e técnicas 
              profissionais para garantir durabilidade e acabamento perfeito.
            </p>
            <div className={styles.reasonStats}>
              <span>Qualidade Premium</span>
              <span>Durabilidade</span>
            </div>
          </div>

          <div className={styles.reasonCard}>
            <div className={styles.reasonIcon}>
              <FiStar />
            </div>
            <h3>Atendimento Personalizado</h3>
            <p>
              Cada projeto é único e recebe atenção especial, 
              desde o orçamento até a finalização e limpeza completa.
            </p>
            <div className={styles.reasonStats}>
              <span>Personalizado</span>
              <span>Dedicação</span>
            </div>
          </div>
        </div>

        <div className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <h3>Pronto para começar seu projeto?</h3>
            <p>Entre em contato conosco e descubra como podemos transformar seu espaço</p>
          </div>
          <div className={styles.ctaButtons}>
            <a href="/contact" className={styles.primaryButton}>
              Solicitar Orçamento
            </a>
            <a href="/about-us" className={styles.secondaryButton}>
              Conheça Mais
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 