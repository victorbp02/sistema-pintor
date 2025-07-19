import styles from '../styles/BlogHero.module.css';
import { FiCalendar, FiUser, FiTag, FiArrowRight } from 'react-icons/fi';

const featuredPost = {
  title: "The Ultimate Guide to Choosing the Perfect Paint Colors for Your Home",
  excerpt: "Discover the psychology of colors and learn how to select the perfect paint shades that will transform your space and enhance your mood. From calming blues to energizing yellows, we'll guide you through every step.",
  author: "Sarah Johnson",
  date: "March 15, 2024",
  category: "Color Guide",
  readTime: "8 min read",
  image: "https://images.unsplash.com/photo-1560435650-7470e0f9e513?auto=format&fit=crop&w=800&q=80",
  featured: true
};

const recentPosts = [
  {
    title: "5 Essential Tips for Exterior Painting in Spring",
    excerpt: "Spring is the perfect time for exterior painting projects. Learn the best practices for weather conditions, surface preparation, and choosing the right materials.",
    author: "Mike Chen",
    date: "March 12, 2024",
    category: "Exterior",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "Commercial Painting: What Business Owners Need to Know",
    excerpt: "From office buildings to retail spaces, commercial painting requires special considerations. We break down everything you need to know.",
    author: "Lisa Rodriguez",
    date: "March 10, 2024",
    category: "Commercial",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=400&q=80"
  }
];

export default function BlogHero() {
  return (
    <section className={styles.blogHero}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.badge}>Our Blog</span>
          <h1 className={styles.title}>
            Painting <span className={styles.highlight}>Insights</span> & Tips
          </h1>
          <p className={styles.subtitle}>
            Stay updated with the latest trends, tips, and insights from our painting experts. 
            From color psychology to DIY techniques, we share everything you need to know about transforming your space.
          </p>
        </div>

        <div className={styles.featuredSection}>
          <div className={styles.featuredPost}>
            <div className={styles.featuredImage}>
              <img src={featuredPost.image} alt={featuredPost.title} />
              <div className={styles.featuredBadge}>Featured</div>
            </div>
            <div className={styles.featuredContent}>
              <div className={styles.postMeta}>
                <span className={styles.category}>{featuredPost.category}</span>
                <span className={styles.readTime}>{featuredPost.readTime}</span>
              </div>
              <h2 className={styles.featuredTitle}>{featuredPost.title}</h2>
              <p className={styles.featuredExcerpt}>{featuredPost.excerpt}</p>
              <div className={styles.authorInfo}>
                <div className={styles.author}>
                  <FiUser size={16} />
                  <span>{featuredPost.author}</span>
                </div>
                <div className={styles.date}>
                  <FiCalendar size={16} />
                  <span>{featuredPost.date}</span>
                </div>
              </div>
              <button className={styles.readMoreBtn}>
                Read Full Article
                <FiArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>

        <div className={styles.recentSection}>
          <h3 className={styles.recentTitle}>Recent Articles</h3>
          <div className={styles.recentGrid}>
            {recentPosts.map((post, index) => (
              <div key={index} className={styles.recentPost}>
                <div className={styles.recentImage}>
                  <img src={post.image} alt={post.title} />
                  <div className={styles.categoryTag}>{post.category}</div>
                </div>
                <div className={styles.recentContent}>
                  <div className={styles.postMeta}>
                    <span className={styles.readTime}>{post.readTime}</span>
                    <span className={styles.date}>{post.date}</span>
                  </div>
                  <h4 className={styles.recentPostTitle}>{post.title}</h4>
                  <p className={styles.recentExcerpt}>{post.excerpt}</p>
                  <div className={styles.authorInfo}>
                    <FiUser size={14} />
                    <span>{post.author}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 