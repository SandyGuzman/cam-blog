"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link'; 
import client from "@/lib/sanityclient";
import imageUrlBuilder from "@sanity/image-url";
import { ImageAsset } from '@sanity/types'; 

interface Blog {
  publishedAt: string | number | Date;
  title: string;
  currentSlug: string;
  titleImage: ImageAsset; 
  _createdAt: string;
  smallDescription: string; 
}

const builder = imageUrlBuilder(client);
function urlFor(source: ImageAsset) {
  return builder.image(source);
}

const Relevante: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  const getFeaturedNews = async () => {
    const query = `*[_type == 'blog'] | order(publishedAt desc)[0...2] { 
      title, 
      "currentSlug": slug.current, 
      titleImage, 
      publishedAt,
      smallDescription 
    }`;

    const data = await client.fetch(query);
    return data;
  };

  useEffect(() => {
    const fetchBlogs = async () => {
      const fetchedBlogs = await getFeaturedNews();
      setBlogs(fetchedBlogs);
    };
    fetchBlogs();
  }, []);

  return (
    <section className="flex flex-col items-center justify-center w-full mt-1 py-10 md:py-12 lg:py-1 overflow-hidden">
      <div className="w-full max-w-6xl mx-auto text-left mb-8 p-6 md:p-10 lg:p-12">
        <h1 className="text-3xl md:text-5xl  font-bold text-gray-900">Noticias Relevantes</h1>
        <p className="text-lg md:text-2xl font-light text-gray-600 mt-2">
          Entérate de la actualidad relacionada al consejo
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-6xl mx-auto">
        <div className="w-full">
          {blogs.length > 0 ? (
            blogs.map((blog) => {
              const date = new Date(blog.publishedAt);
              const formattedDate = date.toLocaleDateString('es-ES', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              });
              return (
                <Link href={`/noticias/${blog.currentSlug}`} key={blog.currentSlug} className="block mb-4">
                  <div className="relative w-full h-auto border-2 border-[#95DE1C] bg-transparent text-black rounded-2xl rounded-tr-none md:rounded-tl-3xl md:rounded-tr-none hover:bg-[#94de1c4d] transition-all duration-300 cursor-pointer flex p-3 md:p-4 lg:p-6 shadow-lg hover:shadow-xl">
                    
                    <div className="absolute top-2 left-14 md:left-56 flex items-center ml-auto"> 
                      <Image
                        src="/static/logo.webp" 
                        alt="Logo"
                        width={14} 
                        height={14}
                        className="md:w-5 md:h-5" 
                      />
                      <p className="text-[10px] md:text-[12px] lg:text-[14px] font-light text-black ml-2 md:ml-3 text-left">Consejo Agroalimentario de Michoacán</p>
                    </div>

                    {blog.titleImage && (
                      <div className="w-1/4 mr-2 md:w-1/3 md:mr-3 mb-4 md:mb-0">
                        <Image
                          src={urlFor(blog.titleImage).url()} 
                          alt={blog.title}
                          width={120} 
                          height={120}
                          quality={100}
                          priority
                          className="w-[100px] h-[100px] md:w-[150px] md:h-[150px] lg:w-[200px] lg:h-[180px] object-cover rounded-2xl md:rounded-3xl" 
                        />
                      </div>
                    )}

                    <div className="flex flex-col items-start justify-start text-left w-3/4 md:w-2/3">
                      <h2 className="text-[16px] md:text-[18px] lg:text-[20px] font-semibold">{blog.title}</h2>
                      <p className="text-[10px] md:text-[12px] lg:text-[14px] font-light text-gray-600">{formattedDate}</p>
                      <p className="text-[12px] md:text-[14px] lg:text-[16px] font-light mt-1 text-black">
                        {blog.smallDescription}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })
          ) : (
            <p>No hay noticias disponibles.</p>
          )}
        </div>
        <div className="flex justify-center md:justify-end items-center mt-0 md:mt-0">
          <Image
            src="/static/noticias1.webp"
            alt="Descripción de la imagen"
            width={460}
            height={400}
            className="w-[300px] md:w-[460px] h-auto mb-0"
          />
        </div>
      </div>
    </section>
  );
};

export default Relevante;
