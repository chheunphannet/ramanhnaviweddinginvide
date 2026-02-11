import React from "react";
import Reveal from "../components/Reveal";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/virtual";

import { Navigation, Pagination, Virtual } from "swiper/modules";

const WeddingScrollGallery = () => {
  const images = [
    "IMG_4295.webp",
    "IMG_4296.webp",
    "IMG_4297.webp",
    "IMG_4300.webp",
    "IMG_4302.webp",
    "IMG_4303.webp",
    "IMG_4304.webp",
    "IMG_4305.webp",
    "IMG_4306.webp",
    "IMG_4308.webp",
    "IMG_4311.webp",
    "IMG_4312.webp",
    "IMG_4313.webp",
    "IMG_4314.webp",
    "IMG_4316.webp",
    "IMG_4317.webp",
    "IMG_4318.webp",
    "IMG_4319.webp",
    "IMG_4323.webp",
    "IMG_4324.webp",
    "IMG_4327.webp",
    "IMG_4328.webp",
    "IMG_4329.webp",
    "IMG_4331.webp",
    "IMG_4332.webp",
    "IMG_4334.webp",
    "IMG_4336.webp",
    "IMG_4337.webp",
    "IMG_4339.webp",
    "IMG_4340.webp",
    "IMG_4342.webp",
    "IMG_4344.webp",
  ];

  const getImagePath = (filename) => `/images/${filename}`;

  return (
    <Reveal className="w-full py-6">
      <div className="max-w-7xl mx-auto px-4" style={{ textAlign: "center" }}>
        <h2
          className="text-2xl md:text-4xl font-bold text-center mb-6 text-yellow-600"
          style={{
            fontFamily: "Kdam Thmor Pro",
            fontSize: "large",
            fontWeight: "bold",
          }}
        >
          កំរងរូបភាពអាពាហ៍ពិពាហ៍របស់យើង
        </h2>
        <p
          className="font-bold text-center mb-6 text-yellow-600"
          style={{
            marginBottom: "20px",
            fontFamily: "Moulpali",
            fontSize: "small",
          }}
        >
          <span className="material-symbols-outlined">location_on</span>
          ប្រាសាទអង្គរវត្ត
        </p>

        <Swiper
          modules={[Navigation, Pagination, Virtual]} // Enable Virtual Mode
          spaceBetween={15}
          slidesPerView={1} // Default Mobile
          virtual // Turn on virtualization
          navigation={true}
          pagination={{ clickable: true, dynamicBullets: true }}
          className="mySwiper"
          style={{ paddingBottom: "30px" }}
        >
          {images.map((img, index) => (
            <SwiperSlide
              key={img}
              virtualIndex={index}
              className="rounded-lg overflow-hidden"
            >
              <div className="relative w-full bg-gray-200 flex items-center justify-center min-h-[60vh]">
                <img
                  src={getImagePath(img)}
                  alt={`Wedding ${index}`}
                  loading="lazy"
                  decoding="async"
                  className="max-h-[70vh] w-auto object-contain"
                  style={{ contentVisibility: "auto" }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Reveal>
  );
};

export default WeddingScrollGallery;
