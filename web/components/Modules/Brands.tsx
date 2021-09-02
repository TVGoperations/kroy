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
      className="section"
      style={{ backgroundColor: backgroundColor?.value || "#FFF" }}
    >
      <div className="section__heading">
        <h2>{heading}</h2>
      </div>
    </section>
  );
};

export default Brands;
