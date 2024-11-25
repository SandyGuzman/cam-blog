import Hero from '@/components/Inicio/Hero'
import Relevante from '@/components/Inicio/Relevante'
import Articulador from '@/components/Inicio/Articulador'
import Nosotros from '@/components/Inicio/Nosotros'
import Servicios from '@/components/Inicio/Servicios'
import Expo from '@/components/Inicio/Expo'

export default function Home() {
  return (
    <>
      <Hero/>
      <div className="px-8 xl:px-16 2xl:px-32">
        <Relevante/>
        <Expo/>
        <Nosotros/>
      </div>
      <Servicios/>
      <Articulador/>
    </>
  )
}
