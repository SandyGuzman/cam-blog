import Hero from "@/components/Inicio/Hero";
import Aliados from "@/components/Inicio/Aliados";
import Relevante from "@/components/Inicio/Relevante";
import Articulador from "@/components/Inicio/Articulador";
import Nosotros from "@/components/Inicio/Nosotros";
import Servicios from "@/components/Inicio/Servicios";

export default function Home() {
  return (
    <div>
    <Hero />
    <Relevante />
    <Aliados />
   <div className="relative">
    <div className="bg-gray-50 h-[60vh] w-full absolute top-[92vh] z-0"></div>
    <div className="relative z-10">
      <Nosotros />
      <Servicios />
    </div>
    </div>
    <Articulador />
             
    </div>
  )
}
