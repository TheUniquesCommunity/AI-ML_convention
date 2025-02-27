// import React from 'react';
// import defaultLogo from '../assets/theuniques.jpg'; // Import default logo

// const Footer = ({ logo }) => {
//   return (
//     <footer className="text-gray-600 body-font shadow-lg shadow-black">
//       <div className="container px-5 py-8 mx-auto flex items-center justify-between">
//         {/* Logo */}
//         <a href="/" className="flex title-font font-medium items-center text-gray-900">
//           <img src={logo || defaultLogo} alt="Logo" className="h-10" />
//         </a>

//         {/* Centered Register Button */}
//         <div className="flex-1 flex justify-center space-x-6">
//   <a 
//     href="/register" 
//     className="p-6 bg-white rounded-lg hover:text-[#BA2027] text-black px-6 py-2 text-sm font-normal"
//   >
//     Register
//   </a>
//   <a 
//     href="/register" 
//     className="p-6 bg-white rounded-lg hover:text-[#BA2027] text-black px-6 py-2 text-sm font-normal"
//   >
//     Join Uniques Community
//   </a>
// </div>


//         {/* Social Icons */}
//         <span className="inline-flex">

//           <a href="https://www.instagram.com/theuniquesofficial?igsh=MWZ2aTV4bm0yNGliYw==" className="ml-3 text-gray-500">
//             <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
//               <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
//               <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
//             </svg>
//           </a>
//           <a href="https://www.linkedin.com/company/theuniquesofflicial/" className="ml-3 text-gray-500">
//             <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
//               <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
//               <circle cx="4" cy="4" r="2" stroke="none"></circle>
//             </svg>
//           </a>
//         </span>
//       </div>

//       {/* Bottom Footer Text */}
//       <div className="bg-gray-700 text-white py-4">
//         <div className="container mx-auto flex flex-col items-center">
//           <p className="text-sm text-white">@ The Uniques Community</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from 'react';
import defaultLogo from '../assets/theuniques.jpg'; // Import default logo

const Footer = ({ logo }) => {
  return (
    <footer className="text-gray-600 body-font shadow-lg shadow-black">
      <div className="container px-5 py-8 mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex title-font font-medium items-center text-gray-900">
          <img src={logo || defaultLogo} alt="Logo" className="h-10" />
        </a>

        {/* Centered Register Button */}
        <div className="flex-1 flex justify-center space-x-6">
          <a 
            href="/register" 
            className="p-6 bg-white rounded-lg hover:text-[#BA2027] text-black px-6 py-2 text-sm font-normal"
          >
            Register
          </a>
          <a 
            href="/register" 
            className="p-6 bg-white rounded-lg hover:text-[#BA2027] text-black px-6 py-2 text-sm font-normal"
          >
            Join Uniques Community
          </a>
        </div>

        {/* Social Icons */}
        <span className="inline-flex">
          <a href="https://www.instagram.com/theuniquesofficial?igsh=MWZ2aTV4bm0yNGliYw==" className="ml-3 text-gray-500">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </a>
          <a href="https://www.linkedin.com/company/theuniquesofflicial/" className="ml-3 text-gray-500">
            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
              <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
              <circle cx="4" cy="4" r="2" stroke="none"></circle>
            </svg>
          </a>
          <a href="mailto:contact@theuniques.com" className="ml-3 text-gray-500">
            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
              <path stroke="none" d="M2 4h20a2 2 0 012 2v12a2 2 0 01-2 2H2a2 2 0 01-2-2V6a2 2 0 012-2zm2 2v12h16V6H4zm8 6L4 8v8h16V8l-8 4z"></path>
            </svg>
          </a>
        </span>
      </div>

      {/* Bottom Footer Text */}
      <div className="bg-gray-700 text-white py-4">
        <div className="container mx-auto flex flex-col items-center">
          <p className="text-sm text-white">@ The Uniques Community</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
