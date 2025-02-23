import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// import React from "react";

const TestimonialSection = () => {
  return (
    <div className="bg-white text-black py-12 px-6 flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto text-center md:text-left">
      {/* Heading */}
      <h2 className="text-3xl md:text-5xl font-semibold mb-6 md:mb-0">
        Don’t just take my word for it
      </h2>

      {/* Navigation Buttons */}
      <div className="flex space-x-4">
        <button className="w-10 md:w-12 h-10 md:h-12 flex items-center justify-center bg-blue-400 text-white rounded-full shadow-md">
          <FaChevronLeft />
        </button>
        <button className="w-10 md:w-12 h-10 md:h-12 flex items-center justify-center bg-blue-400 text-white rounded-full shadow-md">
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8 bg-white px-6 py-12">
      {/* Left Panel (Responsive & Red) */}
      <div className="bg-[#BA2027] text-black p-8 md:p-16 rounded-2xl md:w-[45%] flex flex-col justify-center text-center md:text-left">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          <span className="text-blue-400">2x</span> lower dropout rate
        </h1>
        <hr className="border-gray-400 my-4 md:my-6" />
        <p className="text-black text-base md:text-lg leading-relaxed">
          Etiam vitae tortor. Suspendisse enim turpis, dictum sed, iaculis a,
          condimentum nec, nisi. Morbi ac felis. Fusce convallis metus id felis
          luctus adipiscing. Nulla porta dolor.
        </p>
        <div className="mt-6 md:mt-8 flex justify-center md:justify-start">
          <img
            src="https://via.placeholder.com/120x60?text=Logo"
            alt="Logo"
            className="w-20 md:w-32"
          />
        </div>
      </div>

      {/* Right Panel */}
      <div className="md:w-[45%] py-6 flex justify-center items-center rounded-br-[80px] md:rounded-br-[100px]">
        <img
          src="https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Students Collaborating"
          className="w-full rounded-2xl object-cover"
        />
      </div>
    </div>
  );
};

const FullPage = () => {
  return (
    <div className="bg-white min-h-screen">
      <TestimonialSection />
      <About />
    </div>
  );
};

export default FullPage;