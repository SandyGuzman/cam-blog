import React from 'react';

const Nosotros = () => {
  return (
    <div className="relative flex flex-col md:flex-row items-center p-6 max-w-screen-lg mx-auto">

      <div className="absolute top-0 right-0 mt-4 mr-4">
        <img
          src="/static/logo.webp" 
          alt="Descripción de la imagen"
          className="rounded-full shadow-lg w-20 h-20" 
        />
      </div>

    
      <div className="md:w-1/2 mb-8 md:mb-0 md:ml-13 -ml-32"> 
        <img
          src="/static/nosotros1.webp"
          alt="Descripción de la imagen"
          className="mb-8 w-full h-auto" 
        />
      </div>

      

                <div className="md:w-1/2 md:pl-4 text-left ml-28">
            <h2 className="text-4xl text-[35px] font-bold mb-0">Nosotros</h2>
            <h3 className="text-4xl text-[20px] text-left text-[#1F4520] font-light mb-6">CONSEJO AGROALIMENTARIO DE MICHOACÁN</h3>
            <p className="text-black mb-4 text-[14px] font-light text-left">
              El Consejo Agroalimentario de Michoacán es una organización que reúne a productores, empresarios y líderes del sector agrícola con el objetivo de transformar el campo michoacano. Nuestra misión es agregar valor a la producción primaria y fomentar una agroindustria sostenible que eleve la competitividad y calidad de vida de nuestras comunidades. A través de la colaboración con organismos nacionales e internacionales, impulsamos iniciativas que integran innovación, tecnología y sostenibilidad para posicionar a Michoacán como referente en el desarrollo agroalimentario. <br /> 
              <br />
              Nos comprometemos a crear un impacto real mediante asesorías, vinculación, capacitación y apoyo constante, fortaleciendo cada eslabón de la cadena agroalimentaria.
            </p>
            
            <div className="flex space-x-4">
              <button className="mb-5 relative inline-flex items-center justify-center px-14 py-2 overflow-hidden font-semibold text-[20px] text-white transition duration-300 ease-out border-2 border-[#95DE1C] bg-[#95DE1C] rounded-l-full rounded-tr-none rounded-br-full group hover:text-white">
                <span className="absolute inset-0 w-full h-full bg-transparent"></span>
                <span className="relative">AFÍLIATE</span>
              </button>
              <button className="mb-5 relative inline-flex items-center justify-center px-9 py-2 overflow-hidden font-semibold text-[20px] text-black border-2 border-[#95DE1C] rounded-l-full rounded-tr-none rounded-br-full group">
                <span className="absolute inset-0 w-full h-full bg-transparent"></span>
                <span className="relative">ORGANIGRAMA</span>
              </button>
            </div>
          </div>

    </div>
  );
};

export default Nosotros;
