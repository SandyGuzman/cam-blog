import { simpleBlogCard } from "@/lib/interface";
import client from "@/lib/sanityclient";
import Image from 'next/image'; 
import { urlFor } from "@/lib/sanityclient"; 
import { Button } from "@/components/ui/button";
import Link from 'next/link';  

async function getData() {
  const query = `*[_type == 'blog'] | order(publishedAt desc)[0...500] { 
    title, 
    "currentSlug": slug.current, 
    titleImage,
    publishedAt 
  }`;
  
  const data = await client.fetch(query);
  return data;
}

export default async function Noticias() {
  const data: simpleBlogCard[] = await getData(); 

  const headerImage = "/static/noticias5.webp"; 
  return (
    <div className="py-0">
      <div className="w-screen  h-full rounded mb-12 -mx-4 relative overflow-hidden">
        <Image 
          src={headerImage} 
          alt="Header Image" 
          layout="fill" 
          objectFit="cover" 
          quality={100}
          priority
        />
    </div>   

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.map((post, idx) => {
          const date = new Date(post.publishedAt);
          const formattedDate = date.toLocaleDateString('es-ES', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          });

          return (
            <div key={idx} className="flex flex-col bg-white shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-lg max-w-[16rem] mx-auto rounded-lg"> 
              <div className="relative w-47 h-40">
                {post.titleImage ? (
                  <Image 
                    src={urlFor(post.titleImage).url()} 
                    alt="image" 
                    layout="fill" 
                    objectFit="cover" 
                    className="rounded-t-lg"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <p>Imagen no disponible</p>
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
        })}
      </div>

    </div>
  );
}
