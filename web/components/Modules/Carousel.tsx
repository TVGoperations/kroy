import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import { Photo } from "components/Photo";

import { TFigure } from "types";

interface Props {
  content: {
    images: Array<TFigure>;
  };
}

const Carousel: React.FC<Props> = ({ content }) => {
  const { images } = content;

  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    slidesPerView: 3,
    mode: "snap",
    spacing: 0,
    centered: true,
    loop: true,
    controls: true,
  });

  return (
    <section className="section section--gallery">
      <div ref={sliderRef} className="keen-slider gallery">
        {images.map((img) => (
          <Photo photo={img} key={img._key} className="keen-slider__slide gallery__slide" />
        ))}
      </div>
    </section>
  );
};

export default Carousel;
