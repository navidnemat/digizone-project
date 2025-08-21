'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BiHomeAlt } from "react-icons/bi";
import { MdOutlineShoppingBag } from "react-icons/md";
import { TbCategoryPlus } from "react-icons/tb";
import { LuSearch } from "react-icons/lu";

export default function MobileFooter() {

    const pathName = usePathname();

    return (
        <div className="block lg:hidden fixed w-full z-40 bottom-0 left-0 bg-white shadow-[0_0_5px_rgba(0,0,0,0.13)] py-1.5">
            <div className="w-full mx-auto px-8">
                <div className="flex items-center justify-around w-full gap-8">
                    <Link href={'/sddrh'} className={`${"/sdds" === pathName ? 'text-[#00A47C]' : 'text-[#445D54]'} flex flex-col items-center gap-1`}>
                        <LuSearch size={22}/>
                        <span className="text-[10px]">جستجو</span>
                    </Link>
                    <Link href={'/sfdv'} className={`${"/sfdv" === pathName ? 'text-[#00A47C]' : 'text-[#445D54]'} flex flex-col items-center gap-1`}>
                        <TbCategoryPlus size={22}/>
                        <span className="text-[10px]">دسته‌بندی ها</span>
                    </Link>
                    <Link href={'/dsddw'} className={`${"/dsddw" === pathName ? 'text-[#00A47C]' : 'text-[#445D54]'} flex flex-col items-center gap-1`}>
                        <MdOutlineShoppingBag size={22}/>
                        <span className="text-[10px]">سبدخرید</span>
                    </Link>
                    <Link href={'/'} className={`${"/" === pathName ? 'text-[#00A47C]' : 'text-[#445D54]'} flex flex-col items-center gap-1`}>
                        <BiHomeAlt size={22}/>
                        <span className="text-[10px]">فروشگاه</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}