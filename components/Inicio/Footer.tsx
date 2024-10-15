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

      <div className="flex justify-start mt-[5vh]">
        <h1 className="text-3xl font-bold mb-5 text-white">
          Cultivamos un mejor futuro para Michoacán a través 
          <br/> de la innovación y la colaboración.
        </h1>
      </div>

      <div className="flex justify-start space-x-4 ">
      <button className="mb-5 relative inline-flex items-center justify-center px-14 py-2 overflow-hidden font-semibold text-[20px] text-white border-2 border-[#95DE1C] rounded-l-full rounded-tr-none rounded-br-full group hover:text-white">
          <span className="absolute inset-0 w-full h-full bg-transparent">
          </span>
          <span className="relative">EXPO 2025</span>
        </button>
        <button className="mb-5 relative inline-flex items-center justify-center px-14 py-2 overflow-hidden font-semibold text-[20px] text-white border-2 border-[#95DE1C] bg-[#95DE1C] rounded-l-full rounded-tr-none rounded-br-full group hover:text-white">
          <span className="absolute inset-0 w-full h-full bg-transparent">
          </span>
          <span className="relative">AFÍLIATE</span>
        </button>
      </div>

      <div className="flex justify-between items-start">

        <div className="mb-4 text-white mt-[25vh]">
          <h2 className="block">
            Dr. Miguel Silva G. 19-int. 207, Centro <br />
            Histórico, Morelia, Michoacán. <br/>
            contacto@consejoagromich.com <br/> 
            +(52) 443 317 0264
          </h2> 
        </div>

        <div className="flex space-x-6 mt-[26vh]">
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
        <h3 className="text-center w-full"> 
          © 2024 Consejo Agroalimentario de Michoacán A.C. Todos los derechos reservados. <br/>
          DESARROLLADO POR LIVE TECH
        </h3>
      </div>

    </div>
  );
};

export default Footer;
