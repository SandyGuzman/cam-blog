
import React from "react";
import Layout from "@/components/Inicio/layout"; 

const Page = () => {
  return (
    <Layout>
      <div className="flex flex-col">
        {/* Sección 1 */}
        <section className="min-h-screen bg-[url('/static/expo5.webp')] bg-cover bg-center flex items-center justify-center">
          <h2 className="text-white text-3xl font-bold"></h2>
        </section>

        {/* Sección 2 */}
        <section className="min-h-screen bg-[url('/ruta/de/imagen2.jpg')] bg-cover bg-center flex items-center justify-center">
          <h2 className="text-white text-3xl font-bold">Sección 2</h2>
        </section>

        {/* Sección 3 */}
        <section className="min-h-screen bg-[url('/ruta/de/imagen3.jpg')] bg-cover bg-center flex items-center justify-center">
          <h2 className="text-white text-3xl font-bold">Sección 3</h2>
        </section>

        {/* Sección 4 */}
        <section className="min-h-screen bg-[url('/ruta/de/imagen4.jpg')] bg-cover bg-center flex items-center justify-center">
          <h2 className="text-white text-3xl font-bold">Sección 4</h2>
        </section>

        {/* Sección 5 */}
        <section className="min-h-screen bg-[url('/ruta/de/imagen5.jpg')] bg-cover bg-center flex items-center justify-center">
          <h2 className="text-white text-3xl font-bold">Sección 5</h2>
        </section>

        {/* Sección 6 */}
        <section className="min-h-screen bg-[url('/ruta/de/imagen6.jpg')] bg-cover bg-center flex items-center justify-center">
          <h2 className="text-white text-3xl font-bold">Sección 6</h2>
        </section>
      </div>
    </Layout>
  );
};

export default Page;
