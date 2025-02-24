// import React from "react";

const ProcessTimeline = () => {
  return (
    <div className="bg-white text-black min-h-screen flex flex-col items-center pt-20 px-4">
      {/* Title and Subtitle */}
<div className="mt-20 md:mt-30 text-center">
  <h2 className="text-3xl font-bold md:text-4xl">Proven process for success</h2>
  <p className="text-sm mt-4 md:text-base">We help you on every step of the journey</p>
</div>


      {/* Timeline */}
      <div className="relative w-4/5 flex flex-col md:flex-row justify-between items-center mt-5">
        {/* Timeline Line */}
<div className="hidden md:block absolute top-[65%] left-1/2 -translate-x-1/2 w-full h-[2px] bg-black"></div>


        {/* Steps */}
        {[
          { number: "01", title: "Contact me", text: "Donec sodales sagittis magna.Cras dapibus. " },
          { number: "02", title: "Research", text: "Praesent ut ligula non mi varius sagittis." },
          { number: "03", title: "Work", text: "Curabitur ullamcorper ultricies nisi." },
          { number: "04", title: "Test & results", text: "Vivamus elementum semper nisi." }
        ].map((step, index) => (
          <div key={index} className="relative flex flex-col text-4xl items-center space-y-5 md:w-1/4 mt-12">
            {/* Number */}
            <span className="text-black text-6xl md:text-7xl font-bold mt-4 md:mt-6">
            {step.number}
            </span>

            {/* Dot */}
            <div className="w-4 h-4 bg-blue-500 rounded-full md:block hidden"></div>

            {/* Step Title & Description */}
            <h3 className="text-lg font-bold mt-4">{step.title}</h3>
            <p className="text-sm max-w-xs">{step.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProcessTimeline;