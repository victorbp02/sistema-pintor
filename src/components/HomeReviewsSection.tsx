import styles from '../styles/HomeReviewsSection.module.css';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { FaStar } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { useSimpleFadeIn } from '../hooks/useSimpleFadeIn';

const reviews = [
  {
    name: "Levi McConnell",
    review: "Raiff and his team were wonderful to work with. Raiff was responsive, detailed, and insightful. The communication was easy, and he got back to me on everything almost immediately. He was able to schedule the painting the first time we spoke. Raiff’s painters were super detailed about their business, especially protecting my furniture and floors. My house looks perfect and I would highly recommend Bay Area painting and use them again.",
    rating: 5
  },
  {
    name: "Brenda Greening",
    review: "We could not be more happy! World Pro Painting is reasonable, but most of all their work is impeccable. Raiff really knows what he’s doing. He takes pride in his work and it shows!",
    rating: 5
  },
  {
    name: "Arbel Eckstein",
    review: "I needed a painter that could do the full interior of my house. World Pro Painting came to the rescue. They gave me great recommendations when it came to color and were able to get the job done very quickly. I am thrilled with their work — they truly transformed my space, and they did it so quickly. I can’t recommend this team enough. They deserve far more than 5 stars!",
    rating: 5
  },
  {
    name: "Annastasia Mauga",
    review: "I recently had the exterior of my home painted and I couldn't be happier with the results. The colors came out exactly how l imagined - clean, modern, and with great attention to detail. The crew was professional, on time every day, and kept everything neat throughout the process. It really gave my house a fresh new look. Highly recommend their work!",
    rating: 5
  },
  {
    name: "Marjorie Lizarraga",
    review: "Really happy with the work from World Pro Painting! From the first contact, they were super responsive, showed up on time, and did a great job. The colors turned out just like I imagined and the finish looks awesome! They were also really careful around the house and cleaned up everything at the end. Definitely recommend and would hire them again. Thanks for the great work!",
    rating: 5
  },
  {
    name: "Melissa Bray",
    review: "I had my house painted by World Pro Painting and I am really happy with the results. The team was very professional. They showed up on time, communicated well and the quality of the work was excellent. My home looks fresh and clean. Would definitely recommend them!",
    rating: 5
  },
  {
    name: "Alice G.",
    review: "Raiff Mendes of World Pro Painting was excellent in painting the interior of my house. I was impressed with his eye for detail and experience. I will definitely be using his services again. Thank you!",
    rating: 5
  },
  {
    name: "Sasha Prokhorova",
    review: "Great quality! Highly recommend. The shade turned out exactly the way I wanted.",
    rating: 5
  },
  {
    name: "Karl Baumann",
    review: "Raiff was completely professional. I interviewed a lot of painters when we bought our new house. Raiff and his team gave us a fair price and did an excellent job.",
    rating: 5
  },
  {
    name: "Aimee Johnson",
    review: "I absolutely love the work done to my home. I definitely recommend World Pro Painting to anyone looking for painting! They did a fabulous job repairing my damaged stucco and blended it in so well that you can’t even tell there was ever any damage or cracks before. I will definitely use them again for other projects!",
    rating: 5
  },
  {
    name: "Tracy Norris",
    review: "I had an excellent experience with World Pro Painting. They helped me through the entire process and were super professional. They finished my 2,000 sq. foot home in just a couple of days. The painting turned out perfectly. I also really appreciate how respectful their team was. I will be using them again in the future.",
    rating: 5
  },
  {
    name: "Angela Evans",
    review: "This review is a little overdue, but I couldn’t be happier with my decision to hire World Pro Painting to paint the exterior of my home. Raiff was incredibly communicative from the very start and gave me valuable guidance while I was selecting colors. He and Hector made a fantastic team—professional, efficient, and dedicated to delivering top-quality work. Their estimate and timeline were spot on, and they kept every promise. I absolutely love coming home to the fresh new look they created.",
    rating: 5
  }
];

export default function HomeReviewsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = Math.ceil(reviews.length / 3);
  const fadeInProps = useSimpleFadeIn({
    effect: 'fade-up',
    duration: 'normal'
  });

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
    <section 
      ref={fadeInProps.ref}
      className={`${styles.reviewsSection} reviewsSection ${fadeInProps.className}`}
    >
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