import React from "react";
import Head from "next/head";
import { m } from "framer-motion";

import Header from "components/Header";
import PreviewAlert from "components/PreviewAlert";

import { buildSrc } from "lib/sanity";
import { WebsiteSchema } from "lib/util/schema";

import { TLayout } from "types";

const duration = 0;

const variants = {
  initial: {
    opacity: 1,
  },
  enter: {
    opacity: 1,
    transition: {
      duration: duration,
      delay: 0,
      ease: "linear",
      when: "beforeChildren",
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: duration, ease: "linear", when: "beforeChildren" },
  },
};

const Layout: React.FC<TLayout> = ({ site, page, children, navItems, preview = false }) => {
  const siteUrl = site.canonicalUrl;
  const siteTitle = site.seo?.siteTitle;
  const metaTitle = page.seo?.metaTitle || site.seo?.metaTitle;
  const metaDesc = page.seo?.metaDesc || site.seo?.metaDesc;
  const shareTitle = page.seo?.shareTitle || site.seo?.shareTitle;
  const shareDesc = page.seo?.shareDesc || site.seo?.shareDesc;
  const shareGraphic = page.seo?.shareGraphic || site.seo?.shareGraphic;

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="icon" href="/images/favicon.png" />
        <link rel="mask-icon" href="/images/favicon.png" color="#000000" />
        <link rel="apple-touch-icon" href="/images/favicon.png" />
        <link rel="preconnect" href="https://cdn.sanity.io" />

        {siteUrl && <link rel="canonical" href={siteUrl} />}

        <title>{metaTitle}</title>
        {metaDesc && <meta name="description" content={metaDesc} />}
        {shareTitle && (
          <>
            <meta property="og:title" content={shareTitle} />
            <meta name="twitter:title" content={shareTitle} />
          </>
        )}
        {shareDesc && (
          <>
            <meta property="og:description" content={shareDesc} />
            <meta name="twitter:description" content={shareDesc} />
          </>
        )}
        {shareGraphic && (
          <>
            <meta property="og:image" content={buildSrc(shareGraphic, 1200, 630, 75, null, "top")} />
            <meta name="twitter:image" content={buildSrc(shareGraphic, 1200, 630, 75, null, "top")} />
          </>
        )}
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        {siteTitle && <meta name="og:site_name" content={siteTitle} />}
        {siteUrl && <WebsiteSchema siteUrl={siteUrl} />}
      </Head>

      <m.div initial="initial" animate="enter" exit="exit" variants={variants}>
        <Header navItems={navItems} />
        <main>{children}</main>
        {preview ? <PreviewAlert /> : null}
        <footer></footer>
      </m.div>
    </>
  );
};

export default Layout;
