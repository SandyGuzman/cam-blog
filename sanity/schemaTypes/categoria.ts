// schemas/categoria.js
export default {
  name: "categoria",
  title: "Categoría",
  type: "document",
  fields: [
    {
      name: "nombre",
      title: "Nombre de la categoría",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "nombre",
        maxLength: 96,
      },
    },
  ],
};
