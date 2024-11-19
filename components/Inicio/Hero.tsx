import Image from 'next/image';
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen flex flex-col justify-center items-center px-6 py-12 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/static/hero2.webp"
          alt="hero2"
          width={490}
          height={400}
          quality={100}
          priority
          className="absolute left-0 w-full h-screen object-cover" 
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center">
          <Image
            src="/static/hero1.webp"
            alt="hero1"
            width={490}
            height={400}
            quality={100}
            priority
            className="absolute w-full h-full z-30 object-cover max-h-[480px] md:max-h-[700px]" 
          />
          <div className="absolute top-1/4 z-30">
            <p className="text-center text-[24px] sm:text-[26px] md:text-[30px] font-light text-white">
              CONSEJO AGROALIMENTARIO DE MICHOACÁN
            </p>
          </div>
          <p className="absolute top-[26%] text-center text-[40px] sm:text-[56px] md:text-[64px] lg:text-[80px] font-extrabold text-white z-10">
            IMPULSANDO EL FUTURO
          </p>
          <p className="text-center text-[30px] sm:text-[40px] md:text-[45px] font-medium text-white z-30 mt-40">
            AGROALIMENTARIO EN MICHOACÁN
          </p>
          <p className="text-center text-[20px] sm:text-[22px] md:text-[24px] font-medium text-white z-30 leading-tight max-w-3xl mt-4">
            Transformando el campo a través de <br /> la innovación, sostenibilidad y colaboración
          </p>
          <button className="mt-8 transform translate-x-4 px-10 sm:px-12 py-2 font-semibold text-[18px] sm:text-[20px] text-white border-2 border-[#95DE1C] bg-[#95DE1C] rounded-l-full rounded-tr-none rounded-br-full hover:text-white z-30">
            AFÍLIATE
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
