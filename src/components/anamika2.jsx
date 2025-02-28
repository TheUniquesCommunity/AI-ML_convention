import React from "react";
import { ClipboardList, ListChecks, UploadCloud, Trophy } from "lucide-react";

const IdeaManagement = () => {
  const features = [
    {
      title: "Register for the Ideathon",
      description: [
        "Hire Problem Solvers Through Case Studies And Ideas Competition",
        "Engage With Bright Campus Talent",
      ],
      icon: <ClipboardList className="w-10 h-10 text-red-600" />, // Red clipboard icon
    },
    {
      title: "Choose a Problem Statement",
      description: [
        "Foster Cross-team Collaboration To Solve Critical Business Problems",
        "Foster Creativity And Innovation Among Employees",
      ],
      icon: <ListChecks className="w-10 h-10 text-red-600" />, // Red checklist icon
    },
    {
      title: "Submit Your Project",
      description: [
        "Find Fresh Ideas From The Crowd To Build Product Prototypes",
        "Hire Experienced Talent: Problem Solvers And Innovators",
      ],
      icon: <UploadCloud className="w-10 h-10 text-red-600" />, // Red upload icon
    },
    {
      title: "Judging & Results Announcement",
      description: [
        "Engage With Prospective Customers To Build Brand Recall",
        "Run Ideation Competitions",
      ],
      icon: <Trophy className="w-10 h-10 text-red-600" />, // Red trophy icon
    },
  ];

  return (
    <div id="ideathon" className="flex flex-col items-center justify-center min-h-screen bg-white px-4 py-12 mt-20">
      {/* Title Section */}
      <h2 className="text-3xl md:text-4xl font-bold text-[#BA2027] text-center mb-6">
        How to Join the AI/ML Ideathon?
      </h2>
      <p className="text-center text-gray-800 mb-20 font-medium mt-[-10px]">
        Unleash your creativity and problem-solving skills in the AI/ML Ideathon!  
        Follow these steps to participate.
      </p>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl w-full">
        {features.map((feature, index) => (
          <div
            key={index}
            className="p-6 rounded-xl relative z-10 shadow-md border border-gray-200 bg-white text-center transition transform hover:scale-105 hover:shadow-lg flex flex-col items-center"
          >
            {/* Circular Icon with Red Color */}
            <div className="absolute top-0 left-0 z-[3] text-9xl font-semibold opacity-5">
              {"0"+(index+1)}
            </div>
            <div className="w-20 h-20 flex items-center justify-center mb-4">
              {feature.icon}
            </div>

            {/* Feature Title */}
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              {feature.title}
            </h3>

            {/* Description List */}
            <ul className="text-gray-600 text-sm text-left space-y-2">
              {feature.description.map((point, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-green-600 font-bold mr-2">•</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IdeaManagement;
