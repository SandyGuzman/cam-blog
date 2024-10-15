export interface simpleBlogCard {
    publishedAt: string | number | Date;
    _createdAt: string | number | Date;  // Fecha de creación
    title: string;                       // Título del blog
    currentSlug: string;                 // Slug actual para enrutamiento
    titleImage: any;                     // Imagen del título (puedes definir un tipo más específico si lo deseas)
}

export interface fullBlog {
    publishedAt: string | number | Date;
    currentSlug: string;  // Slug actual para enrutamiento
    title: string;        // Título del blog
    content: any;        // Contenido completo del blog
    titleImage: any;      // Imagen del título (nuevamente, define un tipo más específico si es necesario)
}
interface Blog {
    title: string;
    currentSlug: string;
    titleImage: string;
    _createdAt: string;
  }
  



