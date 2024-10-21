import { fullBlog } from "@/lib/interface";
import client from "@/lib/sanityclient";
import Image from "next/image";
import { urlFor } from "@/lib/sanityclient";
import { PortableText } from "@portabletext/react";
import TypingAnimation from "@/components/ui/typing-animation"; 

async function getData(slug: string) {
  const query = `
    *[_type == "blog" && slug.current == '${slug}']{
      "currentSlug": slug.current,
      title,
      content,
      publishedAt,
      titleImage
    }[0]`; 
  const data = await client.fetch(query, { slug });
  return data;
}

export default async function ArticuloBlog({
  params, 
}: { 
  params: { slug: string };
}) {
  const data: fullBlog | null = await getData(params.slug);

  if (!data) {
    return <div>No se encontró el artículo.</div>;
  }


  const publishedDate = new Date(data.publishedAt).toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="relative py-32">
      <div className="absolute inset-0">
        <Image
         src="/static/hero2.webp"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          className="blur-md " 
          priority
        />
      </div>

      <div className="relative max-w-3xl mx-auto p-6 bg-white rounded-lg mt-8 z-10">
        <div className="flex items-center mb-6">
          <div className="flex-1">
            <TypingAnimation
              className="text-4xl font-bold text-black dark:text-white"
              text={data.title} 
            />
          </div>
          {data.titleImage ? (
            <Image
              src={urlFor(data.titleImage).url()}
              width={200} 
              height={100} 
              alt="Title Image"
              priority
              className="rounded-lg mb-8 shadow-md transition-transform duration-200 hover:scale-105 ml-4" 
            />
          ) : (
            <div className="w-1/3 h-20 bg-gray-200 flex items-center justify-center rounded-lg border border-gray-300 ml-4">
              <p className="text-gray-500">Sin imagen disponible</p>
            </div>
          )}
        </div>

        <p className="text-gray-600 text-sm mb-4">{publishedDate}</p>

        <div className="prose prose-lg text-gray-700">
          {data.content ? (
            <PortableText value={data.content} />
          ) : (
            <p>No hay contenido disponible.</p>
          )}
        </div>
      </div>
    </div>
  );
}
