import React from "react";
import Link from "next/link";

import { TNavItem } from "types";

interface Props {
  navItems: Array<TNavItem>;
}

const Header: React.FC<Props> = ({ navItems }) => {
  const handleClick = React.useCallback((e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (e.currentTarget.hash.startsWith("#")) {
      e.preventDefault();
      const destination = document.querySelector(e.currentTarget.hash);
      if (destination) {
        destination.scrollIntoView({
          behavior: "smooth",
        });
      }
    }
  }, []);

  return (
    <header className="header">
      <h1>Karleen Roy</h1>
      <nav>
        {navItems.map((i, idx) => (
          <Link href={`/#${i.id}`} key={i.id}>
            <React.Fragment>
              <a title={i.title} onClick={handleClick}>
                {i.title}
              </a>
              {idx !== navItems.length - 1 ? <span>{","}</span> : null}
            </React.Fragment>
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
