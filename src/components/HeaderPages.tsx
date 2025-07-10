import { useLocation } from "react-router-dom";
import styles from "../styles/HeaderPages.module.css";

function HeaderPages() {

  const location = useLocation();
  
  const titles = {
    "/about-us": "about-us",
    "/services": "services",
    "/locations": "location",
    "/portfolio": "portfolio",
    "/reviews": "reviews",
    "/blog": "blog",
    "/contact": "contact",
  };

  const currentTitle = (location.pathname in titles ? titles[location.pathname as keyof typeof titles] : "Página");

  return (
    <header className={styles.HeaderPages}>
      <h1>{currentTitle}</h1>
    </header>
  )
}

export default HeaderPages;
