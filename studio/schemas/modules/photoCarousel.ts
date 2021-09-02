import { BiCarousel } from "react-icons/bi";

export default {
  title: "Photo Carousel",
  name: "photoCarousel",
  type: "object",
  icon: BiCarousel,
  fields: [
    {
      title: "Images",
      name: "images",
      type: "array",
      of: [{ type: "figure" }],
      validation: (Rule) =>
        Rule.required().min(1).max(15).warning("Ensure to set hotspots on photos for best results."),
    },
  ],
  preview: {
    prepare() {
      return {
        title: "Photo Carousel",
      };
    },
  },
};
