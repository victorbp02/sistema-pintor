import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Locations from './components/Locations';
import Portfolio from './components/Portfolio';
import Reviews from './components/Reviews';
import Blog from './components/Blog';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <>
      <TopBar />
      <Navbar />
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
    </>
  );
}

export default App;
