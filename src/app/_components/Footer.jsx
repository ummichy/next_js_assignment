'use client';

import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-start md:items-center space-y-8 md:space-y-0">
        
        {/* Brand Info */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-extrabold mb-2 text-white"><span className='text-pink-400 text-5xl'>O</span>rnamenta</h2>
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Ornamenta. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm mt-1">Designed with elegance and passion for jewellery lovers.</p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col justify-center   text-lg">
          <Link href="/" className="hover:text-pink-400 transition-colors">
            Home
          </Link>
          <Link href="/products" className="hover:text-pink-400 transition-colors">
            Products
          </Link>
          
        </div>

      </div>

      {/* Optional bottom bar */}
      <div className="mt-12 border-t border-gray-700 pt-4 text-center text-gray-500 text-sm">
        Crafted with love for jewellery enthusiasts
      </div>
    </footer>
  );
};

export default Footer;
