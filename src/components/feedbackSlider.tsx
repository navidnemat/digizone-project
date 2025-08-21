'use client'

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';

import { FreeMode, Pagination } from 'swiper/modules';

import FeedBackItem from './feedbackItem';


export default function FeedbackSlider() {
  return (
    <div className=" overflow-hidden md:pl-1 md:pr-1">

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
            slidesPerView: 1,
            spaceBetween: 0,
            pagination: { el: ".swiper-pagination", clickable: true }
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 0,
            pagination: { el: ".swiper-pagination", clickable: true }
          },
          940: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          1300: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
        }}
      >
        <SwiperSlide>
          <FeedBackItem name='نوید نعمتی' text='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ  و با استفاده از  طراحان گرافیک است   چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان' date='1404/04/10'/>
        </SwiperSlide>
        <SwiperSlide>
          <FeedBackItem name='حمیدرضا اسماعیل زاده' text='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ  و با استفاده از  طراحان گرافیک است   چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است   و برای شرایط فعلی تکنولوژی مورد نیاز' date='1404/04/10'/>
        </SwiperSlide>
<SwiperSlide>
          <FeedBackItem name='نوید نعمتی' text='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ  و با استفاده از  طراحان گرافیک است   چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان' date='1404/04/10'/>
        </SwiperSlide>
        <SwiperSlide>
          <FeedBackItem name='حمیدرضا اسماعیل زاده' text='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ  و با ' date='1404/04/10'/>
        </SwiperSlide>


        <div className="swiper-pagination block md:hidden"></div>
      </Swiper>
    </div>
  );
}
