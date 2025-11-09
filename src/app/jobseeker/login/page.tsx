"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function JobSeekerLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Нэвтрэх мэдээлэл:", { email, password });
    // Түр жишээ: нэвтрэлт амжилттай гэж үзээд профайл руу шилжүүлэх
    router.push("/jobseeker/profile?name=Бат-Эрдэнэ&email=" + email);
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 py-10">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">🔑 Нэвтрэх</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Имэйл"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="password"
            placeholder="Нууц үг"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition font-semibold mt-4"
          >
            Нэвтрэх
          </button>
        </form>
      </div>
    </main>
  );
}
