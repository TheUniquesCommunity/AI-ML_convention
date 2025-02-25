"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function AnimatedTechStack() {
  const [direction, setDirection] = useState("down");
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Fetch images from JSON file
    fetch("/images.json")
      .then((response) => response.json())
      .then((data) => setImages(data.hexagons))
      .catch((error) => console.error("Error loading images:", error));

    // Change direction every 30 seconds
    const interval = setInterval(() => {
      setDirection((prev) => (prev === "down" ? "up" : "down"));
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const getVariants = (dir) => ({
    move: {
      y: dir === "down" ? [0, 100, 0] : [0, -100, 0],
      transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
    },
  });

  return (
    <div className="container mx-auto">
      <div className="w-full h-auto flex justify-between bg-white text-black relative overflow-hidden pb-20">
        {/* Gradient Overlay for Fading Ends */}
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent z-10"></div>
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent z-10"></div>

        <div className="w-full h-full flex flex-wrap items-center justify-between relative gap-20">
          {/* Left Section - Text */}
          <div className="w-full md:w-2/5 py-10 text-center md:text-left">
            <p className="text-[38px] leading-[50px] font-semibold">
              The best tech stack to scale like crazy
            </p>
            <p className="mt-7 text-[20px] text-gray-800 text-justify">
            In AI/ML, scalability is crucial. A strong tech stack includes cloud platforms (AWS, GCP), ML frameworks (TensorFlow, PyTorch), and efficient backend solutions (FastAPI, Kubernetes) to handle growing data and real-time processing. With MLOps and serverless computing, AI applications can scale seamlessly, driving innovation.
            </p>
            <button className="mt-9 font-medium text-[18px] px-7 py-3 text-white rounded-lg bg-[#BA2027]">
              Let's talk
            </button>
          </div>

          {/* Right Section - Animated Hexagons */}
          <div className="w-full md:w-1/2 flex justify-center items-center h-full px-4 py-8 relative">
            {/* Left Column of Hexagons */}
            <div className="flex flex-col gap-y-4 mr-4">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={`left-${i}`}
                  className="w-[100px] h-[86px] md:w-[140px] md:h-[120px] bg-gray-400 rounded-l-xl bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${images[i] || "/images/placeholder.jpg"})`,
                  }}
                  animate="move"
                  variants={getVariants(direction)}
                />
              ))}
            </div>

            {/* Right Column of Hexagons */}
            <div className="flex flex-col gap-y-4 ml-4">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={`right-${i}`}
                  className="w-[100px] h-[86px] md:w-[140px] md:h-[120px] bg-gray-400 rounded-tr-xl bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${images[i + 3] || "/images/placeholder.jpg"})`,
                  }}
                  animate="move"
                  variants={getVariants(direction === "down" ? "up" : "down")}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
