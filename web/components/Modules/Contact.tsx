import React from "react";
import slugify from "slugify";

import { SVG } from "components/SVG";

import { TColor } from "types";
interface Props {
  content: {
    backgroundColor: TColor;
    heading: string;
    email: string;
  };
}

const Contact: React.FC<Props> = ({ content }) => {
  const { backgroundColor, heading, email } = content;
  return (
    <section
      id={slugify(heading.toLowerCase())}
      className="section section--contact"
      style={{ backgroundColor: backgroundColor?.value || "#FFF" }}
    >
      <div className="section__inner">
        <div className="section__heading t-mathis caps">
          <h2>{heading}</h2>
        </div>
        <div className="section__content t-wremena t-light">
          <SVG.Envelope />
          <a href={`mailto:${email.toLowerCase()}`} target="_blank">
            {email}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
