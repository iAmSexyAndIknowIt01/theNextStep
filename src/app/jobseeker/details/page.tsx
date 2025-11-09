"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function JobSeekerDetailsPage() {
  const router = useRouter();
  const [details, setDetails] = useState({
    skills: "",
    experience: "",
    about: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Ажил хайгчийн дэлгэрэнгүй мэдээлэл:", details);

    alert("Таны дэлгэрэнгүй мэдээлэл илгээгдлээ! (түр хадгалагдсан)");
    router.push("/jobseeker/profile");
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 py-10">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">
          📄 Дэлгэрэнгүй мэдээлэл
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Ур чадвар */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Ур чадвар
            </label>
            <input
              type="text"
              name="skills"
              value={details.skills}
              onChange={handleChange}
              placeholder="Жишээ: React, Next.js, Node.js"
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Туршлага */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Туршлага (жил)
            </label>
            <input
              type="number"
              name="experience"
              value={details.experience}
              onChange={handleChange}
              placeholder="Жишээ: 3"
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Товч танилцуулга */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Өөрийгөө товч танилцуулах
            </label>
            <textarea
              name="about"
              rows={4}
              value={details.about}
              onChange={handleChange}
              placeholder="Жишээ: Би веб хөгжүүлэгч мэргэжилтэй бөгөөд React ба Node.js технологид түлхүү ажилладаг."
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Илгээх */}
          <button
            type="submit"
            className="bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition font-semibold mt-4"
          >
            Хадгалах
          </button>

          {/* Буцах */}
          <button
            type="button"
            onClick={() => router.push("/jobseeker/profile")}
            className="text-blue-600 font-medium hover:underline mt-2"
          >
            ← Профайл руу буцах
          </button>
        </form>
      </div>
    </main>
  );
}
