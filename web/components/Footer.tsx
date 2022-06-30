import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import { SVG } from "components/SVG";

import { IFooter } from "types";

const credits = [
  {
    name: "Ben Klein",
    role: "VIDEO BY",
    url: "http://www.benklein.biz/",
  },
  {
    name: "Abbr. Projects",
    role: "SITE DESIGNED BY",
    url: "https://abbrprojects.com/",
  },
  {
    name: "Aaron Cohen",
    role: "SITE DEVELOPED BY",
    url: "https://www.avc.dev/",
  },
];

const Footer: React.FC<IFooter> = ({ backgroundColor, quotes, instagram }) => {
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      slides: {
        perView: 1,
        spacing: 0,
      },
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            if (slider) slider.next();
          }, 7000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <footer className="footer" style={{ backgroundColor: backgroundColor?.value || "#FFF" }}>
      {instagram && (
        <p className="footer__instagram t-wremena">
          <span>{"INSTAGRAM "}</span>
          <a href={instagram.url} target="_blank" rel="noopener noreferrer">
            {instagram.displayName}
          </a>
        </p>
      )}

      <div ref={sliderRef} className="keen-slider footer__quotes">
        {[...quotes, ...quotes].map((q, idx) => (
          <div key={idx} className="keen-slider__slide footer__quote">
            <p className="t-wremena">
              {`“${q.quoteText}”`} — {q.quoteAttribution}
            </p>
          </div>
        ))}
      </div>

      <SVG.Monogram className="footer__monogramMobile" />

      <div className="footer__credits">
        <p className={"t-wremena"}>Credits</p>
        <ul>
          {credits.map((c, idx) => (
            <li key={idx}>
              <span className="t-faris">{c.role}</span>
              &nbsp;
              <a href={c.url} className={"t-wremena"} title={c.name}>
                {c.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="footer__monogramDesktop">
        <SVG.Monogram />
        <SVG.Monogram />
      </div>
    </footer>
  );
};

export default Footer;
