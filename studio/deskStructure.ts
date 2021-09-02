import S from "@sanity/desk-tool/structure-builder";
import { FiHome, FiSettings, FiGlobe } from "react-icons/fi";
import { CgDockBottom } from "react-icons/cg";
import { RiVideoFill } from "react-icons/ri";

export default () =>
  S.list()
    .title("Website")
    .items([
      S.listItem().title("Hero").child(S.editor().id("hero").schemaType("hero").documentId("hero")).icon(RiVideoFill),
      S.listItem()
        .title("Homepage Content")
        .child(S.editor().id("homePage").schemaType("homePage").documentId("homePage"))
        .icon(FiHome),
      S.listItem()
        .title("Footer")
        .child(S.editor().id("footer").schemaType("footer").documentId("footer"))
        .icon(CgDockBottom),
      S.listItem()
        .title("General Settings")
        .child(S.editor().id("settingsGeneral").schemaType("settingsGeneral").documentId("settingsGeneral"))
        .icon(FiSettings),
      S.listItem()
        .title("SEO Settings")
        .child(S.editor().id("settingsSeo").schemaType("settingsSeo").documentId("settingsSeo"))
        .icon(FiGlobe),

      // FILTER ALL
      ...S.documentTypeListItems().filter(() => false),
    ]);
