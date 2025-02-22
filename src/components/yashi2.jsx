import React from "react";
import { CheckCircleIcon, UsersIcon, DocumentTextIcon, ShieldCheckIcon } from "@heroicons/react/24/solid";

const ConsultingSection = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-[#ffffff] text-black px-8">
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-between gap-8">
        
        <div className="relative w-full md:w-1/2">
          <img
            src="https://ss2j52z3n7.ufs.sh/f/gYEQWkfpQKNFhr06rNPSQrp94A0Wy7fO1joDasm32LGkKPIS"
            alt="Consulting"
            className="w-full h-auto rounded-tr-[200px] shadow-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1ffffff] via-transparent to-transparent rounded-lg"></div>
        </div>

        {/* Right Side (Text + Button) */}
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-4xl font-bold leading-snug">Your one stop to all consulting needs</h2>
          <p className="text-lg text-black">
            In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Praesent congue erat at massa. Vivamus aliquet elit.
          </p>

          {/* Features List */}
          <div className="space-y-4">
            <FeatureItem icon={<UsersIcon className="w-6 h-6 text-[#BA2027]" />} text="Trusted by thousands" />
            <FeatureItem icon={<ShieldCheckIcon className="w-6 h-6 text-[#BA2027]" />} text="Certificate awarded" />
            <FeatureItem icon={<DocumentTextIcon className="w-6 h-6 text-[#BA2027]" />} text="Weekly reports" />
            <FeatureItem icon={<CheckCircleIcon className="w-6 h-6 text-[#BA2027]" />} text="Proven track of success" />
          </div>

          {/* Button */}
          <button className="px-6 py-3 text-lg font-medium bg-[#BA2027] rounded-lg">
            About me
          </button>
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