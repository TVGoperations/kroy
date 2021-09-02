import type { AppProps } from "next/app";
import React, { useState, useEffect } from "react";
import Router from "next/router";
import { LazyMotion, domAnimation, AnimatePresence } from "framer-motion";

import { isBrowser } from "lib/util";

import "styles/app.scss";

function MyApp({ Component, pageProps, router }: AppProps) {
  const [isLoading, setLoading] = useState(false);

  // The scroll location on the page is not restored on history changes
  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, [router]);

  // Trigger our loading class
  useEffect(() => {
    if (isBrowser) {
      document.documentElement.classList.toggle("is-loading", isLoading);
    }
  }, [isLoading]);

  // Setup Next router events
  useEffect(() => {
    Router.events.on("routeChangeStart", (url) => {
      // Bail if we're just changing a URL parameter
      if (url.indexOf("?") > -1 && url.split("?")[0] === router.asPath.split("?")[0]) return;

      // Otherwise, start loading
      setLoading(true);
    });

    Router.events.on("routeChangeComplete", () => {
      setTimeout(() => setLoading(false), 400); // accounts for page transition
    });

    Router.events.on("routeChangeError", () => {
      setLoading(false);
    });
  }, []);

  // intelligently add focus states if keyboard is used
  const handleFirstTab = (event) => {
    if (event.keyCode === 9) {
      if (isBrowser) {
        document.body.classList.add("is-tabbing");
        window.removeEventListener("keydown", handleFirstTab);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleFirstTab);
    return () => {
      window.removeEventListener("keydown", handleFirstTab);
    };
  }, []);

  return (
    <LazyMotion features={domAnimation}>
      <AnimatePresence
        exitBeforeEnter
        onExitComplete={() => {
          window.scrollTo(0, 0);
          document.body.classList.remove("overflow-hidden");
        }}
      >
        <Component key={router.asPath.split("?")[0]} {...pageProps} />
      </AnimatePresence>
    </LazyMotion>
  );
}

export default MyApp;
