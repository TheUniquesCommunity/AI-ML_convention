// "use client";

// import { motion } from "framer-motion";
// import { useState, useEffect } from "react";

// export default function AnimatedTechStack() {
//   const [direction, setDirection] = useState("down");
//   const [images, setImages] = useState([]);

//   useEffect(() => {
//     // Fetch images from JSON file
//     fetch("/images.json")
//       .then((response) => response.json())
//       .then((data) => setImages(data.hexagons))
//       .catch((error) => console.error("Error loading images:", error));

//     // Change direction every 30 seconds
//     const interval = setInterval(() => {
//       setDirection((prev) => (prev === "down" ? "up" : "down"));
//     }, 30000);

//     return () => clearInterval(interval);
//   }, []);

//   const getVariants = (dir) => ({
//     move: {
//       y: dir === "down" ? [0, 100, 0] : [0, -100, 0],
//       transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
//     },
//   });

//   return (
//     <div className="container mx-auto">
//       <div className="w-full h-auto flex justify-between bg-white text-black relative overflow-hidden pb-20">
//         {/* Gradient Overlay for Fading Ends */}
//         <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent z-10"></div>
//         <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent z-10"></div>

//         <div className="w-full h-full flex flex-wrap items-center justify-between relative gap-20">
//           {/* Left Section - Text */}
//           <div className="w-full md:w-2/5 py-10 text-center md:text-left">
//             <p className="text-[38px] leading-[50px] font-semibold">
//               The best tech stack to scale like crazy
//             </p>
//             <p className="mt-7 text-[20px] text-gray-800 text-justify">
//             In AI/ML, scalability is crucial. A strong tech stack includes cloud platforms (AWS, GCP), ML frameworks (TensorFlow, PyTorch), and efficient backend solutions (FastAPI, Kubernetes) to handle growing data and real-time processing. With MLOps and serverless computing, AI applications can scale seamlessly, driving innovation.
//             </p>
//             <button className="mt-9 font-medium text-[18px] px-7 py-3 text-white rounded-lg bg-[#BA2027]">
//               Let's talk
//             </button>
//           </div>

//           {/* Right Section - Animated Hexagons */}
//           <div className="w-full md:w-1/2 flex justify-center items-center h-full px-4 py-8 relative">
//             {/* Left Column of Hexagons */}
//             <div className="flex flex-col gap-y-4 mr-4">
//               {[...Array(3)].map((_, i) => (
//                 <motion.div
//                   key={`left-${i}`}
//                   className="w-[100px] h-[86px] md:w-[140px] md:h-[120px] bg-gray-400 rounded-l-xl bg-cover bg-center"
//                   style={{
//                     backgroundImage: `url(${images[i] || "/images/placeholder.jpg"})`,
//                   }}
//                   animate="move"
//                   variants={getVariants(direction)}
//                 />
//               ))}
//             </div>

//             {/* Right Column of Hexagons */}
//             <div className="flex flex-col gap-y-4 ml-4">
//               {[...Array(3)].map((_, i) => (
//                 <motion.div
//                   key={`right-${i}`}
//                   className="w-[100px] h-[86px] md:w-[140px] md:h-[120px] bg-gray-400 rounded-tr-xl bg-cover bg-center"
//                   style={{
//                     backgroundImage: `url(${images[i + 3] || "/images/placeholder.jpg"})`,
//                   }}
//                   animate="move"
//                   variants={getVariants(direction === "down" ? "up" : "down")}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

