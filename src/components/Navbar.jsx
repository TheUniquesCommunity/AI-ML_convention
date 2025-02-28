import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

// Import the logo image from the assets folder
import logo from '../assets/theuniques.jpg';  // Adjusted path since Navbar is now in the components folder

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Image */}
        <Link to="/">
          <img 
            src={logo}  // Using the imported logo here
            alt="Code Consult Logo"
            className="h-10"  // Adjust the height based on your logo size preference
          />
        </Link>
        
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <ul
          className={`md:flex md:items-center md:space-x-6 absolute md:static bg-white md:bg-transparent w-full left-0 top-16 md:w-auto p-4 md:p-0 transition-all duration-300 shadow-md md:shadow-none ${isOpen ? "block" : "hidden"}`}
        >
          <li><Link to="/" className="block py-2 px-4 hover:text-blue-500">Home</Link></li>
          <li><Link to="/about" className="block py-2 px-4 hover:text-blue-500">About</Link></li>
          
          <li><Link to="/contact" className="block py-2 px-4 hover:text-blue-500">Contact</Link></li>
          <li>
            <button className="bg-[#BA2027] text-white px-4 py-2 rounded-lg mt-2 md:mt-0">
              <Link to="/register">Register Now</Link>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

