export default {
  title: "Image",
  name: "figure",
  type: "image",
  options: {
    hotspot: true,
  },
  fields: [
    {
      name: "alt",
      type: "string",
      title: "Alternative text",
      validation: (Rule) => Rule.required(),
      description: "Important for SEO and Accessiblity.",
      options: {
        isHighlighted: true,
      },
    },
  ],
};
