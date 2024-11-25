import Image from 'next/image'
import React from 'react'

const Nosotros = () => {
  return (
    <div className="w-full relative flex flex-col lg:flex-row items-center space-y-6 px-8">
      <div className="flex items-center justify-center w-full md:w-1/2">
        <Image
          src="/static/nosotros1.webp"
          alt="Descripción de la imagen"
          width={ 490 }
          height={ 400 }
          className="rounded-md object-cover lg:max-w-4xl"
        />
      </div>
      <div className="w-full lg:w-1/2 text-left px-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Nosotros</h2>
            <h3 className="text-lg md:text-xl text-[#1F4520] font-light mb-6">
              CONSEJO AGROALIMENTARIO DE MICHOACÁN
            </h3>
          </div>
          <Image
            src="/static/logo.webp"
            alt="Descripción de la imagen"
            width={ 80 }
            height={ 80 }
            className="rounded-full shadow-lg w-16 h-16 md:w-20 md:h-20"
          />
        </div>
        <p className="text-sm sm:text-base md:text-lg text-black font-light text-justify mb-6">
          El Consejo Agroalimentario de Michoacán es una organización que reúne a productores, empresarios y líderes del
          sector agrícola con el objetivo de transformar el campo michoacano. Nuestra misión es agregar valor a la
          producción primaria y fomentar una agroindustria sostenible que eleve la competitividad y calidad de vida de
          nuestras comunidades.
          <br/>
          <br/>
          Nos comprometemos a crear un impacto real mediante asesorías, vinculación, capacitación y apoyo constante,
          fortaleciendo cada eslabón de la cadena agroalimentaria.
        </p>
        <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
          <button
            className="relative inline-flex items-center justify-center px-8 py-2 font-semibold text-base md:text-lg text-white transition duration-300 ease-out border-2 border-[#95DE1C] bg-[#95DE1C] rounded-l-full rounded-tr-none rounded-br-full group hover:text-white">
            <span className="relative">AFÍLIATE</span>
          </button>
          <button
            className="relative inline-flex items-center justify-center px-8 py-2 font-semibold text-base md:text-lg text-black border-2 border-[#95DE1C] rounded-l-full rounded-tr-none rounded-br-full group">
            <span className="relative">ORGANIGRAMA</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Nosotros
