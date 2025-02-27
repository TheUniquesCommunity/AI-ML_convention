import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import React, { useState, useEffect } from "react";

const testimonials = [
  "https://www.theladders.com/wp-content/uploads/office-meeting-190912.jpg",
  "https://www.betterup.com/hubfs/Diverse%20Creative%20Business%20Team%20In%20Meeting.jpg",
  "https://www.betterup.com/hubfs/Business-People-Having-A-Creative-Meeting.jpg#keepProtocol",
  "https://538underwriting.co.uk/wp-content/uploads/2024/03/AdobeStock_377658540-scaled.jpeg",
  "https://website2021-live-e3e78fbbd3cc41f2847799-7c49c59.divio-media.com/filer_public_thumbnails/filer_public/30/eb/30eb9913-5b2a-4ac7-9a8f-51d12bf11392/meeting-moderation.png__1200x630_q90_crop_subject_location-420%2C304_subsampling-2_upscale.png",
  "https://blog.uwcped.org/wp-content/uploads/2023/02/effective-meeting-blog.jpg",
];

const TestimonialSection = () => {
  const [scrollIndex, setScrollIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerView(3);
      } else if (window.innerWidth >= 768) {
        setItemsPerView(2);
      } else {
        setItemsPerView(1);
      }
    };

    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  const totalSlides = testimonials.length - itemsPerView;

  const prevSlide = () => {
    setScrollIndex((prev) => Math.max(prev - 1, 0));
  };

  const nextSlide = () => {
    setScrollIndex((prev) => Math.min(prev + 1, totalSlides));
  };

  return (
    <div className="text-white py-16 px-8 flex flex-col items-center max-w-7xl mx-auto text-center">
      {/* Heading */}
      <h2 className="text-black text-4xl md:text-6xl font-semibold mb-8">
        Don’t just take my word for it
      </h2>

      {/* Image Slider Row */}
      <div className="relative w-full max-w-5xl flex items-center overflow-hidden">
        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 md:left-6 w-14 md:w-16 h-14 md:h-16 flex items-center justify-center bg-[#BA2027] text-white rounded-full shadow-lg z-10 disabled:opacity-50"
          disabled={scrollIndex === 0}
        >
          <FaChevronLeft size={30} />
        </button>

        <div className="w-full overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${scrollIndex * (100 / itemsPerView)}%)` }}
          >
            {testimonials.map((image, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 p-2"
              >
                <img
                  src={image}
                  alt={`Testimonial ${index + 1}`}
                  className="w-full h-[300px] md:h-[350px] object-cover rounded-xl"
                />
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={nextSlide}
          className="absolute right-4 md:right-6 w-14 md:w-16 h-14 md:h-16 flex items-center justify-center bg-[#BA2027] text-white rounded-full shadow-lg z-10 disabled:opacity-50"
          disabled={scrollIndex === totalSlides}
        >
          <FaChevronRight size={30} />
        </button>
      </div>
    </div>
  );
};

export default TestimonialSection;
