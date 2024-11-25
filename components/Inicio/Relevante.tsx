'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import client from '@/lib/sanityclient'
import imageUrlBuilder from '@sanity/image-url'
import { ImageAsset } from '@sanity/types'

interface Blog {
  publishedAt: string | number | Date;
  title: string;
  currentSlug: string;
  titleImage: ImageAsset;
  _createdAt: string;
  smallDescription: string;
}

const builder = imageUrlBuilder(client)

function urlFor(source: ImageAsset) {
  return builder.image(source)
}

const Relevante: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([])

  const getFeaturedNews = async () => {
    const query = `*[_type == 'blog'] | order(publishedAt desc)[0...2] { 
      title, 
      "currentSlug": slug.current, 
      titleImage, 
      publishedAt,
      smallDescription 
    }`

    return await client.fetch(query)
  }

  useEffect(() => {
    const fetchBlogs = async () => {
      const fetchedBlogs = await getFeaturedNews()
      setBlogs(fetchedBlogs)
    }
    fetchBlogs()
  }, [])

  return (
    <section className="flex flex-col lg:flex-row items-center justify-center w-full overflow-hidden gap-4">
      <div className="flex flex-col w-full max-w-4xl xl:max-w-2xl mr-auto text-left mb-8 pt-6 md:pt-10 lg:pt-12 gap-4">
        <h1 className="text-3xl md:text-5xl  font-bold text-gray-900">Noticias Relevantes</h1>
        <p className="text-lg md:text-2xl font-light text-gray-600 mt-2">
          Entérate de la actualidad relacionada al consejo
        </p>
        <BlogCard blogs={ blogs }/>
      </div>

      <div className="flex justify-center md:justify-end items-center">
        <Image
          src="/static/noticias1.webp"
          alt="Descripción de la imagen"
          width={ 460 }
          height={ 400 }
          className="w-[300px] lg:w-[460px] h-auto mb-0"
        />
      </div>
    </section>
  )
}

const BlogCard = ({ blogs }: Readonly<{ blogs: Blog[] }>) => {
  return (
    <div className="w-full">
      { blogs.length > 0 ? (
        blogs.map((blog) => {
          const date = new Date(blog.publishedAt)
          const formattedDate = date.toLocaleDateString('es-ES', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })
          return (
            <Link href={ `/noticias/${ blog.currentSlug }` } key={ blog.currentSlug } className="block mb-7">
              <div
                className="flex flex-col md:flex-row relative w-full min-h-[250px] border-2 border-[#95DE1C] bg-transparent text-black rounded-br-3xl rounded-bl-3xl rounded-tl-3xl rounded-tr-none hover:bg-[#94de1c4d] transition-all duration-300 cursor-pointer p-4 md:p-6 shadow-xl hover:shadow-xl md:pl-4">
                { blog.titleImage && (
                  <div className="flex items-center justify-center w-full mr-2 md:w-1/3 md:mr-3 mb-4 md:mb-0">
                    <Image
                      src={ urlFor(blog.titleImage).url() }
                      alt={ blog.title }
                      width={ 1920 }
                      height={ 1080 }
                      quality={ 100 }
                      priority
                      className="w-full h-auto object-cover rounded-xl md:rounded-3xl"
                    />
                  </div>
                ) }

                <div className="flex flex-col items-start justify-start text-left w-full md:h-auto md:w-2/3 space-y-2">
                  <div className="flex items-center">
                    <Image
                      src="/static/logo.webp"
                      alt="Logo"
                      width={ 14 }
                      height={ 14 }
                      className="md:w-5 md:h-5"
                    />
                    <p
                      className="text-[10px] md:text-[12px] lg:text-[14px] font-light text-black ml-3 md:ml-3 text-left">
                      Consejo Agroalimentario de Michoacán
                    </p>
                  </div>
                  <h2 className="text-[14px] md:text-[16px] lg:text-[18px] font-semibold">{ blog.title }</h2>
                  <p
                    className="text-[10px] md:text-[12px] lg:text-[14px] font-light text-gray-600">{ formattedDate }</p>
                  <p className="text-[10px] md:text-[12px] lg:text-[14px] font-light mt-1 text-black text-justify">
                    { blog.smallDescription }
                  </p>
                </div>
              </div>
            </Link>
          )
        })
      ) : (
        <p>No hay noticias disponibles.</p>
      ) }
    </div>
  )
}

export default Relevante
