import styles from '../styles/ServicesSection.module.css';
import { MdHome, MdApartment, MdBusiness, MdKitchen, MdBuild, MdColorLens, MdLocalCarWash, MdFormatPaint } from 'react-icons/md';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: <MdHome size={44} color="#f78c1f" />,
    title: 'Interior Painting',
    desc: "The interior paint in your home or business helps determine your property's first impression on guests and clients.",
  },
  {
    icon: <MdApartment size={44} color="#f78c1f" />,
    title: 'Exterior Painting',
    desc: 'From brick, wood, and stucco to vinyl, shingles, Hardie board, and aluminum siding, we handle all materials and surfaces on exterior walls, garage doors, decks, and porches.',
  },
  {
    icon: <MdBusiness size={44} color="#f78c1f" />,
    title: 'Commercial Painting',
    desc: 'Wow your partners, attract more customers, and create a beautiful work environment for your team with an expert commercial painting job.',
  },
  {
    icon: <MdKitchen size={44} color="#f78c1f" />,
    title: 'Cabinet Painting',
    desc: 'Why throw away fully functional old cabinets? We will refresh, repaint, and breathe new life into your cabinets so they can serve you for many more years.',
  },
  {
    icon: <MdBuild size={44} color="#f78c1f" />,
    title: 'Drywall Repair',
    desc: 'Neither water damage nor holes in your drywall can stop this Concord painting company from ensuring a perfectly primed surface to paint on.',
  },
  {
    icon: <MdColorLens size={44} color="#f78c1f" />,
    title: 'Color Consultation',
    desc: 'Ivory, eggshell, alabaster, powder: Is it all Greek to you? Not to worry. Our paint consultants will help you choose the best color for your project so that it matches your current palette perfectly.',
  },
  {
    icon: <MdLocalCarWash size={44} color="#f78c1f" />,
    title: 'Power Washing',
    desc: 'We will remove any dirt, oil, mold, and old paint from your exterior surfaces to ensure that the new paint adheres well for a picture-perfect paint job.',
  },
];

export default function ServicesSection() {
  return (
    <section className={styles.servicesBg}>
      <div className={styles.topDecor}>
        <MdFormatPaint size={120} className={styles.bgIcon} />
      </div>
      <div className={styles.container}>
        <div className={styles.topArea}>
          <h2 className={styles.title}>
            Our Professional <span className={styles.highlight}>Painting Services</span>
          </h2>
          <p className={styles.subtitle}>
            Damaged drywall? Ugly-looking old kitchen cabinets? Moldy façade? Our expert Bay Area painters will take care of it all for you.
          </p>
          <Link to="/contact" className={styles.ctaBtnOutline}>
            <MdFormatPaint size={18} style={{marginRight: 8}} /> Request A Quote
          </Link>
        </div>
        <div className={styles.grid}>
          {services.map((service, i) => (
            <div className={styles.card} key={i}>
              <div className={styles.icon}>{service.icon}</div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDesc}>{service.desc}</p>
              <button className={styles.readMore}>
                Read More <span className={styles.arrow}>&#8594;</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 