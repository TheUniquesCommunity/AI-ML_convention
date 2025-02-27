import React from "react";

const IdeaManagement = () => {
  const features = [
    {
      title: "Register for the Ideathon",
      description: [
        "Hire Problem Solvers Through Case Studies And Ideas Competition",
        "Engage With Bright Campus Talent",
      ],
      logo: "https://th.bing.com/th/id/OIP.KAfAT5PjBzUC_116686U8QHaHQ?rs=1&pid=ImgDetMain",
    },
    {
      title: "Choose a Problem Statement",
      description: [
        "Foster Cross-team Collaboration To Solve Critical Business Problems",
        "Foster Creativity And Innovation Among Employees",
      ],
      logo: "https://static.vecteezy.com/system/resources/previews/026/454/423/original/problem-statement-icon-vector.jpg",
    },
    {
      title: "Submit Your Project",
      description: [
        "Find Fresh Ideas From The Crowd To Build Product Prototypes",
        "Hire Experienced Talent: Problem Solvers And Innovators",
      ],
      logo: "https://img.freepik.com/premium-vector/hand-click-submit-button-hand-pressing-submit-button-vector-illustration_664675-2400.jpg",
    },
    {
      title: "Judging & Results Announcement",
      description: [
        "Engage With Prospective Customers To Build Brand Recall",
        "Run Ideation Competitions",
      ],
      logo: "https://th.bing.com/th/id/OIP.uhun0rz8edL_IPUTlh2wGwHaHT?rs=1&pid=ImgDetMain",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4 py-12">
      {/* Title Section */}
      <h2 className="text-3xl md:text-4xl font-bold text-[#BA2027] text-center mb-6">
      How to Join the AI/ML Ideathon?
      </h2>
      <p className="text-center text-gray-800 mb-10 font-medium mt-[-10px]">
    Unleash your creativity and problem-solving skills in the AI/ML Ideathon!  
    Follow these steps to participate.
  </p>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl w-full">
        {features.map((feature, index) => (
          <div
            key={index}
            className="p-6 rounded-xl shadow-md border border-gray-200 bg-white text-center transition transform hover:scale-105 hover:shadow-lg flex flex-col items-center"
          >
            {/* Circular Logo with Red Border */}
            <div className="w-20 h-20 border-4 border-black rounded-full flex items-center justify-center mb-4 overflow-hidden">
              <img
                src={feature.logo}
                alt={feature.title}
                className="w-full h-full object-cover"
              />
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

      {/* CTA Button */}
      <button className="mt-8 px-6 py-3 bg-[#BA2027] text-white font-semibold rounded-lg transition">
        LEARN MORE
      </button>
    </div>
  );
};

export default IdeaManagement;