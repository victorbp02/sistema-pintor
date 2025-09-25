import { MdHome, MdApartment, MdBusiness, MdBuild } from 'react-icons/md';
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/ServicesGridSec.module.css';


const services = [
  {
    icon: <MdHome size={44} color="#03C4D9" />,
    title: 'Residential',
    desc: "Transform your home with our comprehensive residential painting services. From interior walls and ceilings to exterior facades, we deliver exceptional results that enhance your living space and increase your property value.",
    dropdownItems: [
      { name: 'Interior Painting', link: '/interior-painting' },
      { name: 'Exterior Painting', link: '/exterior-painting' },
      { name: 'Cabinets', link: '/cabinets' }
    ]
  },
  {
    icon: <MdApartment size={44} color="#03C4D9" />,
    title: 'HOA',
    desc: 'Specialized painting services for Homeowners Associations. We handle common areas, building exteriors, and community spaces with precision and care, ensuring compliance with HOA guidelines and maintaining property standards.',
    isSimpleButton: true,
    buttonLink: '/hoa'
  },
  {
    icon: <MdBusiness size={44} color="#03C4D9" />,
    title: 'Commercial',
    desc: 'Professional commercial painting solutions for businesses of all sizes. Create an impressive work environment that attracts customers and boosts employee morale with our expert commercial painting services.',
    isSimpleButton: true,
    buttonLink: '/commercial'
  },
  {
    icon: <MdBuild size={44} color="#03C4D9" />,
    title: 'Other Services',
    desc: 'Additional specialized services including deck and fence painting, parking lot striping, epoxy floor coating, power washing, texture application, carpentry, and drywall services.',
    isSimpleButton: true,
    buttonLink: '/services'
  },
];

function ServicesGridSec() {
  const [residentialAnchorEl, setResidentialAnchorEl] = useState<null | HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const gridRef = useRef<HTMLDivElement>(null);

  const handleResidentialClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setResidentialAnchorEl(event.currentTarget);
  };

  const handleResidentialClose = () => {
    setResidentialAnchorEl(null);
  };

  useEffect(() => {
    const element = gridRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, []);

  // Fechar dropdown quando clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (residentialAnchorEl && !(event.target as Element).closest(`.${styles.dropdownWrapper}`)) {
        handleResidentialClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [residentialAnchorEl]);





  return (
    <div className={styles.GridSec}>
      <div ref={gridRef} className={`${styles.grid} slide-in-stagger ${isVisible ? 'visible' : ''}`}>
          {services.map((service, i) => (
            <div className={styles.card} key={i}>
              <div className={styles.icon}>{service.icon}</div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDesc}>{service.desc}</p>
              <div className={styles.dropdownContainer}>
                {service.isSimpleButton ? (
                  <Link 
                    to={service.buttonLink} 
                    className={styles.dropdownBtn}
                  >
                    View Services
                  </Link>
                ) : (
                  <div className={styles.dropdownWrapper}>
                    <button
                      className={styles.dropdownBtn}
                      onClick={handleResidentialClick}
                    >
                      View Services <span className={styles.arrow}>&#8595;</span>
                    </button>
                    
                    {Boolean(residentialAnchorEl) && (
                      <div className={styles.customDropdown}>
                        {service.dropdownItems?.map((item, index) => (
                          <Link
                            key={index}
                            to={item.link}
                            className={styles.dropdownItem}
                            onClick={handleResidentialClose}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
    </div>
  )
}

export default ServicesGridSec;
