import React from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";

const Deals = () => {
  return (
    <div className="min-h-screen bg-black font-primary py-[7vh]">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-white text-3xl md:text-4xl font-bold">
          Best Deals in Our Dream Home
        </h1>
        <h1 className="text-white text-[10vw] md:text-[220px] leading-none font-extrabold">
          Stay Happy
        </h1>
      </div>

      {/* Deals Section */}
      <div className="w-full flex flex-col gap-16">
        {/* Row 1 */}
        <div className="flex flex-wrap justify-center gap-10">
          {/* Hotels Card */}
          <div className="w-[90%] md:w-[45%] lg:w-[45vw] h-[60vh] rounded-[40px] bg-gradient-to-r from-teal-500 to-blue-600 p-10 shadow-xl relative">
            {/* Icon Section */}
            <div className="absolute top-6 right-6 text-white">
              <FaArrowCircleUp className="text-5xl md:text-7xl transform rotate-45 animate-bounce" />
            </div>
            {/* Content Section */}
            <div className="flex flex-col justify-between h-full">
              <div>
                <h1 className="text-5xl md:text-7xl font-extrabold text-white">
                  Hotels
                </h1>
                <p className="text-lg md:text-xl text-gray-200 mt-4">
                  Your dream destination awaits,
                </p>
                <p className="text-lg md:text-xl font-bold uppercase tracking-wider text-gray-200">
                  Book Now
                </p>
                <p className="text-lg md:text-xl text-gray-200">
                  Make unforgettable memories.
                </p>
              </div>
              {/* Action Button */}
              <button className="px-6 md:px-8 py-3 bg-gradient-to-r from-blue-700 to-purple-700 text-white font-bold text-sm md:text-lg uppercase tracking-wider rounded-full shadow-lg transition-all transform hover:scale-105 hover:from-purple-700 hover:to-blue-700">
                Explore Now
              </button>
            </div>
          </div>

          {/* Small Cards */}
          {[
            { name: "Ashish", location: "Manali, India", price: "Rs.500", image: "1.jpg" },
            { name: "Taj", location: "Kasol, India", price: "Rs.3000", image: "2.jpg" },
          ].map((item, index) => (
            <div
              key={index}
              className="w-[90%] md:w-[24%] lg:w-[24vw] h-[60vh] flex items-end shadow-md rounded-3xl overflow-hidden"
              style={{
                background: `url("${item.image}")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="bg-black/70 w-full h-[150px] flex flex-col justify-around px-6 md:px-10">
                <div>
                  <h1 className="text-xl md:text-2xl font-semibold text-white">
                    {item.name}
                  </h1>
                  <div className="flex gap-2 items-center">
                    <IoLocationOutline className="text-secondaryC text-lg" />
                    <p className="text-gray-400 text-sm">{item.location}</p>
                  </div>
                </div>
                <h1 className="text-3xl md:text-4xl font-semibold text-white">
                  {item.price}
                </h1>
              </div>
            </div>
          ))}
        </div>

        {/* Row 2 */}
        <div className="flex flex-wrap justify-center gap-10">
          {/* Small Cards */}
          {[
            { name: "Sharma", location: "Chandigarh, India", price: "$2500", image: "3.jpg" },
            { name: "Deo", location: "Sissu, India", price: "Rs.3000", image: "4.jpg" },
          ].map((item, index) => (
            <div
              key={index}
              className="w-[90%] md:w-[24%] lg:w-[24vw] h-[60vh] flex items-end shadow-md rounded-3xl overflow-hidden"
              style={{
                background: `url("${item.image}")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="bg-black/70 w-full h-[150px] flex flex-col justify-around px-6 md:px-10">
                <div>
                  <h1 className="text-xl md:text-2xl font-semibold text-white">
                    {item.name}
                  </h1>
                  <div className="flex gap-2 items-center">
                    <IoLocationOutline className="text-secondaryC text-lg" />
                    <p className="text-gray-400 text-sm">{item.location}</p>
                  </div>
                </div>
                <h1 className="text-3xl md:text-4xl font-semibold text-white">
                  {item.price}
                </h1>
              </div>
            </div>
          ))}

          {/* Villas Card */}
          <div className="w-[90%] md:w-[45%] lg:w-[45vw] h-[60vh] rounded-[40px] bg-gradient-to-r from-blue-600 to-indigo-500 p-10 shadow-xl relative">
            {/* Icon Section */}
            <div className="absolute top-6 right-6 text-white">
              <FaArrowCircleUp className="text-5xl md:text-7xl transform rotate-45 animate-bounce" />
            </div>
            {/* Content Section */}
            <div className="flex flex-col justify-between h-full">
              <div>
                <h1 className="text-5xl md:text-7xl font-extrabold text-white">
                  Villas
                </h1>
                <p className="text-lg md:text-xl text-gray-200 mt-4">
                  Your dream destination awaits,
                </p>
                <p className="text-lg md:text-xl text-gray-200">
                  Book moments, create memories.
                </p>
              </div>
              {/* Action Button */}
              <button className="px-6 md:px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold text-sm md:text-lg uppercase tracking-wider rounded-full shadow-lg transition-all transform hover:scale-105 hover:from-purple-600 hover:to-indigo-500">
                Explore Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deals;
