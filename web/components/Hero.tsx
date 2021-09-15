import React from "react";
import Link from "next/link";
import { m } from "framer-motion";
import cx from "classnames";

import { IHero } from "types";

const variants = {
  container: {
    open: {
      transition: { staggerChildren: 0.01, delayChildren: 0.1, when: "afterChildren" },
    },
    closed: {
      transition: { staggerChildren: 0.01, when: "beforeChildren", staggerDirection: -1 },
    },
  },
  items: {
    open: {
      y: 0,
      opacity: 1,
    },
    closed: {
      y: 15,
      opacity: 0,
    },
  },
};

const Hero: React.FC<IHero> = ({ video, backgroundColor, navItems }) => {
  const [navOpen, setNavOpen] = React.useState(false);

  const handleClick = React.useCallback((e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    if (e.currentTarget.hash.startsWith("#")) {
      const destination = document.querySelector(e.currentTarget.hash);

      if (destination) {
        if (navOpen) {
          setNavOpen(false);
          const t = setTimeout(() => {
            destination.scrollIntoView({
              behavior: "smooth",
            });
            clearTimeout(t);
          }, 250);
        } else {
          destination.scrollIntoView({
            behavior: "smooth",
          });
        }
      }
    }
  }, []);

  return (
    <section className={`section section--hero`} style={{ backgroundColor: backgroundColor?.value || "#FFF" }}>
      <header className="header t-wremena t-light">
        <Link href={{ pathname: "/" }} shallow={true}>
          <h1>Karleen Roy</h1>
        </Link>

        <menu className="nav__desktop">
          <nav>
            {navItems.map((i, idx) => (
              <React.Fragment key={i.id}>
                <a href={`/#${i.id}`} title={i.title} onClick={handleClick}>
                  {i.title}
                </a>

                {idx !== navItems.length - 1 ? <span>{", "}</span> : null}
              </React.Fragment>
            ))}
          </nav>
        </menu>

        <menu className={cx("nav__mobile")}>
          <button onClick={() => setNavOpen(!navOpen)}>{navOpen ? "Close" : "Menu"}</button>
          <m.nav variants={variants.container} animate={navOpen ? "open" : "closed"} initial={false}>
            {navItems.map((i) => (
              <m.a href={`/#${i.id}`} title={i.title} onClick={handleClick} variants={variants.items} key={i.id}>
                {i.title}
              </m.a>
            ))}
          </m.nav>
        </menu>
      </header>
      <video autoPlay muted={true} loop={true}>
        <source src={video} type="video/mp4" />
      </video>
    </section>
  );
};

export default Hero;
