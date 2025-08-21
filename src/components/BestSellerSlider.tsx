'use client'

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
//import { formatNumberWithCommas } from "@/utils/number"

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';

import { FreeMode, Pagination } from 'swiper/modules';

// import { PiCpuLight } from "react-icons/pi";
// import { FaRegHardDrive } from "react-icons/fa6";
// import { MdScreenshotMonitor } from "react-icons/md";
// import { TbBasketX } from "react-icons/tb";
// import { TbBasketPlus } from "react-icons/tb";
// import Link from 'next/link';
import ProductItem from './productItem';


export default function BestSellerSlider() {
  return (
    <div className="w-full overflow-hidden md:pl-2.5 md:pr-1">
      <Swiper
        slidesPerView={3}
        spaceBetween={0}
        freeMode={true}
        modules={[FreeMode, Pagination]}
        className="mySwiper w-full !overflow-visible"
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
        }}
        breakpoints={{
          360: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
          940: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
          1300: {
            slidesPerView: 4,
            spaceBetween: 0,
          },
        }}
      >

        <SwiperSlide>
          <ProductItem />
        </SwiperSlide>
        <SwiperSlide className="">
          <ProductItem />
        </SwiperSlide>
        <SwiperSlide className="">
          <ProductItem />
        </SwiperSlide>
        <SwiperSlide className="">
          <ProductItem />
        </SwiperSlide>
        <SwiperSlide className="">
          <ProductItem />
        </SwiperSlide>
        <SwiperSlide className="">
          <ProductItem />
        </SwiperSlide>
        <SwiperSlide className="">
          <ProductItem />
        </SwiperSlide>
        <SwiperSlide className="">
          <ProductItem />
        </SwiperSlide>

        <div className="swiper-pagination block md:hidden"></div>

      </Swiper>

    </div>
  );
}
