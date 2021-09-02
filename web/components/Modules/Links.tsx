import React from "react";
import slugify from "slugify";

import BlockContent from "components/BlockContent";

import { serializer } from "lib/util/serializers";

import { TColor, TThirdPartyLink } from "types";

interface Props {
  content: {
    backgroundColor: TColor;
    heading: string;
    portableSimple?: Array<any>;
    links: Array<TThirdPartyLink>;
  };
}

const Links: React.FC<Props> = ({ content }) => {
  const { backgroundColor, heading, portableSimple, links } = content;
  return (
    <section
      id={slugify(heading.toLowerCase())}
      className="section section--links"
      style={{ backgroundColor: backgroundColor?.value || "#FFF" }}
    >
      <div className="section__inner">
        <div className="section__heading">
          <h2>{heading}</h2>
        </div>
        <BlockContent serializer={serializer} content={portableSimple} />
      </div>
    </section>
  );
};

export default Links;
