/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { m } from "framer-motion";
import { useInView } from "react-intersection-observer";
import cx from "classnames";

import { buildSrc, buildSrcSet } from "lib/sanity";
import { TFigure } from "types";

const getSize = (layout: "intrinsic" | "fill" | "contain") => {
  switch (layout) {
    case "intrinsic":
      return "object-cover";
    case "fill":
      return "object-cover";
    case "contain":
      return "object-contain";
  }
};
interface Props {
  photo: TFigure;
  alt?: string | null;
  width?: number;
  height?: number;
  srcSizes?: Array<number>;
  sizes?: string;
  quality?: number;
  hasPlaceholder?: boolean;
  forceLoad?: boolean;
  layout?: "intrinsic" | "fill" | "contain";
  caption?: string | false;
  motion?: any;
  className?: string;
}
const Photo = ({
  photo,
  alt = null,
  width = null,
  height = null,
  srcSizes = [400, 600, 800, 1000, 1200],
  sizes = "(min-width: 940px) 50vw, 100vw",
  layout = "intrinsic",
  quality = 90,
  hasPlaceholder = true,
  forceLoad = false,
  caption = false,
  motion = {},
  className,
}: Props) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // define our aspect ratio if not a background fill
  const aspect =
    typeof width === "number" && typeof height === "number"
      ? (height / width) * 100
      : 100 / photo.asset.metadata.dimensions.aspectRatio;

  const aspectCustom = layout === "intrinsic" ? { paddingTop: `${aspect}%` } : null;

  const src = buildSrc(photo, width, height, quality);
  const srcset = buildSrcSet(photo, srcSizes, aspect, null, quality);

  function handleLoad() {
    requestAnimationFrame(() => {
      setIsLoaded(true);
    });
  }

  return (
    <m.figure className={className ? className : null} {...motion}>
      <div
        className={cx("ar", {
          "has-fill": layout === "fill" || layout === "contain",
        })}
        style={aspectCustom}
      >
        <picture>
          <img
            ref={ref}
            width={width}
            sizes={sizes}
            height={height}
            src={forceLoad || inView ? src : null}
            srcSet={forceLoad || inView ? srcset : null}
            alt={alt || photo.alt}
            onLoad={handleLoad}
            className={cx(getSize(layout), { "is-loaded": isLoaded })}
          />
        </picture>
      </div>
      {caption && <figcaption className="t-caption">{caption}</figcaption>}
      {hasPlaceholder ? (
        <div className={cx("ar__placeholder", { "is-loaded": isLoaded })}>
          <img src={photo.asset.metadata.lqip} alt="" role="presentation" style={aspectCustom} />
        </div>
      ) : null}
    </m.figure>
  );
};

export { Photo };
