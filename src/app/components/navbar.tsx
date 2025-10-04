// src/components/Navbar.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <header className="bg-[#004225] text-white py-4 px-8 flex justify-between items-center">
        {/* Desktop Logo (hidden on mobile) */}
        <div className="font-bold text-xl hidden md:block">
          <Image
            src="/u4e_logo.png"
            alt="U4E Logo"
            width={65}
            height={65}
            priority
          />
        </div>

        {/* Desktop nav */}
        <nav className="space-x-8 hidden md:flex">
          <a href="#" className="hover:text-gray-300">About</a>
          <a href="/news" className="hover:text-gray-300">News</a>
          <a href="#" className="hover:text-gray-300">Stories</a>
          <a href="#" className="hover:text-gray-300">Resources</a>
          <a href="/contact" className="hover:text-gray-300">Contact us</a>
        </nav>

        {/* Mobile Hamburger + Logo */}
        <div className="md:hidden flex w-full justify-between items-center">
          {/* Hamburger on left */}
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>

          {/* Logo on right (hidden when menu is open) */}
          {!menuOpen && (
            <div className="font-bold text-xl block md:hidden">
              <Image
                src="/u4e_logo.png"
                alt="U4E Logo"
                width={50}
                height={50}
                priority
              />
            </div>
          )}
        </div>
      </header>

      {/* Mobile slide-in menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 left-0 h-full w-3/4 bg-[#1b1b7a]/90 text-white shadow-lg z-50 p-8 flex flex-col space-y-6"
          >
            <button
              className="self-end mb-6"
              onClick={() => setMenuOpen(false)}
            >
              <FiX size={28} />
            </button>
            <a href="#" className="hover:text-gray-300">About</a>
            <a href="#" className="hover:text-gray-300">News</a>
            <a href="#" className="hover:text-gray-300">Stories</a>
            <a href="#" className="hover:text-gray-300">Resources</a>
            <a href="#" className="hover:text-gray-300">Contact us</a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
