import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-creative";
import "../styles/Slider.css";

const Slider = ({ srcs }) => {
  return (
    <Swiper
      effect="creative"
      loop={true}
      modules={[Autoplay, EffectCreative]}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      speed={5000}
      creativeEffect={{
        prev: {
          shadow: true,
          translate: [0, 0, -400],
        },
        next: {
          translate: ["100%", 0, 0],
        },
      }}
    >
      {srcs.map((src, index) => (
        <SwiperSlide key={index}>
          <img src={src} alt="" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
