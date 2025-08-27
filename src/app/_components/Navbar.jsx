'use client';
import Link from 'next/link';
import { useState } from 'react';
import { useSession, signOut } from 'next-auth/react';
import { HiMenu, HiX } from 'react-icons/hi';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session } = useSession();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gray-800 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          <div className="text-3xl font-extrabold text-white"><span className='text-pink-400 text-5xl'>O</span>rnamenta</div>

          <div className="hidden md:flex space-x-6 items-center">
            <Link href="/" className="hover:text-pink-400 text-white transition-colors">Home</Link>
            <Link href="/products" className="hover:text-pink-400 text-white transition-colors">Products</Link>
            {session ? (
              <>
                <Link href="/dashboard/add-product" className="hover:text-pink-400 text-white transition-colors">Add Product</Link>
                <button
                  onClick={() => signOut({ callbackUrl: '/' })}
                  className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link href="/login" className="px-4 py-2 bg-pink-400 text-white rounded-lg hover:bg-pink-500 transition-colors">
                Login
              </Link>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden mt-2 flex flex-col space-y-2 pb-4 border-t border-gray-700 transition-all duration-300 ${
            isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <Link href="/" className="hover:text-pink-400 text-white px-2 py-2" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/products" className="hover:text-pink-400 text-white px-2 py-2" onClick={() => setIsOpen(false)}>Products</Link>
          {session ? (
            <>
              <Link href="/dashboard/add-product" className="hover:text-pink-400 text-white px-2 py-2" onClick={() => setIsOpen(false)}>Add Product</Link>
              <span className="text-gray-200 px-2 py-2">{session.user?.name}</span>
              <button
                onClick={() => { signOut({ callbackUrl: '/' }); setIsOpen(false); }}
                className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
              >
                Logout
              </button>
            </>
          ) : (
            <Link href="/login" className="px-4 py-2 bg-pink-400 text-white rounded-lg hover:bg-pink-500 transition-colors" onClick={() => setIsOpen(false)}>
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
