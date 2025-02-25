import React from "react";

const UXProcess = () => {
  return (
    <div className="text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Title */}
        <h2 className=" text-black text-5xl font-bold text-center mb-12">Event Timeline</h2>

        {/* Horizontal Grid for Steps */}
        <div className="relative mt-[50px]"> {/* Adjusted to shift down by ~5cm */}
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-8 left-1/2 transform -translate-x-1/2 w-[90%] h-[2px] bg-gray-600 z-0"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1: User Journey Map */}
            <div className="flex flex-col items-center text-center relative z-10">
              <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center mb-4 shadow-[0_0_20px_5px_rgba(255,0,0,0.3)]">
                <span className="text-4xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Planning & Preparation</h3>
              <p className="text-sm text-[#424E53]">
              This phase sets event goals, finalizes themes, secures speakers, and prepares the website.
              </p>
            </div>

            {/* Step 2: Wireframes */}
            <div className="flex flex-col items-center text-center relative z-10">
              <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center mb-4 shadow-[0_0_20px_5px_rgba(255,0,0,0.3)]">
                <span className="text-4xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Marketing & Outreach</h3>
              <p className="text-sm text-[#424E53]">
              Promotions begin via social media, emails, and collaborations, while registrations and community engagement start.
              </p>
            </div>

            {/* Step 3: Clickable Prototype */}
            <div className="flex flex-col items-center text-center relative z-10">
              <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center mb-4 shadow-[0_0_20px_5px_rgba(255,0,0,0.3)]">
                <span className="text-4xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Execution & Event Day</h3>
              <p className="text-sm text-[#424E53]">
              Technical setup, live streaming, and speaker coordination are managed, ensuring interactive sessions and audience engagement.    </p>
            </div>

            {/* Step 4: Visual Design */}
            <div className="flex flex-col items-center text-center relative z-10">
              <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center mb-4 shadow-[0_0_20px_5px_rgba(255,0,0,0.3)]">
                <span className="text-4xl font-bold text-white">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Post-Event Activities</h3>
              <p className="text-sm text-[#424E53]">
              Event highlights and recordings are shared, feedback is gathered, and networking follow-ups begin.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UXProcess;