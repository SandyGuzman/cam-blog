import Image from 'next/image';
import React from 'react';
import { IoArrowForward } from "react-icons/io5"; 

const Articulador = () => {
  return (
    <div className="p-8 space-y-8 lg:space-y-0 lg:space-x-8">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold mb-4">Brazo articulador</h2>
        <p className="text-gray-700 text-center">
          Conectamos productores, empresas y gobierno para impulsar el desarrollo del sector agroalimentario. Facilitamos la colaboración, promovemos el uso de nuevas tecnologías y abrimos puertas a mercados internacionales para fortalecer el campo michoacano.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row justify-between items-start space-y-8 lg:space-y-0 lg:space-x-8">
        {/* Sección de la izquierda con texto */}
        <div className="lg:w-1/2 space-y-6">
          {/* Título secundario y descripción */}
          <div>
            <h3 className="text-2xl font-semibold mb-2">Transformemos juntos el futuro del agro.</h3>
            <p className="text-gray-700 mb-4">
              ¡Forma parte de nuestra red y lleva tu producción al siguiente nivel!
            </p>

            <div>
              <h4 className="text-xl font-semibold mb-2">Expo Agroindustrial</h4>
              <div className="border border-gray-300 bg-[#1F4520] p-4 rounded-lg flex justify-between items-center">
                <div className="flex flex-col">
                  <div className="mb-2">
                    <p className="text-white">+250</p>
                    <p className="text-white">Marcas participaron en Expo Agroindustrial</p>
                  </div>
                </div>
                <div className="flex flex-col ml-4">
                  <div className="mb-2">
                    <p className="text-white">4,000 Asistentes</p>
                    <p className="text-white">En eventos estratégicos
                    del sector agroalimentario</p>
                  </div>
                </div>
                <div className="ml-4 bg-[#95DE1C] p-4 rounded-md flex items-center justify-center">
                  <IoArrowForward className="text-xl text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 flex justify-center">
          <Image
            src="/static/brazo1.webp" 
            alt="Descripción de la imagen"
            width={490} 
            height={400} 
            className="w-full max-w-md object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Articulador;
