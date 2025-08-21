'use client'

import { useState } from "react";
import Link from "next/link";
import { categories } from "./category-data";
import { TbCategoryPlus } from "react-icons/tb";

interface Props {
    children: React.ReactNode;
}

export default function CategoryMenu({ children }: Props) {
    const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className="relative"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => {
                setIsOpen(false);
                setHoveredCategory(null);
            }}
        >
            <div className="flex items-center gap-1.5 cursor-pointer">
                {children}
            </div>

            {isOpen && (
                <div className="absolute top-full right-0 xl:w-[1200px] lg:w-[1000px] md:w-[700px] z-50">
                    <div className="bg-white shadow-2xl mt-10 border border-[#BFD0C8] rounded-xl">
                        <div className="max-w-[1676px] mx-auto px-10 py-6">
                            <div className="flex flex-col">
                                <div className="flex items-center gap-1.5 text-lg">
                                    <TbCategoryPlus size={28} />
                                    <span>دسته بندی محصولات</span>
                                </div>
                                <div className="flex justify-between mt-6">
                                    <div className="flex w-full">
                                        {/* ستون دسته‌بندی‌ها */}
                                        <div className="w-1/4 border-l border-[#719083]">
                                            {categories.map((cat) => (
                                                <Link
                                                    key={cat.name}
                                                    href={cat.href}
                                                    onMouseEnter={() => setHoveredCategory(cat.name)}
                                                    className="block p-2 hover:text-[#00C897] hover:underline underline-offset-8 cursor-pointer whitespace-nowrap"
                                                >
                                                    {cat.name}
                                                </Link>
                                            ))}
                                        </div>

                                        {/* ستون برندها */}
                                        <div className="w-2/4 flex flex-wrap flex-col max-h-[160px]">
                                            {hoveredCategory &&
                                                categories
                                                    .find((cat) => cat.name === hoveredCategory)!
                                                    .brands.map((brand) => (
                                                        <Link
                                                            key={brand.name}
                                                            href={brand.href}
                                                            className="py-2 px-8 flex hover:text-[#00C897] hover:underline underline-offset-8 cursor-pointer whitespace-nowrap"
                                                        >
                                                            {brand.name}
                                                        </Link>
                                                    ))}
                                        </div>
                                    </div>
                                    <div className="left-0">
                                        <img src="/images/macbook.png" width={327} height={250}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}