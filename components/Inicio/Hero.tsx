import Image from 'next/image';
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-[670px] flex flex-col justify-center items-center px-6 py-12 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/static/hero2.webp"
          alt="hero2"
          width={490}
          height={600}
          quality={100}
          priority
          className="absolute left-0 w-full h-full object-cover"
        />
        <div className="relative object-cover h-screen flex flex-col items-center justify-center">
          <Image
            src="/static/hero1.webp"
            alt="hero1"
            width={450}
            height={400}
            quality={100}
            priority
            className="absolute w-full z-30 h-[645px] bottom-0 object-cover top-[24px]"
          />

          {/* Título */}
          <div className="absolute  top-[15%] sm:top-[23%] md:top-[22%] lg:top-1/4 z-30">
            <h1 className="text-center -mt-3 text-[19px] md:text-[30px] lg:text-[30px] font-light text-white">
              CONSEJO AGROALIMENTARIO DE MICHOACÁN
            </h1>
          </div>

          {/* Subtítulo */}
          <p className="absolute top-[23%] sm:top-[27%] md:top-[26%] lg:top-[29%] text-center text-[29px] md:text-[50px] lg:text-[70px] font-extrabold text-white z-10">
            IMPULSANDO EL FUTURO
          </p>

          {/* Subtítulo 2 */}
          <p className="absolute text-center text-[25px] md:text-[40px] lg:text-[50px] font-semibold text-white z-30 mt-9 top-[25%] sm:top-[27%] md:top-[26%] lg:top-[39%]">
            AGROALIMENTARIO EN MICHOACÁN
          </p>

          {/* Descripción */}
          <p className="absolute text-center text-[20px] md:text-[24px] lg:text-[28px] font-medium text-white z-30 leading-tight max-w-3xl mt-4 top-[38%] sm:top-[27%] md:top-[26%] lg:top-[59%]">
            Transformando el campo a través de <br /> la innovación, sostenibilidad y colaboración
          </p>

          {/* Botón */}
          <button
            className="
                 absolute top-[50%] sm:top-[50%] md:top-[49%] lg:top-[82%]  transform translate-x-4 px-12 py-1 font-semibold text-[20px] text-white 
                  border-2 border-transparent bg-[#95DE1C] rounded-l-full rounded-tr-none rounded-br-full 
                  hover:bg-neutral-700 hover:border-2 hover:border-[#95DE1C] transition-all duration-300 ease-in-out z-30"
          >
            AFÍLIATE
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
