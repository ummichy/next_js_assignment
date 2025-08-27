"use client";
import { signIn } from "next-auth/react";

export default function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-pink-50 to-yellow-50 px-4">
      <div className="w-full max-w-md bg-white p-10 rounded-3xl shadow-2xl">
        <h2 className="text-3xl font-extrabold text-center mb-8 text-gray-900">
          Welcome Back
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Login with your Google account to continue exploring our elegant jewellery collection.
        </p>
        <button
          onClick={() => signIn("google", { callbackUrl: "/" })}
          className="w-full py-3 bg-pink-400 text-white rounded-xl font-semibold shadow-lg hover:bg-pink-600 transition-colors"
        >
          Login with Google
        </button>
      </div>
    </div>
  );
}
