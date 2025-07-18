import { MdEmail } from "react-icons/md";
import '../styles/BtnRequest.css';

function RequestQuoteBtn() {

  return (
    <div className="Btn-Request">
      <span>Request A Quote <MdEmail style={{marginLeft: 8, fontSize: '1.2em'}} /></span>
    </div>
  )
}

export default RequestQuoteBtn;
