import React from "react";
import cx from "classnames";
import slugify from "slugify";

import { Image } from "components/Image";
import BlockContent from "components/BlockContent";

import { serializer } from "lib/util/serializers";

import { IFigure, TColor } from "types";

interface Props {
  content: {
    image?: IFigure;
    backgroundColor: TColor;
    heading: string;
    portableSimple: Array<any>;
  };
}

const Text: React.FC<Props> = ({ content }) => {
  const { backgroundColor, heading, portableSimple, image } = content;
  return (
    <section
      id={slugify(heading.toLowerCase())}
      className={cx("section section--text", { "section--text-image": !!image })}
      style={{ backgroundColor: backgroundColor?.value || "#FFF" }}
    >
      <div className="section__inner">
        <div className="section__heading t-wremena caps">
          <h2>{heading}</h2>
        </div>
        <div className="section__content">
          {image ? (
            <div className="section--text__image">
              <Image image={image} alt={image.alt} width={800} height={800} aspect={1} srcSizes={[300, 600, 1200]} />
            </div>
          ) : null}
          {portableSimple ? (
            <BlockContent
              className={cx("bc", { "bc--sm": !!image })}
              serializer={serializer}
              content={portableSimple}
            />
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default Text;
