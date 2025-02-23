// import React from "react";

const services = [
  {
    id: 1,
    title: "General code",
    description:
      "Mauris sollicitudin fermentum libero. Vivamus aliquet elit ac nisl. In hac habitasse platea dictumst.",
    icon: "\u003C/\u003E",
    bgColor: "bg-red-500",
    rotated: true,
  },
  {
    id: 2,
    title: "Code systems",
    description:
      "Mauris sollicitudin fermentum libero. Vivamus aliquet elit ac nisl. In hac habitasse platea dictumst.",
    icon: "🔄",
    bgColor: "bg-black",
  },
  {
    id: 3,
    title: "DevOps",
    description:
      "Mauris sollicitudin fermentum libero. Vivamus aliquet elit ac nisl. In hac habitasse platea dictumst.",
    icon: "👥",
    bgColor: "bg-black",
  },
  {
    id: 4,
    title: "Agile consulting",
    description:
      "Mauris sollicitudin fermentum libero. Vivamus aliquet elit ac nisl. In hac habitasse platea dictumst.",
    icon: "📝",
    bgColor: "bg-black",
  },
];

const ServicesSection = () => {
  return (
    <div className="min-h-screen bg-white py-25 text-black flex flex-col md:flex-row gap-20">
      {/* Left Section (Text) */}
      <div className="w-full md:w-3/7 pr-8">
        <h2 className="text-4xl lg:text-5xl text-gray-700 leading-[122%] font-bold mb-4">
          Things I do for you that simply make your software better.
        </h2>
        <p className="text-gray-600 text-lg lg:text-xl mb-6">
          Vivamus elementum semper nisi. Maecenas ullamcorper, dui et feugiat, eros pede.
        </p>
        <button className="border-2 border-white py-2 px-6 rounded-lg hover:bg-white hover:text-black transition">
          See all services
        </button>
      </div>
      {/* Right Section (Service Cards) */}
      <div className="w-full md:w-4/7 grid grid-cols-1 md:grid-cols-2 gap-15 ">
        {services.map((service) => (
          <div
            key={service.id}
            className={`p-6 rounded-3xl ${service.bgColor} text-black shadow-lg relative transition transform ${service.rotated ? "-rotate-6" : ""
              }`}
          >
            <div className="text-3xl">{service.icon}</div>
            <h2 className="text-2xl font-bold mt-2 text-white">{service.title}</h2>
            <p className="text-white mt-2">{service.description}</p>
            <a href="#" className="mt-4 inline-block text-white font-bold">
              Read more
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
