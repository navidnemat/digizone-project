'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FiArrowLeft } from "react-icons/fi";

interface CountdownProps {
    targetDate: string; // مثلاً "2025-07-15T23:59:59"
}

const Timer: React.FC<CountdownProps> = ({ targetDate }) => {
    const calculateTimeLeft = () => {
        const difference = +new Date(targetDate) - +new Date();
        let timeLeft = {
            hours: 0,
            minutes: 0,
            seconds: 0
        };

        if (difference > 0) {
            timeLeft = {
                hours: Math.floor(difference / (1000 * 60 * 60)),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const timeBox = (value: number, label?: string) => (
        <div className='flex flex-col gap-3'>
            <div className="flex flex-col items-center bg-transparent lg:bg-white  p-2.5 lg:p-4 rounded-2xl lg:shadow-md w-10 lg:w-16">
                <div className="lg:text-2xl text-3xl font-bold text-[#25E2AD] lg:text-slate-800 vazir-num">
                    {value.toString().padStart(2, '0')}
                </div>
            </div>
        </div>
    );

    return (
        <div className="flex flex-col-reverse lg:flex-col gap-2 lg:w-auto w-full">
            <div className="flex items-center rounded-xl lg:p-7 right-10 lg:bg-[#25E2AD]">
                <div className='flex gap-2 items-center flex-row-reverse pr-2'>
                    {timeBox(timeLeft.hours)}
                    <span className='text-3xl text-[#25E2AD] lg:text-white'>:</span>
                    {timeBox(timeLeft.minutes)}
                    <span className='text-3xl text-[#25E2AD] lg:text-white'>:</span>
                    {timeBox(timeLeft.seconds)}
                </div>
            </div>
            <div className='flex flex-col gap-6 lg:items-center font-bold rounded-xl lg:bg-radial from-[#00C897] to-[#00A47C] lg:p-6'>
                <img src="/images/amazingOffer.png" className='hidden lg:inline max-h-[70px]'/>
                <span className='block lg:hidden estedadBold text-xl lg:text-2xl'>پیشهنهاد شگفت انگیز هفته</span>
                <span className='hidden lg:block text-[#EAFFF7] text-5xl'>%</span>
                <Link href={''} className='hidden lg:flex items-center gap-1.5 text-[#EAFFF7] transition-all duration-200 hover:opacity-85 hover:[&_svg]:-translate-x-1'>
                    <span>مشاهده همه</span>
                    <FiArrowLeft size={22} className='transition-all duration-200'/>
                </Link>
            </div>
        </div>
    );
};

export default Timer;
