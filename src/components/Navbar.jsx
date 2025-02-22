// import React from "react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <h1 className="logo">Code <span>__</span>Consult</h1>
//       <ul>
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/about">About</Link></li>
//         <li><Link to="/case-studies">Case Studies</Link></li>
//         <li><Link to="/contact">Contact</Link></li>
//         <li><button className="btn-secondary">Buy Template</button></li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Code <span className="text-red-500">__</span>Consult</h1>
        
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
          <li><Link to="/case-studies" className="block py-2 px-4 hover:text-blue-500">Case Studies</Link></li>
          <li><Link to="/contact" className="block py-2 px-4 hover:text-blue-500">Contact</Link></li>
          <li><button className="bg-red-500 text-white px-4 py-2 rounded-lg mt-2 md:mt-0">Buy Template</button></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

