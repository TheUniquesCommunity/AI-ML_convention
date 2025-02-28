import React from "react";

const UXProcess = () => {
  return (
    <div className="text-white py-18 px-4 sm:px-6 lg:px-8 mt-20">
      <div className="max-w-7xl mx-auto">
        {/* Main Title */}
        <h2 className="text-gray-700 text-5xl font-bold text-center -mt-8 mb-6">Event Timeline</h2>

        {/* Timeline Section */}
        <div className="relative mt-[50px] flex justify-center">
          {/* Connecting Line from Step 1 to Step 4 */}
          <div className="hidden lg:block absolute top-8 w-[75%] h-[2px] bg-gray-600 z-0"></div>

          {/* Steps Container */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center relative z-10">
              <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center mb-4 shadow-[0_0_20px_5px_rgba(255,0,0,0.3)]">
                <span className="text-4xl font-bold text-white">1</span>
              </div>
              <h3 className="text-gray-700 text-xl font-semibold mb-2">Introduction Session</h3>
              <p className="text-sm text-[#424E53]">
                AI/ML conventions explore innovations and trends connecting experts for learning and collaboration.
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center relative z-10">
              <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center mb-4 shadow-[0_0_20px_5px_rgba(255,0,0,0.3)]">
                <span className="text-4xl font-bold text-white">2</span>
              </div>
              <h3 className="text-gray-700 text-xl font-semibold mb-2">Speaker Sessions & Panels</h3>
              <p className="text-sm text-[#424E53]">
                Industry Leaders and innovators share insights on AI/ML trends and developments.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center relative z-10">
              <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center mb-4 shadow-[0_0_20px_5px_rgba(255,0,0,0.3)]">
                <span className="text-4xl font-bold text-white">3</span>
              </div>
              <h3 className="text-gray-700 text-xl font-semibold mb-2">Ideathon Presentation</h3>
              <p className="text-sm text-[#424E53]">
                Solve real-world problems through AI/ML-driven project ideas and prototypes.
              </p>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col items-center text-center relative z-10">
              <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center mb-4 shadow-[0_0_20px_5px_rgba(255,0,0,0.3)]">
                <span className="text-4xl font-bold text-white">4</span>
              </div>
              <h3 className="text-gray-700 text-xl font-semibold mb-2">Judging & Results</h3>
              <p className="text-sm text-[#424E53]">
                Projects will be evaluated and winners will be announced on the final date.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UXProcess;