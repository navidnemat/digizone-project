import ColorPicker from "@/components/colorPicker";
import { formatNumberWithCommas } from "@/utils/number"
import InsurancePicker from "@/components/insurancePicker";
import ProductDescription from "@/components/productDescription";
import ProductFeatures from "@/components/productFeatures";
import ProductGallery from "@/components/ProductGallery";
import SimilarProductSlider from "@/components/similarProductSlider";
import { TbBasketX } from "react-icons/tb";
import Link from "next/link";
import FeedbackSlider from "@/components/feedbackSlider";

export default function ProductPage() {

    const features = [
        { label: "اندازه صفحه نمایش", value: "15.5 اینچ" },
        { label: "نسخه سیستم عامل", value: "windows 11" },
        { label: "رزولوشین دوربین اصلی", value: "12 مگاپیکسل" },
        { label: "فناوری صفحه نمایش", value: "LTOP super rtina XDR O" },
        { label: "حافظه داخلی", value: "1T SSD" },
        { label: "پردازنده", value: "Intel Core i7 13700H " },
        { label: "نورپردازی صفحه کلید", value: "تک رنگ" },
        { label: "نرخ بروزرسانی تصویر", value: "120 هرتز" },
        { label: "ظرفیت حافظه رم (RAM)", value: "64 گیگابایت" },
    ];

    const description = 'لپ‌تاپ‌های سرفیس مایکروسافت با حس لوکس و قابلیت‌های جذابی که به کاربرها  می‌دهند، توانسته‌اند جای خود را در قلب همه باز کنند. سرفیس لپ‌تاپ 5 نیز  با بدنه آلومینیومی خوش‌ساخت و وزن سبک 1.29 کیلوگرمی، یک دستگاه پریمیوم  محسوب می‌شود. این لپ‌تاپ به کیبورد با نور پس‌زمینه مجهز شده که به‌لطف  کیفیت بالای کلیدها، برای تایپ و تولید محتوا مناسب است. لندگوی استریوی Omnisonic با پشتیبانی از Dolby Atmos در این لپ‌تاپ، صداها را با کیفیت و رسایی بالاییه گوش‌تان می‌رساند. وب‌کم HD 720p این لپ‌تاپ با پشتیبانی از سیستم تشخیص چهره Windows Hello، امنیت'

    return (
        <section className="pt-30 lg:pt-50 lg:pb-0 pb-20">
            <div className="max-w-[1676px] mx-auto w-full xl:px-10 px-4">
                <div className="flex flex-col-reverse md:flex-row w-full justify-between gap-10">
                    <div className="flex flex-col gap-10 max-w-[750px]">
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center estedadBold gap-1 lg:text-lg text-[#00C897]">
                                <Link href={''}>لپتاپ</Link>
                                <span>/</span>
                                <Link href={''}>مایکروسافت</Link>
                            </div>
                            <h1 className="estedadBold text-lg lg:text-2xl lg:leading-10 text-[#1A2421] max-w-[750px]">لپ تاپ 14.4 اینچی مایکروسافت مدل Surface Laptop Studio 2-i7 13700H-64GB LPDDR5x-2SSD-RTX4060-Touch</h1>
                            <div className="flex items-center gap-2">
                                <div className="bg-[#DFE8E4] rounded-full px-3 lg:px-4 py-1.5 flex items-center gap-1.5 text-xs lg:text-sm">
                                    <img src="/images/messageIcon.svg" />
                                    <span>14 دیدگاه</span>
                                </div>
                                <div className="bg-[#DFE8E4] rounded-full px-3 lg:px-4 py-1.5 flex items-center gap-1.5 text-xs lg:text-sm">
                                    <img src="/images/starIcon.svg" />
                                    <span>4.2 از 5</span>
                                </div>
                            </div>
                        </div>

                        <ProductFeatures features={features} />
                        <ProductDescription text={description} />

                        <div className="flex md:hidden xl:flex flex-col">
                            <span className="text-lg lg:text-xl estedadBold text-[#1A2421]">کالاهای مشابه</span>
                            <SimilarProductSlider />
                        </div>
                        <div className="flex md:hidden xl:flex flex-col">
                            <span className="text-lg lg:text-xl estedadBold text-[#1A2421] mb-2">نظرات کاربران</span>
                            <FeedbackSlider />
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <ProductGallery />
                        <div className="hidden md:flex mt-5 flex-col gap-6">
                            <div className="w-full flex items-center justify-between">
                                <button className="rounded-md w-16 h-16 bg-[#A0FAD9] flex items-center justify-center text-[#005545] transition-all duration-100 hover:bg-[#76f5c6] active:scale-50">
                                    <TbBasketX className="lg:text-4xl" />
                                </button>
                                <div className="flex items-center gap-1">
                                    <span className="text-[#1A2421] text-lg lg:text-3xl vazir-num">{formatNumberWithCommas(250000000)}</span>
                                    <img src="/images/currency.svg" className="max-w-[19px] lg:max-w-[36px]" />
                                </div>
                            </div>
                            <div className="self-end">
                                <ColorPicker />
                            </div>
                            <InsurancePicker />
                        </div>
                    </div>
                </div>

            </div>

        </section>

    )
}