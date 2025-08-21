"use client";

import { useState } from "react";

interface Feature {
    label: string;
    value: string;
}

interface ProductFeaturesProps {
    features: Feature[];
}

export default function ProductFeatures({ features }: ProductFeaturesProps) {
    const [showAll, setShowAll] = useState(false);

    const previewCount = 6;
    const visibleFeatures = showAll ? features : features.slice(0, previewCount);

    return (
        <div className="flex flex-col">

            <h2 className="text-lg lg:text-xl estedadBold mb-3 text-[#1A2421]">ویژگی‌ها</h2>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-2.5 text-gray-700 mt-3">
                {visibleFeatures.map((item, index) => (
                    <div key={index} className="flex flex-col gap-2 rounded-lg lg:rounded-2xl bg-[#DFE8E4] px-3.5 py-3 transition-all duration-300 hover:scale-[1.04] hover:shadow-lg cursor-default">
                        <span className="text-[#445D54] text-sm lg:text-[16px]">{item.label}</span>
                        <span className="text-[#394C46] text-xs lg:text-sm">{item.value}</span>
                    </div>
                ))}
            </div>

            {features.length > previewCount && (
                <button
                    onClick={() => setShowAll(!showAll)}
                    className="mt-3 text-[#00C897] estedadMedium hover:underline text-sm self-end"
                >
                    {showAll ? "بستن مشخصات" : "مشاهده همه مشخصات"}
                </button>
            )}

        </div>
    );
}
