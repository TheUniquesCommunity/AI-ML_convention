// import React from "react";
// import { CheckCircleIcon, UsersIcon, DocumentTextIcon, ShieldCheckIcon } from "@heroicons/react/24/solid";
// import undraw_reading_time_gcvc from "../assets/undraw_reading_time_gcvc.png";
// const ConsultingSection = () => {
//   return (
//     <div className="container mx-auto mt-28">
//       <div className="w-full min-h-screen flex items-center justify-center bg-[#ffffff] text-black">
//         <div className="w-full max-w-8xl flex flex-col md:flex-row items-center justify-between gap-8">
//           <div className="flex justify-start items-center w-full max-w-xl md:w-1/2">
//             <img
//               src={undraw_reading_time_gcvc}
//               alt="Consulting"
//               className="w-full h-auto rounded-tl-[100px] rounded-tr-[200px] rounded-bl-[50px] shadow-lg"
//             />
//             <div className="absolute inset-0 bg-gradient-to-r from-[#1ffffff] via-transparent to-transparent rounded-lg"></div>
//           </div>

//           {/* Right Side (Text + Button) */}
//           <div className="w-full md:w-1/2 space-y-6">
//             <h2 className="text-4xl font-bold leading-snug">The Uniques Community</h2>
//             <p className="text-black text-base mt-4 max-width-2xl">
//             The Uniques Community is an inclusive platform for innovation, collaboration, and skill development, uniting passionate individuals to create, learn, and grow together.
//             </p>

//             {/* Features List */}
//             <div className="space-y-4">
//               <FeatureItem icon={<UsersIcon className="w-6 h-6 text-1xl text-[#BA2027]" />} text="Innovation & Creativity " />
//               <FeatureItem icon={<ShieldCheckIcon className="w-6 h-6 text-1xl text-[#BA2027]" />} text=" Collaboration & Networking" />
//               <FeatureItem icon={<DocumentTextIcon className="w-6 h-6 text-1xl text-[#BA2027]" />} text="Skill Development " />
//               <FeatureItem icon={<CheckCircleIcon className="w-6 h-6 text-1xl text-[#BA2027]" />} text="Opportunities & Growth" />
//             </div>

//             {/* Button */}
//             <button className="px-6 py-3 text-lg text-white font-medium bg-[#BA2027] rounded-lg"><a href="https://theuniques.in/">Know More</a>
              
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Feature Item Component
// const FeatureItem = ({ icon, text }) => {
//   return (
//     <div className="flex items-center gap-3">
//       {icon}
//       <span className="text-lg">{text}</span>
//     </div>
//   );
// };

// export default function App() {
//   return <ConsultingSection />;
// }

import React from "react";
import { CheckCircleIcon, UsersIcon, DocumentTextIcon, ShieldCheckIcon } from "@heroicons/react/24/solid";
import undrawImage from "../assets/undraw.png"; // Correct way to import an image

const ConsultingSection = () => {
  return (
    <div className="container mx-auto px-2 mt-28">
      <div className="w-full min-h-screen flex items-center justify-center bg-[#ffffff] text-black">
        <div className="w-full max-w-8xl flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left Side (Image) */}
          <div className="flex justify-start items-center w-full max-w-xl md:w-1/2 relative">
            <img
              src={undrawImage}
              alt="Consulting"
              className="w-full h-auto rounded-tl-[100px] rounded-tr-[200px] rounded-bl-[50px]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#ffffff] via-transparent to-transparent rounded-lg"></div>
          </div>

          {/* Right Side (Text + Button) */}
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-4xl font-bold leading-snug">The Uniques Community</h2>
            <p className="text-black text-base mt-4 max-w-2xl">
              The Uniques Community is an inclusive platform for innovation, collaboration, and skill development, 
              uniting passionate individuals to create, learn, and grow together.
            </p>

            {/* Features List */}
            <div className="space-y-4">
              <FeatureItem icon={<UsersIcon className="w-6 h-6 text-[#BA2027]" />} text="Innovation & Creativity" />
              <FeatureItem icon={<ShieldCheckIcon className="w-6 h-6 text-[#BA2027]" />} text="Collaboration & Networking" />
              <FeatureItem icon={<DocumentTextIcon className="w-6 h-6 text-[#BA2027]" />} text="Skill Development" />
              <FeatureItem icon={<CheckCircleIcon className="w-6 h-6 text-[#BA2027]" />} text="Opportunities & Growth" />
            </div>

            {/* Button */}
            <button className="px-6 py-3 text-lg text-white font-medium bg-[#BA2027] rounded-lg">
              <a href="https://theuniques.in/" target="_blank" rel="noopener noreferrer">Know More</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Feature Item Component
const FeatureItem = ({ icon, text }) => {
  return (
    <div className="flex items-center gap-3">
      {icon}
      <span className="text-lg">{text}</span>
    </div>
  );
};

export default function App() {
  return <ConsultingSection />;
}
