import React from "react";
import { IFooter } from "types";

const Footer: React.FC<IFooter> = ({ backgroundColor, quotes }) => {
  return <footer className="footer" style={{ backgroundColor: backgroundColor?.value || "#FFF" }}></footer>;
};

export default Footer;
