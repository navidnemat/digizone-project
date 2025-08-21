"use client";

import { useState } from "react";

interface ProductDescriptionProps {
    text: string;
    previewLength?: number;
}

export default function ProductDescription({
    text,
    previewLength = 300,
}: ProductDescriptionProps) {
    const [expanded, setExpanded] = useState(false);

    const shouldTruncate = text.length > previewLength;
    const displayedText = expanded || !shouldTruncate
        ? text
        : text.slice(0, previewLength) + " ...";

    return (
        <div className="flex flex-col">
            <h2 className="text-lg lg:text-xl estedadBold mb-3 text-[#1A2421]">بررسی محصول</h2>
            <p className="text-gray-700 leading-relaxed text-justify text-sm lg:text-[16px]">{displayedText}</p>

            {shouldTruncate && (
                <button
                    onClick={() => setExpanded(!expanded)}
                    className="mt-3 text-[#00C897] hover:underline underline-offset-4 text-sm estedadMedium self-end"
                >
                    {expanded ? "بستن" : "بیشتر"}
                </button>
            )}
        </div>
    );
}
