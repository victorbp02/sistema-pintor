import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

import Residential from './pages/Residential';
import Multifamily from './pages/Multifamily';
import Commercial from './pages/Commercial';
import Services from './pages/Services';
import Locations from './pages/Locations';
import Reviews from './pages/Reviews';
import InteriorPainting from './pages/InteriorPainting';
import ExteriorPainting from './pages/ExteriorPainting';
import Cabinets from './pages/Cabinets';
import MenuTop from "./components/MenuTop";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import './styles/PagesContent.css';
import './styles/global.css';

function App() {
  return (
    <>
      <ScrollToTop />
      <MenuTop />
      <div className='PagesContent'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/residential" element={<Residential />} />
          <Route path="/hoa" element={<Multifamily />} />
          <Route path="/multifamily" element={<Multifamily />} />
          <Route path="/commercial" element={<Commercial />} />
          <Route path="/interior-painting" element={<InteriorPainting />} />
          <Route path="/exterior-painting" element={<ExteriorPainting />} />
          <Route path="/cabinets" element={<Cabinets />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
