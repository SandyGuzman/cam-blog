import { ImageAsset } from "@sanity/types";

// Definimos una interfaz para el contenido del blog, suponiendo que sea un string
interface blogContent {
  body: string; // Asumiendo que el contenido del blog es un string
}

// Interfaz para una tarjeta de blog simple
export interface simpleBlogCard {
  publishedAt: string | number | Date;
  _createdAt: string | number | Date; // Fecha de creación
  title: string; // Título del blog
  currentSlug: string; // Slug actual para enrutamiento
  titleImage: ImageAsset; // Reemplazamos 'any' con 'ImageAsset'
}

// Interfaz para el blog completo
export interface fullBlog {
  publishedAt: string | number | Date;
  currentSlug: string; // Slug actual para enrutamiento
  title: string; // Título del blog
  content: blogContent; // Cambiamos 'any' por un tipo específico
  titleImage: ImageAsset; // Reemplazamos 'any' con 'ImageAsset'
}

// Interfaz para el blog
export interface blog {
  title: string;
  currentSlug: string;
  titleImage: ImageAsset;
  _createdAt: string;
}
