'use client'; 

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const Products = () => {
  const [products, setProducts] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const resJson = await fetch('/product.json');
        const staticProducts = await resJson.json();

        const resDb = await fetch('/api/products');
        const dbProducts = await resDb.json();

        setProducts([...staticProducts, ...dbProducts]);
      } catch (err) {
        console.error('Error loading products:', err);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-10 text-center text-gray-800">Available Products</h1>
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col transform transition-transform hover:scale-105 hover:shadow-2xl"
          >
            {/* Image section (if product has image) */}
            {product.image && (
              <div className="relative h-56 w-full">
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-cover w-full h-full rounded-t-2xl"
                />
                <div className="absolute bottom-3 right-3 bg-gradient-to-r from-pink-500 to-yellow-400 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-md">
                  ${parseFloat(product.price).toFixed(2)}
                </div>
              </div>
            )}

            <div className="p-6 flex flex-col flex-1">
              <h2 className="text-2xl font-semibold mb-2 text-gray-900">{product.name}</h2>
              <p className="text-gray-600 mb-4 flex-1">{product.description}</p>
              <button
                className="mt-auto bg-gray-500 hover:bg-pink-200 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
                onClick={() => router.push(`/products/${index}`)}
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
