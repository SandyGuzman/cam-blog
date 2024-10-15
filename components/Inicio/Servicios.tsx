import React from 'react';

const serviciosData = [
  {
    id: 1,
    image: '/static/servicios1.webp',
    title: 'Asesorías Legales y Vinculación',
    description: 'Facilitamos el acceso a asesoría especializada y conexiones estratégicas con cámaras y asociaciones.',
  },
  {
    id: 2,
    image: '/static/servicios2.webp',
    title: 'Transformación de Proyectos Agroalimentarios',
    description: 'Brindamos soporte en la modernización y optimización de la producción rural.',
  },
  {
    id: 3,
    image: '/static/servicios3.webp',
    title: 'Capacitación y Certificación',
    description: 'Programas de formación y certificación para asegurar calidad y mejores prácticas en el sector.',
  },
  {
    id: 4,
    image: '/static/servicios4.webp',
    title: 'Comercialización de Productos',
    description: 'Apoyo en la identificación de mercados y estrategias de venta para maximizar el valor de los productos.',
  },
  {
    id: 5,
    image: '/static/servicios5.webp',
    title: 'Exportación',
    description: 'Impulsamos la internacionalización de productos michoacanos y creamos enlaces para acceder a nuevos mercados.',
  },
];

const Servicios = () => {
  return (
    <div className="relative py-12 px-6 overflow-hidden">
      <div className="relative z-10 text-center mb-8 -mt-12"> 
        <h2 className="text-3xl font-bold mb-4 text-black">Nuestros Servicios</h2>
        <p className="text-black mb-6">
          Apoyamos el desarrollo integral del campo michoacano con soluciones innovadoras que impulsan <br />
          la competitividad y sostenibilidad del sector agroalimentario.
        </p>
      </div>

      <div className="flex justify-center space-x-4 z-10 relative">
        {serviciosData.map((servicio) => (
          <div 
            key={servicio.id} 
            className="bg-white rounded-lg shadow-md w-44 h-90 overflow-hidden text-center flex flex-col"
          >
            <div className="flex justify-center items-center h-32">
              <img 
                src={servicio.image}  
                className="w-32 h-30 object-cover rounded-lg mt-4" 
              />
            </div>
            <div className="p-4 flex flex-col justify-between h-full">
              <h3 className="text-[16px] font-bold mb-2 text-center flex-1 flex items-center justify-center">
                {servicio.title}
              </h3>
              <p className="text-[12px] font-extralight text-black">{servicio.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Servicios;
