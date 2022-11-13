export default {
  name: "homepage",
  title: "Home Page",
  type: "document",
  __experimental_actions: ['update', 'publish'],
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
   }
  ],
};
