"use client";

import { useEffect, useState } from "react";
import NoticiaCard from "@/components/NoticiaCard";
import client from "@/lib/sanityclient";
import Image from "next/image";
import GradualSpacing from "@/components/ui/gradual-spacing";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { BsNewspaper } from "react-icons/bs";

interface Categoria {
  _id: string;
  nombre: string;
  slug: { current: string };
}

async function getData() {
  const query = `*[_type == 'blog'] | order(publishedAt desc)[0...500] {
    title,
    "currentSlug": slug.current,
    titleImage,
    publishedAt,
    categoria->{title}
  }`;

  try {
    const data = await client.fetch(query);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

async function fetchCategories(searchTerm = "") {
  let query = `*[_type == "categoria"] | order(nombre asc){_id, nombre, slug}`;
  if (searchTerm) {
    query = `*[_type == "categoria" && nombre match "${searchTerm}*"]{_id, nombre, slug}`;
  }

  try {
    const data = await client.fetch(query);
    return data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
}

export default function Noticias() {
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState<Categoria[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const noticiasPorPagina = 6;
  const indexOfLastNoticia = currentPage * noticiasPorPagina;
  const indexOfFirstNoticia = indexOfLastNoticia - noticiasPorPagina;
  const currentNoticias = data.slice(indexOfFirstNoticia, indexOfLastNoticia);
  const totalPages = Math.ceil(data.length / noticiasPorPagina);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      const fetchedData = await getData();
      setData(fetchedData);
    };
    fetchData();
  }, []);
  useEffect(() => {
    const fetchFilteredCategories = async () => {
      const fetchedCategories = await fetchCategories(searchTerm);
      setCategories(fetchedCategories);
    };
    fetchFilteredCategories();
  }, [searchTerm]);

  return (
    <div className="py-0">
      <div className="mb-12 relative overflow-hidden w-full h-[53vh]">
        <Image
          src="/static/noticias5.webp"
          alt="Header Image"
          fill
          style={{ objectFit: "cover" }}
          quality={100}
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <GradualSpacing
            text="Noticias"
            className="text-black text-4xl font-bold mt-14"
            duration={0.6}
            delayMultiple={0.05}
          />
        </div>
      </div>
      <div className="lg:px-10 md:px-6 px-4 relative my-10">
        <div className="flex gap-4 items-start md:flex-nowrap flex-wrap">
          {/* Categorías */}
          <div className="p-5 bg-white border-2 rounded-xl transition-transform border-[#95DE1C] md:max-w-[250px]">
            <input
              type="text"
              placeholder="Buscar categoría"
              className="p-2 w-full rounded-lg border border-[#95DE1C] focus:outline-none focus:ring-2 focus:ring-[#95DE1C] mb-4"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Categorías</h2>
            <ul className="space-y-2 overflow-y-auto" style={{ maxHeight: "250px" }}>
              {categories.length > 0 ? (
                categories.map((item) => (
                  <li key={item._id} className="text-lg text-gray-800 cursor-pointer hover:text-[#95DE1C]">
                    {item.nombre}
                  </li>
                ))
              ) : (
                <li className="text-lg text-gray-800">No se encontraron categorías</li>
              )}
            </ul>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 justify-center mx-auto">
            {currentNoticias.length > 0 ? (
              currentNoticias.map((post, idx) => (
                <NoticiaCard key={idx} post={post} />
              ))
            ) : (
              <div className="text-neutral-500 flex flex-col items-start gap-2 w-full ml-10">
                <BsNewspaper className="text-neutral-500 text-7xl" />
                <h4 className="font-bold text-2xl">Intenta otra búsqueda</h4>
                <p>Lo lamento, por el momento no hay noticias disponibles</p>
              </div>
            )}
          </div>
        </div>
        <div className="flex justify-center mt-10 gap-4">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-2xl ${currentPage === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-[#95DE1C] text-white"}`}
          >
            <FaArrowLeft />
          </button>
          <span className="px-4 py-2">
            Página {currentPage} de {totalPages}
          </span>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded-2xl ${currentPage === totalPages ? "bg-gray-300 cursor-not-allowed" : "bg-[#95DE1C] text-white"}`}
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}
