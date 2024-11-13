import { Rule } from '@sanity/types';

export default {
    name: 'blog',
    type: 'document',
    title: 'Blog',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Título del artículo',
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug del artículo',
            options: {
                source: 'title',
            },
        },
        {
            name: 'titleImage',
            type: 'image',
            title: 'Título de la imagen',
        },
        {
            name: 'content',
            type: 'array',
            title: 'Contenido',
            of: [
                {
                    type: 'block',
                },
            ],
        },
        {
            name: 'smallDescription',
            title: 'Pequeña Descripción',
            type: 'text', 
          },
        {
            name: 'author',
            type: 'string', 
            title: 'Autor',
        },
        {
            name: 'publishedAt',
            type: 'datetime',
            title: 'Fecha de publicación',
        },
        {
            name: "categoria",
            title: "Categoría",
            type: "reference",  // Esto indica que la categoría es una referencia a otro documento
            to: [{ type: "categoria" }], // Debe hacer referencia a un documento del tipo "categoria"
          },
        ],
      };