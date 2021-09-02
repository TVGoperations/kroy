import { CgDockBottom } from "react-icons/cg";
import { BiInfoCircle } from "react-icons/bi";

import colorInput from "../objects/colorInput";

export default {
  title: "Footer",
  name: "footer",
  type: "document",
  icon: CgDockBottom,
  fields: [
    {
      name: "footerNote",
      type: "note",
      options: {
        icon: BiInfoCircle,
        message: "Instagram Handle is pulled from General Settings > Social Profiles",
      },
    },
    colorInput(),
    {
      title: "Quotes",
      name: "quotes",
      type: "array",
      of: [{ type: "quote" }],
    },
  ],
  preview: {
    prepare() {
      return {
        title: "Footer",
      };
    },
  },
};
