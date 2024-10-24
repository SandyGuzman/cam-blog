"use client";
import { useEffect, useState } from 'react'; // Importa useEffect y useState
import { simpleBlogCard } from "@/lib/interface";
import client, { urlFor } from "@/lib/sanityclient"; 
import Image from 'next/image'; 
import { Button } from "@/components/ui/button"; 
import Link from 'next/link';  

async function getData() {
  const query = `*[_type == 'blog'] | order(publishedAt desc)[0...500] { 
    title, 
    "currentSlug": slug.current, 
    titleImage,
    publishedAt 
  }`;
  
  try {
    const data = await client.fetch(query);
    console.log(data); 
    return data;
  } catch (error) {
    console.error("Error fetching data:", error); 
    return []; 
  }
}

export default function Noticias() {
  const [data, setData] = useState<simpleBlogCard[]>([]); 

  useEffect(() => {
    const fetchData = async () => {
      const fetchedData = await getData();
      setData(fetchedData); 
    };
    fetchData(); 
  }, []); 

  const headerImage = "/static/noticias5.webp"; 
  const defaultImage = "/static/logo.webp";

  return (
    <div className="py-0">
      <div className="mb-12 relative overflow-hidden w-full h-[53vh]"> 
        <Image 
          src={headerImage} 
          alt="Header Image" 
          fill  
          style={{ objectFit: 'cover' }} 
          quality={100}
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-black text-4xl font-bold mt-14 "> 
            Noticias
          </h1> 
        </div>
      </div>   

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
        {data.length > 0 ? (
          data.map((post, idx) => {
            const date = new Date(post.publishedAt);
            const formattedDate = date.toLocaleDateString('es-ES', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            });

            return (
              <div key={idx} className="flex flex-col bg-white shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-lg max-w-[16rem] mx-auto rounded-lg"> 
                <div className="relative w-47 h-40 flex items-center justify-center"> 
                  <div className="absolute top-0 left-0 right-0 h-10 bg-gradient-to-b from-black opacity-0 rounded-t-lg"></div>
                  {post.titleImage ? (
                    <Image 
                      src={urlFor(post.titleImage).url()} 
                      alt="image" 
                      layout="fill" 
                      objectFit="cover" 
                      className="rounded-t-lg"
                    />
                  ) : (
                    <div className="flex items-center justify-center w-[280px] h-[100px] bg-[#94de1c88] "> 
                      <Image 
                        src={defaultImage} 
                        alt="Imagen por defecto" 
                        layout="fill" 
                        quality={100}
                        priority
                        objectFit="contain"
                        className="rounded-t-lg" 
                      />
                    </div>
                  )}
                </div>
                <div className="p-2 flex flex-col flex-grow"> 
                  <h3 className="text-sm font-semibold text-gray-800">{post.title}</h3> 
                  <p className="text-xs text-gray-500">{formattedDate}</p> 
                  <div className="mt-auto flex justify-end">
                    <Link href={`/noticias/${post.currentSlug}`} passHref>
                      <Button className="bg-transparent text-xs py-0 px-3 hover:bg-[#95DE1C] transition duration-200 font-semibold text-[#95DE1C] border-2 border-[#95DE1C] rounded-l-full rounded-tr-none rounded-br-full group hover:text-white">
                        Leer más
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p>No hay noticias disponibles.</p> 
        )}
      </div>
    </div>
  );
}
