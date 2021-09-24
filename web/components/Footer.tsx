import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import { SVG } from "components/SVG";

import { IFooter } from "types";

const credits = [
  {
    name: "Ben Klein",
    role: "VIDEO BY",
    url: "https://www.google.com/",
  },
  {
    name: "Matteo Mobilio",
    role: "PHOTOGRAPHY BY",
    url: "https://www.google.com/",
  },
  {
    name: "Abbr. Projects",
    role: "SITE DESIGNED BY",
    url: "https://www.google.com/",
  },
  {
    name: "Aaron Cohen",
    role: "SITE DEVELOPED BY",
    url: "https://www.google.com/",
  },
];

const Footer: React.FC<IFooter> = ({ backgroundColor, quotes, instagram }) => {
  const timer = React.useRef<any>();
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    slidesPerView: 1,
    mode: "snap",
    spacing: 0,
    centered: true,
    loop: true,
    controls: true,
  });

  React.useEffect(() => {
    timer.current = setInterval(() => {
      slider.next();
    }, 7000);
    return () => {
      clearInterval(timer.current);
    };
  }, [slider]);

  return (
    <footer className="footer" style={{ backgroundColor: backgroundColor?.value || "#FFF" }}>
      {instagram && (
        <p className="footer__instagram t-mathis">
          <span>{"INSTAGRAM "}</span>
          <a href={instagram.url} target="_blank" rel="noopener noreferrer">
            {instagram.displayName}
          </a>
        </p>
      )}

      <div ref={sliderRef} className="keen-slider footer__quotes">
        {[...quotes, ...quotes].map((q, idx) => (
          <p className="keen-slider__slide footer__quote t-wremena" key={idx}>
            {`“${q.quoteText}”`} — {q.quoteAttribution}
          </p>
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
