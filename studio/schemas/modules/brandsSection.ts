import { BsGrid } from "react-icons/bs";

import colorInput from "../objects/colorInput";

export default {
  title: "Brands Section",
  name: "brandsSection",
  type: "object",
  icon: BsGrid,
  fields: [
    colorInput(),
    {
      title: "Heading",
      name: "heading",
      type: "string",
      description: "Section Heading. Also used as link title in navigation",
      validation: (Rule) => Rule.max(15).warning("Shorter headings work better"),
    },
    {
      title: "Brands",
      name: "brands",
      type: "array",
      of: [{ type: "brand" }],
      validation: (Rule) => Rule.required().min(1).max(6),
    },
  ],
  preview: {
    select: {
      title: "heading",
    },
    prepare({ title }) {
      return {
        title: title || "Untitled Brands Section",
      };
    },
  },
};
