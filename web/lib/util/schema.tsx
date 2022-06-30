import React from "react";
import { buildSrc } from "lib/sanity";

import { TSocialProfile, IFigure } from "types";

const personSchema = (image: IFigure, socialProfiles: Array<TSocialProfile>, siteUrl: string) => {
  const sameAs = [...socialProfiles.map((p) => p.url), "https://en.wikipedia.org/wiki/Denzel_Curry", siteUrl];
  return {
    "@context": "https://schema.org/",
    "@type": "Person",
    name: "Denzel Curry",
    url: "https://www.denzelcurry.com",
    image: buildSrc(image, { width: 800, height: 800, quality: 80, format: "jpg" }),
    sameAs: sameAs,
  };
};

export const PersonSchema = ({
  image,
  socialProfiles,
  siteUrl,
}: {
  image: IFigure;
  socialProfiles: Array<TSocialProfile>;
  siteUrl: string;
}) => {
  return (
    <script
      key={`schema-person`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(personSchema(image, socialProfiles, siteUrl)),
      }}
    />
  );
};

const websiteSchema = (siteUrl: string) => ({
  "@context": "https://schema.org/",
  "@type": "WebSite",
  name: "Karleen Roy",
  url: siteUrl,
});

export const WebsiteSchema = ({ siteUrl }: { siteUrl: string }) => {
  return (
    <script
      key={`schema-website`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(websiteSchema(siteUrl)),
      }}
    />
  );
};
