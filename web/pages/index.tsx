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
  const { modules, hero } = page;

  const navItems = modules
    .filter((m) => !!m.heading)
    .map((m) => ({ id: slugify(m.heading.toLowerCase()), title: m.heading }));

  return (
    <Layout site={site} page={page} preview={preview} navItems={navItems}>
      <Hero video={hero.video} backgroundColor={hero.backgroundColor} navItems={navItems} />
      <Modules modules={modules} />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const data = await getStaticPage(
    groq`
    *[_id == "homePage"][0] {
      "hero":*[_id == "hero"][0] {
  			...,
      	"video": video.asset -> url
	    },
      modules[] {
        ...,
        _type == "photoCarousel" => {
          images[] {
            ...,
            asset->
          }
	      },
        _type == "textSection" => {
          image {
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
