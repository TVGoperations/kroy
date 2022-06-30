import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import { Image } from "components/Image";

import { SanityKeyed, IFigure } from "types";

interface Props {
  content: {
    images: Array<SanityKeyed<IFigure>>;
  };
}

const Carousel: React.FC<Props> = ({ content }) => {
  const { images } = content;

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      slides: {
        perView: 1,
        origin: "center",
      },
      breakpoints: {
        "(min-width: 768px)": {
          slides: { perView: 2, origin: "center" },
        },
        "(min-width: 1300px)": {
          slides: { perView: 3, origin: "center" },
        },
      },
    },
    [
      (slider: any) => {
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
          }, 2000);
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
    <section className="section section--gallery">
      <div ref={sliderRef} className="keen-slider gallery">
        {images.map((img, idx) => (
          <div
            className="keen-slider__slide gallery__slide"
            key={img._key}
            onClick={(e) => {
              e.stopPropagation();
              instanceRef.current?.moveToIdx(idx);
            }}
          >
            <Image image={img} alt={img.alt} srcSizes={[300, 600, 1200, 1800]} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Carousel;
