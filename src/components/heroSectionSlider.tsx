'use client'

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import Link from 'next/link';
import { FiArrowLeft } from "react-icons/fi";

export default function HeroSectionSlider() {
    return (
        <div className="w-full overflow-hidden md:pl-2.5 md:pr-1">
            <Swiper
                slidesPerView={1}
                spaceBetween={15}
                freeMode
                modules={[Pagination]}
                pagination={{
                    el: '.swiper-pagination',
                    clickable: true,
                }}
                className="mySwiper w-full !overflow-visible relative"
            >
                <SwiperSlide className=''>
                    <div className="rounded-lg relative bg-gradient-to-r from-[#63F2C5] to-[#00C897] !overflow-hidden flex items-center flex-col gap-3 z-5 px-8 py-4 pb-5 h-[320px]">
                        <img src="/images/surfaceBanner.png" className='absolute -bottom-[140px] -right-[120px] max-w-[390px]' width={500} height={500} />
                        <div className="w-full flex flex-col items-end justify-between h-full gap-4 lg:gap-21.5 z-10">
                            <div>
                                <span className="text-[#005545] text-[23px] lg:text-[38px] estedadBold">انتخابی خاص با قیمتی خاص</span>
                                <div className="flex flex-col self-end text-end plusjs gap-1 mt-3">
                                    <h2 className="text-[#005545] text-lg lg:text-2xl">Microsoft Surface Laptop Go</h2>
                                    <span className="text-[#005545] text-xs lg:text-md">Core i5 | 8G RAM | 256G SSD | 14h</span>
                                </div>
                            </div>

                            <div className="flex justify-end gap-3  w-full estedadMedium">
                                <Link href={''} className="bg-white whitespace-nowrap rounded-full px-6 py-1.5 flex items-center gap-1.5 text-[#005545]">
                                    <span>مشاهده و خرید</span>
                                    <FiArrowLeft size={22} />
                                </Link>
                            </div>
                        </div>

                    </div>
                </SwiperSlide>
                <SwiperSlide className=''>
                    <Link href={''} className="w-full relative rounded-lg py-5 px-3 bg-gradient-to-r from-[#4BB6DB] to-[#77CEE9] flex flex-col h-[320px]">
                        <div className="flex flex-col gap-1 self-start pt-3">
                            <span className="text-[#204F6A] text-[25px] estedadBold">از دنیای آنلاین جا نمونی</span>
                            <h2 className="text-[#1C5F82] text-lg lg:text-xl">معرفی بهترین مودم روترهای داخل ایران</h2>
                        </div>

                        <img src="/images/wifiRouter.png" className='absolute bottom-3 left-0 max-w-[200px]' />

                    </Link>
                </SwiperSlide>
                <SwiperSlide className=''>
                    <div className="w-full relative rounded-lg pt-4.5 bg-gradient-to-r from-[#375BFA] to-[#799EFF] flex flex-col items-center justify-between h-[320px] overflow-hidden">
                        <div className="flex flex-col p-3 gap-8">
                            <span className="text-[#EFF3FF] text-[22px] lg:text-[26px]">با دیجی زون مغازت همیشه پره</span>
                            <div className="flex items-center justify-end">
                                <Link href={''} className="bg-white rounded-full px-6 py-1.5 text-sm whitespace-nowrap lg:text-md flex items-center gap-1.5 text-[#1C238C]">
                                    <span>همکاری در فروش</span>
                                    <FiArrowLeft size={22} className="transition-all duration-200" />
                                </Link>
                            </div>

                        </div>

                        <img src="/images/mobileBanner.png" className='-rotate-90 absolute -bottom-2' />

                    </div>
                </SwiperSlide>

                <div className="flex self-center md:hidden items-center justify-center gap-2 mt-2">
                    <div className="swiper-pagination mt-2"></div>
                </div>

            </Swiper>
        </div>
    )
}