import { BsCardList } from "react-icons/bs";

import colorInput from "../objects/colorInput";
import portableSimple from "../objects/portableSimple";

export default {
  title: "Links Section",
  name: "linksSection",
  type: "object",
  icon: BsCardList,
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
      ...portableSimple,
    },
    {
      title: "Links",
      name: "links",
      type: "array",
      of: [{ type: "thirdPartyLink" }],
      validation: (Rule) => Rule.required().min(1).max(6),
    },
  ],
  preview: {
    select: {
      title: "heading",
    },
    prepare({ title }) {
      return {
        title: title || "Untitled Links Section",
      };
    },
  },
};
