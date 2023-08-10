import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCreative,
  Autoplay,
  Navigation,
  EffectFade,
} from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/effect-fade";
import "../styles/Slider.css";

const Slider = ({ srcs, overlay, promises, children }) => {
  return (
    <>
      {overlay && (
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
      )}

      {promises && (
        <Swiper
          effect="fade"
          navigation={true}
          modules={[Navigation, EffectFade]}
          spaceBetween={1}
          slidesPerView={1}
        >
          {children}
        </Swiper>
      )}
    </>
  );
};

export default Slider;
