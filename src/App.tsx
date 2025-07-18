import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Locations from './pages/Locations';
import Portfolio from './pages/Portfolio';
import Reviews from './pages/Reviews';
import Blog from './pages/Blog';
import ContactUs from './pages/ContactUs';
import MenuTop from "./components/MenuTop";
import './styles/PagesContent.css';

function App() {
  return (
    <>
      <MenuTop/>
      <div className='PagesContent'>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </div>
      
    </>
  );
}

export default App;
