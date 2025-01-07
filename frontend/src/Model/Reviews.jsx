import React from "react";
import { review } from "../../utils";

const Reviews = () => {
  return (
    <div className="bg-gradient-to-b from-white to-gray-100 font-primary py-20">
      {/* Section Heading */}
      <h1 className="text-center mb-12 text-4xl font-extrabold text-gray-800 tracking-tight">
        Discover the Timeless Charm of Stayhub
      </h1>

      {/* Reviews Container */}
      <div className="flex flex-wrap justify-center gap-8 px-6">
        {review.map((item, index) => (
          <div
            key={index}
            className="w-full sm:w-80 md:w-96 lg:w-80 bg-white rounded-3xl shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 p-6 flex flex-col items-center"
          >
            <div className="text-center mb-4">
              {/* Author's Picture (If available, else default placeholder) */}
              <img
                src={item.authorImage || "testi-01.jpg"}
                alt="Author"
                className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-2xl font-bold text-gray-800">{item.author}</h3>
            </div>

            {/* Review Quote */}
            <p className="text-gray-600 text-lg italic mb-4">"{item.quote}"</p>

            {/* Hover Effect */}
            <div className="text-center text-gray-800 mt-auto">
              <span className="text-lg font-semibold">⭐⭐⭐⭐⭐</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
