import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const speakers = [
  {
    name: "Elon Musk",
    title: "CEO",
    company: "Tesla & SpaceX",
    image: "https://images.frandroid.com/wp-content/uploads/2023/04/google-frandroid-sundar-pichai.jpg",
    description: "Innovator in electric vehicles, AI, and space exploration.",
  },
  {
    name: "Sundar Pichai",
    title: "CEO",
    company: "Google",
    image: "https://images.frandroid.com/wp-content/uploads/2023/04/google-frandroid-sundar-pichai.jpg",
    description: "Leading AI and cloud computing transformations worldwide.",
  },
  {
    name: "Sarah Johnson",
    title: "CTO",
    company: "TechVerse",
    image: "https://images.frandroid.com/wp-content/uploads/2023/04/google-frandroid-sundar-pichai.jpg",
    description: "Specialist in AI, cybersecurity, and digital transformation.",
  },
  {
    name: "Mark Zuckerberg",
    title: "Founder",
    company: "Meta",
    image: "https://images.frandroid.com/wp-content/uploads/2023/04/google-frandroid-sundar-pichai.jpg",
    description: "Building the future of the metaverse and social media.",
  },
];

const SpeakersCarousel = () => {
  return (
    <div className="w-full min-h-screen bg-white flex flex-col items-center justify-center py-10">
      <h2 className="text-black text-center text-4xl font-bold mb-8">
        Meet Our <span className="text-red-600">Speakers</span>
      </h2>

      {/* Carousel Container */}
      <div className="w-full max-w-[1300px] mx-auto px-4 py-4 flex justify-center shadow-lg shadow-gray-500/50">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          spaceBetween={30}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3500 }}
          className="w-full"
        >
          {speakers.map((speaker, index) => (
            <SwiperSlide key={index}>
              <div className="w-full flex flex-col md:flex-row bg-gray-100 shadow-lg rounded-xl overflow-hidden transform transition-all hover:scale-105 hover:shadow-xl">
                
                {/* Speaker Image */}
                <div className="relative w-full md:w-1/3 h-80 md:h-auto">
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black opacity-30"></div>
                </div>
                
                {/* Speaker Details */}
                <div className="p-6 md:w-2/3 flex flex-col justify-center bg-white">
                  <h3 className="text-red-600 text-3xl font-semibold">{speaker.name}</h3>
                  <p className="text-gray-700 text-lg font-medium">{speaker.title} at {speaker.company}</p>
                  <p className="text-gray-600 mt-3 leading-relaxed">{speaker.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SpeakersCarousel;