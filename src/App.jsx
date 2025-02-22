
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import CaseStudies from "./pages/CaseStudies";
import Contact from "./pages/Contact";
import Cards from "./components/cards";
import ConsultingSection from "./components/yashi2";
import Hero from "./components/yashi1";
import ServicesSection from "./components/taniya1";
import AnimatedTechStack from "./components/sahil";
import FeaturesSection from "./components/ksitij";


function App() {
  return (
    <div>
      <Navbar />
      
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cards" element={<Cards />} />
      </Routes>
      <ServicesSection/>
      <Hero/>
      <ConsultingSection/>
      <AnimatedTechStack/>
      <FeaturesSection/>

    </div>

  );
}

export default App;
