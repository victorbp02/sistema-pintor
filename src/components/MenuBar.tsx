import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/MenuBar.module.css';

const MenuBar: React.FC = () => {
  return (
    <div className={styles.menuBarContainer}>
      <div className={styles.menuBar}>
        <nav className={styles.menu}>
          <ul>
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/residential">RESIDENTIAL</Link>
            </li>
            <li>
              <Link to="/hoa">HOA</Link>
            </li>
            <li>
              <Link to="/multifamily">MULTIFAMILY</Link>
            </li>
            <li>
              <Link to="/commercial">COMMERCIAL</Link>
            </li>
            <li>
              
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MenuBar; 