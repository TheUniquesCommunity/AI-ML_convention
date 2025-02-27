

// import profilePic from "../assets/profile.jpg"; // Add your image in src/assets/

// const Home = () => {
//   return (
//     <div className="hero">
//       <div className="hero-text">
//         <h1>Professional <span className="highlight">consulting</span> for your app & software.</h1>
//         <p>Hey there! i'm John Parker. Coding consultant focused on coding and deployment solutions.</p>
//         <div className="hero-buttons">
//           <button className="btn-primary">Let's Talk</button>
//           <button className="btn-secondary">See Case Studies</button>
//         </div>
//       </div>
//       <div className="hero-image">
//         <img src={profilePic} alt="John Parker" />
//       </div>
//     </div>
//   );
// };

// export default Home;


import profilePic from "../assets/profile.jpg"; // Add your image in src/assets/

const Home = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between my-12" >
      <div className="max-w-2xl text-center lg:text-left">
        <h1 className="text-4xl lg:text-5xl text-gray-700 leading-[122%] font-bold">
        Virtual <span className="text-[#BA2027]">AI/ML</span> Convention 2025.
        </h1>
        <p className="text-gray-600 text-lg lg:text-xl mt-4">
        Unlock the potential of AI and ML with industry leaders and visionaries.
        Collaborate, innovate, and shape the future of technology at the Virtual AI/ML Convention 2025.
        </p>
        <div className="mt-6 flex flex-col lg:flex-row gap-4">
          <button className="bg-[#BA2027] text-white px-6 py-3 rounded-md hover:bg-red-700 transition">
            Resigter Now
          </button>
          <button className="border border-[#BA2027] text-black px-6 py-3 rounded-md hover:bg-red-600 hover:text-white transition">
            Download Browser
          </button>
        </div>
      </div>
      <div className="mt-8 lg:mt-0 flex justify-center">
        <img src={profilePic} alt="John Parker" className="w-full max-w-3xl rounded-4xl rounded-bl-[200px] shadow-lg" />
      </div>
    </div>
  );
};

export default Home;
