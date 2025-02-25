const Footer = () => {
  return (
    <footer className="bg-white text-black body-font w-full border-t border-red-500">
      <div className="container px-5 py-16 mx-auto">
        <div className="flex flex-wrap md:text-left text-center order-first">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-[#B21C1C] tracking-widest text-sm mb-3">CATEGORIES</h2>
              <nav className="list-none mb-6">
                <li><a className="text-gray-600 hover:text-[#D32F2F]">First Link</a></li>
                <li><a className="text-gray-600 hover:text-[#D32F2F]">Second Link</a></li>
                <li><a className="text-gray-600 hover:text-[#D32F2F]">Third Link</a></li>
                <li><a className="text-gray-600 hover:text-[#D32F2F]">Fourth Link</a></li>
              </nav>
            </div>
          ))}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-[#B21C1C] tracking-widest text-sm mb-3">SUBSCRIBE</h2>
            <div className="flex items-center">
              <input type="text" placeholder="Your Email" className="w-full bg-gray-100 rounded border border-gray-300 py-2 px-3 text-black outline-none" />
              <button className="ml-2 bg-[#D32F2F] text-white py-2 px-4 rounded hover:bg-[#B21C1C]">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-red-500">
        <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center text-gray-900">
            <span className="ml-3 text-xl">YourBrand</span>
          </a>
          <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">© 2025 YourBrand — All Rights Reserved</p>
          <span className="inline-flex sm:ml-auto mt-4 sm:mt-0 justify-center sm:justify-start">
            <a className="text-gray-500 hover:text-[#D32F2F] mx-2">FB</a>
            <a className="text-gray-500 hover:text-[#D32F2F] mx-2">TW</a>
            <a className="text-gray-500 hover:text-[#D32F2F] mx-2">IG</a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
