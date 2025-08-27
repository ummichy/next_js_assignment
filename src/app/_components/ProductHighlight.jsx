'use client';

import React from 'react';

const demoProducts = [
  {
    id: 1,
    name: 'Diamond Necklace',
    description: 'Elegant diamond necklace crafted for timeless beauty.',
    price: 1299.99,
    image: 'https://i.ibb.co.com/6Rh96JPJ/istockphoto-1203787084-612x612.jpg',
  },
  {
    id: 2,
    name: 'Gold Ring',
    description: 'Stylish 18K gold ring perfect for any occasion.',
    price: 799.99,
    image: 'https://i.ibb.co.com/LXBqk8qp/pexels-arjunadinata-32266896.jpg',
  },
  {
    id: 3,
    name: 'Pearl Bracelet',
    description: 'Classic pearl bracelet with exquisite craftsmanship.',
    price: 499.99,
    image: 'https://i.ibb.co.com/S4Lshqt3/pexels-aljona-ovtsinnikova-121486965-31854723.jpg',
  },
  {
    id: 4,
    name: 'Sapphire Earrings',
    description: 'Beautiful sapphire earrings with a modern design.',
    price: 899.99,
    image: 'https://i.ibb.co.com/s9247qvq/istockphoto-2149229954-612x612.jpg',
  },
  {
    id: 5,
    name: 'Emerald Pendant',
    description: 'Stunning emerald pendant set in a gold chain.',
    price: 1099.99,
    image: 'https://i.ibb.co.com/8L38YG4G/istockphoto-1601495321-612x612.jpg',
  },
  {
    id: 6,
    name: 'Ruby Bracelet',
    description: 'Exquisite ruby bracelet perfect for special occasions.',
    price: 1199.99,
    image: 'https://i.ibb.co.com/DHCdHZjM/pexels-renato-zapata-332284607-14216749.jpg',
  },
];

const ProductHighlight = () => {
  return (
    <section className="py-16 px-4 ">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">
          Features at a Glance
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {demoProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-2xl flex flex-col"
            >
              <div className="relative h-56 w-full">
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-cover w-full h-full rounded-t-2xl"
                />
                <div className="absolute bottom-3 right-3 bg-gradient-to-r from-pink-500 to-yellow-400 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-md">
                  ${product.price.toFixed(2)}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-2xl font-semibold mb-2 text-gray-900">{product.name}</h3>
                <p className="text-gray-600 mb-4 flex-1">{product.description}</p>
                <button className="mt-auto bg-gray-900 hover:bg-pink-200 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductHighlight;
