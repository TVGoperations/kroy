import { BiInfoCircle } from "react-icons/bi";
import { RiVideoFill } from "react-icons/ri";

import colorInput from "../objects/colorInput";

export default {
  title: "Hero",
  name: "hero",
  type: "document",
  icon: RiVideoFill,
  fields: [
    {
      name: "homepageNote",
      type: "note",
      options: {
        icon: BiInfoCircle,
        message: "Navigation items are automatically assembled from the content sections within the Home Page tab.",
      },
    },
    colorInput(),
    {
      title: "Video",
      name: "video",
      type: "file",
      description: "Must be an MP4. Ideally under 5mb",
      accept: "video/mp4",
    },
  ],
  preview: {
    prepare() {
      return {
        title: "Hero",
      };
    },
  },
};
