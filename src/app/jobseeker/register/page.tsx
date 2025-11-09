"use client";
import { useState } from "react";

export default function JobSeekerRegisterPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    location: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Ажил хайгчийн бүртгэлийн мэдээлэл:", formData);
    alert("Таны мэдээлэл илгээгдлээ!");
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 py-10">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">
          ✍️ Ажил хайгчийн бүртгэл
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Нэр"
            value={formData.name}
            onChange={handleChange}
            required
            className="border border-gray-500 rounded-md p-2 focus:ring-2 focus:ring-blue-500 text-gray-600"
          />
          <input
            type="email"
            name="email"
            placeholder="Имэйл"
            value={formData.email}
            onChange={handleChange}
            required
            className="border border-gray-500 rounded-md p-2 focus:ring-2 focus:ring-blue-500 text-gray-600"
          />
          <input
            type="text"
            name="location"
            placeholder="Байршил"
            value={formData.location}
            onChange={handleChange}
            className="border border-gray-500 rounded-md p-2 focus:ring-2 focus:ring-blue-500 text-gray-600"
          />

          <button
            type="submit"
            className="bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition font-semibold mt-4"
          >
            Бүртгүүлэх
          </button>
        </form>
      </div>
    </main>
  );
}
