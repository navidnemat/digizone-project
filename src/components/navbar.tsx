'use client';

import SearchBox from "./searchBox";
import { motion, useAnimation } from "framer-motion";
import { GoPerson } from "react-icons/go";
import { TbCategoryPlus } from "react-icons/tb";
import { FiPhone } from "react-icons/fi";
import CategoryMenu from "./categories";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";
import HamburgerButton from "./menuBtn";
import { IoClose } from "react-icons/io5";

// shadcn/ui
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet";

type NavItem = { title: string; link: string };

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const controls = useAnimation();
    const pathName = usePathname();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navs: NavItem[] = [
        { title: "صفحه اصلی", link: "/" },
        { title: "تماس با ما", link: "/dgs" },
        { title: "وبلاگ", link: "/dgds" },
        
    ];

    return (
        <header
            className={`fixed w-full z-40 transition-all duration-700 ${scrolled ? "pt-0 top-0 left-0 " : "pt-5 lg:pt-10"
                }`}
        >
            <div
                className={`max-w-[1676px] transition-all duration-700 mx-auto w-full  ${scrolled ? "xl:px-0 px-0" : "xl:px-10 px-4"
                    }`}
            >
                <div
                    className={`flex flex-col bg-white shadow-[0_0_4px_black]/14 transition-all duration-700 ${scrolled ? "p-3 lg:p-4 gap-2" : "rounded-xl p-5 lg:pb-3 gap-6"
                        }`}
                >
                    <div className="flex items-center justify-between">
                        {/* mobile  menu & sidebar */}
                        <div className="flex lg:hidden items-center">
                            <Sheet open={isOpen} onOpenChange={setIsOpen}>
                                <SheetTrigger asChild>
                                    <HamburgerButton isOpen={isOpen} />
                                </SheetTrigger>

                                <SheetContent side="right" className="w-[280px]">
                                    <div className="flex flex-col justify-between h-full">
                                        <div className="flex flex-col">
                                            <div className="flex items-center justify-between w-full p-4 pb-2">
                                                <SheetClose asChild>
                                                    <button>
                                                        <IoClose size={24} className="text-[#445D54]" />
                                                    </button>
                                                </SheetClose>
                                                <div className="">
                                                    <img src="/images/logo.png" alt="logo" width={58} height={42} />
                                                </div>
                                            </div>



                                            <nav className="flex flex-col gap-4 p-4 border-t border-[#e9e9e9] ">
                                                <div className="flex items-center gap-1.5 text-[#445D54]">
                                                    <TbCategoryPlus size={24} />
                                                    <span>دسته بندی محصولات</span>
                                                </div>
                                                {navs.map((item) => (
                                                    <Link
                                                        key={item.link}
                                                        href={item.link}
                                                        className={`text-base transition-colors ${item.link === pathName ? "text-[#25E2AD]" : "text-[#445D54]"
                                                            } hover:text-[#25E2AD]`}
                                                        onClick={() => setIsOpen(false)}
                                                    >
                                                        {item.title}
                                                    </Link>
                                                ))}

                                                <div className="rounded-full px-7 py-2 text-white flex items-center justify-center gap-2 bg-[#00A47C] mt-5">
                                                    <img
                                                        src="/images/basket.svg"
                                                        alt="basket" />
                                                    <span>سبد خرید</span>
                                                </div>
                                                <button className="rounded-full px-7 py-2 text-[#719083] flex items-center justify-center gap-2 border border-[#BFD0C8] transition-opacity hover:opacity-80">
                                                    <GoPerson size={24} />
                                                    <span>ورود / ثبت نام</span>
                                                </button>
                                            </nav>
                                        </div>
                                        <div className="flex items-center text-[#445D54] gap-2 self-end p-4">
                                            <div className="flex flex-col plusjs">
                                                <span>989919720673+</span>
                                                <span>989059255565+</span>
                                            </div>
                                            <FiPhone size={25} />
                                        </div>
                                    </div>

                                </SheetContent>
                            </Sheet>
                        </div>

                        {/* logo & search */}
                        <div className="flex items-center gap-4">
                            <div className="hidden lg:flex">
                                <SearchBox />
                            </div>
                            <img src="/images/logo.png" alt="logo" width={48} height={32} />
                        </div>

                        {/* cartpage & login */}
                        <div className="hidden lg:flex items-center gap-4">
                            <button className="rounded-full px-7 py-2 text-[#719083] flex items-center gap-2 border border-[#BFD0C8] transition-opacity hover:opacity-80">
                                <GoPerson size={24} />
                                <span>ورود / ثبت نام</span>
                            </button>
                            <motion.button
                                className="rounded-full px-7 py-2 text-white flex items-center gap-2 bg-[#00A47C] transition-opacity hover:opacity-80"
                                onHoverStart={() =>
                                    controls.start({ rotate: [0, 15, -15, 10, -10, 0] })
                                }
                                onHoverEnd={() => controls.start({ rotate: 0 })}
                            >
                                <motion.img
                                    src="/images/cartlogo.svg"
                                    alt="basket"
                                    animate={controls}
                                    transition={{ duration: 0.6, ease: "easeInOut" }}
                                />
                                <span>سبد خرید</span>
                            </motion.button>
                        </div>
                    </div>

                    {/* navigation & phone */}
                    <div className="hidden lg:flex items-center justify-between text-[#445D54]">
                        <div className="flex items-center gap-5">
                            <div className="items-center hidden md:flex">
                                <CategoryMenu>
                                    <div className="flex items-center gap-1.5 transition-colors hover:text-[#25E2AD] cursor-pointer">
                                        <TbCategoryPlus size={24} />
                                        <span>دسته بندی محصولات</span>
                                    </div>
                                </CategoryMenu>
                            </div>

                            <div className="flex items-center gap-4">
                                {navs.map((item) => (
                                    <Link
                                        key={item.link}
                                        className={`${item.link === pathName ? "text-[#25E2AD] before:w-full" : ""
                                            } leading-4 hover:text-[#25E2AD] text-[17px] h-full gap-6 relative transition-all duration-200 before:w-0 before:absolute before:right-0 before:h-[3px] before:bottom-0 before:bg-[#25E2AD] before:rounded-full before:ease-out before:duration-200 hover:before:w-full flex items-center py-3`}
                                        href={item.link}
                                    >
                                        {item.title}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <div className="flex items-center gap-2 plusjs">
                            <span>989919720673+ | 98905925555+</span>
                            <FiPhone size={21} />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}