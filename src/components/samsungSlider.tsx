'use client'

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import Link from 'next/link';

interface props {
    pagination: string
}

export default function SamsungSlider({pagination} : props) {
    return (
        <div className="w-full overflow-hidden md:pl-2.5 md:pr-1">
            <Swiper
                slidesPerView={1}
                spaceBetween={15}
                freeMode
                modules={[Pagination]}
                pagination={{
                    el: pagination,
                    clickable: true,
                }}
                className="mySwiper w-full !overflow-visible relative"
            >
                <SwiperSlide className="!overflow-visible hover:z-20">
                    <Link href={''} className="rounded-xl flex flex-col justify-between bg-[#F5F8F6] h-[330px]">
                        <div className="flex flex-col self-end p-5">
                            <h3 className="plusjs max-w-[220px] text-end font-bold text-2xl text-[#303F3A]">Galaxy Watch 7 (Bluetooth 40mm)</h3>
                            <div className="flex items-center self-end mt-3">
                                <div className="w-7 h-7 rounded-full -ml-3 bg-[#445D54]"></div>
                                <div className="w-7 h-7 rounded-full bg-[#748DAE]"></div>
                            </div>
                        </div>
                        <img src="/images/galaxywatch.png" className="max-w-[220px] md:max-w-[250px]" />
                    </Link>
                </SwiperSlide>
                <SwiperSlide className="!overflow-visible hover:z-20">
                    <Link href={''} className="rounded-xl md:pt-8 flex flex-col md:flex-row justify-between items-center bg-[#F5F8F6] h-[330px]">
                        <div className="flex flex-col grow-1 p-5">
                            <h3 className="plusjs text-end self-end font-bold lg:leading-13 text-[#303F3A] text-2xl lg:text-4xl">Samsung Vision AI Smart TV</h3>
                            <div className="self-end text-[#212725] text-end mt-3 plusjs">
                                65” | 75” | 85” | 98”
                            </div>
                        </div>
                        <img src="/images/samsungTv.png" className="max-w-[260px] md:max-w-[300px] self-end  lg:max-w-[400px] left-0" />
                    </Link>
                </SwiperSlide>
                <SwiperSlide className="!overflow-visible hover:z-20">
                    <Link href={''} className="rounded-xl md:pt-8 flex flex-col md:flex-row justify-center md:justify-end items-center gap-3 md:gap-10 bg-[#F5F8F6] h-[330px]">
                        <div className="flex md:items-end items-center flex-col p-2 md:p-5">
                            <h3 className="plusjs md:text-end md:self-end font-bold leading-16 text-[#303F3A] text-3xl md:text-4xl">Galaxy Z Flip7</h3>
                            <div className="md:self-end text-[#212725]  md:mt-3 plusjs">
                                <img src="/images/galaxyAI.png" className="max-w-[150px]" />
                            </div>
                        </div>
                        <img src="/images/z-flip7.png" className="max-w-[200px] md:max-w-[250px] md:self-end md:ml-12" />
                    </Link>
                </SwiperSlide>
                <SwiperSlide className="!overflow-visible hover:z-20">
                    <Link href={''} className="rounded-xl flex flex-col gap-5 items-center p-5 bg-[#F5F8F6] h-[330px]">
                        <img src="/images/galaxybuds3.png" className="max-w-[140px]" />
                        <div className="flex flex-col items-center">
                            <h3 className="plusjs max-w-[220px] text-center text-xl text-[#303F3A]">Galaxy Buds3 Pro </h3>
                            <div className="flex items-center mt-3">
                                <div className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-[#75787B]"></div>
                            </div>
                        </div>
                    </Link>
                </SwiperSlide>

            </Swiper>
        </div>
    )
}