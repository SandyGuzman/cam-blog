import Image from 'next/image';
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-screen mx-auto h-screen flex flex-col px-6 py-12 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/static/hero2.webp"
          alt="hero2"
          width={490} 
          height={400} 
          className="absolute left-0 w-full h-[670px] object-cover" 
        />

        <div className="absolute inset-0">
          <Image
            src="/static/hero1.webp"
            alt="hero1"
            width={490} 
            height={400} 
            className="absolute w-full z-30 h-[670px]"
          />

          <h1 className="absolute top-[21%] left-[20%] text-[35px] font-light text-[#FFFFFF]">
            CONSEJO AGROALIMENTARIO DE MICHOACÁN
          </h1>
          <p className="absolute top-[25%] left-[10%] text-[80px] font-extrabold text-[#FFFFFF]">
            IMPULSANDO EL FUTURO
          </p>
          <p className="absolute top-[40%] left-[10%] text-[56px] font-semibold text-[#FFFFFF] z-40">
            AGROALIMENTARIO EN MICHOACÁN
          </p>
          <p className="absolute top-[55%] left-[25%] text-[35px] font-medium text-[#FFFFFF] max-w-3xl z-40 text-center leading-tight">
          Transformando el campo a través de <br /> la innovación, sostenibilidad y colaboración
        </p>
          <button className="absolute top-[80%] left-[45%] px-14 py-2 font-semibold text-[20px] text-white border-2 border-[#95DE1C] bg-[#95DE1C] rounded-l-full rounded-tr-none rounded-br-full hover:text-white z-40">
            AFÍLIATE
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
