import React from "react";
import { m, AnimatePresence } from "framer-motion";

import { SVG } from "components/SVG";

import { TBrand } from "types";

const variants = {
  active: {
    opacity: 1,
    y: 0,
  },
  inactive: {
    opacity: 0,
    y: 15,
    transition: {
      y: { duration: 0.15, type: "tween" },
      opacity: { duration: 0.1, type: "tween" },
    },
  },
};

const Brand: React.FC<{ brand: TBrand; active: boolean }> = ({ brand, active }) => {
  const { description, name, url, year } = brand;
  return (
    <AnimatePresence exitBeforeEnter>
      {active && (
        <m.div className="brand__details" variants={variants} initial={"inactive"} exit={"inative"} animate={"active"}>
          <div className="brand__info">
            <SVG.BrandTop />
            <h3 className="t-wremena">{name}</h3>
            <p className="t-faris">{`EST ${year}`}</p>
            <p className="t-wremena">{description}</p>
            <div className="brand__link">
              <a className="t-faris" href={url}>
                <SVG.Arrow />
                <span>{"LEARN MORE"}</span>
              </a>
            </div>
            <SVG.BrandBottom />
          </div>
        </m.div>
      )}
    </AnimatePresence>
  );
};

export { Brand };
