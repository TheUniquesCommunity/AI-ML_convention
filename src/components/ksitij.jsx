export default function FeaturesSection() {
    const features = [
      {
        title: "Awarded",
        description: "Recognized excellence in delivering outstanding results.",
      },
      {
        title: "Dedicated",
        description: "Committed to exceeding expectations with focus on success.",
      },
      {
        title: "Professional",
        description: "Maintaining the highest standards of service delivery.",
      },
      {
        title: "Experienced",
        description: "Years of expertise across diverse industries.",
      },
      {
        title: "Experienced",
        description: "Years of expertise across diverse industries.",
      },
      {
        title: "Experienced",
        description: "Years of expertise across diverse industries.",
      },
      {
        title: "Experienced",
        description: "Years of expertise across diverse industries.",
      },
      {
        title: "Experienced",
        description: "Years of expertise across diverse industries.",
      },
    ];
  
    return (
      <div className="min-h-screen w-full flex items-center bg-white p-4 sm:p-8">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="relative space-y-6 text-center lg:text-left">
              <div className="lg:sticky lg:top-30">
                <h2 className="text-2xl lg:text-4xl font-bold text-[#424E53] leading-tight">
                  Transform Your Vision Into
                  <span className="bg-clip-text text-[#BA2027]"> Reality</span>
                </h2>
                <p className="text-[#424E53] text-md leading-relaxed mx-auto lg:mx-0 max-w-2xl lg:max-w-none mt-6">
                  We bring together the perfect blend of innovation, expertise, and
                  dedication to help businesses thrive in the digital age. Our
                  proven track record spans across industries, delivering
                  exceptional results that matter.
                </p>
                <button
                  className="mt-6 px-8 py-4 bg-[#BA2027] text-white rounded-xl 
                    font-semibold transition-all duration-300 
                    hover:shadow-sm hover:shadow-[#da5064]"
                >
                  Get Started
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mx-auto w-full">
              <div className="space-y-6">
                {features
                  .filter((_, index) => index % 2 === 0)
                  .map((feature, index) => (
                    <div
                      key={index}
                      className="group relative bg-[#BA2027] p-6 rounded-2xl 
                      hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 
                      flex flex-col items-center justify-center text-center min-h-[300px]"
                    >
                      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="relative flex flex-col items-center">
                        <div className="w-20 h-20 flex items-center justify-center bg-white rounded-full mb-4 transform group-hover:scale-110 transition-transform duration-300">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-10 h-10 text-[#424E53]"
                          >
                            <path
                              fillRule="evenodd"
                              d="M4.5 12.75l4.5 4.5 10.5-10.5-1.5-1.5-9 9-3-3z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <h3 className="font-bold text-3xl text-white mb-2 group-hover:text-[#C8C8C8] transition-colors duration-300">
                          {feature.title}
                        </h3>
                        <p className="text-white text-sm leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
              </div>

              <div className="space-y-6 sm:mt-20">
                {features
                  .filter((_, index) => index % 2 !== 0)
                  .map((feature, index) => (
                    <div
                      key={index}
                      className="group relative bg-[#BA2027] p-6 rounded-2xl 
                      hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 
                      flex flex-col items-center justify-center text-center min-h-[300px]"
                    >
                      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="relative flex flex-col items-center">
                        <div className="w-20 h-20 flex items-center justify-center bg-white rounded-full mb-4 transform group-hover:scale-110 transition-transform duration-300">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-10 h-10 text-[#424E53]"
                          >
                            <path
                              fillRule="evenodd"
                              d="M4.5 12.75l4.5 4.5 10.5-10.5-1.5-1.5-9 9-3-3z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <h3 className="font-bold text-3xl text-white mb-2 group-hover:text-[#C8C8C8] transition-colors duration-300">
                          {feature.title}
                        </h3>
                        <p className="text-white text-sm leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }