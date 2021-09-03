import { GetStaticProps } from "next";
import groq from "groq";
import slugify from "slugify";

import Layout from "components/Layout";
import Hero from "components/Hero";
import Modules from "components/Modules";

import { THomePageData, TLayout } from "types";
import { getStaticPage } from "lib/sanity";

export default function Home({ data, preview }: { data: TLayout & THomePageData; preview: boolean }) {
  const { site, page } = data;
  const { modules } = page;

  const navItems = modules
    .filter((m) => !!m.heading)
    .map((m) => ({ id: slugify(m.heading.toLowerCase()), title: m.heading }));

  return (
    <Layout site={site} page={page} preview={preview} navItems={navItems}>
      <Hero />
      <Modules modules={modules} />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const data = await getStaticPage(
    groq`
    *[_id == "homePage"][0] {
      modules[] {
        ...,
        _type == "photoCarousel" => {
  				"heading": "gallery",
          images[] {
            ...,
            asset->
          }

	      }
      }
    }
  `,
    preview
  );

  return {
    props: {
      data,
      preview,
    },
  };
};
