import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { urlFor } from "@/lib/sanityclient";

interface NoticiaCardProps {
  post: {
    title: string;
    currentSlug: string;
    titleImage?: any;
    publishedAt: string;
    categoria?: string;
  };
}

const NoticiaCard: React.FC<NoticiaCardProps> = ({ post }) => {
  const { title, currentSlug, titleImage, publishedAt, categoria } = post;
  const formattedDate = new Date(publishedAt).toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="border-2 rounded-2xl overflow-hidden relative max-w-[450px] min-w-[250px] max-h-[400px]">
      <div className="relative w-full h-[280px]">
        {titleImage ? (
          <Image
            src={urlFor(titleImage).url()}
            alt={title}
            layout="fill"
            objectFit="cover"
            quality={100}
            priority
            className="rounded-xl brightness-75"
          />
        ) : (
          <div className="flex items-center justify-center w-full h-full bg-[#94de1c88]">
            <Image
              src="/static/logo.webp"
              alt="Imagen por defecto"
              width={140}
              height={50}
              quality={100}
              priority
             
            />
          </div>
        )}
      </div>
      <p className="uppercase absolute bottom-20 left-0 right-0 text-white bg-neutral-400 bg-opacity-65 px-5 py-1 text-sm rounded-full flex justify-center">
        {categoria || "Sin categoría"}
      </p>

      <div className="flex items-center justify-between p-4">
        <div>
          <h2 className="font-montserrat font-medium text-neutral-600 text-xs md:text-sm lg:text-base">
            {title.length > 15 ? `${title.slice(0, 15)}...` : title}
          </h2>
          <h4 className="text-neutral-400 text-sm font-extralight">
            {formattedDate}
          </h4>
        </div>

        <Link
          href={`/noticias/${currentSlug}`}
          className="bg-white p-3 rounded-full border-2 hover:bg-[#95DE1C] hover:text-neutral-700 transition-all duration-300"
        >
          <FaArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default NoticiaCard;
