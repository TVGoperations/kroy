import React from "react";

import { TFigure } from "types";

interface Props {
  content: {
    images: Array<TFigure>;
  };
}

const Carousel: React.FC<Props> = ({ content }) => {
  const { images } = content;
  return (
    <section className="section">
      <div>
        {images.map((i) => (
          <div key={i._key}>
            <img src="" alt={i.alt} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Carousel;
