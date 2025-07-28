import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Grid } from "swiper/modules";
import Lightbox from "yet-another-react-lightbox";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/grid";
import "yet-another-react-lightbox/styles.css";

export default function Galerie({ images }) {
  const [index, setIndex] = useState(-1);

  return (
    <section className="galerie-section">
      <Swiper
        modules={[Navigation, Grid]}
        navigation
        spaceBetween={20}
        slidesPerView={4}
        grid={{ rows: 2, fill: "row" }}
        className="galerie-swiper"
      >
        {images.map((img, i) => (
          <SwiperSlide key={i}>
            <div
              className="galerie-img-wrapper"
              onClick={() => setIndex(i)}
            >
              <img src={img} alt={`Photo ${i + 1}`} className="galerie-img" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        slides={images.map((src) => ({ src }))}
        index={index}
      />
    </section>
  );
}

