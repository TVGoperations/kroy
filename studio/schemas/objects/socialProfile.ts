import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const getIcon = (icon) => {
  switch (icon) {
    case "Facebook":
      return FaFacebookF;
    case "Instagram":
      return FaInstagram;
    case "Twitter":
      return FaTwitter;
    case "YouTube":
      return FaYoutube;
    default:
      return false;
  }
};

export default {
  title: "Social Link",
  name: "socialProfile",
  type: "object",
  fields: [
    {
      title: "Platform",
      name: "platform",
      type: "string",
      options: {
        list: [
          { title: "Facebook", value: "Facebook" },
          { title: "Instagram", value: "Instagram" },
          { title: "Twitter", value: "Twitter" },
          { title: "YouTube", value: "YouTube" },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Display Name",
      name: "displayName",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "URL",
      name: "url",
      type: "url",
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: "displayName",
      icon: "platform",
      url: "url",
    },
    prepare({ title, icon, url }) {
      return {
        title: title,
        subtitle: url ? url : "(URL not set)",
        media: getIcon(icon),
      };
    },
  },
};
