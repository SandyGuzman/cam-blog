"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  return (
    <header className="absolute top-[-10px] left-0 w-full flex justify-between items-center py-2 px-5 z-[50] bg-transparent">
      <div className="flex items-center">
        <Image
          src="/static/logo.webp"
          alt="Logo"
          width={490}
          height={400}
          className="h-auto w-[100px] mt-2"
        />
      </div>
      <nav className="hidden md:flex md:flex-row space-x-12 text-[18px] items-center">
        <Link href="/">
          <span className="text-[#95DE1C] font-semibold">INICIO</span>
        </Link>
        <Link href="/noticias">
          <span className="text-white transition-colors duration-300 font-semibold">
            NOTICIAS
          </span>
        </Link>
        <button className="text-[18px] relative inline-flex items-center justify-center px-11 py-2 overflow-hidden font-semibold text-white border-2 border-[#95DE1C] rounded-l-full rounded-tr-none rounded-br-full group hover:text-white">
          <Link href="/static/EXPO2025.pdf" target="_blank" rel="noopener noreferrer">
            <span className="relative">EXPO 2025</span>
          </Link>
        </button>
      </nav>
      <div className="relative md:hidden">
        <button
          className="flex flex-col justify-center items-center"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <span className="block w-8 h-8 text-white text-2xl font-bold">
              &times;
            </span>
          ) : (
            <>
              <span className="block w-8 h-1 bg-white mb-1"></span>
              <span className="block w-8 h-1 bg-white mb-1"></span>
              <span className="block w-8 h-1 bg-white"></span>
            </>
          )}
        </button>
        {isMenuOpen && (
          <div
            className="absolute top-full right-0 mt-2 w-60 bg-gray-800 text-white rounded-lg shadow-lg py-4 z-50"
          >
            <nav className="flex flex-col space-y-4 text-center">
              <Link href="/" onClick={closeMenu}>
                <span className="text-[#95DE1C] font-semibold">INICIO</span>
              </Link>
              <Link href="/noticias" onClick={closeMenu}>
                <span className="font-semibold">NOTICIAS</span>
              </Link>
              <button
                className="text-[18px] relative inline-flex items-center justify-center px-6 py-2 font-semibold border-2 border-[#95DE1C] rounded-l-full rounded-tr-none rounded-br-full group hover:text-white"
                onClick={closeMenu}
              >
                <Link href="/static/EXPO2025.pdf" target="_blank" rel="noopener noreferrer">
                  <span className="relative">EXPO 2025</span>
                </Link>
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
