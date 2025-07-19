import styles from '../styles/ReviewsGrid.module.css';
import { FiStar, FiMapPin } from 'react-icons/fi';

const reviews = [
  {
    name: "Sarah Johnson",
    location: "San Francisco, CA",
    rating: 5,
    date: "2 weeks ago",
    service: "Interior Painting",
    review: "Absolutely amazing work! The team was professional, clean, and completed our entire house interior painting in just 3 days. The quality is outstanding and they were very respectful of our home. Highly recommend!",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=150&q=80"
  },
  {
    name: "Michael Chen",
    location: "Oakland, CA",
    rating: 5,
    date: "1 month ago",
    service: "Exterior Painting",
    review: "Barbour Painting transformed our home's exterior. The attention to detail was incredible - they even matched the exact color we wanted perfectly. The job was done on time and within budget. Excellent service!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
  },
  {
    name: "Jennifer Martinez",
    location: "Concord, CA",
    rating: 5,
    date: "3 weeks ago",
    service: "Commercial Painting",
    review: "We hired Barbour Painting for our office renovation and couldn't be happier. They worked around our business hours and completed the job with minimal disruption. The results are professional and beautiful.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80"
  },
  {
    name: "David Thompson",
    location: "Berkeley, CA",
    rating: 5,
    date: "2 months ago",
    service: "Cabinet Painting",
    review: "Our kitchen cabinets look brand new! The team was very skilled and patient with our color selection process. The finish is smooth and durable. Great value for the quality of work.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80"
  },
  {
    name: "Lisa Rodriguez",
    location: "Walnut Creek, CA",
    rating: 5,
    date: "1 week ago",
    service: "Interior & Exterior",
    review: "Complete house painting project - interior and exterior. The team was efficient, professional, and the results exceeded our expectations. They even helped us choose the perfect colors. Fantastic experience!",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80"
  },
  {
    name: "Robert Wilson",
    location: "Pleasanton, CA",
    rating: 5,
    date: "3 weeks ago",
    service: "Drywall Repair & Painting",
    review: "They fixed our water-damaged walls and painted the entire room. The repair work is seamless - you can't even tell there was damage. The painting is flawless. Very impressed with their expertise.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
  }
];

export default function ReviewsGrid() {
  return (
    <section className={styles.reviewsGrid}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.badge}>Real Reviews</span>
          <h2 className={styles.title}>
            Customer <span className={styles.highlight}>Testimonials</span>
          </h2>
          <p className={styles.subtitle}>
            Read what our satisfied customers have to say about their experience with Barbour Painting. 
            These are real reviews from real customers who trusted us with their homes and businesses.
          </p>
        </div>
        
        <div className={styles.grid}>
          {reviews.map((review, index) => (
            <div key={index} className={styles.reviewCard}>
              <div className={styles.reviewHeader}>
                <div className={styles.customerInfo}>
                  <img 
                    src={review.image} 
                    alt={review.name}
                    className={styles.customerImage}
                  />
                  <div className={styles.customerDetails}>
                    <h4 className={styles.customerName}>{review.name}</h4>
                    <div className={styles.location}>
                      <FiMapPin size={14} />
                      <span>{review.location}</span>
                    </div>
                  </div>
                </div>
                <div className={styles.rating}>
                  {[...Array(review.rating)].map((_, i) => (
                    <FiStar key={i} className={styles.star} />
                  ))}
                </div>
              </div>
              
              <div className={styles.serviceTag}>
                {review.service}
              </div>
              
              <p className={styles.reviewText}>
                "{review.review}"
              </p>
              
              <div className={styles.reviewFooter}>
                <span className={styles.date}>{review.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 