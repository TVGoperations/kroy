import React from "react";
import slugify from "slugify";

import { TColor, TBrand } from "types";
interface Props {
  content: {
    backgroundColor: TColor;
    heading: string;
    brands: Array<TBrand>;
  };
}

const Brands: React.FC<Props> = ({ content }) => {
  const { backgroundColor, heading, brands } = content;

  return (
    <section
      id={slugify(heading.toLowerCase())}
      className="section section--brands"
      style={{ backgroundColor: backgroundColor?.value || "#FFF" }}
    >
      <div className="section__inner">
        <div className="section__heading t-mathis caps">
          <h2>{heading}</h2>
        </div>
        <div className="section__content">
          {brands.map((b, idx) => (
            <div className="brands" key={idx}>
              <div>
                <span>{idx + 1}</span>
                <h3>{b.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
