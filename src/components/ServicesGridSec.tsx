import { MdHome, MdApartment, MdBusiness, MdBuild } from 'react-icons/md';
import { useState } from 'react';
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
      { name: 'Gabinetes', link: '/cabinets' }
    ]
  },
  {
    icon: <MdApartment size={44} color="#03C4D9" />,
    title: 'HOA',
    desc: 'Specialized painting services for Homeowners Associations. We handle common areas, building exteriors, and community spaces with precision and care, ensuring compliance with HOA guidelines and maintaining property standards.',
    dropdownItems: [
      { name: 'Multi-Family', link: '/multifamily' }
    ]
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
    title: 'Outros Serviços',
    desc: 'Additional specialized services including deck and fence painting, parking lot striping, epoxy floor coating, power washing, texture application, carpentry, and drywall services.',
    isSimpleButton: true,
    buttonLink: '/services'
  },
];

function ServicesGridSec() {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const closeDropdown = () => {
    setOpenDropdown(null);
  };

  return (
    <div className={styles.GridSec}>
      <div className={styles.grid}>
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
                    onClick={closeDropdown}
                  >
                    View Services
                  </Link>
                ) : (
                  <button 
                    className={styles.dropdownBtn}
                    onClick={() => toggleDropdown(i)}
                  >
                    View Services <span className={styles.arrow}>&#8595;</span>
                  </button>
                )}
                {openDropdown === i && service.dropdownItems && (
                  <div className={styles.dropdown}>
                    {service.dropdownItems.map((item, index) => (
                      <Link 
                        key={index} 
                        to={item.link} 
                        className={styles.dropdownItem}
                        onClick={closeDropdown}
                      >
                        {item.name}
                      </Link>
                    ))}
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
