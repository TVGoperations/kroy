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
    },
    {
      title: "URL",
      name: "url",
      type: "url",
    },
  ],
  preview: {
    select: {
      icon: "platform",
      url: "url",
    },
    prepare({ icon, url }) {
      return {
        title: icon,
        subtitle: url ? url : "(URL not set)",
        media: getIcon(icon),
      };
    },
  },
};
