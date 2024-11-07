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
          quality={100}
          priority
          className="absolute left-0 w-full h-[670px] object-cover" 
        />

        <div className="absolute inset-0">
          <Image
            src="/static/hero1.webp"
            alt="hero1"
            width={490}
            height={400}
            quality={100}
            priority
            className="absolute w-full z-30 h-[670px]"
          />

          <h1 className="absolute top-[10%] left-[5%] sm:top-[15%] sm:left-[10%] md:top-[21%] md:left-[20%] text-[28px] sm:text-[30px] md:text-[35px] font-light text-[#FFFFFF]">
            CONSEJO AGROALIMENTARIO DE MICHOACÁN
          </h1>
          <p className="absolute top-[20%] left-[5%] sm:top-[22%] sm:left-[10%] md:top-[25%] md:left-[10%] text-[48px] sm:text-[60px] md:text-[80px] font-extrabold text-[#FFFFFF]">
            IMPULSANDO EL FUTURO
          </p>
          <p className="absolute top-[35%] left-[5%] sm:top-[38%] sm:left-[10%] md:top-[40%] md:left-[10%] text-[40px] sm:text-[48px] md:text-[56px] font-semibold text-[#FFFFFF] z-40">
            AGROALIMENTARIO EN MICHOACÁN
          </p>
          <p className="absolute top-[50%] left-[5%] sm:top-[53%] sm:left-[10%] md:top-[55%] md:left-[25%] text-[30px] sm:text-[32px] md:text-[35px] font-medium text-[#FFFFFF] max-w-3xl z-40 text-center leading-tight">
            Transformando el campo a través de <br /> la innovación, sostenibilidad y colaboración
          </p>
          <button className="absolute top-[75%] left-[35%] sm:top-[78%] sm:left-[40%] md:top-[80%] md:left-[45%] px-10 sm:px-12 py-2 font-semibold text-[18px] sm:text-[20px] text-white border-2 border-[#95DE1C] bg-[#95DE1C] rounded-l-full rounded-tr-none rounded-br-full hover:text-white z-40">
            AFÍLIATE
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;