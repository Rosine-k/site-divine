import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Grid } from "swiper/modules";
import Lightbox from "yet-another-react-lightbox";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/grid";
import "yet-another-react-lightbox/styles.css";


// images
import photo1 from "../../assets/galerie/photo1.jpg";
import photo2 from "../../assets/galerie/photo2.jpg";
import photo3 from "../../assets/galerie/photo3.jpg";
import photo4 from "../../assets/galerie/photo4.jpg";
import photo5 from "../../assets/galerie/photo5.jpg";
import photo6 from "../../assets/galerie/photo6.jpg";
import photo7 from "../../assets/galerie/photo7.jpg";
import photo8 from "../../assets/galerie/photo8.jpg";
import photo9 from "../../assets/galerie/photo9.jpg";
import photo10 from "../../assets/galerie/photo10.jpg";
import photo11 from "../../assets/galerie/photo11.jpg";
import photo12 from "../../assets/galerie/photo12.jpg";
import photo13 from "../../assets/galerie/photo13.jpg";
import photo14 from "../../assets/galerie/photo14.jpg";
import photo15 from "../../assets/galerie/photo15.jpg";
import photo16 from "../../assets/galerie/photo16.jpg";

const images = [
  photo1, photo2, photo3, photo4, photo5,
  photo6, photo7, photo8, photo9, photo10, 
  photo11, photo12, photo13, photo14, photo15, 
  photo16
];

export default function Galerie() {
  const [index, setIndex] = useState(-1);

  return (
    <section className="galerie-section">

      <Swiper
        modules={[Navigation, Grid]}
        navigation
        spaceBetween={20}
        slidesPerView={4}
        grid={{
          rows: 2,
          fill: "row",
        }}
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
