"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import OpenJobsList from "@/components/OpenJobsList";

export default function JobSeekerPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  const jobs = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "TechSoft LLC",
      location: "Ulaanbaatar",
      description:
        "React, Next.js дээр хэрэглэгчийн интерфейс хөгжүүлнэ.\n- TailwindCSS мэдлэгтэй байх\n- API интеграци хийх чадвартай байх",
    },
    {
      id: 2,
      title: "Backend Engineer",
      company: "MongolTech",
      location: "Ulaanbaatar",
      description:
        "Node.js, Express ашиглан серверийн логик хөгжүүлэх.\n- PostgreSQL туршлагатай байх\n- REST API бүтээж чаддаг байх",
    },
    {
      id: 3,
      title: "Test Engineer",
      company: "MongolTech",
      location: "Ulaanbaatar",
      description:
        "Node.js, Express ашиглан серверийн логик хөгжүүлэх.\n- PostgreSQL туршлагатай байх\n- REST API бүтээж чаддаг байх",
    },
    {
      id: 4,
      title: "QA Engineer",
      company: "MongolTech",
      location: "Ulaanbaatar",
      description:
        "Node.js, Express ашиглан серверийн логик хөгжүүлэх.\n- PostgreSQL туршлагатай байх\n- REST API бүтээж чаддаг байх",
    },
  ];

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggedIn(true);
    setShowLoginModal(false);
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggedIn(true);
    setShowRegisterModal(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-50 to-green-100 pt-[4rem]">
      {/* Floating circles */}
      <div className="absolute w-[600px] h-[600px] bg-blue-300/30 rounded-full blur-3xl top-[-150px] left-[-150px]" />
      <div className="absolute w-[500px] h-[500px] bg-green-300/30 rounded-full blur-3xl bottom-[-120px] right-[-100px]" />

      {/* Navbar
      <div className="relative z-10">
        <Navbar
          isLoggedIn={isLoggedIn}
          onLoginClick={() => setShowLoginModal(true)}
          onRegisterClick={() => setShowRegisterModal(true)}
          onLogout={handleLogout}
        />
      </div> */}

      {/* Job list content */}
      <div className="relative z-10 max-w-5xl mx-auto py-16 px-6 animate-fadeIn">
        <h2 className="text-4xl font-extrabold text-center mb-10 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent drop-shadow-md">
          💼 Нээлттэй ажлын байрнууд
        </h2>

        <div className="bg-white/60 backdrop-blur-md rounded-2xl shadow-2xl border border-white/30 p-8">
          <OpenJobsList jobs={jobs} isLoggedIn={isLoggedIn} />
        </div>
      </div>

      {/* Animations */}
      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }
      `}</style>
    </main>
  );
}
