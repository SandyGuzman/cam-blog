"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link'; 
import client from "@/lib/sanityclient";
import imageUrlBuilder from "@sanity/image-url";


interface Blog {
  publishedAt: string | number | Date;
  title: string;
  currentSlug: string;
  titleImage: string;
  _createdAt: string;
  smallDescription: string; 
}

const builder = imageUrlBuilder(client);
function urlFor(source: any) {
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
    <section className="flex flex-col items-center justify-center w-full py-20">
      <div className="w-full max-w-6xl mx-auto text-left mb-8 pl-0">
        <h1 className="text-[35px] font-bold text-left text-gray-900">Noticias Relevantes</h1>
        <p className="text-[20px] font-light text-left text-gray-600 mt-2">
          Entérate de la actualidad relacionada al consejo
        </p>
      </div>

      <div className="flex flex-wrap w-full max-w-6xl mx-auto">
        <div className="w-full md:w-1/2 pr-4">
          {blogs.length > 0 ? (
            blogs.map((blog) => {
              const date = new Date(blog.publishedAt);
              const formattedDate = date.toLocaleDateString('es-ES', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              });

              return (
                <Link href={`/noticias/${blog.currentSlug}`} key={blog.currentSlug} className="block mb-6">
                  <div className="relative w-[610px] h-[230px] border-2 border-[#95DE1C] bg-transparent text-black rounded-3xl rounded-tr-none hover:bg-[#94de1c4d] transition-all duration-300 cursor-pointer flex p-6">
              
                    <div className="absolute top-2 left-56 flex items-center ml-auto"> 
                      <Image
                        src="/static/logo.webp" 
                        alt="Logo"
                        width={20} 
                        height={20}
                      />
                      <p className="text-[12px] font-light text-black ml-3 text-left">Consejo Agroalimentario de Michoacán</p>
                    </div>
                    {blog.titleImage && (
                    <div className="w-1/3 mr-4">
                      <Image
                        src={urlFor(blog.titleImage).url()} 
                        alt={blog.title}
                        width={500}
                        height={500}
                        quality={100}
                        priority
                        className="w-[200px] h-[180px] object-position  rounded-3xl" 
                      />
                    </div>
                  )}

                    
                    <div className="w-2/3 flex flex-col items-start justify-start text-left">
                      <h2 className="text-[20px] font-bold text-left">{blog.title}</h2>
                      <p className="text-[12px] font-extralight text-gray-600 text-left">{formattedDate}</p>
                      <p className="text-[14px] font-light mt-2 text-gray-700 text-left">
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

        <div className="flex justify-end w-full md:w-1/2 mt-[-20vh]"> {/* Asegúrate de que el contenedor padre tenga display flex */}
  <Image
    src="/static/noticias1.webp"
    alt="Campo"
    width={490} 
    height={400} 
    className="object-cover"
  />
</div>

      </div>
    </section>
  );
};

export default Relevante;
 