import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";

import { TNavItem } from "types";

interface Props {
  navItems: Array<TNavItem>;
}

const Scroller: React.FC<Props> = ({ children, navItems }) => {
  const anchors = navItems.map((n) => n.id);

  return (
    <main>
      <ReactFullpage
        navigation
        anchors={["#", ...anchors]}
        render={() => {
          return <ReactFullpage.Wrapper>{children}</ReactFullpage.Wrapper>;
        }}
      />
    </main>
  );
};

export default Scroller;
