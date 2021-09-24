import React from "react";
import slugify from "slugify";

import { Brand } from "components/Brand";

import { TColor, TBrand } from "types";
interface Props {
  content: {
    backgroundColor: TColor;
    heading: string;
    brands: Array<TBrand>;
  };
}

const Brands: React.FC<Props> = ({ content }) => {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);
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
          <div className="brands">
            {brands.map((b, idx) => (
              <div
                className="brand"
                key={idx}
                tabIndex={0}
                onFocus={() => setActiveIndex(idx)}
                onTouchEnd={() => setActiveIndex(idx)}
                onMouseEnter={() => setActiveIndex(idx)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                <div className="brand__item">
                  <span className={"t-mathis"}>{idx + 1}</span>
                  <h3 className="t-wremena">{b.name}</h3>
                </div>
                <Brand brand={b} active={activeIndex === idx} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
