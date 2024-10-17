import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header: React.FC = () => {
  return (
    <header className="absolute top-0 left-0 w-full flex flex-col md:flex-row justify-between items-center py-2 px-5 bg-transparent z-30">
      <div className="flex items-center">
        <Image
          src="/static/logo.webp"
          alt="Logo"
           width={490} 
           height={400} 
          className="h-auto w-auto mt-2"
        />
      </div>

      <div className="flex items-center  md:flex-row">
        <nav className="flex md:flex-row space-y-2 md:space-y-0 md:space-x-12 text-[18px]">
          <Link href="/">
            <span className="text-[#95DE1C] font-semibold">INICIO</span>
          </Link>
          <Link href="/servicios">
            <span className="text-white transition-colors duration-300 font-semibold">SERVICIOS</span>
          </Link>
          <Link href="/noticias">
            <span className="text-white transition-colors duration-300 font-semibold">NOTICIAS</span>
          </Link>
        </nav>

        <div className="mx-4 space-x-12"></div>
        <button className="text-[18px] relative inline-flex items-center justify-center px-11 py-2 overflow-hidden font-semibold text-white border-2 border-[#95DE1C] rounded-l-full rounded-tr-none rounded-br-full group hover:text-white">
          <span className="absolute inset-0 w-full h-full bg-transparent"></span>
          <span className="relative">EXPO 2025</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
