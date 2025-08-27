'use client';

import React from 'react';

const Banner = () => {
  return (
    <section
      className="relative bg-cover bg-center text-white"
      style={{ backgroundImage: "url('https://i.ibb.co.com/S42TFJKk/pexels-cottonbro-6662322.jpg')" }}
    >
      <div className="bg-black bg-opacity-50">
        <div className="max-w-7xl mx-auto px-4 py-24 sm:py-32 flex flex-col-reverse md:flex-row items-center md:justify-between">
          
          {/* Text Section with Animation */}
          <div className="text-center md:text-left space-y-6 md:space-y-8 fadeInUp">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
              Discover Elegant Jewellery
            </h1>
            <p className="text-lg sm:text-xl text-gray-100 max-w-md mx-auto md:mx-0">
              Explore timeless collections of necklaces, rings, and bracelets. 
              Crafted with care, designed for beauty. Perfect elegance for every occasion.
            </p>
          </div>

          {/* Right Side Placeholder Box */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0 flex justify-center">
            <div className="w-64 h-64 sm:w-80 sm:h-80"></div>
          </div>

        </div>
      </div>

      {/* CSS Animation inside this file */}
      <style jsx>{`
        .fadeInUp {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInUp 1s ease-out forwards;
        }

        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Banner;
