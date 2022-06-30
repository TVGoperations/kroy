import sanityImage from "@sanity/image-url";
import { sanityClient } from "./server";

import type { ImageFormat, FitMode, IFigure } from "types";

export const imageBuilder = sanityImage(sanityClient);

interface IBuildSrc {
  width?: number;
  height?: number;
  format?: ImageFormat;
  fit?: FitMode;
  quality: number;
}

export function buildSrc(image: IFigure, { width, height, format, fit, quality = 90 }: IBuildSrc) {
  let imgSrc = imageBuilder.image(image);

  if (width) imgSrc = imgSrc.width(Math.round(width));
  if (height) imgSrc = imgSrc.height(height);
  if (format) imgSrc = imgSrc.format(format);
  if (quality) imgSrc = imgSrc.quality(quality);
  if (fit) imgSrc = imgSrc.fit(fit);

  return imgSrc.auto("format").url() as string;
}

interface IBuildSrcSet {
  srcSizes: Array<number>;
  aspect?: number;
  fit?: FitMode;
  quality: number;
  format?: ImageFormat;
}

export function buildSrcSet(image: IFigure, { srcSizes, aspect, fit, format, quality }: IBuildSrcSet) {
  const sizes = srcSizes.map((width) => {
    const options = {
      ...{ width },
      ...{ height: aspect ? Math.round(width / aspect) : width },
      ...{ format },
      ...{ fit },
      ...{ quality },
    };

    let imgSrc = buildSrc(image, options) as any;

    return `${imgSrc} ${width}w`;
  });

  return sizes.join(",") as string;
}
