import Link from "next/link";
import { formatNumberWithCommas } from "@/utils/number"
import { FiArrowLeft } from "react-icons/fi";
import CategorySection from "@/components/categorySection";
import Timer from "@/components/timer";
import AmazingOfferSlider from "@/components/amazingOfferSlider";
import BestSellerSlider from "@/components/BestSellerSlider";
import SamsungSlider from "@/components/samsungSlider";
import 'swiper/css/pagination';
import HeroSectionSlider from "@/components/heroSectionSlider";

export default function Home() {
  return (
    <main>

      {/* hero section */}
      <section className="pt-30 lg:pt-50">
        <div className="max-w-[1676px] mx-auto w-full xl:px-10 px-4">
          <div className="hidden md:flex items-center xl:flex-row flex-col gap-3">
            {/* right side - surface */}
            <div className="w-full xl:w-2/3">
              <div className="rounded-xl bg-gradient-to-r from-[#63F2C5] to-[#00C897] overflow-hidden flex items-center flex-col lg:flex-row gap-3 px-8 py-8 lg:pb-0 pb-5">
                <div className="w-full lg:w-1/2 flex items-center justify-center">
                  <img src="/images/surfaceBanner.png" width={500} height={500} />
                </div>
                <div className="w-full lg:w-1/2 flex flex-col gap-8 lg:gap-21.5">
                  <span className="text-[#005545] text-[30px] lg:text-[38px] yekan">انتخابی خاص با قیمتی خاص</span>
                  <div className="flex flex-col self-end text-end plusjs gap-1">
                    <h2 className="text-[#005545] text-xl lg:text-2xl">Microsoft Surface Laptop Go</h2>
                    <span className="text-[#005545] text-sm lg:text-md">Core i5 | 8G RAM | 256G SSD | 14h</span>
                  </div>
                  <div className="flex items-start gap-3 md:items-center justify-between flex-col md:flex-row w-full estedadMedium">
                    <div className="flex items-center gap-1.5">
                      <span className="text-[#005545] text-xl lg:text-2xl vazir-num">{formatNumberWithCommas(73500000)}</span>
                      <img src="/images/currency.svg" className="max-w-[25px]" />
                    </div>
                    <Link href={''} className="bg-white whitespace-nowrap rounded-full px-6 py-1.5 flex items-center gap-1.5 text-[#005545] transition-all duration-200 hover:opacity-85 hover:[&_svg]:-translate-x-1">
                      <span>مشاهده و خرید</span>
                      <FiArrowLeft size={22} className="transition-all duration-200" />
                    </Link>
                  </div>
                </div>

              </div>
            </div>
            {/* left side */}
            <div className="w-full xl:w-1/3 flex flex-col justify-between sm:flex-row xl:flex-col gap-3">
              <Link href={''} className="w-full rounded-xl py-5 px-3 bg-gradient-to-r from-[#4BB6DB] to-[#77CEE9] flex items-center">
                <div className="flex flex-col gap-1 self-start pt-3">
                  <span className="text-[#204F6A] text-[20px] lg:text-[24px] estedadMedium">از دنیای آنلاین جا نمونی</span>
                  <h2 className="text-[#1C5F82] text-lg lg:text-xl">معرفی بهترین مودم روترهای داخل ایران</h2>
                </div>
                <div>
                  <img src="/images/wifiRouter.png" alt="" />
                </div>
              </Link>
              <div className="w-full rounded-xl py-4.5 bg-gradient-to-r from-[#375BFA] to-[#799EFF] flex items-center justify-between">
                <div className="flex flex-col p-3 gap-8">
                  <span className="text-[#EFF3FF] text-[22px] lg:text-[26px]">با دیجی زون مغازت همیشه پره</span>
                  <div className="flex items-center justify-end">
                    <Link href={''} className="bg-white rounded-full px-6 py-1.5 text-sm whitespace-nowrap lg:text-md flex items-center gap-1.5 text-[#1C238C] transition-all duration-200 hover:opacity-85 hover:[&_svg]:-translate-x-1">
                      <span>همکاری در فروش</span>
                      <FiArrowLeft size={22} className="transition-all duration-200" />
                    </Link>
                  </div>

                </div>
                <div>
                  <img src="/images/mobileBanner.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="block md:hidden">
              <HeroSectionSlider />
          </div>
        </div>
      </section>

      <CategorySection />

      {/* amazing offer & timer */}
      <section className="pt-10 md:pt-16">
        <div className="max-w-[1676px] mx-auto w-full xl:px-10 px-4">
          <div className="flex items-center flex-col lg:flex-row lg:gap-4">
            <Timer targetDate="2025-08-18T23:59:59" />
            <AmazingOfferSlider />
          </div>
        </div>
      </section>

      {/* samsung */}
      <section className="pt-12 md:pt-20">
        <div className="max-w-[1676px] mx-auto w-full xl:px-10 px-4">
          <div className="flex flex-col">
            <h3 className="estedadBold text-xl max-w-[190px] lg:max-w-none lg:text-2xl">به خانواده جدید سامسونگ سلام کن</h3>
            <div className="mt-5 rounded-xl bg-[#DFE8E4] p-3 ">
              <div className="hidden md:grid grid-cols-3 gap-3">
                <Link href={''} className="rounded-xl flex flex-col justify-between bg-[#F5F8F6] md:col-span-1 col-span-3 transition-all duration-200 hover:scale-[1.02]">
                  <div className="flex flex-col self-end p-5">
                    <h3 className="plusjs max-w-[220px] text-end font-bold text-2xl text-[#303F3A]">Galaxy Watch 7 (Bluetooth 40mm)</h3>
                    <div className="flex items-center self-end mt-3">
                      <div className="w-7 h-7 rounded-full -ml-3 bg-[#445D54]"></div>
                      <div className="w-7 h-7 rounded-full bg-[#748DAE]"></div>
                    </div>
                  </div>
                  <img src="/images/galaxywatch.png" className="max-w-[220px] md:max-w-[250px]" />
                </Link>
                <Link href={''} className="rounded-xl pt-8 flex flex-col md:flex-row justify-between items-center bg-[#F5F8F6] col-span-3 md:col-span-2 transition-all duration-200 hover:scale-[1.02]">
                  <div className="flex flex-col grow-1 p-5">
                    <h3 className="plusjs text-end self-end font-bold lg:leading-13 text-[#303F3A] text-2xl lg:text-4xl">Samsung Vision AI Smart TV</h3>
                    <div className="self-end text-[#212725] text-end mt-3 plusjs">
                      65” | 75” | 85” | 98”
                    </div>
                  </div>
                  <img src="/images/samsungTv.png" className="max-w-[300px] self-end  lg:max-w-[400px] left-0" />
                </Link>

                <Link href={''} className="rounded-xl md:pt-8 flex flex-col md:flex-row justify-center md:justify-end items-center gap-10 bg-[#F5F8F6] col-span-3 md:col-span-2 transition-all duration-200 hover:scale-[1.02]">
                  <div className="flex md:items-end items-center flex-col p-2 md:p-5">
                    <h3 className="plusjs md:text-end md:self-end font-bold leading-16 text-[#303F3A] text-4xl">Galaxy Z Flip7</h3>
                    <div className="md:self-end text-[#212725] mt-3 plusjs">
                      <img src="/images/galaxyAI.png" className="max-w-[150px]" />
                    </div>
                  </div>
                  <img src="/images/z-flip7.png" className="max-w-[250px] md:self-end md:ml-12" />
                </Link>
                <Link href={''} className="rounded-xl flex flex-col gap-5 items-center p-5 bg-[#F5F8F6] md:col-span-1 col-span-3 transition-all duration-200 hover:scale-[1.02]">
                  <img src="/images/galaxybuds3.png" className="max-w-[140px]" />
                  <div className="flex flex-col items-center">
                    <h3 className="plusjs max-w-[220px] text-center text-xl text-[#303F3A]">Galaxy Buds3 Pro </h3>
                    <div className="flex items-center mt-3">
                      <div className="w-7 h-7 rounded-full bg-[#75787B]"></div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="block md:hidden">
                <SamsungSlider pagination=".custom-pag" />
              </div>

            </div>

            <div className="flex self-center md:hidden items-center justify-center gap-2 mt-1">
              <div className="custom-pag"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-10 md:pt-20">
        <div className="max-w-[1676px] mx-auto w-full xl:px-10 px-4">
          <div className="flex flex-col">
            <h3 className="estedadBold md:text-2xl text-xl">پرفروش ترین محصولات</h3>
            <BestSellerSlider />
          </div>
        </div>
      </section>

      {/* Asus */}
      <section className="pt-10 md:pt-30">
        <div className="max-w-[1676px] mx-auto w-full xl:px-10 px-4">
          <div className="bg-[#A0FAD9] flex flex-col lg:flex-row-reverse items-center rounded-xl">
            <div className="hidden lg:flex items-center">
              <img src="/images/laptopBanner.png" className="absolute right-0" width={341} height={409} />
            </div>

            <div className="flex flex-col self-end lg:pl-15 py-5 px-8 gap-5">
              <h3 className="text-[#006753] text-[25px] lg:text-[40px] estedadBold font-bold">بهترین لپ تاپ های ایسوس اینجاست</h3>
              <p className="estedadMedium lg:text-xl text-[#008367]">لپ تاپ های اقتصادی ایسوس با گارانتی ایران ضمانت</p>
              <div className="flex items-center justify-end">
                <Link href={''} className="bg-[#006753] whitespace-nowrap rounded-full px-12 py-1.5 flex items-center gap-2 text-[#EAFFF7] transition-all duration-200 hover:opacity-85 hover:[&_svg]:-translate-x-1 estedadMedium">
                  <span>بزن بریم</span>
                  <FiArrowLeft size={22} className="transition-all duration-200" />
                </Link>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* review */}
      <section className="pt-10 md:pt-25 md:pb-0 pb-20">
        <div className="max-w-[1676px] mx-auto w-full xl:px-10 px-4">
          <div className="flex flex-col">
            <h3 className="estedadBold text-2xl">نقد و بررسی</h3>
            <div className="mt-5 grid grid-cols-3 gap-3">
              <Link href={''} className="relative col-span-3 md:col-span-2 transition-all duration-200 hover:scale-[1.02] flex bg-[url('/images/galaxy-ring.png')] bg-cover bg-center h-[210px] lg:h-[350px] rounded-2xl p-10">
                {/* <img src="/images/galaxy-ring.png" className="absolute inset-0" /> */}
                <div className="absolute inset-0 bg-[#394C4680] rounded-xl"></div>
                <h3 className="estedadBold text-white text-[25px] lg:text-[47px] max-w-[450px] z-10">گلگسی رینگ، مثل یک رویا جا می گیره</h3>
              </Link>
              <Link href={''} className="relative col-span-3 md:col-span-1 transition-all duration-200 hover:scale-[1.02] flex bg-[url('/images/smartwatchforsport.png')] bg-cover bg-center h-[210px] lg:h-[350px] rounded-2xl p-10">
                {/* <img src="/images/galaxy-ring.png" className="absolute inset-0" /> */}
                <div className="absolute inset-0 bg-[#394C4680] rounded-xl"></div>
                <h3 className="estedadBold text-white text-[25px] lg:text-3xl max-w-[320px] z-10 lg:absolute lg:bottom-10 leading-10">بررسی ساعت های هوشمند برای ورزشکاران</h3>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
