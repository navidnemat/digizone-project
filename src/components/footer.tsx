import Link from "next/link";
import { FiPhone } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
    return (
        <section className="hidden lg:block pt-31">
            <div className="max-w-[1676px] bg-[#00C897]  mx-auto w-full xl:px-10 px-4">
                <div className="rounded-2xl flex flex-col lg:flex-row items-center justify-between w-full p-7 lg:p-11 text-white">
                    <div className="flex flex-col lg:flex-row lg:items-center gap-15">
                        <div className="flex flex-col gap-7">
                            <span className="estedadBold text-2xl">دیجی زون</span>
                            <div className="flex flex-col gap-7">
                                <div className="flex items-center gap-3">
                                    <img src="/images/emaillogo.svg" alt="Email-logo" />
                                    <span className="plusjs">nimaparandavar2@gmail.com</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <FiPhone size={28} />
                                    <span className="plusjs">98123456789+</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <GrLocation size={28} />
                                    <span className="">فارس، شیراز، چهاراه پارامونت به سمت انقلاب</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-6">
                            <span className="estedadBold text-2xl">دسترسی سریع</span>
                            <div className="flex flex-col gap-3 underline-offset-4">
                                <Link href={''} className="hover:underline">صفحه اصلی</Link>
                                <Link href={''} className="hover:underline">تماس با ما</Link>
                                <Link href={''} className="hover:underline">وبلاگ</Link>
                                <Link href={''} className="hover:underline">پشتیبانی</Link>
                            </div>
                        </div>
                        <div className="flex flex-col gap-6">
                            <span className="estedadBold text-2xl">خدمات مشتریان</span>
                            <div className="flex flex-col gap-3 underline-offset-4">
                                <Link href={''} className="hover:underline">سوالات متداول</Link>
                                <Link href={''} className="hover:underline">همکاری در فروش</Link>
                                <Link href={''} className="hover:underline">ارتباط با ما</Link>
                                <Link href={''} className="hover:underline">آموزش ها</Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src="/images/eNamad.png" width={150} height={150} alt="eNamad" />
                        <div className="flex items-center gap-4">
                            <Link href={''}>
                            <img src="/images/facebookmassanger.svg" alt="facebookmassanger-logo" width={30} height={30}/>
                            </Link>
                            <Link href={''}>
<img src="/images/linkedinLogo.svg" alt="linkedIn-logo" className="mb-1" width={30} height={30}/>
                            </Link>
                            <Link href={''}>
                            <FaInstagram size={32}/>
                            </Link>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}