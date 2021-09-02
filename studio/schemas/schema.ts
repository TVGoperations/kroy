import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

// DOCUMENTS
import settingsGeneral from "./documents/settingsGeneral";
import settingsSeo from "./documents/settingsSeo";
import hero from "./documents/hero";
import homePage from "./documents/homePage";
import footer from "./documents/footer";

import brand from "./objects/brand";
import figure from "./objects/figure";
import portableSimple from "./objects/portableSimple";
import socialProfile from "./objects/socialProfile";
import thirdPartyLink from "./objects/thirdPartyLink";
import quote from "./objects/quote";

import textSection from "./modules/textSection";
import photoCarousel from "./modules/photoCarousel";
import brandsSection from "./modules/brandsSection";
import linksSection from "./modules/linksSection";
import contactSection from "./modules/contactSection";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "kroy_01",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    figure,
    brand,
    homePage,
    photoCarousel,
    hero,
    brandsSection,
    portableSimple,
    contactSection,
    linksSection,
    settingsGeneral,
    settingsSeo,
    socialProfile,
    textSection,
    thirdPartyLink,
    quote,
    footer,
  ]),
});
