'use client';

import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';

const ProductDetails = () => {
  const params = useParams();
  const router = useRouter();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const resJson = await fetch('/product.json');
        const staticProducts = await resJson.json();

        const resDb = await fetch('/api/products');
        const dbProducts = await resDb.json();

        const allProducts = [...staticProducts, ...dbProducts];

        const id = params.id;
        let foundProduct = allProducts[id]; 

        if (!foundProduct) {
          foundProduct = allProducts.find(p => p._id === id);
        }

        if (foundProduct) setProduct(foundProduct);
        else router.push('/products'); 
      } catch (err) {
        console.error('Error loading product:', err);
      }
    };

    fetchProduct();
  }, [params.id, router]);

  if (!product) {
    return <div className="text-center py-20 text-gray-700">Loading product details...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-extrabold mb-8 text-center text-gray-900">{product.name}</h1>
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row items-center p-6 md:p-10 gap-8">
        
        {product.image && (
          <div className="w-full md:w-1/2 h-64 md:h-80 relative">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover rounded-2xl shadow-lg"
            />
            <div className="absolute bottom-4 right-4 bg-gradient-to-r from-pink-500 to-yellow-400 text-white px-4 py-2 rounded-full font-semibold shadow-md text-lg">
              ${parseFloat(product.price).toFixed(2)}
            </div>
          </div>
        )}

        <div className="flex-1">
          <p className="text-gray-700 text-lg mb-6">{product.description}</p>
          <button
            onClick={() => router.push('/products')}
            className="bg-pink-400 hover:bg-pink-300 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
          >
            Back to Products
          </button>
        </div>

      </div>
    </div>
  );
};

export default ProductDetails;
