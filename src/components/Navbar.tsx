"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface NavbarProps {
  isLoggedIn: boolean;
  onLoginClick: () => void;
  onRegisterClick: () => void;
  onLogout: () => void;
}

export default function Navbar({
  isLoggedIn,
  onLoginClick,
  onRegisterClick,
  onLogout,
}: NavbarProps) {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/20 border-b border-white/30 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-10 py-4">
        {/* Logo / Title */}
        <h1
          onClick={() => router.push("/")}
          className="text-2xl md:text-3xl font-extrabold cursor-pointer bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent hover:opacity-90 transition"
        >
          Next Step 🚀
        </h1>

        {/* Right side */}
        <div className="flex items-center gap-6 text-white">
          {!isLoggedIn ? (
            <>
              <button
                onClick={onRegisterClick}
                className="px-4 py-2 rounded-lg bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 transition-all duration-300 font-semibold shadow-md hover:shadow-green-400/30"
              >
                ✍️ Бүртгүүлэх
              </button>
              <button
                onClick={onLoginClick}
                className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 transition-all duration-300 font-semibold shadow-md hover:shadow-blue-400/30"
              >
                🔑 Нэвтрэх
              </button>
            </>
          ) : (
            <div className="relative">
              {/* Menu button */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="flex items-center gap-2 px-4 py-2 bg-grey/20 border border-grey/30 rounded-lg hover:bg-white/30 transition-all duration-300"
              >
                <span className="font-semibold text-gray-600">☰ Меню</span>
              </button>

              {/* Dropdown */}
              {menuOpen && (
                <div className="absolute right-0 mt-3 w-44 bg-white/20 backdrop-blur-md border border-white/30 rounded-lg shadow-lg text-white overflow-hidden animate-fadeIn">
                  <button
                    onClick={() => {
                      router.push("/jobseeker/profile");
                      setMenuOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 hover:bg-white/30 transition"
                  >
                    👤 Миний профайл
                  </button>
                  <button
                    onClick={() => {
                      onLogout();
                      setMenuOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 hover:bg-white/30 transition"
                  >
                    🚪 Гарах
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Animations */}
      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </nav>
  );
}
