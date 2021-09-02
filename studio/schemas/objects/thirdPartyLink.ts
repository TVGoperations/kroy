import { BiLinkExternal } from "react-icons/bi";

export default {
  title: "Link",
  name: "thirdPartyLink",
  type: "object",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
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
        title: title || "Untitled",
        media: BiLinkExternal,
      };
    },
  },
};
