import { TSocialProfile, TFigure, IHero } from "..";

export type TColor = {
  title: string;
  value: string;
};

export type TSeoData = {
  siteTitle: string;
  metaTitle: string;
  metaDesc: string;
  shareTitle: string;
  shareDesc: string;
  metaKeywords: string;
  shareGraphic: TFigure;
};

export type TSiteData = {
  canonicalUrl: string;
  contactEmail: string;
  seo: TSeoData;
  socialProfiles: Array<TSocialProfile>;
  hero: {
    backgroundColor: TColor;
    video?: any;
  };
  footer: {
    backgroundColor: TColor;
    quotes: Array<{ quoteText: string; quoteAttribution: string }>;
  };
};

export type TNavItem = {
  id: string;
  title: string;
};

export type TLayout = {
  site: TSiteData;
  navItems: Array<TNavItem>;
  page: {
    seo?: TSeoData;
  };
  preview?: boolean;
};

export type THero = {};

export type THomePageData = {
  page: {
    hero: IHero;
    modules: Array<any>;
  };
};
