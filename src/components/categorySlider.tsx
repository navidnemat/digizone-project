'use client'

import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import CategoryItem from './categoryItem';

interface props {
    nextBtn: string
    prevBtn: string
}

export default function CategorySlider({ nextBtn, prevBtn }: props) {
    return (
        <div>
            <Swiper
                slidesPerView={4}
                spaceBetween={0}
                navigation={{
                    nextEl: nextBtn,
                    prevEl: prevBtn
                }}
                pagination={{
                    el: ".swiper-pagination",
                    clickable: true,
                }}
                breakpoints={{
                    360: {
                        slidesPerView: 2,
                        spaceBetween: 0,
                        pagination: { el: ".swiper-pagination", clickable: true }
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 0,
                        pagination: { el: ".swiper-pagination", clickable: true }
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 0,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 0,
                    },
                }}
                modules={[Navigation, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <CategoryItem title='کنسول بازی' img='/images/ps4.png' />
                </SwiperSlide>
                <SwiperSlide>
                    <CategoryItem title='تلفن همراه' img='/images/mobilecategory.png' />
                </SwiperSlide>
                <SwiperSlide>
                    <CategoryItem title='ساعت هوشمند' img='/images/smartwatchCategory.png' />
                </SwiperSlide>
                <SwiperSlide>
                    <CategoryItem title='هدفون و ایرپاد' img='/images/headphoneCategory.png' />
                </SwiperSlide>
                <SwiperSlide>
                    <CategoryItem title='تلفن همراه' img='/images/mobilecategory.png' />
                </SwiperSlide>
                <SwiperSlide>
                    <CategoryItem title='ساعت هوشمند' img='/images/smartwatchCategory.png' />
                </SwiperSlide>
                <SwiperSlide>
                    <CategoryItem title='هدفون و ایرپاد' img='/images/headphoneCategory.png' />
                </SwiperSlide>


                {/* 
                <SwiperSlide>
                    <Link href={''} className='rounded-lg bg-[#DFE8E4] flex flex-col items-center justify-center min-h-[220px] p-8 gap-5 transition-all duration-300 hover:shadow-lg hover:scale-105 mx-2 my-7'>
                        <div className='max-w-full overflow-hidden'>
                            <img src="/images/mobilecategory.png" className='w-full h-full object-cover min-h-[93px]' />
                        </div>
                        <h2 className='estedadMedium md:text-xl'>تلفن همراه</h2>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link href={''} className='rounded-lg bg-[#DFE8E4] flex flex-col items-center justify-center min-h-[220px] p-8 gap-5 transition-all duration-300 hover:shadow-lg hover:scale-105 mx-2 my-7'>
                        <div className='max-w-full overflow-hidden'>
                            <img src="/images/smartwatchCategory.png" className='w-full h-full object-cover min-h-[93px]' />
                        </div>
                        <h2 className='estedadMedium md:text-xl'>ساعت هوشمند</h2>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link href={''} className='rounded-lg bg-[#DFE8E4] flex flex-col items-center justify-center min-h-[220px] p-8 gap-5 transition-all duration-300 hover:shadow-lg hover:scale-105 mx-2 my-7'>
                        <div className='max-w-full overflow-hidden'>
                            <img src="/images/headphoneCategory.png" className='w-full h-full object-cover min-h-[93px]' />
                        </div>
                        <h2 className='estedadMedium md:text-xl'>هدفون و ایرپاد</h2>
                    </Link>
                </SwiperSlide> */}



                {/* <SwiperSlide>
                    <Link href={''} className='rounded-lg bg-[#DFE8E4] flex flex-col items-center p-8 gap-5 transition-all duration-300 hover:shadow-lg hover:scale-105 mx-2 my-7'>
                        <div>
                            <img src="/images/mobilecategory.png" className='max-h-[120px] lg:max-h-[190px] lg:min-h-[190px]' />
                        </div>
                        <h2 className='estedadMedium text-lg lg:text-xl'>تلفن همراه</h2>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link href={''} className='rounded-lg bg-[#DFE8E4] flex flex-col items-center p-8 gap-5 transition-all duration-300 hover:shadow-lg hover:scale-105 mx-2 my-7'>
                        <div>
                            <img src="/images/smartwatchCategory.png" className='max-h-[120px] lg:max-h-[190px] lg:min-h-[190px]' />
                        </div>
                        <h2 className='estedadMedium text-lg lg:text-xl'>ساعت هوشمند</h2>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link href={''} className='rounded-lg bg-[#DFE8E4] flex flex-col items-center p-8 gap-5 transition-all duration-300 hover:shadow-lg hover:scale-105 mx-2 my-7'>
                        <div>
                            <img src="/images/headphoneCategory.png" className='max-h-[120px] lg:max-h-[190px] lg:min-h-[190px]' />
                        </div>
                        <h2 className='estedadMedium text-lg lg:text-xl'>هدفون و ایرپاد</h2>
                    </Link>
                </SwiperSlide> */}

                <div className="swiper-pagination block md:hidden"></div>
            </Swiper>
        </div>
    );
}
