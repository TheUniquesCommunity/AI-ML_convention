
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
// import About from "./pages/About";
import CaseStudies from "./pages/CaseStudies";
import Contact from "./pages/Contact";
import Cards from "./components/cards";
import ConsultingSection from "./components/yashi2";
import Hero from "./components/yashi1";
import ServicesSection from "./components/taniya1";
import AnimatedSupportTeam from "./components/sahil";
import FeaturesSection from "./components/ksitij";
import Footer from "./components/footer";
import IdeaManagement from "./components/anamika2";
import UXProcess from "./components/anamika1";

import Faq8 from "./components/faq";



function App() {
  return (
    <div >
      <Navbar />

      <div className="container mx-auto px-16">
        <Routes>
          <Route path="/" element={<Home />} />
          
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cards" element={<Cards />} />
        </Routes>
        <ServicesSection />
        {/* <ProcessTimeline /> */}
        
        <UXProcess />
<IdeaManagement/>
      <Hero />
      <ConsultingSection />
      
      
      <FeaturesSection />
      <AnimatedSupportTeam />
      <Faq8 />
      </div>
      <Footer />
    </div>

  );
}

export default App;
