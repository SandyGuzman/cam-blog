"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const Expo = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/expo');
  };

  return (
    <div className="flex justify-center py-20 my-0 bg-[radial-gradient(circle,_rgba(4,84,44,0.9)_10%,_rgba(149,222,28,0.7)_25%,_rgba(255,255,255,0)_40%)]">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-xs w-[300px] h-[400px] flex flex-col justify-between">
        <div className="text-center space-y-4">
          <Image 
            src="/static/expo1.webp"
            alt="Logo" 
            width={80} 
            height={80} 
            quality={100}
            priority
            className="mx-auto"
          />
          <p className="text-md sm:text-lg font-semibold text-black">
            El encuentro clave para conectar y avanzar en el sector agrícola y ganadero.
          </p>
        </div>
        <button 
          onClick={handleClick}
          className="mt-4 mb-5 relative inline-flex items-center justify-center px-6 py-1.5 overflow-hidden font-semibold text-[18px] text-black border-2 border-[#95DE1C] rounded-l-full rounded-tr-none rounded-br-full group hover:bg-[#95DE1C] hover:text-white transition-colors duration-300"
        >
          <span className="absolute inset-0 w-full h-full bg-transparent"></span>
          <span className="relative">EXPO 2025</span>
        </button>
      </div>
    </div>
  );
};

export default Expo;
