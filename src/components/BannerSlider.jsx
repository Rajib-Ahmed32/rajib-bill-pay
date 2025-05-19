import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import bannerSlides from "../data/bannerSlides.json";

function BannerSlider() {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      loop={true}
      pagination={{ clickable: true }}
      autoplay={{
        delay: 6000,
        disableOnInteraction: false,
      }}
      className="w-full max-w-6xl h-72 md:h-96"
    >
      {bannerSlides.map((item, i) => (
        <SwiperSlide key={i}>
          <div className="relative w-full h-full rounded-sm overflow-hidden">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col  justify-center items-center lg:items-start p-6 text-white">
              <div className="">
                <h2 className="text-2xl text-[#f2f3f8] font-bold">
                  {item.title}
                </h2>
                <p className="mt-2 text-[#f2f3f8]">{item.description}</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default BannerSlider;
