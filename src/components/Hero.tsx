import styles from '../styles/Hero.module.css';
import RequestQuoteBtn from './RequestQuoteBtn';
import { Link } from 'react-router-dom';
import HeroSlider from './HeroSlider';
import { useState } from 'react';
import { FiUser, FiMail, FiPhone, FiHome, FiCalendar, FiMessageSquare, FiDollarSign } from 'react-icons/fi';

export default function Hero() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    projectSize: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simular envio
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Form data:', formData);
    // Aqui você pode enviar para um backend futuramente
    
    setIsSubmitting(false);
    // Reset form
    setFormData({ 
      name: '', 
      email: '', 
      phone: '', 
      serviceType: '', 
      projectSize: '', 
      message: '' 
    });
  };

  return (
    <section className={styles.hero}>
      <HeroSlider />

      {/* Formulário de Orçamento de Pintura */}
      <div className={styles.formCard}>
        <div className={styles.formHeader}>
          <h2>Orçamento Gratuito</h2>
        </div>
        
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <div className={styles.inputWrapper}>
                <FiUser className={styles.inputIcon} />
                <input
                  type="text"
                  name="name"
                  placeholder="Nome completo"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={styles.formInput}
                />
              </div>
            </div>
            
            <div className={styles.formGroup}>
              <div className={styles.inputWrapper}>
                <FiPhone className={styles.inputIcon} />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Telefone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className={styles.formInput}
                />
              </div>
            </div>
          </div>
          
          <div className={styles.formGroup}>
            <div className={styles.inputWrapper}>
              <FiMail className={styles.inputIcon} />
              <input
                type="email"
                name="email"
                placeholder="E-mail"
                value={formData.email}
                onChange={handleChange}
                required
                className={styles.formInput}
              />
            </div>
          </div>
          
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <div className={styles.inputWrapper}>
                <FiHome className={styles.inputIcon} />
                <select
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                  required
                  className={styles.formSelect}
                >
                  <option value="">Tipo de serviço</option>
                  <option value="residential">Residencial</option>
                  <option value="commercial">Comercial</option>
                  <option value="exterior">Pintura Externa</option>
                  <option value="interior">Pintura Interna</option>
                  <option value="texture">Textura</option>
                  <option value="maintenance">Manutenção</option>
                </select>
              </div>
            </div>
            
            <div className={styles.formGroup}>
              <div className={styles.inputWrapper}>
                <FiCalendar className={styles.inputIcon} />
                <select
                  name="projectSize"
                  value={formData.projectSize}
                  onChange={handleChange}
                  required
                  className={styles.formSelect}
                >
                  <option value="">Tamanho do projeto</option>
                  <option value="small">Pequeno (1-2 cômodos)</option>
                  <option value="medium">Médio (3-5 cômodos)</option>
                  <option value="large">Grande (6+ cômodos)</option>
                  <option value="house">Casa completa</option>
                  <option value="commercial">Comercial</option>
                </select>
              </div>
            </div>
          </div>
          
          <div className={styles.formGroup}>
            <div className={styles.inputWrapper}>
              <FiMessageSquare className={styles.inputIcon} />
              <textarea
                name="message"
                placeholder="Project details, desired colors..."
                rows={3}
                value={formData.message}
                onChange={handleChange}
                className={styles.formTextarea}
              />
            </div>
          </div>
          
          <button 
            type="submit" 
            className={`${styles.submitBtn} ${isSubmitting ? styles.submitting : ''}`}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <div className={styles.spinner}></div>
                Sending...
              </>
            ) : (
              <>
                <div className={styles.btnContent}>
                  <FiDollarSign className={styles.btnIcon} />
                  <span className={styles.btnText}>Request Estimate</span>
                </div>
                <div className={styles.btnLiquid}></div>
              </>
            )}
          </button>
        </form>
      </div>

      {/* Texto e Botão padrão */}
      <div className={styles.heroContent}>
        <h1>
          TOP-RATED PROFESSIONAL<br />BAY AREA PAINTERS
        </h1>
        <p>
          Ready to give your home or business a makeover with a fresh coat of paint?
        </p>
        <Link to="/contact" className={styles.heroBtn}>
          <RequestQuoteBtn />
        </Link>
      </div>
    </section>
  );
}
