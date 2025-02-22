"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function AnimatedTechStack() {
  const [direction, setDirection] = useState("down");

  useEffect(() => {
    const interval = setInterval(() => {
      // Change direction after a certain period (e.g., 30 seconds)
      setDirection((prev) => (prev === "down" ? "up" : "down"));
    }, 30000); // Change direction every 30 seconds

    return () => clearInterval(interval);
  }, []);

  const getVariants = (dir) => ({
    move: {
      y: dir === "down" ? [0, 100, 0] : [0, -100, 0], // Move in and out
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
            <p className="mt-7 text-[20px] text-gray-800">
              Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,
              quis gravida magna mi a libero. Nullam tincidunt adipiscing enim. Sed
              augue ipsum, egestas nec, vestibulum et.
            </p>
            <button className="mt-9 font-medium text-[18px] px-7 py-3 text-white rounded-lg bg-[#BA2027]">
              Let's talk
            </button>
          </div>

          {/* Right Section - Animated Circles */}
          <div className="w-full md:w-1/2 flex justify-center items-center h-full px-4 py-8 relative">
            {/* Left Column of Circles */}
            <div className="flex flex-col gap-y-4 mr-4">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={`left-${i}`}
                  className="w-[100px] h-[100px] md:w-[140px] md:h-[140px] bg-gray-300 rounded-full"
                  animate="move"
                  variants={getVariants(direction)}
                />
              ))}
            </div>

            {/* Right Column of Circles */}
            <div className="flex flex-col gap-y-4 ml-4">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={`right-${i}`}
                  className="w-[100px] h-[100px] md:w-[140px] md:h-[140px] bg-gray-300 rounded-full"
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