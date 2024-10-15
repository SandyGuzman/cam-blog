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
    ],
}
