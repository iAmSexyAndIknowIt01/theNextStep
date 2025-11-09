"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function HomePage() {
  const router = useRouter();

  return (
    <main className="relative flex items-center justify-center h-screen text-center overflow-hidden bg-black">
      {/* Background Image */}
      <Image
        src="/Home_Background.jpg"
        alt="Job matching background"
        fill
        className="object-cover opacity-70 scale-105 animate-pulse-slow"
        priority
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-black/90 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative z-10 text-white max-w-2xl p-8 rounded-2xl bg-white/10 backdrop-blur-md shadow-2xl border border-white/20 animate-fadeIn">
        <h1>
          <span className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent drop-shadow-lg">The Next Step</span><span className="text-5xl">🚀</span> 
        </h1>
        

        <p className="text-lg md:text-xl mb-10 text-gray-200 leading-relaxed">
          Ур чадвараа бүртгүүлээд, танд хамгийн тохирох ажлын байрны санал хүлээн аваарай.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <button
            onClick={() => router.push("/jobseeker")}
            className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white px-10 py-4 rounded-xl shadow-lg hover:shadow-blue-500/30 transition-all duration-300 font-semibold"
          >
            🧑‍💻 Ажил хайгч
          </button>

          <button
            onClick={() => router.push("/employer")}
            className="bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white px-10 py-4 rounded-xl shadow-lg hover:shadow-green-500/30 transition-all duration-300 font-semibold"
          >
            🏢 Ажил олгогч
          </button>
        </div>
      </div>

      {/* Subtle floating animation for style */}
      <style jsx global>{`
        @keyframes pulse-slow {
          0%, 100% {
            transform: scale(1.05);
          }
          50% {
            transform: scale(1.08);
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 15s ease-in-out infinite;
        }

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
          animation: fadeIn 1.2s ease-out forwards;
        }
      `}</style>
    </main>
  );
}
