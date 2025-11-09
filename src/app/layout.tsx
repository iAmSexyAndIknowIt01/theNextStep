"use client";
import { ReactNode, useState } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import LoginModal from "@/components/LoginModal";
import RegisterModal from "@/components/RegisterModal";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }: { children: ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  return (
    <html lang="mn" className="bg-gradient-to-br from-blue-50 to-green-100 text-gray-900">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen text-gray-900 overflow-x-hidden`}
      >
        {/* Navbar */}
        <div className="fixed top-0 left-0 w-full z-50">
          <Navbar
            isLoggedIn={isLoggedIn}
            onLoginClick={() => setShowLoginModal(true)}
            onRegisterClick={() => setShowRegisterModal(true)}
            onLogout={() => setIsLoggedIn(false)}
          />
        </div>

        {/* Main content */}
        <main className="min-h-screen w-full">{children}</main>

        {/* Login Modal */}
        <LoginModal
          isOpen={showLoginModal}
          onClose={() => setShowLoginModal(false)}
          onLoginSuccess={() => setIsLoggedIn(true)}
        />

        {/* Register Modal */}
        <RegisterModal
          isOpen={showRegisterModal}
          onClose={() => setShowRegisterModal(false)}
        />
      </body>
    </html>
  );
}
