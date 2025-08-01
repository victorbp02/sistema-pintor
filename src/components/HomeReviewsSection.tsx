import styles from '../styles/HomeReviewsSection.module.css';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { FaStar } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const reviews = [
  {
    name: "Michael Johnson",
    review: "Excellent work! The team was very professional and the result was perfect.",
    rating: 5
  },
  {
    name: "Emily Carter",
    review: "Incredible attention to detail. They completely transformed our house.",
    rating: 5
  },
  {
    name: "James Anderson",
    review: "First-class professionals. The result exceeded our expectations.",
    rating: 5
  },
  {
    name: "Ashley Miller",
    review: "Exceptional service! Very punctual and the result was incredible.",
    rating: 5
  },
  {
    name: "Daniel Smith",
    review: "Incredible quality of work. I highly recommend!",
    rating: 5
  },
  {
    name: "Jessica Brown",
    review: "Competent professionals and very respectful of our space.",
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
          <h2>See what our customers say about our service</h2>
          <p className={styles.subtitle}>
            We value the satisfaction and opinion of each customer. Our mission is to exceed 
            expectations and build lasting relationships based on trust and quality. 
            Each project is treated with exclusive dedication, from first contact to 
            complete completion. Our team works with total transparency, keeping you 
            informed at every stage of the process. The result? 100% satisfied customers who 
            become our best ambassadors.
          </p>
          <div className={styles.rating}>
            <span className={styles.ratingText}>5.0</span>
            <div className={styles.stars}>
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className={styles.star} />
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
                    <FaStar key={i} className={styles.star} />
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