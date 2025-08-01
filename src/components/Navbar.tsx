import styles from '../styles/Navbar.module.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FiHome, FiStar, FiSettings, FiInfo, FiX, FiMail } from 'react-icons/fi';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHoaDropdownOpen, setIsHoaDropdownOpen] = useState(false);
  const [isResidentialDropdownOpen, setIsResidentialDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleHoaDropdown = () => {
    setIsHoaDropdownOpen(!isHoaDropdownOpen);
  };

  const closeHoaDropdown = () => {
    setIsHoaDropdownOpen(false);
  };

  const toggleResidentialDropdown = () => {
    setIsResidentialDropdownOpen(!isResidentialDropdownOpen);
  };

  const closeResidentialDropdown = () => {
    setIsResidentialDropdownOpen(false);
  };

  // Fechar dropdown quando clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest(`.${styles.dropdownContainer}`)) {
        setIsHoaDropdownOpen(false);
        setIsResidentialDropdownOpen(false);
      }
    };

    if (isHoaDropdownOpen || isResidentialDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isHoaDropdownOpen, isResidentialDropdownOpen]);

  // Fechar menu quando pressionar ESC
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeMenu();
        closeHoaDropdown();
        closeResidentialDropdown();
      }
    };

    if (isMenuOpen) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const menuItems = [
    { path: '/', label: 'HOME', icon: FiHome },
    { path: '/residential', label: 'RESIDENTIAL', icon: FiHome },
    { path: '/hoa', label: 'HOA', icon: FiHome },
    { path: '/multifamily', label: 'MULTIFAMILY', icon: FiHome },
    { path: '/commercial', label: 'COMMERCIAL', icon: FiHome },
    { path: '/services', label: 'SERVICES', icon: FiSettings },
    { path: '/locations', label: 'LOCATIONS', icon: FiHome },
    { path: '/reviews', label: 'REVIEWS', icon: FiStar },
    { path: '/about-us', label: 'ABOUT US', icon: FiInfo },
  ];

  return (
    <header className={styles.header}>
      {/* Barra Principal Branca - Logo e Botão */}
      <div className={styles.mainBar}>
        <div className={styles.mainBarContent}>
          {/* Área Social */}
          <div className={styles.socialArea}>
            <a href="https://instagram.com/worldpropainting" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="https://facebook.com/worldpropainting" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="https://wa.me/16504209772" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
            </a>
            <a href="https://linkedin.com/company/worldpropainting" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>

          {/* Logo Centralizada */}
          <div className={styles.logoArea}>
            <div className={styles.logo}></div>
          </div>

          {/* Botão Request A Quote */}
          <div className={styles.quoteButtonArea}>
            <Link to="/contact" className={styles.quoteButton}>
              <span>Request Estimate</span>
              <FiMail className={styles.quoteIcon} />
            </Link>
          </div>
        </div>
      </div>

      {/* Barra Inferior Laranja - Navegação */}
      <div className={styles.bottomBar}>
        <div className={styles.bottomBarContent}>
          <nav className={styles.navigation}>
            <ul className={styles.navList}>
              <li><Link to="/" className={styles.navLink}>HOME</Link></li>
              <li className={styles.dropdownContainer}>
                <button 
                  className={`${styles.navLink} ${styles.dropdownButton}`}
                  onClick={toggleResidentialDropdown}
                >
                  RESIDENTIAL
                  <span className={styles.dropdownArrow}>▼</span>
                </button>
                {isResidentialDropdownOpen && (
                  <div className={styles.dropdown}>
                    <Link 
                      to="/residential/interior-painting" 
                      className={styles.dropdownItem} 
                      onClick={closeResidentialDropdown}
                    >
                      INTERIOR PAINTING
                    </Link>
                    <Link 
                      to="/residential/exterior-painting" 
                      className={styles.dropdownItem} 
                      onClick={closeResidentialDropdown}
                    >
                      EXTERIOR PAINTING
                    </Link>
                  </div>
                )}
              </li>
              <li className={styles.dropdownContainer}>
                <button 
                  className={`${styles.navLink} ${styles.dropdownButton}`}
                  onClick={toggleHoaDropdown}
                >
                  HOA
                  <span className={styles.dropdownArrow}>▼</span>
                </button>
                {isHoaDropdownOpen && (
                  <div className={styles.dropdown}>
                    <Link 
                      to="/multifamily" 
                      className={styles.dropdownItem} 
                      onClick={closeHoaDropdown}
                    >
                      MULTI-FAMILY
                    </Link>
                  </div>
                )}
              </li>
              <li><Link to="/commercial" className={styles.navLink}>COMMERCIAL</Link></li>
              <li><Link to="/about-us" className={styles.navLink}>ABOUT US</Link></li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Menu Hambúrguer Mobile */}
      <button 
        className={`${styles.hamburger} ${isMenuOpen ? styles.active : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Overlay Mobile */}
      {isMenuOpen && (
        <div className={styles.overlay} onClick={closeMenu}></div>
      )}

      {/* Menu Mobile Moderno */}
      <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.mobileMenuOpen : ''}`}>
        {/* Header do Menu Mobile */}
        <div className={styles.mobileMenuHeader}>
          <div className={styles.mobileLogo}>
            <div className={styles.logo}></div>
            <div className={styles.mobileLogoText}>
              <h3>Barbour Painting</h3>
              <p>Professional Painting Services</p>
            </div>
          </div>
          <button className={styles.closeButton} onClick={closeMenu}>
            <FiX />
          </button>
        </div>

        {/* Lista de Itens do Menu */}
        <ul className={styles.mobileMenuList}>
          {menuItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <li key={item.path} style={{ transitionDelay: `${(index + 1) * 0.1}s` }}>
                <Link to={item.path} onClick={closeMenu} className={styles.mobileMenuItem}>
                  <IconComponent className={styles.menuIcon} />
                  <span>{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Área Social Mobile */}
        <div className={styles.mobileSocialArea}>
          <a href="https://instagram.com/worldpropainting" target="_blank" rel="noopener noreferrer" className={styles.mobileSocialIcon}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          <a href="https://facebook.com/worldpropainting" target="_blank" rel="noopener noreferrer" className={styles.mobileSocialIcon}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
} 