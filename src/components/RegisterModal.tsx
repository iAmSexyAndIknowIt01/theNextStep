"use client";
import React from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function RegisterModal({ isOpen, onClose }: Props) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-[400px] max-w-[90%] text-center">
        <h3 className="text-xl font-bold text-green-700 mb-3">✍️ Бүртгүүлэх</h3>
        <p className="mb-6 text-gray-700">Бүртгэлийн мэдээллээ оруулна уу</p>
        <button
          onClick={onClose}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md"
        >
          Хаах
        </button>
      </div>
    </div>
  );
}
