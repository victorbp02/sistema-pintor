import styles from '../styles/BlogTimeline.module.css';
import { FiCalendar, FiUser, FiTag, FiArrowRight, FiClock } from 'react-icons/fi';

const categories = [
  { name: "All", count: 24, active: true },
  { name: "Color Guide", count: 8 },
  { name: "Interior", count: 6 },
  { name: "Exterior", count: 5 },
  { name: "Commercial", count: 3 },
  { name: "DIY Tips", count: 2 }
];

const timelinePosts = [
  {
    title: "How to Choose the Right Paint Finish for Every Room",
    excerpt: "From matte to high-gloss, learn which paint finish works best for each room in your home. We'll guide you through the pros and cons of each option.",
    author: "David Thompson",
    date: "March 8, 2024",
    category: "Color Guide",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1560435650-7470e0f9e513?auto=format&fit=crop&w=400&q=80",
    featured: false
  },
  {
    title: "The Complete Guide to Cabinet Painting",
    excerpt: "Transform your kitchen with a professional cabinet painting job. Step-by-step instructions and expert tips for lasting results.",
    author: "Jennifer Martinez",
    date: "March 5, 2024",
    category: "Interior",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=400&q=80",
    featured: false
  },
  {
    title: "Weather-Resistant Paints for Exterior Projects",
    excerpt: "Discover the best weather-resistant paint options for your home's exterior. Protect your investment with the right materials.",
    author: "Mike Chen",
    date: "March 2, 2024",
    category: "Exterior",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=400&q=80",
    featured: false
  },
  {
    title: "Office Painting: Creating Productive Workspaces",
    excerpt: "Learn how the right paint colors can boost productivity and create a positive work environment in your office.",
    author: "Sarah Johnson",
    date: "February 28, 2024",
    category: "Commercial",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=400&q=80",
    featured: false
  },
  {
    title: "DIY Painting Mistakes to Avoid",
    excerpt: "Common painting mistakes that can ruin your project and how to avoid them. Expert advice for DIY enthusiasts.",
    author: "Lisa Rodriguez",
    date: "February 25, 2024",
    category: "DIY Tips",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    featured: false
  },
  {
    title: "Seasonal Color Trends for 2024",
    excerpt: "Stay ahead of the curve with the latest color trends for 2024. From calming neutrals to bold statements.",
    author: "David Thompson",
    date: "February 22, 2024",
    category: "Color Guide",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80",
    featured: false
  }
];

export default function BlogTimeline() {
  return (
    <section className={styles.blogTimeline}>
      <div className={styles.container}>
        <div className={styles.sidebar}>
          <div className={styles.categoriesSection}>
            <h3 className={styles.sidebarTitle}>Categories</h3>
            <div className={styles.categoriesList}>
              {categories.map((category, index) => (
                <button 
                  key={index} 
                  className={`${styles.categoryItem} ${category.active ? styles.active : ''}`}
                >
                  <span className={styles.categoryName}>{category.name}</span>
                  <span className={styles.categoryCount}>({category.count})</span>
                </button>
              ))}
            </div>
          </div>
          
          <div className={styles.newsletterSection}>
            <h3 className={styles.sidebarTitle}>Stay Updated</h3>
            <p className={styles.newsletterText}>
              Get the latest painting tips and trends delivered to your inbox.
            </p>
            <div className={styles.newsletterForm}>
              <input 
                type="email" 
                placeholder="Enter your email"
                className={styles.newsletterInput}
              />
              <button className={styles.newsletterBtn}>
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className={styles.timelineSection}>
          <div className={styles.timelineHeader}>
            <h2 className={styles.timelineTitle}>Latest Articles</h2>
            <div className={styles.timelineStats}>
              <span className={styles.articleCount}>{timelinePosts.length} articles</span>
            </div>
          </div>

          <div className={styles.timeline}>
            {timelinePosts.map((post, index) => (
              <div key={index} className={styles.timelineItem}>
                <div className={styles.timelineMarker}>
                  <div className={styles.markerDot}></div>
                  <div className={styles.markerLine}></div>
                </div>
                
                <div className={styles.timelineContent}>
                  <div className={styles.postCard}>
                    <div className={styles.postImage}>
                      <img src={post.image} alt={post.title} />
                      <div className={styles.categoryBadge}>{post.category}</div>
                    </div>
                    
                    <div className={styles.postContent}>
                      <div className={styles.postMeta}>
                        <div className={styles.metaItem}>
                          <FiCalendar size={14} />
                          <span>{post.date}</span>
                        </div>
                        <div className={styles.metaItem}>
                          <FiClock size={14} />
                          <span>{post.readTime}</span>
                        </div>
                        <div className={styles.metaItem}>
                          <FiUser size={14} />
                          <span>{post.author}</span>
                        </div>
                      </div>
                      
                      <h3 className={styles.postTitle}>{post.title}</h3>
                      <p className={styles.postExcerpt}>{post.excerpt}</p>
                      
                      <button className={styles.readMoreBtn}>
                        Read More
                        <FiArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.loadMoreSection}>
            <button className={styles.loadMoreBtn}>
              Load More Articles
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 