import RequestQuoteBtn from "./RequestQuoteBtn";
import style from '../styles/ServiceInit.module.css';
import { Link } from "react-router-dom";

function ServiceInit() {
  return (
    <div className={style.initSession}>
      <div className={style.textSession}>
        <h1>Our Professional Painting  </h1>
        <h1>Services</h1>
        <p>Damaged drywall? Ugly-looking old kitchen cabinets? Moldy façade? Our <span> expert painters will take care of it all for you.</span></p>
        <Link to='/contact'><RequestQuoteBtn /></Link>
        
      </div>
    </div>
  )
}

export default ServiceInit;
