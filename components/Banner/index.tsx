import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay} from "swiper";

// Import Swiper styles
import "swiper/css";
import styles from "./styles.module.css";

export const Banner = () => {
  return (
    <Swiper
      slidesPerView={1}
      className={styles.swiper}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      loop={true}
      modules={[Autoplay]}
    >
      <SwiperSlide className={styles.slide}>
        <img src="/temp/banner01.png" alt="" />
      </SwiperSlide>
      <SwiperSlide className={styles.slide}>
        <img src="/temp/banner01.png" alt="" />
      </SwiperSlide>
    </Swiper>
  );
};