export default function AnimatedSupportTeam() {
  const [direction, setDirection] = useState("down")
  const [hoveredStaff, setHoveredStaff] = useState(null)

  // Sample staff data - replace with your actual data
  const staffMembers = [
    {
      id: 1,
      name: "Sarah Johnson",
      designation: "Technical Support Lead",
      image: "https://t3.ftcdn.net/jpg/05/44/54/96/360_F_544549697_Y1pnNqqsvxO6fynzN5Z7Z3Goel0KPrHw.jpg",
      contact: "+1 (555) 123-4567",
    },
    {
      id: 2,
      name: "Michael Chen",
      designation: "Customer Success Manager",
      image: "https://img.freepik.com/free-photo/worldface-side-view-african-man_53876-23488.jpg",
      contact: "+1 (555) 234-5678",
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      designation: "Product Specialist",
      image: "https://img.freepik.com/free-photo/worldface-british-guy-white-background_53876-14467.jpg",
      contact: "+1 (555) 345-6789",
    },
    {
      id: 4,
      name: "David Kim",
      designation: "Solutions Architect",
      image: "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg",
      contact: "+1 (555) 456-7890",
    },
    {
      id: 5,
      name: "Lisa Patel",
      designation: "Support Engineer",
      image: "https://img.freepik.com/free-photo/handsome-cheerful-man-with-happy-smile_176420-18028.jpg?semt=ais_hybrid",
      contact: "+1 (555) 567-8901",
    },
    {
      id: 6,
      name: "James Wilson",
      designation: "Implementation Specialist",
      image: "https://t4.ftcdn.net/jpg/02/45/56/35/360_F_245563558_XH9Pe5LJI2kr7VQuzQKAjAbz9PAyejG1.jpg",
      contact: "+1 (555) 678-9012",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection((prev) => (prev === "down" ? "up" : "down"))
    }, 30000)

    return () => clearInterval(interval)
  }, [])

  const getVariants = (dir) => ({
    move: {
      y: dir === "down" ? [0, 100, 0] : [0, -100, 0],
      scale: [1, 1.05, 1],
      transition: { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
    },
  })

  return (
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-center bg-white text-black relative overflow-hidden pb-20">
        {/* Gradient Overlay for Smooth Transition */}
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent z-10" />
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent z-10" />

        {/* Left Section - Text */}
        <div className="w-full md:w-2/5 py-10 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">Our Support Team</h2>
          <p className="mt-6 text-lg text-gray-700 leading-relaxed text-justify">
            Our Support Team is dedicated to providing quick and effective assistance, ensuring a smooth experience for
            everyone. Whether it's resolving issues, answering queries, or offering guidance, our team is always ready
            to help with expertise and care.
          </p>
          <button className="mt-8 text-lg font-medium px-7 py-3 text-white rounded-lg bg-[#BA2027] hover:bg-red-700 transition-all duration-300">
            Let's Talk
          </button>
        </div>

        {/* Right Section - Animated Hexagons */}
        <div className="w-full md:w-1/2 flex justify-center items-center h-full px-4 py-8 relative">
          <div className="flex flex-col gap-y-6 mr-4">
            {staffMembers.slice(0, 3).map((staff, i) => (
              <motion.div
                key={`left-${i}`}
                className="relative"
                animate="move"
                variants={getVariants(direction)}
                onMouseEnter={() => setHoveredStaff(staff)}
                onMouseLeave={() => setHoveredStaff(null)}
              >
                <div
                  className="w-[100px] h-[86px] md:w-[140px] md:h-[120px] rounded-xl bg-cover bg-center shadow-lg cursor-pointer
                           transition-all duration-300 hover:shadow-xl"
                  style={{ backgroundImage: `url(${staff.image})` }}
                />
                {hoveredStaff?.id === staff.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute left-full ml-4 top-0 bg-white p-4 rounded-lg shadow-lg z-20 w-64"
                  >
                    <h3 className="font-bold text-gray-900">{staff.name}</h3>
                    <p className="text-sm text-[#BA2027]">{staff.designation}</p>
                    <p className="text-sm text-gray-600 mt-1">{staff.contact}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col gap-y-6 ml-4">
            {staffMembers.slice(3, 6).map((staff, i) => (
              <motion.div
                key={`right-${i}`}
                className="relative"
                animate="move"
                variants={getVariants(direction === "down" ? "up" : "down")}
                onMouseEnter={() => setHoveredStaff(staff)}
                onMouseLeave={() => setHoveredStaff(null)}
              >
                <div
                  className="w-[100px] h-[86px] md:w-[140px] md:h-[120px] rounded-xl bg-cover bg-center shadow-lg cursor-pointer
                           transition-all duration-300 hover:shadow-xl"
                  style={{ backgroundImage: `url(${staff.image})` }}
                />
                {hoveredStaff?.id === staff.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute right-full mr-4 top-0 bg-white p-4 rounded-lg shadow-lg z-20 w-64"
                  >
                    <h3 className="font-bold text-gray-900">{staff.name}</h3>
                    <p className="text-sm text-[#BA2027]">{staff.designation}</p>
                    <p className="text-sm text-gray-600 mt-1">{staff.contact}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
