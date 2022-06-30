import { KeyedObject } from "@sanity/types";
import { TColor, IFigure, TBrand, TThirdPartyLink, TNavItem } from "../";
import { SanityKeyed, TQuote, TSocialProfile } from "./objects";

export interface ITextSection extends KeyedObject {
  _type?: "textSection";
  backgroundColor: TColor;
  heading: string;
  portableSimple: Array<any>;
}
export interface ICarouselModule extends KeyedObject {
  _type?: "photoCarousel";
  images: Array<SanityKeyed<IFigure>>;
}
export interface IBrandsModule extends KeyedObject {
  _type?: "brandsSection";
  backgroundColor: TColor;
  heading: string;
  brands: Array<TBrand>;
}
export interface ILinksModule extends KeyedObject {
  _type?: "linksSection";
  backgroundColor: TColor;
  heading: string;
  portableSimple?: Array<any>;
  links: Array<TThirdPartyLink>;
}
export interface IContactModule extends KeyedObject {
  _type?: "contactSection";
  backgroundColor: TColor;
  heading: string;
  email: string;
}
export interface IHero {
  _type?: "hero";
  backgroundColor: TColor;
  video: string;
  navItems: Array<TNavItem>;
}
export interface IFooter {
  backgroundColor: TColor;
  quotes: Array<TQuote>;
  instagram: TSocialProfile;
}

export type TModule = ITextSection | ICarouselModule | IBrandsModule | ILinksModule | IContactModule;
