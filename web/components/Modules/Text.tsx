import React from "react";
import slugify from "slugify";

import BlockContent from "components/BlockContent";

import { serializer } from "lib/util/serializers";

import { TColor } from "types";

interface Props {
  content: {
    backgroundColor: TColor;
    heading: string;
    portableSimple: Array<any>;
  };
}

const Text: React.FC<Props> = ({ content }) => {
  const { backgroundColor, heading, portableSimple } = content;
  return (
    <section
      id={slugify(heading.toLowerCase())}
      className="section section--text"
      style={{ backgroundColor: backgroundColor?.value || "#FFF" }}
    >
      <div className="section__inner">
        <div className="section__heading t-wremena caps">
          <h2>{heading}</h2>
        </div>
        <div className="section__content">
          {portableSimple ? <BlockContent serializer={serializer} content={portableSimple} /> : null}
        </div>
      </div>
    </section>
  );
};

export default Text;
