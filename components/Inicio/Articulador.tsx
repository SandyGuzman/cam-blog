import Image from 'next/image'
import React from 'react'
import { IoArrowForward } from 'react-icons/io5'

const Articulador = () => {
  return (
    <div className="flex flex-col z-10 gap-4 relative w-full px-4 md:px-8 lg:px-24 mb-16">
      <div className="flex flex-col text-center w-full lg:w-[50rem] mx-auto">
        <h2 className="text-4xl font-bold">Brazo articulador</h2>
        <p className="text-gray-700 text-center">
          Conectamos productores, empresas y gobierno para impulsar el desarrollo del sector agroalimentario.
          Facilitamos la colaboración, promovemos el uso de nuevas tecnologías y abrimos puertas a mercados
          internacionales para fortalecer el campo michoacano.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row justify-between items-start space-y-8 lg:space-y-0 lg:space-x-8">
        <div className="flex flex-col w-full lg:w-1/2">
          <h3 className="text-2xl font-semibold mb-2">Transformemos juntos el futuro del agro.</h3>
          <p className="text-gray-700 mb-4">
            ¡Forma parte de nuestra red y lleva tu producción al siguiente nivel!
          </p>

          <h4 className="text-xl font-semibold mb-2">Expo Agroindustrial</h4>

          <div className="flex justify-between items-center border border-gray-300 bg-[#1F4520] p-8 rounded-3xl gap-4">
            <div className="flex flex-col gap-4">
              <p className="text-white text-xl md:text-4xl">+250</p>
              <p className="text-white text-sm md:text-xl">Marcas participaron en Expo Agroindustrial</p>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-white text-xl md:text-4xl">4,000 Asistentes</p>
              <p className="text-white text-sm md:text-xl">En eventos estratégicos del sector agroalimentario</p>
            </div>
            <div className="p-4 rounded-md flex items-center justify-center">
              <IoArrowForward className="text-6xl lg:text-8xl text-white"/>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 flex justify-center">
          <Image
            src="/static/brazo1.webp"
            alt="Descripción de la imagen"
            width={ 490 }
            height={ 400 }
            className="w-full max-w-xl object-cover"
          />
        </div>
      </div>
    </div>
  )
}

export default Articulador
