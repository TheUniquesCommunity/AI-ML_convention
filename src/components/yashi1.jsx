import { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative h-[50vh] flex items-center justify-center my-16"> {/* Adjusted height to 50vh */}
      {/* Background Container with both image and gradient */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: "url('/src/assets/yashi1i.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          borderRadius: '20px', // Apply border-radius here to round the corners
        }}
      />

      {/* Gradient Overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,0) 100%)',

          borderRadius: '20px', // This will also round the gradient overlay
        }}
      />

      {/* Content Container - Adjusted for lower placement */}
      <div className="relative z-10 w-full justify-center h-16 flex items-center pt-16"> {/* Reduced padding for adjusted height */}
        <div className="px-6 lg:px-16 max-w-7xl">
          <h1
            // className={`text-4xl lg:text-6xl font-semibold text-white leading-tight transition-all duration-1000 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
            //   }`}
            className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-white leading-tight transition-all duration-1000 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
            }`}
            
          >
            Leveraging the power of <br />
            <span className="text-[#BA2027]">code to grow</span> your business
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
