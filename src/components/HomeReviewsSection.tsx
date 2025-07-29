import styles from '../styles/HomeReviewsSection.module.css';
import { FiStar, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useState, useEffect } from 'react';

const reviews = [
  {
    name: "Maria Silva",
    review: "Excelente trabalho! A equipe foi muito profissional e o resultado ficou perfeito.",
    rating: 5
  },
  {
    name: "João Santos",
    review: "Incrível atenção aos detalhes. Transformaram completamente nossa casa.",
    rating: 5
  },
  {
    name: "Ana Costa",
    review: "Profissionais de primeira linha. O resultado superou nossas expectativas.",
    rating: 5
  },
  {
    name: "Carlos Mendes",
    review: "Serviço excepcional! Muito pontual e o resultado ficou incrível.",
    rating: 5
  },
  {
    name: "Fernanda Lima",
    review: "Incrível qualidade de trabalho. Recomendo fortemente!",
    rating: 5
  },
  {
    name: "Roberto Alves",
    review: "Profissionais competentes e muito respeitosos com nosso espaço.",
    rating: 5
  }
];

export default function HomeReviewsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = Math.ceil(reviews.length / 3);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const getCurrentReviews = () => {
    const startIndex = currentSlide * 3;
    return reviews.slice(startIndex, startIndex + 3);
  };

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <section className={styles.reviewsSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>Veja o que nossos clientes falam do nosso serviço</h2>
          <p className={styles.subtitle}>
            Valorizamos a satisfação e opinião de cada cliente. Nossa missão é superar 
            expectativas e construir relacionamentos duradouros baseados na confiança e qualidade. 
            Cada projeto é tratado com dedicação exclusiva, desde o primeiro contato até a 
            finalização completa. Nossa equipe trabalha com transparência total, mantendo você 
            informado em cada etapa do processo. O resultado? Clientes 100% satisfeitos que 
            se tornam nossos melhores embaixadores.
          </p>
          <div className={styles.rating}>
            <span className={styles.ratingText}>5.0</span>
            <div className={styles.stars}>
              {[...Array(5)].map((_, i) => (
                <FiStar key={i} className={styles.star} />
              ))}
            </div>
          </div>
        </div>
        
        <div className={styles.sliderContainer}>
          
          <div className={styles.sliderContent}>
            {getCurrentReviews().map((review, index) => (
              <div key={index} className={styles.reviewCard}>
                <div className={styles.stars}>
                  {[...Array(review.rating)].map((_, i) => (
                    <FiStar key={i} className={styles.star} />
                  ))}
                </div>
                <p className={styles.reviewText}>"{review.review}"</p>
                <span className={styles.author}>— {review.name}</span>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
} 