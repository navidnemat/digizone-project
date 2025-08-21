'use client'

import { useState } from "react";
import { Check } from "lucide-react";
import { formatNumberWithCommas } from "@/utils/number"

const insurances = [
    { id: 1, name: "بیمه تجهیزات دیجیتال - بیمه سامان", price: 2100000, discount: 30 },
    { id: 2, name: "بیمه تجهیزات دیجیتال - بیمه فن آوارن", price: 2745000, discount: 50 },
];

export default function InsurancePicker() {
    const [selected, setSelected] = useState<number | null>(null);

    const handleSelect = (id: number) => {
        if (selected === id) {
            setSelected(null);
        } else {
            setSelected(id);
        }
    };

    return (
        <div className="flex flex-col gap-3 w-full max-w-[400px]">
            {insurances.map((option) => (
                <button
                    key={option.id}
                    onClick={() => handleSelect(option.id)}
                    className={`
            flex items-center rounded-xl border w-full transition-all
            ${selected === option.id ? "ring-[#25E2AD] ring-[1.2px]" : "border-[#BFD0C8]"}
          `}
                >

                    <div className={`px-3 py-6 flex items-center justify-center border-l ${selected === option.id ? 'border-[#25E2AD] border-l' : 'border-[#BFD0C8]'} `}>                        <span
                            className={`
              flex items-center justify-center w-5 h-5 rounded-full border transition
              ${selected === option.id ? "bg-[#63F2C5] border-[#25E2AD]" : "bg-[#DFE8E4] border-[#BFD0C8]"}
            `}
                        >
                            {selected === option.id && <Check className="w-3 h-3 text-white" />}
                        </span>
                    </div>


                    <div className="flex flex-col items-start px-3 gap-1">

                        <span className="text-[#567669] text-sm">{option.name}</span>



                        <div className="flex items-center gap-1">
                            <div className="flex items-center rounded-full bg-[#F83B3B] text-[#FFF1F1] text-[10px] px-1 vazir-num">
                                <span>{option.discount}%</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <span className="text-[#445D54] text-[10px] lg:text-[14px] vazir-num">{formatNumberWithCommas(option.price)}</span>
                                <img src="/images/currency.svg" className="max-w-[14px] lg:max-w-[18px]" />
                            </div>
                        </div>

                    </div>

                </button>
            ))}
        </div>
    );
}
