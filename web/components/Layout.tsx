import React from "react";
import Head from "next/head";
import { m } from "framer-motion";

import Footer from "components/Footer";
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
            <meta property="og:image" content={buildSrc(shareGraphic, 1200, 630, 75, null)} />
            <meta name="twitter:image" content={buildSrc(shareGraphic, 1200, 630, 75, null)} />
          </>
        )}
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        {siteTitle && <meta name="og:site_name" content={siteTitle} />}
        {siteUrl && <WebsiteSchema siteUrl={siteUrl} />}
      </Head>

      <m.div initial="initial" animate="enter" exit="exit" variants={variants}>
        <main>
          {children}
          <Footer backgroundColor={site.footer.backgroundColor} quotes={site.footer.quotes} />
        </main>
        {preview ? <PreviewAlert /> : null}
      </m.div>
    </>
  );
};

export default Layout;
