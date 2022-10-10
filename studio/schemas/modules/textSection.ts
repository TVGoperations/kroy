import { BsCardText } from "react-icons/bs";

import colorInput from "../objects/colorInput";
import portableSimple from "../objects/portableSimple";

export default {
  title: "Text Section",
  name: "textSection",
  type: "object",
  icon: BsCardText,
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
      title: "Image (Optional)",
      name: "image",
      type: "figure",
      validation: (Rule) => Rule.optional(),
    },
    {
      ...portableSimple,
    },
  ],
  preview: {
    select: {
      title: "heading",
    },
    prepare({ title }) {
      return {
        title: title || "Untitled Text Section",
      };
    },
  },
};
