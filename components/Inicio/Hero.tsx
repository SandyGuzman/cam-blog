import Image from 'next/image';
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen flex flex-col justify-center items-center px-6 py-12 overflow-hidden">
      <div className="absolute inset-0">
        {/* Imagen de fondo 1 */}
        <Image
          src="/static/hero2.webp"
          alt="hero2"
          width={490}
          height={400}
          quality={100}
          objectFit="cover"
          priority
          className="absolute left-0 w-full h-[670px] object-cover" 
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center">
          {/* Imagen de fondo 2 */}
          <Image
            src="/static/hero1.webp"
            alt="hero1"
            width={490}
            height={400}
            quality={100}
             objectFit="cover"
            priority
            className="absolute w-full z-30 h-[670px]"
          />
      
          <p className="text-center text-[35px] sm:text-[36px] md:text-[40px] font-light text-white z-30 mt-4">
            CONSEJO AGROALIMENTARIO DE MICHOACÁN
          </p>
          <p className="text-center text-[80px] sm:text-[56px] md:text-[64px] font-extrabold text-white z-10 mt-4">
            IMPULSANDO EL FUTURO
          </p>
          {/* Otro texto sobre la imagen */}
          <p className="text-center text-[57px] sm:text-[48px] md:text-[56px] font-semibold text-white z-30 mt-4">
            AGROALIMENTARIO EN MICHOACÁN
          </p>

          <p className="text-center text-[32px] sm:text-[34px] md:text-[36px] font-medium text-white z-30 leading-tight max-w-3xl mt-4">
  Transformando el campo a través de la innovación, sostenibilidad y colaboración
</p>


          {/* Botón centrado */}
          <button className="mt-8 transform translate-x-4 px-10 sm:px-12 py-2 font-semibold text-[18px] sm:text-[20px] text-white border-2 border-[#95DE1C] bg-[#95DE1C] rounded-l-full rounded-tr-none rounded-br-full hover:text-white z-30">
  AFÍLIATE
</button>


        </div>
      </div>
    </section>
  );
};

export default Hero;
