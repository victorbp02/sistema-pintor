import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Residential from './pages/Residential';
import Hoa from './pages/Hoa';
import Multifamily from './pages/Multifamily';
import Commercial from './pages/Commercial';
import Services from './pages/Services';
import Locations from './pages/Locations';
import Reviews from './pages/Reviews';
import MenuTop from "./components/MenuTop";
import Footer from "./components/Footer";
import './styles/PagesContent.css';

function App() {
  return (
    <>
      <MenuTop/>
      <div className='PagesContent'>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/residential" element={<Residential />} />
        <Route path="/hoa" element={<Hoa />} />
        <Route path="/multifamily" element={<Multifamily />} />
        <Route path="/commercial" element={<Commercial />} />
        <Route path="/services" element={<Services />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/reviews" element={<Reviews />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
