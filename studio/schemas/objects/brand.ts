import { BiLinkExternal } from "react-icons/bi";

export default {
  title: "Brand",
  name: "brand",
  type: "object",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "year",
      type: "number",
      title: "Year Established",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      type: "text",
      title: "Description",
      rows: 5,
      validation: (Rule) => Rule.required(),
    },
    {
      title: "URL",
      name: "url",
      type: "url",
      validation: (Rule) =>
        Rule.uri({
          scheme: ["http", "https"],
        }),
    },
  ],
  preview: {
    select: {
      title: "name",
    },
    prepare({ title }) {
      return {
        title: title || "Untitled Brand",
        media: BiLinkExternal,
      };
    },
  },
};
