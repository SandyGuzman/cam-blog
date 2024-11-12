import React from 'react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa'; 

const Footer = () => {
  return (
    <div
      className="relative bg-cover bg-center p-8 text-white"
      style={{
        backgroundImage: 'url(/static/footer1.webp)', 
        height: '90vh', 
        minHeight: '85vh', 
        backgroundSize: 'cover', 
      }}
    >

      <div className="flex flex-col md:flex-row justify-start mt-[5vh]">
        <h1 className="text-3xl md:text-4xl font-bold mb-5 text-white text-center md:text-left">
          Cultivamos un mejor futuro para Michoacán a través 
          <br/> de la innovación y la colaboración.
        </h1>
      </div>

      <div className="flex flex-col md:flex-row justify-center md:justify-start space-y-4 md:space-y-0 md:space-x-4">
        <button className="mb-5 relative inline-flex items-center justify-center px-14 py-2 overflow-hidden font-semibold text-[20px] text-white border-2 border-[#95DE1C] rounded-l-full rounded-tr-none rounded-br-full group hover:text-white">
          <span className="absolute inset-0 w-full h-full bg-transparent"></span>
          <span className="relative">EXPO 2025</span>
        </button>
        <button className="mb-5 relative inline-flex items-center justify-center px-14 py-2 overflow-hidden font-semibold text-[20px] text-white border-2 border-[#95DE1C] bg-[#95DE1C] rounded-l-full rounded-tr-none rounded-br-full group hover:text-white">
          <span className="absolute inset-0 w-full h-full bg-transparent"></span>
          <span className="relative">AFÍLIATE</span>
        </button>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start mt-[25vh] md:mt-0">
        <div className="mb-4 text-white">
          <h2 className="block text-center md:text-left">
            Dr. Miguel Silva G. 19-int. 207, Centro <br />
            Histórico, Morelia, Michoacán. <br/>
            contacto@consejoagromich.com <br/> 
            +(52) 443 317 0264
          </h2> 
        </div>

        <div className="flex justify-center md:justify-start space-x-6 mt-4 md:mt-[26vh]">
          <a
            href="https://www.facebook.com" 
            className="bg-[#95DE1C] p-4 rounded-full text-white"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com"
            className="bg-[#95DE1C] p-4 rounded-full text-white"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* Bloque de derechos de autor centrado */}
      <div className="flex justify-center mt-5 w-full">
        <h3 className="text-center w-full text-sm md:text-base"> 
          © 2024 Consejo Agroalimentario de Michoacán A.C. Todos los derechos reservados. <br/>
          DESARROLLADO POR LIVE TECH
        </h3>
      </div>

    </div>
  );
};

export default Footer;
