import sanityImage from "@sanity/image-url";
import { sanityClient } from "./server";

import { TFigure } from "types";
import { CropMode, ImageFormat } from "@sanity/image-url/lib/types/types";

export const imageBuilder = sanityImage(sanityClient);

export function buildSrc(image: TFigure, width?: number, height?: number, quality: number = 80, format?: ImageFormat) {
  let img = imageBuilder.image(image);

  if (width) {
    img = img.width(Math.round(width));
  }

  if (height) {
    img = img.height(Math.round(height));
  }

  if (format) {
    img = img.format(format);
  }

  if (quality) {
    img = img.quality(quality);
  }

  return img.fit("max").auto("format").url();
}

export function buildSrcSet(
  image: TFigure,
  srcSizes: Array<number>,
  aspect: number,
  format?: ImageFormat,
  quality: number = 80
) {
  const sizes = srcSizes.map((width) => {
    let imgSrc = buildSrc(image, width, aspect && Math.round(width * aspect) / 100, quality, format);
    return `${imgSrc} ${width}w`;
  });

  return sizes.join(",");
}
