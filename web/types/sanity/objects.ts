import { Reference, ImageCrop, ImageHotspot, KeyedObject, Image, ImageMetadata } from "@sanity/types";

export type TFigure = KeyedObject &
  Image & {
    _type: "figure";
    alt: string;
    caption?: string;
    crop?: ImageCrop;
    hotspot?: ImageHotspot;
    asset: Reference &
      Image & {
        metadata?: ImageMetadata;
      };
  };

export type TSocialProfile = KeyedObject & {
  platform: string;
  url: string;
  displayName: string;
};

export type TBrand = KeyedObject & {
  name: string;
  year: number;
  description: string;
  url: string;
};

export type TQuote = KeyedObject & {
  quoteText: string;
  quoteAttribution: string;
};

export type TThirdPartyLink = KeyedObject & {
  name: string;
  url: string;
};
