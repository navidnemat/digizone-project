'use client'

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';

import { FreeMode, Pagination } from 'swiper/modules';

import ProductItem from './productItem';


export default function SimilarProductSlider() {
  return (
    <div className=" overflow-hidden md:pl-2.5 md:pr-1">

      <Swiper
        slidesPerView={3}
        spaceBetween={0}
        freeMode
        modules={[FreeMode, Pagination]}
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
        }}
        className="mySwiper w-full !overflow-visible"
        breakpoints={{
          360: {
            slidesPerView: 2,
            spaceBetween: 0,
            pagination: { el: ".swiper-pagination", clickable: true }
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 0,
            pagination: { el: ".swiper-pagination", clickable: true }
          },
          940: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          1300: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
        }}
      >
        <SwiperSlide>
          <ProductItem />
        </SwiperSlide>
        <SwiperSlide>
          <ProductItem />
        </SwiperSlide>
        <SwiperSlide>
          <ProductItem />
        </SwiperSlide>
        <SwiperSlide>
          <ProductItem />
        </SwiperSlide>
        <SwiperSlide>
          <ProductItem />
        </SwiperSlide>
        <SwiperSlide>
          <ProductItem />
        </SwiperSlide>

        <div className="swiper-pagination block md:hidden"></div>
      </Swiper>
    </div>
  );
}
