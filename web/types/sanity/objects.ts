import { Asset, ImageCrop, ImageHotspot, KeyedObject } from "@sanity/types";

export declare type SanityKeyed<T> = T extends object
  ? T & {
      _key: string;
    }
  : T;
export interface IFigure {
  [key: string]: unknown; // We allow meta-fields on image
  _type: "figure";
  alt: string;
  asset: Asset;
  crop?: ImageCrop;
  hotspot?: ImageHotspot;
}

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
