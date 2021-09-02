import { BiInfoCircle } from "react-icons/bi";

export default {
  title: "Home Page",
  name: "homePage",
  type: "document",
  fields: [
    {
      name: "homepageNote",
      type: "note",
      options: {
        icon: BiInfoCircle,
        message: "Navigation items are automatically assembled from the content sections below.",
      },
    },
    {
      title: "Modules",
      name: "modules",
      type: "array",
      of: [
        { type: "textSection" },
        { type: "photoCarousel" },
        { type: "brandsSection" },
        { type: "linksSection" },
        { type: "contactSection" },
      ],
      validation: (Rule) => Rule.required().min(1),
    },
  ],
  preview: {
    prepare() {
      return {
        title: "Home Page",
      };
    },
  },
};
