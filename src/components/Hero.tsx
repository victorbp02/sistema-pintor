import styles from '../styles/Hero.module.css';
import RequestQuoteBtn from './RequestQuoteBtn';
import { Link } from 'react-router-dom';
import HeroSlider from './HeroSlider';
import { useState } from 'react';
import { FiUser, FiMail, FiPhone, FiHome, FiCalendar, FiMessageSquare, FiDollarSign, FiX, FiMapPin } from 'react-icons/fi';


export default function Hero() {
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    email: '',
    endereco: '',
    servico: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Função para aplicar máscara de telefone (formato americano)
  const applyPhoneMask = (value: string): string => {
    // Remove tudo que não é dígito
    const numbers = value.replace(/\D/g, '');
    
    // Aplica a máscara americana (XXX) XXX-XXXX
    if (numbers.length <= 3) {
      return `(${numbers}`;
    } else if (numbers.length <= 6) {
      return `(${numbers.slice(0, 3)}) ${numbers.slice(3)}`;
    } else if (numbers.length <= 10) {
      return `(${numbers.slice(0, 3)}) ${numbers.slice(3, 6)}-${numbers.slice(6)}`;
    } else {
      return `(${numbers.slice(0, 3)}) ${numbers.slice(3, 6)}-${numbers.slice(6, 10)}`;
    }
  };

  // Função para validar e formatar email
  const formatEmail = (value: string): string => {
    // Remove espaços e converte para minúsculas
    return value.toLowerCase().trim();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    let formattedValue = value;

    // Aplica máscaras específicas baseadas no campo
    if (name === 'telefone') {
      formattedValue = applyPhoneMask(value);
    } else if (name === 'email') {
      formattedValue = formatEmail(value);
    }

    setFormData({ ...formData, [name]: formattedValue });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simular envio para o backend (será implementado depois)
      console.log('Dados do formulário:', formData);
      
      // Simular delay de envio
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Reset form
      setFormData({ 
        nome: '', 
        telefone: '', 
        email: '', 
        endereco: '',
        servico: ''
      });
      
      // Fechar modal se estiver aberto
      setIsModalOpen(false);
      
      // Mostrar mensagem de sucesso
      alert('Orçamento solicitado com sucesso! Entraremos em contato em breve.');
      
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      alert('Erro ao enviar formulário. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Função para lidar com teclas especiais no campo de telefone
  const handlePhoneKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Permite backspace, delete, tab, escape, enter
    if ([8, 9, 27, 13, 46].indexOf(e.keyCode) !== -1 ||
        // Permite Ctrl+A, Ctrl+C, Ctrl+V, Ctrl+X
        (e.keyCode === 65 && e.ctrlKey === true) ||
        (e.keyCode === 67 && e.ctrlKey === true) ||
        (e.keyCode === 86 && e.ctrlKey === true) ||
        (e.keyCode === 88 && e.ctrlKey === true) ||
        // Permite home, end, left, right
        (e.keyCode >= 35 && e.keyCode <= 39)) {
      return;
    }
    
    // Permite apenas números
    if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
      e.preventDefault();
    }
  };

  return (
    <section className={styles.hero}>
      <HeroSlider />

      {/* Formulário de Orçamento de Pintura */}
      <div className={styles.formCard}>
                 <div className={styles.formHeader}>
           <h2>Free Estimate</h2>
         </div>
        
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <div className={styles.inputWrapper}>
                <FiUser className={styles.inputIcon} />
                <input
                  type="text"
                  name="nome"
                  placeholder="Full Name"
                  value={formData.nome}
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
                  name="telefone"
                  placeholder="(650) 420-9772"
                  value={formData.telefone}
                  onChange={handleChange}
                  onKeyDown={handlePhoneKeyDown}
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
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className={styles.formInput}
              />
            </div>
          </div>
          
          <div className={styles.formGroup}>
            <div className={styles.inputWrapper}>
              <FiMapPin className={styles.inputIcon} />
              <input
                type="text"
                name="endereco"
                placeholder="Complete Address"
                value={formData.endereco}
                onChange={handleChange}
                required
                className={styles.formInput}
              />
            </div>
          </div>
          
          <div className={styles.formGroup}>
            <div className={styles.inputWrapper}>
              <FiHome className={styles.inputIcon} />
              <select
                name="servico"
                value={formData.servico}
                onChange={handleChange}
                required
                className={styles.formSelect}
              >
                <option value="">Select Service</option>
                <option value="pintura-residencial">Residential Painting</option>
                <option value="pintura-comercial">Commercial Painting</option>
                <option value="pintura-exterior">Exterior Painting</option>
                <option value="pintura-interior">Interior Painting</option>
                <option value="textura">Texture</option>
                <option value="manutencao">Maintenance</option>
                <option value="outro">Other</option>
              </select>
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
        <button 
          type="button" 
          className={styles.heroBtn}
          onClick={openModal}
        >
          <RequestQuoteBtn />
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
                         <div className={styles.modalHeader}>
               <h3>Free Estimate</h3>
               <button className={styles.closeBtn} onClick={closeModal}>
                 <FiX />
               </button>
             </div>
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <div className={styles.inputWrapper}>
                    <FiUser className={styles.inputIcon} />
                                         <input
                       type="text"
                       name="nome"
                       placeholder="Full Name"
                       value={formData.nome}
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
                       name="telefone"
                       placeholder="(650) 420-9772"
                       value={formData.telefone}
                       onChange={handleChange}
                       onKeyDown={handlePhoneKeyDown}
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
                     placeholder="Email Address"
                     value={formData.email}
                     onChange={handleChange}
                     required
                     className={styles.formInput}
                   />
                 </div>
               </div>
               
               <div className={styles.formGroup}>
                 <div className={styles.inputWrapper}>
                   <FiMapPin className={styles.inputIcon} />
                   <input
                     type="text"
                     name="endereco"
                     placeholder="Complete Address"
                     value={formData.endereco}
                     onChange={handleChange}
                     required
                     className={styles.formInput}
                   />
                 </div>
               </div>
               
               <div className={styles.formGroup}>
                 <div className={styles.inputWrapper}>
                   <FiHome className={styles.inputIcon} />
                   <select
                     name="servico"
                     value={formData.servico}
                     onChange={handleChange}
                     required
                     className={styles.formSelect}
                   >
                     <option value="">Select Service</option>
                     <option value="pintura-residencial">Residential Painting</option>
                     <option value="pintura-comercial">Commercial Painting</option>
                     <option value="pintura-exterior">Exterior Painting</option>
                     <option value="pintura-interior">Interior Painting</option>
                     <option value="textura">Texture</option>
                     <option value="manutencao">Maintenance</option>
                     <option value="outro">Other</option>
                   </select>
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
        </div>
      )}
    </section>
  );
}
