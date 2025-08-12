import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/NavigationBar.module.css';

const NavigationBar: React.FC = () => {
  return (
    <div className={styles.navigationContainer}>
      <nav className={styles.navigation}>
        <ul className={styles.navList}>
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/residential">RESIDENTIAL</Link></li>
          <li><Link to="/hoa">HOA</Link></li>
          <li><Link to="/multifamily">MULTIFAMILY</Link></li>
          <li><Link to="/commercial">COMMERCIAL</Link></li>
          
        </ul>
      </nav>
    </div>
  );
};

export default NavigationBar; 