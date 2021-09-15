import React from "react";
import { buildSrc } from "lib/sanity";

import { TSocialProfile, TFigure } from "types";

const personSchema = (image: TFigure, socialProfiles: Array<TSocialProfile>, siteUrl: string) => {
  const sameAs = [...socialProfiles.map((p) => p.url), "https://en.wikipedia.org/wiki/Denzel_Curry", siteUrl];
  return {
    "@context": "https://schema.org/",
    "@type": "Person",
    name: "Denzel Curry",
    url: "https://www.denzelcurry.com",
    image: buildSrc(image, 800, null, 80, "jpg"),
    sameAs: sameAs,
  };
};

export const PersonSchema = ({
  image,
  socialProfiles,
  siteUrl,
}: {
  image: TFigure;
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
