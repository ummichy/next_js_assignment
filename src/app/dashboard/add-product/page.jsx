'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const AddProduct = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch('/api/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, description, price }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Something went wrong");

      setMessage("Product added successfully!");
      setName("");
      setDescription("");
      setPrice("");
      router.push("/products"); // Redirect to products page
    } catch (err) {
      setMessage(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    
    
<div className='pt-20'>

<div className="max-w-2xl mx-auto p-16 bg-gradient-to-r from-pink-50 to-ash-50 rounded-3xl shadow-2xl ">
      <h1 className="text-3xl font-extrabold mb-6 text-center text-gray-900">Add New Product</h1>
{message && (
        <p className={`mb-4 text-center font-semibold ${message.includes("success") ? "text-green-600" : "text-red-600"}`}>
          {message}
        </p>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <input
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border border-gray-300 p-3 rounded-xl shadow-sm focus:ring-2 focus:ring-pink-400 focus:outline-none transition"
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border border-gray-300 p-3 rounded-xl shadow-sm focus:ring-2 focus:ring-pink-400 focus:outline-none transition"
          rows={5}
          required
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="border border-gray-300 p-3 rounded-xl shadow-sm focus:ring-2 focus:ring-pink-400 focus:outline-none transition"
          step="0.01"
          required
        />

        <button
          type="submit"
          className="bg-pink-400 hover:bg-pink-200 text-white font-semibold py-3 rounded-xl transition-colors shadow-lg"
          disabled={loading}
        >
          {loading ? "Adding..." : "Add Product"}
        </button>
      </form>
    </div>


      
</div>
      
  );
};

export default AddProduct;
