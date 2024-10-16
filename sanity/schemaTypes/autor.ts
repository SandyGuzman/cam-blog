import { Rule } from '@sanity/types'; // Importa los tipos de Rule desde @sanity/types

export default {
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule: Rule) => Rule.required().min(2).max(50),
    },
    {
      name: 'bio',
      title: 'Biography',
      type: 'text',
      validation: (Rule: Rule) => Rule.required().min(10).max(200),
    },
    {
      name: 'photo',
      title: 'Author Photo',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule: Rule) => Rule.required(),
    },
  ],
};
