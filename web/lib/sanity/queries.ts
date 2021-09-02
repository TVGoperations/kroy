import groq from "groq";
import { getClient } from "./server";

const site = groq`
  "site": {
    "hero": *[_id == "hero"][0] {
        backgroundColor,
        video
      },
      "footer": *[_id == "footer"][0] {
        backgroundColor,
        quotes
      },
    "canonicalUrl": *[_type == "settingsGeneral"][0].canonicalUrl,
    "contactEmail": *[_type == "settingsGeneral"][0].contactEmail,
    "socialProfiles": *[_type == "settingsGeneral"][0].socialProfiles,
    "seo": *[_type == "settingsSeo"][0]{
      siteTitle,
      metaTitle,
      metaDesc,
      shareTitle,
      shareDesc,
      metaKeywords,
      shareGraphic,
    },
  }
`;

export async function getStaticPage(pageData: string, preview: boolean = false) {
  const query = groq`
    {
      "page": ${pageData},
      ${site},
    }
  `;

  return await getClient(preview).fetch(query);
}
