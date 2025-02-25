import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const slides = [
  {
    image: "https://i.pinimg.com/736x/37/4a/86/374a863c36fe232fb398497cad516519.jpg",
    text: "Microsoft Surface - The Future of Computing",
  },
  {
    image: "https://i.pinimg.com/736x/ca/b3/98/cab3986bca198ce56249c14c68f3d55e.jpg",
    text: "Modern Office Setup - Where Productivity Meets Comfort",
  },
  {
    image: "https://i.pinimg.com/736x/18/16/00/181600b56cb9b0d5095ecc594d0566bc.jpg",
    text: "Modern Architecture - Blending Style with Function",
  },
  {
    image: "https://i.pinimg.com/736x/41/26/51/4126518793fd53bcc94291f008a153a9.jpg",
    text: "Creative Design - Innovation at Its Best",
  },
];

const Carousel = () => {
  const settings = {
    centerMode: true,
    centerPadding: "0px",
    slidesToShow: 1,
    infinite: true,
    speed: 500,
    arrows: true,
  };

  return (
    <div className="w-full bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index} className="flex items-center justify-center space-x-8">
              {/* Image Section */}
              <div className="w-1/2">
                <img
                  src={slide.image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover rounded-xl shadow-lg"
                />
              </div>

              {/* Text Section */}
              <div className="w-1/2 text-white">
                <h2 className="text-3xl font-bold mb-4">{slide.text}</h2>
                <p className="text-lg opacity-80">
                  Discover the latest in technology, design, and innovation.
                  Stay ahead with cutting-edge solutions and ideas.
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
