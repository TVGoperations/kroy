import { FaQuoteRight } from "react-icons/fa";

export default {
  title: "Quote",
  name: "quote",
  type: "object",
  icon: FaQuoteRight,
  fields: [
    {
      name: "quoteText",
      type: "string",
      title: "Quote",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "quoteAttribution",
      type: "string",
      title: "Quote Attribution",
      validation: (Rule) => Rule.required(),
    },
  ],
};
