'use client'

import { useState } from 'react';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";

export default function ProductGallery() {
    const [isOpen, setIsOpen] = useState(false);
    const [index, setIndex] = useState(0);

    const images = [
        '/images/surface1.png',
        '/images/surface2.png',
        '/images/surface3.png',
        '/images/surface4.png',
        '/images/surface5.png',
        '/images/surface1.png',
    ];

    const visibleCount = 4;
    const hiddenCount = images.length - visibleCount;

    return (
        <div className="w-full min-w-[342px] lg:min-w-[400px] min-h-[422px] flex flex-col justify-between items-center rounded-2xl shadow-md p-6 bg-[#DFE8E4] cursor-pointer">
            {/* عکس اصلی */}
            <div className='flex items-center justify-center h-[310px] mb-4 w-full'>
                <div className="">
                    <img
                        src={images[index]}
                        alt="product"
                        className="w-full object-cover rounded-lg max-w-[300px]"
                        onClick={() => setIsOpen(true)}
                    />
                </div>
            </div>


            {/* Thumbnails */}
            <div className="grid grid-cols-5 gap-2">
                {images.slice(0, visibleCount).map((src, i) => (
                    <div
                        onClick={() => {
                            setIndex(i);
                        }}
                        key={i}
                        className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-14 lg:h-14 relative rounded-md p-3 cursor-pointer overflow-hidden ${i === index ? 'ring-2 ring-[#00C897]' : 'opacity-70 hover:opacity-100'}`}
                    >
                        <img
                            src={src}
                            alt={`thumb-${i}`}
                            className='object-cover w-full h-full'
                        />
                        <div className='absolute inset-0 bg-black/20'></div>
                    </div>
                ))}

                {hiddenCount > 0 && (
                    <div
                        onClick={() => {
                            setIndex(visibleCount);
                            setIsOpen(true);
                        }}
                        className="group relative w-12 h-12 sm:w-14 sm:h-14 lg:w-14 lg:h-14 flex items-center justify-center rounded-md overflow-hidden cursor-pointer font-bold text-gray-700 plusjs"
                    >
                        +{hiddenCount}
                        <div className='group-hover:opacity-100 absolute inset-0 bg-black/20 opacity-80'></div>
                    </div>
                )}
            </div>

            {/* Lightbox */}
            <Lightbox
                open={isOpen}
                close={() => setIsOpen(false)}
                index={index}
                slides={images.map((src) => ({ src }))}
                plugins={[Thumbnails]}
                thumbnails={{ border: 0, padding: 4 }}
                toolbar={{ buttons: ["close"] }}
            />
        </div>
    );
}