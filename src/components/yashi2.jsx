import React from "react";
import { CheckCircleIcon, UsersIcon, DocumentTextIcon, ShieldCheckIcon } from "@heroicons/react/24/solid";

const ConsultingSection = () => {
  return (
    <div className="container mx-auto">
      <div className="w-full min-h-screen flex items-center justify-center bg-[#ffffff] text-black">
        <div className="w-full max-w-8xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex justify-start items-center w-full max-w-xl md:w-1/2">
            <img
              src="https://cdn.prod.website-files.com/659b714634f8cfe5326a934f/659b9a3ef0e2bb267b38325f_Image%20Combo%20Halves%20Code%20Consult%20Webflow%20Template.webp"
              alt="Consulting"
              className="w-full h-auto rounded-tl-[100px] rounded-tr-[200px] rounded-bl-[50px] shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1ffffff] via-transparent to-transparent rounded-lg"></div>
          </div>

          {/* Right Side (Text + Button) */}
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-4xl font-bold leading-snug">The Uniques Community</h2>
            <p className="text-lg text-black">
            The Uniques Community is an inclusive platform for innovation, collaboration, and skill development, uniting passionate individuals to create, learn, and grow together.
            </p>

            {/* Features List */}
            <div className="space-y-4">
              <FeatureItem icon={<UsersIcon className="w-6 h-6 text-[#BA2027]" />} text="Innovation & Creativity " />
              <FeatureItem icon={<ShieldCheckIcon className="w-6 h-6 text-[#BA2027]" />} text=" Collaboration & Networking" />
              <FeatureItem icon={<DocumentTextIcon className="w-6 h-6 text-[#BA2027]" />} text="Skill Development " />
              <FeatureItem icon={<CheckCircleIcon className="w-6 h-6 text-[#BA2027]" />} text="Opportunities & Growth" />
            </div>

            {/* Button */}
            <button className="px-6 py-3 text-lg text-white font-medium bg-[#BA2027] rounded-lg">
              Join Now
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