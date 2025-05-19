import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { FaStar, FaRegStar } from "react-icons/fa";
import testimonialSlides from "../data/testimonialSlides.json";

function TestimonialSlider() {
  return (
    <div className="w-full px-4 lg:px-0 py-8 md:py-14 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        What Our Users Say
      </h2>
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
        className="h-72 md:h-80"
      >
        {testimonialSlides.map((item) => (
          <SwiperSlide key={item.id}>
            <div
              className="w-full h-full flex flex-col justify-center items-center text-white px-6 text-center rounded-xl transition duration-500"
              style={{ backgroundColor: item.bgColor }}
            >
              <p className="text-lg md:text-xl font-medium mb-4 leading-relaxed max-w-2xl">
                “{item.message}”
              </p>

              {/* Star Rating */}
              <div className="flex gap-1 text-yellow-400 mb-2">
                {Array.from({ length: 5 }).map((_, index) =>
                  index < item.rating ? (
                    <FaStar key={index} className="text-sm md:text-base" />
                  ) : (
                    <FaRegStar key={index} className="text-sm md:text-base" />
                  )
                )}
              </div>

              <div className="text-sm md:text-base font-semibold">
                — {item.name}, {item.location}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default TestimonialSlider;
