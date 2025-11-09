"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";

export default function JobSeekerProfilePage() {
  const router = useRouter();

  const [profile, setProfile] = useState({
    name: "",
    email: "",
    phone: "",
    skills: [] as string[],
    newSkill: "",
    about: "",
  });

  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const handleAddSkill = () => {
    if (profile.newSkill.trim() !== "") {
      setProfile({
        ...profile,
        skills: [...profile.skills, profile.newSkill],
        newSkill: "",
      });
    }
  };

  const handleRemoveSkill = (skill: string) => {
    setProfile({
      ...profile,
      skills: profile.skills.filter((s) => s !== skill),
    });
  };

  const handleSaveProfile = () => {
    // Түр хадгалалт (дараа нь API холбож болно)
    console.log("Profile saved:", profile);

    // ✅ Хадгалсны дараа Job list рүү буцаах
    alert("✅ Профайл амжилттай хадгалагдлаа!");
    router.push("/jobseeker");
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100">
      <Navbar
        isLoggedIn={isLoggedIn}
        onLoginClick={() => {}}
        onRegisterClick={() => {}}
        onLogout={() => setIsLoggedIn(false)}
      />

      <div className="max-w-3xl mx-auto bg-white mt-10 p-8 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">
          👤 Миний профайл
        </h2>

        <form className="space-y-6">
          {/* Хувийн мэдээлэл */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Нэр
            </label>
            <input
              type="text"
              value={profile.name}
              onChange={(e) =>
                setProfile({ ...profile, name: e.target.value })
              }
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Жишээ: Бат Эрдэнэ"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Имэйл
            </label>
            <input
              type="email"
              value={profile.email}
              onChange={(e) =>
                setProfile({ ...profile, email: e.target.value })
              }
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="bat@example.com"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Утасны дугаар
            </label>
            <input
              type="tel"
              value={profile.phone}
              onChange={(e) =>
                setProfile({ ...profile, phone: e.target.value })
              }
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="99998877"
            />
          </div>

          {/* Ур чадвар */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Ур чадварууд
            </label>
            <div className="flex gap-2 mb-3">
              <input
                type="text"
                value={profile.newSkill}
                onChange={(e) =>
                  setProfile({ ...profile, newSkill: e.target.value })
                }
                className="flex-grow border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Жишээ: React, UI/UX, Python..."
              />
              <button
                type="button"
                onClick={handleAddSkill}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 rounded-md transition"
              >
                Нэмэх
              </button>
            </div>

            <div className="flex flex-wrap gap-2">
              {profile.skills.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                  <button
                    type="button"
                    onClick={() => handleRemoveSkill(skill)}
                    className="ml-2 text-red-500 font-bold"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Товч танилцуулга */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Өөрийн товч танилцуулга
            </label>
            <textarea
              value={profile.about}
              onChange={(e) =>
                setProfile({ ...profile, about: e.target.value })
              }
              rows={4}
              placeholder="Өөрийн тухай товч мэдээлэл..."
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          {/* ✅ Хадгалах товч */}
          <div className="text-center">
            <button
              type="button"
              onClick={handleSaveProfile}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md font-semibold transition"
            >
              💾 Хадгалах
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
