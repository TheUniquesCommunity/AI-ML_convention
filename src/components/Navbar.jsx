import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from '../assets/theuniques.jpg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to handle smooth scrolling
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false); // Close mobile menu after click
    }
  };

  return (
    <nav className="bg-white shadow-md p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="The Uniques Logo" className="h-10" />
        </Link>
        
        {/* Mobile Menu Button */}
        <button className="lg:hidden text-gray-700" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Navbar Links */}
        <ul
          className={`lg:flex lg:items-center lg:space-x-6 absolute lg:static bg-white lg:bg-transparent w-full left-0 top-16 lg:w-auto p-4 lg:p-0 transition-all duration-300 shadow-md lg:shadow-none ${
            isOpen ? "block" : "hidden"
          }`}
        >
          {/* <li><button onClick={() => handleScroll("about")} className="block py-2 px-4 hover:text-[#BA2027]">About</button></li> */}
          <li><button onClick={() => handleScroll("why-join")} className="block py-2 px-4 hover:text-[#BA2027]">Why Join</button></li>
          <li><button onClick={() => handleScroll("timeline")} className="block py-2 px-4 hover:text-[#BA2027]">Timeline</button></li>
          <li><button onClick={() => handleScroll("ideathon")} className="block py-2 px-4 hover:text-[#BA2027]">Ideathon</button></li>
          <li><button onClick={() => handleScroll("insights")} className="block py-2 px-4 hover:text-[#BA2027]">Insights</button></li>
          <li><button onClick={() => handleScroll("speakers")} className="block py-2 px-4 hover:text-[#BA2027]">Speakers</button></li>
          <li><button onClick={() => handleScroll("faqs")} className="block py-2 px-4 hover:text-[#BA2027]">FAQs</button></li>
          <li>
            <Link to="/register">
              <button className="bg-[#BA2027] text-white px-4 py-2 rounded-lg mt-2 md:mt-0">
                Register Now
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
