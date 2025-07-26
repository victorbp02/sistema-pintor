import { useLocation } from "react-router-dom";
import styles from "../styles/HeaderPages.module.css";

function HeaderPages() {

  const location = useLocation();
  
  const titles = {
    "/about-us": "about-us",
    "/residential": "residential",
    "/hoa": "hoa",
    "/multifamily": "multifamily",
    "/commercial": "commercial",
    "/services": "services",
    "/locations": "location",
    "/reviews": "reviews",
  };

  const currentTitle = (location.pathname in titles ? titles[location.pathname as keyof typeof titles] : "Página");

  return (
    <header className={styles.HeaderPages}>
      <h1>{currentTitle}</h1>
    </header>
  )
}

export default HeaderPages;
