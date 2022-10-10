/* eslint-disable @next/next/no-img-element */
import React from "react";
import { m, MotionProps } from "framer-motion";
import { useInView } from "react-intersection-observer";
import cx from "classnames";
import get from "lodash.get";

import { buildSrcSet, buildSrc } from "lib/sanity/image";
import { IFigure, FitMode } from "types";

const DEFAULT_WIDTH = 500;
const DEFAULT_WIDTHS = [320, 480, 640, 800, 1440];
const DEFAULT_QUALITY = 80;
const DEFAULT_SIZES = "(min-width: 940px) 50vw, 100vw";
const DEFUALT_FIT = "clip";

interface Props {
  image: IFigure;
  alt?: string;
  width?: number;
  height?: number;
  aspect?: number;
  presentation?: boolean;
  srcSizes?: Array<number>;
  sizes?: string;
  quality?: number;
  lazy?: boolean;
  fit?: FitMode;
  onLoad?: () => void | undefined;
  className?: string;
  layout?: string;
  motionProps?: MotionProps;
}

const Image: React.FC<Props> = ({
  image,
  alt,
  width = DEFAULT_WIDTH,
  height,
  aspect,
  presentation = false,
  srcSizes = DEFAULT_WIDTHS,
  sizes = DEFAULT_SIZES,
  quality = DEFAULT_QUALITY,
  lazy = true,
  fit = DEFUALT_FIT,
  layout = "intrinsic",
  onLoad,
  className = "",
  motionProps = {},
}) => {
  const [isLoaded, setLoaded] = React.useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  React.useEffect(() => {
    if (isLoaded && onLoad) onLoad();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoaded]);

  const orgWidth = get(image, "asset.metadata.dimensions.width") as number;
  const orgHeight = get(image, "asset.metadata.dimensions.height") as number;
  const lqip = get(image, "asset.metadata.lqip") as string;
  const aspectRatio = aspect ? aspect : orgWidth / orgHeight;

  const src = buildSrc(image, {
    ...{ width },
    ...{ height },
    ...{ quality },
    ...{ fit },
  });

  const srcSet = buildSrcSet(image, {
    ...{ srcSizes },
    ...{ aspect },
    ...{ fit },
    ...{ quality },
  });

  const handleLoad = () => {
    requestAnimationFrame(() => {
      setLoaded(true);
    });
  };

  const style = {
    paddingBottom: aspectRatio ? `${Math.round(100 / aspectRatio)}%` : undefined,
  };

  if (!image.asset) return null;

  return (
    <m.figure
      {...motionProps}
      className={cx("image", className, {
        loaded: isLoaded,
      })}
    >
      <div
        className={cx("ar", {
          "has-fill": layout === "fill" || layout === "contain",
        })}
        style={style}
      >
        <picture>
          <img src={lqip} alt="" className="image__placeholder" role="presentation" aria-hidden="true" />
        </picture>
      </div>

      <img
        role={presentation ? "presentation" : undefined}
        ref={ref}
        alt={alt || image.alt}
        sizes={sizes}
        src={!lazy || inView ? src : undefined}
        srcSet={!lazy || inView ? srcSet : undefined}
        className="image__main"
        decoding="async"
        onLoad={handleLoad}
      />
    </m.figure>
  );
};
export { Image };
