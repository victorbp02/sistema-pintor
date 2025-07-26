import styles from '../styles/Hero.module.css';
import RequestQuoteBtn from './RequestQuoteBtn';
import { Link } from 'react-router-dom';
import HeroSlider from './HeroSlider';
import { useState } from 'react';

export default function Hero() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form data:', formData);
    // Aqui você pode enviar para um backend futuramente
  };

  return (
    <section className={styles.hero}>
      <HeroSlider />

      {/* Formulário Transparente */}
      <div className={styles.formCard}>
        <h2>Solicite um Orçamento</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <input
              type="text"
              name="name"
              placeholder="Seu nome"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <input
              type="email"
              name="email"
              placeholder="Seu e-mail"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <input
              type="tel"
              name="phone"
              placeholder="Seu telefone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <textarea
              name="message"
              placeholder="Escreva sua mensagem"
              rows={3}
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className={styles.submitBtn}>
            Enviar
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
