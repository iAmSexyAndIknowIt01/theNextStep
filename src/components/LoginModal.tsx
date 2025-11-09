"use client";

import { useState } from "react";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: () => void; // Амжилттай нэвтрэх callback
}

export default function LoginModal({ isOpen, onClose, onLoginSuccess }: LoginModalProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleEmailLogin = () => {
    // Mock login: зөвхөн test@gmail.com / test
    if (email === "test@gmail.com" && password === "test") {
      onLoginSuccess(); // Амжилттай нэвтрэх
      setError("");
      onClose();
    } else {
      setError("Имэйл эсвэл нууц үг буруу байна.");
    }
  };

  const handleGoogleLogin = () => {
    // TODO: Google OAuth
    alert("Google-р нэвтрэх одоогоор идэвхгүй байна.");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-[400px] max-w-[90%] relative">
        <h3 className="text-2xl font-bold text-blue-700 mb-4 text-center">
          🔑 Нэвтрэх
        </h3>

        {/* Email/Password */}
        <div className="flex flex-col gap-4 mb-2">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            onClick={handleEmailLogin}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition"
          >
            Нэвтрэх
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-6">
          <hr className="flex-1 border-gray-300" />
          <span className="text-gray-400 text-sm">эсвэл</span>
          <hr className="flex-1 border-gray-300" />
        </div>

        {/* Google login */}
        <button
          onClick={handleGoogleLogin}
          className="flex items-center justify-center gap-2 border border-gray-300 rounded-md px-4 py-2 hover:bg-gray-100 transition w-full"
        >
          <img
            src="/google-logo.svg"
            alt="Google"
            className="w-5 h-5"
          />
          Google-р нэвтрэх
        </button>

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition"
        >
          ✖
        </button>
      </div>
    </div>
  );
}
