import React from "react";

import Text from "components/Modules/Text";
import Carousel from "components/Modules/Carousel";
import Brands from "components/Modules/Brands";
import Link from "components/Modules/Links";
import Contact from "components/Modules/Contact";

import { TModule } from "types";

interface Props {
  modules: Array<TModule>;
}

const Modules: React.FC<Props> = ({ modules }) => {
  function buildModule(m: TModule) {
    switch (m._type) {
      case "textSection":
        return <Text key={m._key} content={m} />;
      case "photoCarousel":
        return <Carousel key={m._key} content={m} />;
      case "brandsSection":
        return <Brands key={m._key} content={m} />;
      case "linksSection":
        return <Link key={m._key} content={m} />;
      case "contactSection":
        return <Contact key={m._key} content={m} />;
      default:
        return null;
    }
  }
  return <>{modules?.map((m) => buildModule(m))}</>;
};

export default Modules;
