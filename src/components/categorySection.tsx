import { FiArrowRight } from "react-icons/fi";
import CategorySlider from "./categorySlider";

export default function CategorySection() {
    return (
        <section className="pt-20">
            <div className="max-w-[1676px] mx-auto w-full xl:px-10 px-4">
                <div className="flex flex-col w-full">
                    <div className="flex items-center justify-between w-full">
                        <span className="text-2xl estedadMedium">دسته بندی محصولات</span>
                        <div className="hidden md:flex items-center">
                            <button className="prevBtn flex items-center bg-[#00C897] text-white rounded-r-full py-1 px-3 gap-1 transition-all duration-200 hover:bg-[#00A47C]">
                                <FiArrowRight />
                                <span>قبلی</span>
                            </button>
                            <button className="nextBtn flex items-center bg-[#00C897] text-white rounded-l-full py-1 px-3 gap-1 transition-all duration-200 hover:bg-[#00A47C]">
                                <span>بعدی</span>
                                <FiArrowRight className="rotate-180" />
                            </button>
                        </div>
                    </div>
                    <div className="lg:pt-5">
                        <CategorySlider nextBtn=".nextBtn" prevBtn=".prevBtn" />
                    </div>

                </div>
            </div>
        </section>
    )
}