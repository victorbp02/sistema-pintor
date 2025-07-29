import Navbar from "./Navbar";
import MobileNavbar from "./MobileNavbar";
import '../styles/MenuTop.css';

function MenuTop() {
  return (
    <>
      <div className="MenuTopAll">
        <Navbar />
      </div>
      <MobileNavbar />
    </>
  )
}

export default MenuTop
