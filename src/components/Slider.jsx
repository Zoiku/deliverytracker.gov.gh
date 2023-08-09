import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative, Autoplay, Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/effect-creative";
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
          navigation={true}
          modules={[Navigation]}
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
