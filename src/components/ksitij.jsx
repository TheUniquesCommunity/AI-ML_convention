import React from 'react';

export default function FeaturesSection() {
  const features = [
    { 
      title: "AI in Healthcare",
      description: "Transforming diagnostics and personalized medicine.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16 text-white/40">
          <path d="M9 3h6v8h8v6h-8v8h-6v-8H1v-6h8V3z" />
        </svg>
      )
    },
    
    {
      title: "Ethics & Bias in ML",
      description: "Addressing fairness and transparency challenges.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16 text-white/40">
          <path fillRule="evenodd" d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z" clipRule="evenodd" />
          <path d="M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z" />
        </svg>
      )
    },
    {
      title: "Scalable AI Models",
      description: "Building AI solutions for large-scale applications",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16 text-white/40">
          <path d="M11.644 1.59a.75.75 0 01.712 0l9.75 5.25a.75.75 0 010 1.32l-9.75 5.25a.75.75 0 01-.712 0l-9.75-5.25a.75.75 0 010-1.32l9.75-5.25z" />
          <path d="M3.265 10.602l7.668 4.129a2.25 2.25 0 002.134 0l7.668-4.13 1.37.739a.75.75 0 010 1.32l-9.75 5.25a.75.75 0 01-.71 0l-9.75-5.25a.75.75 0 010-1.32l1.37-.738z" />
          <path d="M10.933 19.231l-7.668-4.13-1.37.739a.75.75 0 000 1.32l9.75 5.25c.221.12.489.12.71 0l9.75-5.25a.75.75 0 000-1.32l-1.37-.738-7.668 4.13a2.25 2.25 0 01-2.134-.001z" />
        </svg>
      )
    },
    {
      title: "AI in Creative Arts",
      description: "Exploring AI-generated music, art, and media.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16 text-white/40">
          <path fillRule="evenodd" d="M20.599 1.5c-.376 0-.743.111-1.055.32l-5.08 3.385a18.747 18.747 0 00-3.471 2.987 10.04 10.04 0 014.815 4.815 18.748 18.748 0 002.987-3.472l3.386-5.079A1.902 1.902 0 0020.599 1.5zm-8.3 14.025a18.76 18.76 0 001.896-1.207 8.026 8.026 0 00-4.513-4.513A18.75 18.75 0 008.475 11.7l-.278.5a5.26 5.26 0 013.601 3.602l.502-.278zM6.75 13.5A3.75 3.75 0 003 17.25a1.5 1.5 0 01-1.601 1.497.75.75 0 00-.7 1.123 5.25 5.25 0 009.8-2.62 3.75 3.75 0 00-3.75-3.75z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      title: "Deep Learning Breakthroughs",
      description: "Latest research in neural networks.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16 text-white/40">
          <path d="M16.5 7.5h-9v9h9v-9z" />
          <path fillRule="evenodd" d="M8.25 2.25A.75.75 0 019 3v.75h2.25V3a.75.75 0 011.5 0v.75H15V3a.75.75 0 011.5 0v.75h.75a3 3 0 013 3v.75H21A.75.75 0 0121 9h-.75v2.25H21a.75.75 0 010 1.5h-.75V15H21a.75.75 0 010 1.5h-.75v.75a3 3 0 01-3 3h-.75V21a.75.75 0 01-1.5 0v-.75h-2.25V21a.75.75 0 01-1.5 0v-.75H9V21a.75.75 0 01-1.5 0v-.75h-.75a3 3 0 01-3-3v-.75H3A.75.75 0 013 15h.75v-2.25H3a.75.75 0 010-1.5h.75V9H3a.75.75 0 010-1.5h.75v-.75a3 3 0 013-3h.75V3a.75.75 0 01.75-.75zM6 6.75A.75.75 0 016.75 6h10.5a.75.75 0 01.75.75v10.5a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V6.75z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      title: "Natural Language Processing",
      description: "Enhancing human-computer interaction.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16 text-white/40">
          <path d="M3 5h18v2H3z" />
          <path d="M3 9h12v2H3z" />
          <path d="M3 13h18v2H3z" />
          <path d="M3 17h12v2H3z" />
          <circle cx="19" cy="12" r="4" fillOpacity="0.7" />
          <path d="M17 10.5h4M17 12h4M17 13.5h4" stroke="currentColor" strokeWidth="0.7" />
        </svg>
      )
    },
    {
      title: "Autonomous Systems",
      description: "AI-driven robotics and automation.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16 text-white/40">
          <path d="M9 2h6v2H9z" />
          <path d="M4 4h16v12H4z" />
          <circle cx="8" cy="10" r="2" />
          <circle cx="16" cy="10" r="2" />
          <path d="M8 14h8v2H8z" />
          <path d="M7 16v4M17 16v4" stroke="currentColor" strokeWidth="2" />
          <path d="M5 18h4M15 18h4" />
        </svg>
      )
    },
    {
      title: "Future of AI",
      description: "Predictions and trends shaping the industry.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16 text-white/40">
          <path fillRule="evenodd" d="M1.5 7.125c0-1.036.84-1.875 1.875-1.875h6c1.036 0 1.875.84 1.875 1.875v3.75c0 1.036-.84 1.875-1.875 1.875h-6A1.875 1.875 0 011.5 10.875v-3.75zm12 1.5c0-1.036.84-1.875 1.875-1.875h5.25c1.035 0 1.875.84 1.875 1.875v8.25c0 1.035-.84 1.875-1.875 1.875h-5.25a1.875 1.875 0 01-1.875-1.875v-8.25zM3 16.125c0-1.036.84-1.875 1.875-1.875h5.25c1.036 0 1.875.84 1.875 1.875v2.25c0 1.035-.84 1.875-1.875 1.875h-5.25A1.875 1.875 0 013 18.375v-2.25z" clipRule="evenodd" />
        </svg>
      )
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="relative space-y-6 text-center lg:text-left">
            <div className="lg:sticky lg:top-24 lg:pt-4">
              <h2 className="text-4xl lg:text-5xl font-semibold text-black">
                Exploring AI Frontiers:
                <span className="bg-clip-text text-[#BA2027]">
                  {" "}
                  Innovation Into Reality
                </span>
              </h2>
              <p className="text-[#424E53] leading-relaxed mx-auto lg:mx-0 max-w-2xl text-lg lg:text-xl mt-6">
                AI is revolutionizing industries, enhancing automation, diagnostics, and creativity. This section covers key advancements, challenges, and ethical considerations shaping its future.
                <br /> Still Interested?
              </p>
              <button
                className="mt-8 px-8 py-4 bg-[#BA2027] text-white rounded-xl 
                    font-semibold transition-all duration-300 
                    hover:shadow-md hover:bg-[#BA2027] hover:shadow-[#da5064]"
              >
                Register Now
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            <div className="space-y-6">
              {features
                .filter((_, index) => index % 2 === 0)
                .map((feature, index) => (
                  <div
                    key={index}
                    className="group relative bg-[#BA2027] p-6 rounded-2xl 
                      hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 
                      flex flex-col min-h-[250px] overflow-hidden"
                  >
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative z-10 text-left">
                      <h3 className="font-bold text-2xl text-white mb-2 group-hover:text-[#C8C8C8] transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-white text-base leading-relaxed max-w-[80%]">
                        {feature.description}
                      </p>
                    </div>
                    <div className="absolute bottom-4 right-4 transform group-hover:scale-110 transition-transform duration-300 z-10">
                      {feature.icon}
                    </div>
                  </div>
                ))}
            </div>

            <div className="space-y-6 sm:mt-16">
              {features
                .filter((_, index) => index % 2 !== 0)
                .map((feature, index) => (
                  <div
                    key={index}
                    className="group relative bg-[#BA2027] p-6 rounded-2xl 
                      hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 
                      flex flex-col min-h-[250px] overflow-hidden"
                  >
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative z-10 text-left">
                      <h3 className="font-bold text-2xl text-white mb-2 group-hover:text-[#C8C8C8] transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-white text-base leading-relaxed max-w-[80%]">
                        {feature.description}
                      </p>
                    </div>
                    <div className="absolute bottom-4 right-4 transform group-hover:scale-110 transition-transform duration-300 z-10">
                      {feature.icon}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}