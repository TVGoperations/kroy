import { AiOutlineMail } from "react-icons/ai";

import colorInput from "../objects/colorInput";

export default {
  title: "Contact Section",
  name: "contactSection",
  type: "object",
  icon: AiOutlineMail,
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
      title: "Contact Email",
      name: "email",
      type: "string",
      validation: (Rule) =>
        Rule.required().regex(
          /[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?.)+[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?/,
          {
            name: "email",
            invert: false,
          }
        ),
    },
  ],
  preview: {
    select: {
      title: "heading",
    },
    prepare({ title }) {
      return {
        title: title || "Untitled Contact Section",
      };
    },
  },
};
