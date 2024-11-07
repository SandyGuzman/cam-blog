"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="absolute mx-auto top-0 left-0 w-full flex md:flex-row flex-col overflow-hidden justify-between items-center py-2 px-5 z-[50]">
      <div className="flex items-center">
        <Image
          src="/static/logo.webp"
          alt="Logo"
          width={490}
          height={400}
          className="h-auto w-[100px] mt-2"
        />
      </div>
      <div className="flex items-center md:flex-row">
        <nav className="hidden md:flex md:flex-row space-x-12 text-[18px]">
          <Link href="/">
            <span className="text-[#95DE1C] font-semibold">INICIO</span>
          </Link>
          <Link href="/noticias">
            <span className="text-white transition-colors duration-300 font-semibold">NOTICIAS</span>
          </Link>
          <button className="text-[18px] relative inline-flex items-center justify-center px-11 py-2 overflow-hidden font-semibold text-white border-2 border-[#95DE1C] rounded-l-full rounded-tr-none rounded-br-full group hover:text-white">
            <span className="absolute inset-0 w-full h-full bg-transparent"></span>
            <span className="relative">EXPO 2025</span>
          </button>
        </nav>
        <button
          className="md:hidden flex flex-col justify-center items-center"
          onClick={toggleMenu}
        >
          <span className="block w-8 h-1 bg-white mb-1"></span>
          <span className="block w-8 h-1 bg-white mb-1"></span>
          <span className="block w-8 h-1 bg-white"></span>
        </button>
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} absolute top-12 left-0 right-0 bg-gray-800`}>
          <nav className="flex flex-col items-center space-y-2 p-4">
            <Link href="/" onClick={closeMenu}>
              <span className="text-[#95DE1C] font-semibold">INICIO</span>
            </Link>
            <Link href="/noticias" onClick={closeMenu}>
              <span className="text-white transition-colors duration-300 font-semibold">NOTICIAS</span>
            </Link>
            <button
              className="text-[18px] relative inline-flex items-center justify-center px-11 py-2 overflow-hidden font-semibold text-white border-2 border-[#95DE1C] rounded-l-full rounded-tr-none rounded-br-full group hover:text-white"
              onClick={closeMenu}
            >
              <span className="absolute inset-0 w-full h-full bg-transparent"></span>
              <span className="relative">EXPO 2025</span>
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;